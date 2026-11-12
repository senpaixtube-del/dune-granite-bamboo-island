import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { heroPage, heroPortrait, heroSlug } from "./art";
import { assembleMatch, parseLookup, type Catalogs, type MatchPayload } from "./analyze";

const BASE = "https://api.opendota.com/api";

type HeroRow = { id: number; localized_name: string; name: string };
type ItemRow = { id?: number; dname?: string };
type AnyRec = Record<string, unknown>;

let catalogsCache: Catalogs | null = null;
const matchCache = new Map<number, { at: number; match: AnyRec }>();
const benchCache = new Map<number, AnyRec | null>();
const MATCH_TTL = 10 * 60 * 1000;

async function od<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { Accept: "application/json", "User-Agent": "MonarchMatch/1.0" },
  });
  if (res.status === 404) throw new Error("پیدا نشد. شماره مچ یا آیدی را چک کن.");
  if (res.status === 429) throw new Error("OpenDota شلوغ است. چند ثانیه دیگر دوباره بزن.");
  if (!res.ok) throw new Error(`OpenDota پاسخ ${res.status} داد.`);
  return (await res.json()) as T;
}

async function catalogs(): Promise<Catalogs> {
  if (!catalogsCache) {
    const [heroes, items] = await Promise.all([
      od<HeroRow[]>("/heroes"),
      od<Record<string, ItemRow>>("/constants/items"),
    ]);
    const heroNames: Record<number, string> = {};
    const heroNpcs: Record<number, string> = {};
    for (const h of heroes) {
      heroNames[h.id] = h.localized_name;
      heroNpcs[h.id] = h.name;
    }
    const itemNames: Record<string, string> = {};
    const itemIds: Record<number, string> = {};
    for (const [key, row] of Object.entries(items)) {
      itemNames[key] = row.dname || key;
      if (typeof row.id === "number") itemIds[row.id] = key;
    }
    catalogsCache = { heroNames, heroNpcs, itemNames, itemIds };
  }
  return catalogsCache;
}

async function getMatch(matchId: number): Promise<AnyRec> {
  const hit = matchCache.get(matchId);
  if (hit && Date.now() - hit.at < MATCH_TTL) return hit.match;
  const match = await od<AnyRec>(`/matches/${matchId}`);
  if (!match || !Array.isArray(match.players)) throw new Error("این پاسخ مچ ناقص است.");
  matchCache.set(matchId, { at: Date.now(), match });
  return match;
}

async function benchmarksFor(heroIds: number[]): Promise<Record<number, AnyRec | null>> {
  const unique = [...new Set(heroIds.filter((id) => id > 0))];
  const missing = unique.filter((id) => !benchCache.has(id));
  if (missing.length) {
    await Promise.all(
      missing.map(async (id) => {
        try {
          benchCache.set(id, await od<AnyRec>(`/benchmarks?hero_id=${id}`));
        } catch {
          benchCache.set(id, null);
        }
      }),
    );
  }
  const out: Record<number, AnyRec | null> = {};
  for (const id of unique) out[id] = benchCache.get(id) ?? null;
  return out;
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | null> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      () => {
        clearTimeout(timer);
        resolve(null);
      },
    );
  });
}

export type RecentRow = {
  matchId: number;
  heroName: string;
  heroId: number;
  portrait: string;
  heroUrl: string;
  k: number;
  d: number;
  a: number;
  won: boolean;
  duration: number;
  start: number;
};

export const lookupPlayer = createServerFn({ method: "POST" })
  .validator(z.object({ query: z.string().min(1).max(120) }))
  .handler(async ({ data }): Promise<{ accountId: number; recent: RecentRow[] }> => {
    const parsed = parseLookup(data.query);
    if (parsed.matchId && !parsed.accountId) {
      throw new Error("این شماره شبیه Match ID است. تب «مچ» را بزن.");
    }
    if (!parsed.accountId) throw new Error(parsed.error ?? "Account ID لازم است.");
    const cats = await catalogs();
    const rows = await od<AnyRec[]>(`/players/${parsed.accountId}/recentMatches`);
    const recent: RecentRow[] = rows.slice(0, 12).map((m) => {
      const slot = Number(m.player_slot ?? 0);
      const radiant = slot < 128;
      const radiantWin = Boolean(m.radiant_win);
      const heroId = Number(m.hero_id ?? 0);
      const slug = heroSlug(cats.heroNpcs[heroId]);
      return {
        matchId: Number(m.match_id),
        heroId,
        heroName: cats.heroNames[heroId] ?? `هیرو ${heroId}`,
        portrait: slug ? heroPortrait(slug) : "",
        heroUrl: slug ? heroPage(slug) : "https://www.dota2.com/heroes",
        k: Number(m.kills ?? 0),
        d: Number(m.deaths ?? 0),
        a: Number(m.assists ?? 0),
        won: radiant === radiantWin,
        duration: Number(m.duration ?? 0),
        start: Number(m.start_time ?? 0),
      };
    });
    return { accountId: parsed.accountId, recent };
  });

export const loadReport = createServerFn({ method: "POST" })
  .validator(
    z.object({
      matchId: z.number().int().positive(),
      accountId: z.number().int().positive().optional(),
    }),
  )
  .handler(async ({ data }): Promise<MatchPayload> => {
    const cats = await catalogs();
    const match = await getMatch(data.matchId);
    const players = (match.players as { hero_id?: number }[]) ?? [];
    const heroIds = players.map((p) => Number(p.hero_id ?? 0));
    const benchmarks = (await withTimeout(benchmarksFor(heroIds), 3500)) ?? {};
    return assembleMatch({
      match,
      catalogs: cats,
      benchmarks,
      focusAccountId: data.accountId,
    });
  });

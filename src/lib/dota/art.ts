/** Official Dota 2 website art (the same CDN dota2.com uses). */
const CDN = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react";

export function heroSlug(npc: string | undefined | null): string {
  if (!npc) return "";
  return npc.replace(/^npc_dota_hero_/, "");
}

export function heroPortrait(slug: string): string {
  return `${CDN}/heroes/${slug}.png`;
}

export function heroPage(slug: string): string {
  return `https://www.dota2.com/hero/${slug}`;
}

export function itemIcon(key: string): string {
  return `${CDN}/items/${key}.png`;
}

export function fmtClock(sec: number): string {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, "0")}`;
}

export function fmtCompact(n: number): string {
  const abs = Math.abs(Math.round(n));
  const sign = n < 0 ? "−" : "";
  if (abs >= 1000) {
    const k = abs / 1000;
    const body = k >= 10 ? String(Math.round(k)) : k.toFixed(1);
    return `${sign}${body}k`;
  }
  return `${sign}${abs}`;
}

const GAME_MODES: Record<number, string> = {
  1: "آل‌پیک",
  2: "کپتین مود",
  3: "رندوم درفت",
  4: "سینگل درفت",
  5: "آل رندوم",
  12: "لیست‌پلی",
  16: "کپتین درفت",
  18: "ابیلیتی درفت",
  22: "آل‌پیک رنکد",
  23: "توربو",
};

const LOBBIES: Record<number, string> = {
  0: "آنرنکد",
  1: "تمرین",
  2: "تورنمنت",
  7: "رنکد",
  8: "سولو مید",
  9: "بتل کاپ",
};

export function gameModeLabel(id: number): string {
  return GAME_MODES[id] ?? "حالت بازی";
}

export function lobbyLabel(id: number): string {
  return LOBBIES[id] ?? "";
}

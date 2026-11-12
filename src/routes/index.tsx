import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MatchBoard } from "@/components/match-board";
import { ReportView } from "@/components/report-view";
import { fmtClock } from "@/lib/dota/art";
import type { MatchPayload } from "@/lib/dota/analyze";
import { loadReport, lookupPlayer, type RecentRow } from "@/lib/dota/api.functions";

export const Route = createFileRoute("/")({ component: Home });

const SAMPLE_MATCH = 9086225563;

function Home() {
  const [mode, setMode] = useState<"match" | "player">("match");
  const [query, setQuery] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accountId, setAccountId] = useState<number | null>(null);
  const [recent, setRecent] = useState<RecentRow[]>([]);
  const [payload, setPayload] = useState<MatchPayload | null>(null);
  const [selected, setSelected] = useState(0);

  async function openMatch(matchId: number, focusAccount?: number) {
    setBusy(true);
    setError(null);
    try {
      const rep = await loadReport({
        data: focusAccount ? { matchId, accountId: focusAccount } : { matchId },
      });
      setPayload(rep);
      setSelected(rep.focusIndex);
    } catch (err) {
      setError(err instanceof Error ? err.message : "مچ خوانده نشد");
    } finally {
      setBusy(false);
    }
  }

  async function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setError(null);
    if (mode === "match") {
      if (!/^\d{5,12}$/.test(q)) {
        setError("شماره مچ فقط عدد است. اگر استیم آیدی داری، تب بازیکن را بزن.");
        return;
      }
      setRecent([]);
      setAccountId(null);
      await openMatch(Number(q));
      return;
    }
    setBusy(true);
    setPayload(null);
    try {
      const res = await lookupPlayer({ data: { query: q } });
      setAccountId(res.accountId);
      setRecent(res.recent);
      if (typeof localStorage !== "undefined") localStorage.setItem("monarch-id", q);
    } catch (err) {
      setError(err instanceof Error ? err.message : "خطا در خواندن داده");
    } finally {
      setBusy(false);
    }
  }

  const report = payload?.reports[selected];

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8">
      <header className="border-b border-line pb-6">
        <p className="font-display text-xs tracking-[0.28em] text-gold">DOTA 2</p>
        <h1 className="mt-1 font-display text-4xl tracking-[0.18em] text-fg sm:text-5xl">MONARCH</h1>
        <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
          شماره مچ را بده. خلاصهٔ بازی، برتری گلد، و هر ده هیرو با تصویر رسمی دوتا ۲ می‌آید.
          روی یک هیرو بزن تا خوانش همان بازیکن باز شود.
        </p>
      </header>

      <div className="mt-6 flex gap-2" role="tablist" aria-label="نوع جستجو">
        {(
          [
            ["match", "مچ"],
            ["player", "بازیکن"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={mode === id}
            onClick={() => {
              setMode(id);
              setError(null);
            }}
            className={
              "min-h-11 px-4 text-sm " + (mode === id ? "bg-gold text-bg" : "border border-line text-muted")
            }
          >
            {label}
          </button>
        ))}
      </div>

      <form onSubmit={onSearch} className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="q">
          شناسه
        </label>
        <input
          id="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={mode === "match" ? "شماره مچ، مثلاً ۸۰۱۲۳۴۵۶۷۸" : "SteamID64 یا Account ID"}
          inputMode="numeric"
          className="num min-h-11 flex-1 border border-line bg-surface px-3 text-sm text-fg outline-none placeholder:font-sans placeholder:text-muted"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={busy || !query.trim()}
          className="min-h-11 bg-gold px-5 text-sm font-semibold text-bg disabled:opacity-50"
        >
          {busy ? "در حال خواندن…" : mode === "match" ? "خلاصه مچ" : "مچ‌های اخیر"}
        </button>
      </form>
      {mode === "match" ? (
        <button
          type="button"
          className="mt-3 min-h-11 border border-line px-4 text-sm text-muted"
          disabled={busy}
          onClick={() => {
            setQuery(String(SAMPLE_MATCH));
            void openMatch(SAMPLE_MATCH);
          }}
        >
          یک مچ پرو نمونه
        </button>
      ) : null}
      {error ? <p className="mt-3 text-sm text-dire">{error}</p> : null}
      {busy && !payload ? <p className="mt-4 text-sm text-gold">در حال چیدن ده هیرو از ریپلی…</p> : null}

      {recent.length > 0 && (
        <ul className="mt-6 flex flex-col gap-2">
          {recent.map((m) => (
            <li key={m.matchId}>
              <button
                type="button"
                onClick={() => openMatch(m.matchId, accountId ?? undefined)}
                className="plate flex w-full items-center gap-3 px-2 py-2 text-start"
              >
                {m.portrait ? (
                  <img src={m.portrait} alt="" width={112} height={63} className="h-12 w-20 object-cover" />
                ) : null}
                <span className="min-w-0 flex-1">
                  <span className={m.won ? "text-radiant" : "text-dire"}>{m.won ? "برد" : "باخت"}</span>
                  <span className="mx-2 font-display text-sm text-fg">{m.heroName}</span>
                </span>
                <span className="num text-sm text-muted">
                  {m.k}/{m.d}/{m.a}
                  <span className="ms-2">{fmtClock(m.duration)}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {payload ? (
        <>
          <MatchBoard
            headline={payload.headline}
            roster={payload.roster}
            goldSeries={payload.goldSeries}
            selected={selected}
            onSelect={setSelected}
          />
          {report ? <ReportView key={selected} report={report} /> : null}
        </>
      ) : null}
    </main>
  );
}

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { fmtClock, fmtCompact } from "@/lib/dota/art";
import type { Headline, RosterPlayer } from "@/lib/dota/analyze";

function Portrait({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative block h-16 w-28 shrink-0 overflow-hidden border border-line bg-bg"
      title={`صفحهٔ ${alt} در dota2.com`}
    >
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          width={256}
          height={144}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="flex h-full items-center justify-center font-display text-xs text-gold">
          {alt.slice(0, 2)}
        </span>
      )}
    </a>
  );
}

function PlayerRow({
  player,
  selected,
  onSelect,
}: {
  player: RosterPlayer;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={
        "flex gap-3 border px-2 py-2 " +
        (selected ? "border-gold bg-gold-dim" : "border-transparent bg-bg/40")
      }
    >
      <Portrait src={player.portrait} alt={player.heroName} href={player.heroUrl} />
      <button type="button" onClick={onSelect} className="min-w-0 flex-1 text-start">
        <span className="flex items-baseline justify-between gap-2">
          <span className="truncate font-display text-sm tracking-wide text-fg">{player.heroName}</span>
          <span className="num shrink-0 text-sm text-gold">{fmtCompact(player.netWorth)}</span>
        </span>
        <span className="mt-0.5 flex items-baseline justify-between gap-2">
          <span className="truncate text-xs text-muted">{player.name}</span>
          <span className="shrink-0 text-xs text-muted">
            <span className="num">{fmtCompact(player.heroDamage)}</span> آسیب
          </span>
        </span>
        <span className="mt-1 flex flex-wrap items-baseline gap-x-2 text-sm">
          <span className="num">
            <span className="text-radiant">{player.k}</span>
            <span className="text-muted"> / </span>
            <span className="text-dire">{player.d}</span>
            <span className="text-muted"> / </span>
            <span className="text-fg">{player.a}</span>
          </span>
          <span className="text-xs text-muted">
            سطح <span className="num">{player.level}</span>
          </span>
          <span className="num text-xs text-muted">{player.gpm} gpm</span>
        </span>
        {player.items.length > 0 && (
          <span className="mt-1.5 flex flex-wrap gap-1">
            {player.items.map((item) => (
              <img
                key={item.key}
                src={item.icon}
                alt=""
                title={item.name}
                width={28}
                height={20}
                className="h-5 w-7 bg-bg object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ))}
          </span>
        )}
      </button>
    </div>
  );
}

function Side({
  title,
  name,
  won,
  tone,
  players,
  selected,
  onSelect,
}: {
  title: string;
  name: string;
  won: boolean;
  tone: "radiant" | "dire";
  players: RosterPlayer[];
  selected: number;
  onSelect: (index: number) => void;
}) {
  const accent = tone === "radiant" ? "text-radiant" : "text-dire";
  const bar = tone === "radiant" ? "border-radiant" : "border-dire";
  return (
    <section className={`plate border-t-2 ${bar} ${won ? "" : "opacity-80"}`}>
      <header className="flex items-baseline justify-between gap-2 px-3 py-2">
        <div>
          <div className={`font-display text-xs tracking-[0.22em] ${accent}`}>{title}</div>
          <div className="truncate text-sm text-fg">{name}</div>
        </div>
        {won ? <div className="font-display text-xs tracking-[0.2em] text-gold">VICTORY</div> : null}
      </header>
      <div className="flex flex-col gap-1 px-1 pb-2">
        {players.map((p) => (
          <PlayerRow key={p.index} player={p} selected={selected === p.index} onSelect={() => onSelect(p.index)} />
        ))}
      </div>
    </section>
  );
}

export function MatchBoard({
  headline,
  roster,
  goldSeries,
  selected,
  onSelect,
}: {
  headline: Headline;
  roster: RosterPlayer[];
  goldSeries: { minute: number; gold: number }[];
  selected: number;
  onSelect: (index: number) => void;
}) {
  const radiant = roster.filter((p) => p.side === "Radiant");
  const dire = roster.filter((p) => p.side === "Dire");
  const meta = [headline.lobby, headline.gameMode, headline.patch ? `پچ ${headline.patch}` : ""]
    .filter(Boolean)
    .join(" · ");

  return (
    <section className="mt-8" dir="ltr">
      <div className="plate px-4 py-5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
          <div>
            <div className="font-display text-xs tracking-[0.22em] text-radiant">RADIANT</div>
            <div className="truncate text-sm text-fg">{headline.radiantName}</div>
          </div>
          <div className="text-center leading-none">
            <span className="num text-4xl text-radiant sm:text-6xl">{headline.radiantScore}</span>
            <span className="px-2 font-display text-2xl text-gold sm:px-3 sm:text-4xl" aria-hidden="true">
              –
            </span>
            <span className="num text-4xl text-dire sm:text-6xl">{headline.direScore}</span>
          </div>
          <div className="text-end">
            <div className="font-display text-xs tracking-[0.22em] text-dire">DIRE</div>
            <div className="truncate text-sm text-fg">{headline.direName}</div>
          </div>
        </div>
        <p className="mt-3 text-center text-sm leading-6 text-muted" dir="rtl">
          <span className="num">{fmtClock(headline.duration)}</span>
          {meta ? <span>{` · ${meta}`}</span> : null}
          {headline.firstBlood !== null ? (
            <span>
              {" · FB "}
              <span className="num">{fmtClock(headline.firstBlood)}</span>
            </span>
          ) : null}
          <span>
            {" · مچ "}
            <span className="num">{headline.matchId}</span>
          </span>
        </p>
      </div>

      <div className="plate mt-3 px-4 py-4" dir="rtl">
        <h2 className="text-xs font-semibold tracking-wide text-gold">خلاصه مچ</h2>
        <p className="mt-2 text-sm leading-7 text-fg">{headline.summary}</p>
        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {headline.highlights.map((h) => (
            <li key={h.label}>
              <button
                type="button"
                onClick={() => onSelect(h.index)}
                className="plate h-full w-full px-3 py-2 text-start"
              >
                <div className="text-xs text-muted">{h.label}</div>
                <div className="mt-1 font-display text-xs leading-snug tracking-wide text-fg sm:text-sm">{h.hero}</div>
                <div className="num mt-0.5 text-sm text-gold">{h.value}</div>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-2">
          {headline.replayUrl ? (
            <a href={headline.replayUrl} className="inline-flex min-h-11 items-center bg-gold px-4 text-sm font-semibold text-bg">
              دانلود ریپلی
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center border border-line px-4 text-sm text-muted">دمو منقضی شده</span>
          )}
          <a
            href={headline.opendotaUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center border border-line px-4 text-sm text-fg"
          >
            OpenDota
          </a>
          <a
            href={headline.dotabuffUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center border border-line px-4 text-sm text-fg"
          >
            Dotabuff
          </a>
        </div>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Side
          title="RADIANT"
          name={headline.radiantName}
          won={headline.radiantWin}
          tone="radiant"
          players={radiant}
          selected={selected}
          onSelect={onSelect}
        />
        <Side
          title="DIRE"
          name={headline.direName}
          won={!headline.radiantWin}
          tone="dire"
          players={dire}
          selected={selected}
          onSelect={onSelect}
        />
      </div>

      <div className="plate mt-3 p-3" dir="rtl">
        <h3 className="mb-2 text-xs text-muted">برتری گلد ریدینت — بالای صفر یعنی ریدینت جلوست</h3>
        <div className="h-44">
          {goldSeries.length > 2 ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={goldSeries}>
                <XAxis dataKey="minute" stroke="var(--color-muted)" fontSize={11} />
                <YAxis stroke="var(--color-muted)" fontSize={11} width={48} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-line)",
                    borderRadius: 2,
                    color: "var(--color-fg)",
                  }}
                  labelFormatter={(m) => `دقیقه ${m}`}
                />
                <Area type="monotone" dataKey="gold" stroke="var(--color-gold)" fill="var(--color-gold-dim)" name="گلد" />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <p className="p-4 text-sm text-muted">گراف گلد برای این مچ نیامده.</p>
          )}
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-muted" dir="rtl">
        تصویر هیروها از سرور رسمی{" "}
        <a href="https://www.dota2.com/heroes" target="_blank" rel="noreferrer" className="text-gold">
          dota2.com
        </a>
        . روی عکس، صفحهٔ همان هیرو باز می‌شود.
      </p>
    </section>
  );
}

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { fmtClock } from "@/lib/dota/art";
import type { Evidence, MatchReport } from "@/lib/dota/analyze";

const TABS = [
  ["summary", "خلاصه"],
  ["lane", "لینینگ"],
  ["items", "آیتم‌سازی"],
  ["fights", "تیم‌فایت"],
  ["turns", "نقاط عطف"],
  ["end", "جمع‌بندی"],
] as const;

type TabId = (typeof TABS)[number][0];

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="plate px-3 py-3">
      <div className="text-xs text-muted">{label}</div>
      <div className="num mt-1 text-xl text-fg">{value}</div>
      {hint ? <div className="mt-1 text-xs text-muted">{hint}</div> : null}
    </div>
  );
}

function List({ rows }: { rows: Evidence[] }) {
  if (!rows.length) return <p className="text-sm text-muted">موردی از داده استخراج نشد.</p>;
  return (
    <ul className="flex flex-col gap-2">
      {rows.map((r) => (
        <li key={r.title + r.detail} className="border border-line bg-surface-2 px-3 py-3">
          <div className="font-medium text-fg">{r.title}</div>
          <p className="mt-1 text-sm leading-relaxed text-muted">{r.detail}</p>
        </li>
      ))}
    </ul>
  );
}

export function ReportView({ report }: { report: MatchReport }) {
  const [tab, setTab] = useState<TabId>("summary");
  const tone = report.won ? "text-radiant" : "text-dire";

  return (
    <section className="mt-8">
      <header className="border-b border-line pb-4">
        <p className="text-xs font-semibold tracking-wide text-gold">خوانش این هیرو</p>
        <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
          <div className="flex gap-3">
            {report.portrait ? (
              <a href={report.heroUrl} target="_blank" rel="noreferrer" className="block h-16 w-28 shrink-0 overflow-hidden border border-line">
                <img src={report.portrait} alt={report.heroName} width={256} height={144} className="h-full w-full object-cover" />
              </a>
            ) : null}
            <div>
              <p className={`text-sm font-semibold ${tone}`}>
                {report.won ? "برد" : "باخت"} · {report.side === "Radiant" ? "ریدینت" : "دایر"} ·{" "}
                <span className="num">
                  {report.radiantScore}–{report.direScore}
                </span>
              </p>
              <h2 className="mt-1 font-display text-2xl tracking-wide">{report.heroName}</h2>
              <p className="mt-1 text-sm text-muted">
                {report.playerName}
                <span className="num">
                  {" "}
                  · {fmtClock(report.duration)}
                  {report.parsed ? " · ریپلی پارس شده" : " · بدون پارس تیم‌فایت"}
                </span>
              </p>
            </div>
          </div>
          <div className="plate px-4 py-2">
            <div className="text-xs text-muted">نمره عددی</div>
            <div className="num text-3xl text-gold">{report.score.toFixed(1)}</div>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-fg">{report.story}</p>
      </header>

      <div className="mt-4 flex gap-1 overflow-x-auto pb-1" role="tablist">
        {TABS.map(([id, label]) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={
              "shrink-0 min-h-11 px-3 text-sm " +
              (tab === id ? "bg-gold text-bg" : "border border-line text-muted")
            }
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-4" role="tabpanel">
        {tab === "summary" && (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Stat label="KDA" value={`${report.k}/${report.d}/${report.a}`} />
            <Stat label="GPM" value={String(report.gpm)} hint={report.gpmPct !== null ? `صدک ${report.gpmPct}` : undefined} />
            <Stat label="XPM" value={String(report.xpm)} hint={report.xpmPct !== null ? `صدک ${report.xpmPct}` : undefined} />
            <Stat label="لست‌هیت" value={String(report.lastHits)} hint={`${report.denies} انکار`} />
            <Stat label="آسیب هیرو" value={report.heroDamage.toLocaleString("fa-IR")} />
            <Stat label="آسیب برج" value={report.towerDamage.toLocaleString("fa-IR")} />
            <Stat label="نت‌ورث" value={report.netWorth ? report.netWorth.toLocaleString("fa-IR") : "—"} />
            <Stat label="لست‌هیت ۱۰" value={report.lh10 === null ? "—" : String(report.lh10)} />
          </div>
        )}

        {tab === "lane" && (
          <div className="flex flex-col gap-3">
            <div className="plate px-4 py-3">
              <div className="text-sm text-gold">{report.laneVerdict}</div>
              <p className="mt-1 text-sm text-muted">{report.laneNote}</p>
            </div>
            <List rows={report.laneEvidence} />
          </div>
        )}

        {tab === "items" && (
          <div className="flex flex-col gap-4">
            <List rows={report.itemEvidence} />
            <div>
              <h3 className="mb-2 text-sm font-semibold text-fg">بر اساس ترکیب دشمن</h3>
              {report.suggestions.length === 0 ? (
                <p className="text-sm text-muted">کانتر واضحی نسبت به تگ‌های مکانیکی دشمن جا نمانده، یا داده آیتم ناقص است.</p>
              ) : (
                <ul className="flex flex-col gap-2">
                  {report.suggestions.map((s) => (
                    <li key={s.item} className="border border-gold/40 bg-gold-dim px-3 py-3">
                      <div className="font-medium text-gold">{s.item}</div>
                      <p className="mt-1 text-sm leading-relaxed text-fg">{s.reason}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {tab === "fights" && (
          <div className="flex flex-col gap-3">
            <List rows={report.fightEvidence} />
            {report.fights.map((f) => (
              <div key={`${f.minute}-${f.damage}`} className="plate px-3 py-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">دقیقه {f.minute}</span>
                  <span className="num text-sm text-muted">
                    مرگ {f.deaths} · آسیب {f.damage.toLocaleString("en-US")}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{f.note}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "turns" && (
          <div className="flex flex-col gap-3">
            <div className="plate h-48 p-2">
              {report.goldSeries.length > 2 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={report.goldSeries}>
                    <XAxis dataKey="minute" stroke="var(--color-muted)" fontSize={11} />
                    <YAxis stroke="var(--color-muted)" fontSize={11} width={42} />
                    <Tooltip
                      contentStyle={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-line)",
                        borderRadius: 2,
                      }}
                      labelStyle={{ color: "var(--color-fg)" }}
                    />
                    <Area type="monotone" dataKey="gold" stroke="var(--color-gold)" fill="var(--color-gold-dim)" name="گلد تیم" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <p className="p-4 text-sm text-muted">گراف گلد برای این مچ نیامده.</p>
              )}
            </div>
            {report.turns.map((t) => (
              <div key={t.minute} className="plate px-3 py-3">
                <div className="flex justify-between text-sm">
                  <span>دقیقه {t.minute}</span>
                  <span className={`num ${t.swing < 0 ? "text-dire" : "text-radiant"}`}>
                    {t.swing > 0 ? "+" : ""}
                    {t.swing.toLocaleString("en-US")}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{t.note}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "end" && (
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-dire">چرا این نتیجه</h3>
              <List rows={report.reasons} />
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-radiant">نقطه قوت</h3>
              <List rows={report.strengths} />
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-gold">اولویت بعدی</h3>
              <List rows={report.next} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

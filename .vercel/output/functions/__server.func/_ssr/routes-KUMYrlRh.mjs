import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { n as fmtCompact, t as fmtClock } from "./art-BuM_B8YY.mjs";
import { i as string, n as number, r as object } from "../_libs/zod.mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, o as Tooltip, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-KUMYrlRh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Portrait({ src, alt, href }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "relative block h-16 w-28 shrink-0 overflow-hidden border border-line bg-bg",
		title: `صفحهٔ ${alt} در dota2.com`,
		children: src && !failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			width: 256,
			height: 144,
			className: "h-full w-full object-cover",
			onError: () => setFailed(true)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex h-full items-center justify-center font-display text-xs text-gold",
			children: alt.slice(0, 2)
		})
	});
}
function PlayerRow({ player, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3 border px-2 py-2 " + (selected ? "border-gold bg-gold-dim" : "border-transparent bg-bg/40"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
			src: player.portrait,
			alt: player.heroName,
			href: player.heroUrl
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onSelect,
			className: "min-w-0 flex-1 text-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-display text-sm tracking-wide text-fg",
						children: player.heroName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "num shrink-0 text-sm text-gold",
						children: fmtCompact(player.netWorth)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-0.5 flex items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-xs text-muted",
						children: player.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "num",
							children: fmtCompact(player.heroDamage)
						}), " آسیب"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-1 flex flex-wrap items-baseline gap-x-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "num",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-radiant",
									children: player.k
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: " / "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-dire",
									children: player.d
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: " / "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg",
									children: player.a
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted",
							children: ["سطح ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "num",
								children: player.level
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "num text-xs text-muted",
							children: [player.gpm, " gpm"]
						})
					]
				}),
				player.items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1.5 flex flex-wrap gap-1",
					children: player.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.icon,
						alt: "",
						title: item.name,
						width: 28,
						height: 20,
						className: "h-5 w-7 bg-bg object-contain",
						onError: (e) => {
							e.currentTarget.style.display = "none";
						}
					}, item.key))
				})
			]
		})]
	});
}
function Side({ title, name, won, tone, players, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `plate border-t-2 ${tone === "radiant" ? "border-radiant" : "border-dire"} ${won ? "" : "opacity-80"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-baseline justify-between gap-2 px-3 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `font-display text-xs tracking-[0.22em] ${tone === "radiant" ? "text-radiant" : "text-dire"}`,
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "truncate text-sm text-fg",
				children: name
			})] }), won ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-xs tracking-[0.2em] text-gold",
				children: "VICTORY"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-1 px-1 pb-2",
			children: players.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerRow, {
				player: p,
				selected: selected === p.index,
				onSelect: () => onSelect(p.index)
			}, p.index))
		})]
	});
}
function MatchBoard({ headline, roster, goldSeries, selected, onSelect }) {
	const radiant = roster.filter((p) => p.side === "Radiant");
	const dire = roster.filter((p) => p.side === "Dire");
	const meta = [
		headline.lobby,
		headline.gameMode,
		headline.patch ? `پچ ${headline.patch}` : ""
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		dir: "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "plate px-4 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[1fr_auto_1fr] items-end gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xs tracking-[0.22em] text-radiant",
							children: "RADIANT"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-sm text-fg",
							children: headline.radiantName
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center leading-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "num text-4xl text-radiant sm:text-6xl",
									children: headline.radiantScore
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2 font-display text-2xl text-gold sm:px-3 sm:text-4xl",
									"aria-hidden": "true",
									children: "–"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "num text-4xl text-dire sm:text-6xl",
									children: headline.direScore
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xs tracking-[0.22em] text-dire",
								children: "DIRE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm text-fg",
								children: headline.direName
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-center text-sm leading-6 text-muted",
					dir: "rtl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "num",
							children: fmtClock(headline.duration)
						}),
						meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ` · ${meta}` }) : null,
						headline.firstBlood !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [" · FB ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "num",
							children: fmtClock(headline.firstBlood)
						})] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [" · مچ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "num",
							children: headline.matchId
						})] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "plate mt-3 px-4 py-4",
				dir: "rtl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-semibold tracking-wide text-gold",
						children: "خلاصه مچ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-7 text-fg",
						children: headline.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: headline.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onSelect(h.index),
							className: "plate h-full w-full px-3 py-2 text-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted",
									children: h.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-display text-xs leading-snug tracking-wide text-fg sm:text-sm",
									children: h.hero
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "num mt-0.5 text-sm text-gold",
									children: h.value
								})
							]
						}) }, h.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							headline.replayUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: headline.replayUrl,
								className: "inline-flex min-h-11 items-center bg-gold px-4 text-sm font-semibold text-bg",
								children: "دانلود ریپلی"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex min-h-11 items-center border border-line px-4 text-sm text-muted",
								children: "دمو منقضی شده"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: headline.opendotaUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex min-h-11 items-center border border-line px-4 text-sm text-fg",
								children: "OpenDota"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: headline.dotabuffUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex min-h-11 items-center border border-line px-4 text-sm text-fg",
								children: "Dotabuff"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Side, {
					title: "RADIANT",
					name: headline.radiantName,
					won: headline.radiantWin,
					tone: "radiant",
					players: radiant,
					selected,
					onSelect
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Side, {
					title: "DIRE",
					name: headline.direName,
					won: !headline.radiantWin,
					tone: "dire",
					players: dire,
					selected,
					onSelect
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "plate mt-3 p-3",
				dir: "rtl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-2 text-xs text-muted",
					children: "برتری گلد ریدینت — بالای صفر یعنی ریدینت جلوست"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-44",
					children: goldSeries.length > 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: goldSeries,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "minute",
									stroke: "var(--color-muted)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "var(--color-muted)",
									fontSize: 11,
									width: 48
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: {
										background: "var(--color-surface)",
										border: "1px solid var(--color-line)",
										borderRadius: 2,
										color: "var(--color-fg)"
									},
									labelFormatter: (m) => `دقیقه ${m}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "gold",
									stroke: "var(--color-gold)",
									fill: "var(--color-gold-dim)",
									name: "گلد"
								})
							]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "p-4 text-sm text-muted",
						children: "گراف گلد برای این مچ نیامده."
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-center text-xs text-muted",
				dir: "rtl",
				children: [
					"تصویر هیروها از سرور رسمی",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.dota2.com/heroes",
						target: "_blank",
						rel: "noreferrer",
						className: "text-gold",
						children: "dota2.com"
					}),
					". روی عکس، صفحهٔ همان هیرو باز می‌شود."
				]
			})
		]
	});
}
var TABS = [
	["summary", "خلاصه"],
	["lane", "لینینگ"],
	["items", "آیتم‌سازی"],
	["fights", "تیم‌فایت"],
	["turns", "نقاط عطف"],
	["end", "جمع‌بندی"]
];
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "plate px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "num mt-1 text-xl text-fg",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
function List({ rows }) {
	if (!rows.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "موردی از داده استخراج نشد."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-2",
		children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "border border-line bg-surface-2 px-3 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-medium text-fg",
				children: r.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-muted",
				children: r.detail
			})]
		}, r.title + r.detail))
	});
}
function ReportView({ report }) {
	const [tab, setTab] = (0, import_react.useState)("summary");
	const tone = report.won ? "text-radiant" : "text-dire";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wide text-gold",
						children: "خوانش این هیرو"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [report.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: report.heroUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "block h-16 w-28 shrink-0 overflow-hidden border border-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: report.portrait,
									alt: report.heroName,
									width: 256,
									height: 144,
									className: "h-full w-full object-cover"
								})
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `text-sm font-semibold ${tone}`,
									children: [
										report.won ? "برد" : "باخت",
										" · ",
										report.side === "Radiant" ? "ریدینت" : "دایر",
										" ·",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "num",
											children: [
												report.radiantScore,
												"–",
												report.direScore
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-display text-2xl tracking-wide",
									children: report.heroName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted",
									children: [report.playerName, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "num",
										children: [
											" ",
											"· ",
											fmtClock(report.duration),
											report.parsed ? " · ریپلی پارس شده" : " · بدون پارس تیم‌فایت"
										]
									})]
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "plate px-4 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted",
								children: "نمره عددی"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "num text-3xl text-gold",
								children: report.score.toFixed(1)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-7 text-fg",
						children: report.story
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-1 overflow-x-auto pb-1",
				role: "tablist",
				children: TABS.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					role: "tab",
					"aria-selected": tab === id,
					onClick: () => setTab(id),
					className: "shrink-0 min-h-11 px-3 text-sm " + (tab === id ? "bg-gold text-bg" : "border border-line text-muted"),
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				role: "tabpanel",
				children: [
					tab === "summary" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "KDA",
								value: `${report.k}/${report.d}/${report.a}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "GPM",
								value: String(report.gpm),
								hint: report.gpmPct !== null ? `صدک ${report.gpmPct}` : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "XPM",
								value: String(report.xpm),
								hint: report.xpmPct !== null ? `صدک ${report.xpmPct}` : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "لست‌هیت",
								value: String(report.lastHits),
								hint: `${report.denies} انکار`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "آسیب هیرو",
								value: report.heroDamage.toLocaleString("fa-IR")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "آسیب برج",
								value: report.towerDamage.toLocaleString("fa-IR")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "نت‌ورث",
								value: report.netWorth ? report.netWorth.toLocaleString("fa-IR") : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "لست‌هیت ۱۰",
								value: report.lh10 === null ? "—" : String(report.lh10)
							})
						]
					}),
					tab === "lane" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "plate px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-gold",
								children: report.laneVerdict
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: report.laneNote
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { rows: report.laneEvidence })]
					}),
					tab === "items" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { rows: report.itemEvidence }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-2 text-sm font-semibold text-fg",
							children: "بر اساس ترکیب دشمن"
						}), report.suggestions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "کانتر واضحی نسبت به تگ‌های مکانیکی دشمن جا نمانده، یا داده آیتم ناقص است."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-2",
							children: report.suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border border-gold/40 bg-gold-dim px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium text-gold",
									children: s.item
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-fg",
									children: s.reason
								})]
							}, s.item))
						})] })]
					}),
					tab === "fights" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { rows: report.fightEvidence }), report.fights.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "plate px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium",
									children: ["دقیقه ", f.minute]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "num text-sm text-muted",
									children: [
										"مرگ ",
										f.deaths,
										" · آسیب ",
										f.damage.toLocaleString("en-US")
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: f.note
							})]
						}, `${f.minute}-${f.damage}`))]
					}),
					tab === "turns" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "plate h-48 p-2",
							children: report.goldSeries.length > 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
									data: report.goldSeries,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "minute",
											stroke: "var(--color-muted)",
											fontSize: 11
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											stroke: "var(--color-muted)",
											fontSize: 11,
											width: 42
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: {
												background: "var(--color-surface)",
												border: "1px solid var(--color-line)",
												borderRadius: 2
											},
											labelStyle: { color: "var(--color-fg)" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "gold",
											stroke: "var(--color-gold)",
											fill: "var(--color-gold-dim)",
											name: "گلد تیم"
										})
									]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "p-4 text-sm text-muted",
								children: "گراف گلد برای این مچ نیامده."
							})
						}), report.turns.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "plate px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["دقیقه ", t.minute] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `num ${t.swing < 0 ? "text-dire" : "text-radiant"}`,
									children: [t.swing > 0 ? "+" : "", t.swing.toLocaleString("en-US")]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: t.note
							})]
						}, t.minute))]
					}),
					tab === "end" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-2 text-sm font-semibold text-dire",
								children: "چرا این نتیجه"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { rows: report.reasons })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-2 text-sm font-semibold text-radiant",
								children: "نقطه قوت"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { rows: report.strengths })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-2 text-sm font-semibold text-gold",
								children: "اولویت بعدی"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { rows: report.next })] })
						]
					})
				]
			})
		]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var lookupPlayer = createServerFn({ method: "POST" }).validator(object({ query: string().min(1).max(120) })).handler(createSsrRpc("b9ed699c6a9b4304914ac2b8e3c38fdb82847c8e6c67db782df5e86d541b05b9"));
var loadReport = createServerFn({ method: "POST" }).validator(object({
	matchId: number().int().positive(),
	accountId: number().int().positive().optional()
})).handler(createSsrRpc("e94f3f77d09b1fb62c1a58ae60c0fa24dcd516df50efa45de7bd64a3602a98a3"));
var SAMPLE_MATCH = 9086225563;
function Home() {
	const [mode, setMode] = (0, import_react.useState)("match");
	const [query, setQuery] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [accountId, setAccountId] = (0, import_react.useState)(null);
	const [recent, setRecent] = (0, import_react.useState)([]);
	const [payload, setPayload] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(0);
	async function openMatch(matchId, focusAccount) {
		setBusy(true);
		setError(null);
		try {
			const rep = await loadReport({ data: focusAccount ? {
				matchId,
				accountId: focusAccount
			} : { matchId } });
			setPayload(rep);
			setSelected(rep.focusIndex);
		} catch (err) {
			setError(err instanceof Error ? err.message : "مچ خوانده نشد");
		} finally {
			setBusy(false);
		}
	}
	async function onSearch(e) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen max-w-5xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-[0.28em] text-gold",
						children: "DOTA 2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl tracking-[0.18em] text-fg sm:text-5xl",
						children: "MONARCH"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sm leading-7 text-muted",
						children: "شماره مچ را بده. خلاصهٔ بازی، برتری گلد، و هر ده هیرو با تصویر رسمی دوتا ۲ می‌آید. روی یک هیرو بزن تا خوانش همان بازیکن باز شود."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex gap-2",
				role: "tablist",
				"aria-label": "نوع جستجو",
				children: [["match", "مچ"], ["player", "بازیکن"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": mode === id,
					onClick: () => {
						setMode(id);
						setError(null);
					},
					className: "min-h-11 px-4 text-sm " + (mode === id ? "bg-gold text-bg" : "border border-line text-muted"),
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: onSearch,
				className: "mt-3 flex flex-col gap-2 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "q",
						children: "شناسه"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "q",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: mode === "match" ? "شماره مچ، مثلاً ۸۰۱۲۳۴۵۶۷۸" : "SteamID64 یا Account ID",
						inputMode: "numeric",
						className: "num min-h-11 flex-1 border border-line bg-surface px-3 text-sm text-fg outline-none placeholder:font-sans placeholder:text-muted",
						autoComplete: "off"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy || !query.trim(),
						className: "min-h-11 bg-gold px-5 text-sm font-semibold text-bg disabled:opacity-50",
						children: busy ? "در حال خواندن…" : mode === "match" ? "خلاصه مچ" : "مچ‌های اخیر"
					})
				]
			}),
			mode === "match" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 min-h-11 border border-line px-4 text-sm text-muted",
				disabled: busy,
				onClick: () => {
					setQuery(String(SAMPLE_MATCH));
					openMatch(SAMPLE_MATCH);
				},
				children: "یک مچ پرو نمونه"
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-dire",
				children: error
			}) : null,
			busy && !payload ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-gold",
				children: "در حال چیدن ده هیرو از ریپلی…"
			}) : null,
			recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 flex flex-col gap-2",
				children: recent.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openMatch(m.matchId, accountId ?? void 0),
					className: "plate flex w-full items-center gap-3 px-2 py-2 text-start",
					children: [
						m.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: m.portrait,
							alt: "",
							width: 112,
							height: 63,
							className: "h-12 w-20 object-cover"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: m.won ? "text-radiant" : "text-dire",
								children: m.won ? "برد" : "باخت"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 font-display text-sm text-fg",
								children: m.heroName
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "num text-sm text-muted",
							children: [
								m.k,
								"/",
								m.d,
								"/",
								m.a,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ms-2",
									children: fmtClock(m.duration)
								})
							]
						})
					]
				}) }, m.matchId))
			}),
			payload ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchBoard, {
				headline: payload.headline,
				roster: payload.roster,
				goldSeries: payload.goldSeries,
				selected,
				onSelect: setSelected
			}), report ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportView, { report }, selected) : null] }) : null
		]
	});
}
//#endregion
export { Home as component };

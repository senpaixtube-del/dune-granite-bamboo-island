import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as heroPortrait, c as lobbyLabel, i as heroPage, o as heroSlug, r as gameModeLabel, s as itemIcon, t as fmtClock } from "./art-BuM_B8YY.mjs";
import { i as string, n as number, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api.functions-DxJKwdKG.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Mechanical tags used only to justify item suggestions from the actual draft. */
var HERO_TAGS = {
	"Anti-Mage": ["mana-burn"],
	Axe: ["disable", "physical"],
	Bane: ["disable", "magic"],
	Bloodseeker: ["silence"],
	"Crystal Maiden": ["disable", "magic"],
	"Drow Ranger": ["physical"],
	Earthshaker: ["disable", "magic"],
	Juggernaut: ["magic-immune", "physical"],
	Mirana: ["magic"],
	Morphling: ["physical"],
	"Shadow Fiend": ["magic", "physical"],
	"Phantom Lancer": ["illusions"],
	Puck: ["disable", "magic"],
	Pudge: ["disable"],
	"Shadow Shaman": ["disable", "push"],
	Razor: ["physical"],
	"Sand King": ["disable", "magic"],
	"Storm Spirit": ["magic", "mobility"],
	Sven: ["physical", "disable"],
	Tiny: ["disable", "physical"],
	Vengefulspirit: ["disable", "physical"],
	Windrunner: ["physical"],
	Zeus: ["magic"],
	Kunkka: ["disable", "physical"],
	Lina: ["magic", "disable"],
	Lion: ["disable", "magic"],
	"Shadow Demon": ["illusions", "disable"],
	Tidehunter: ["disable"],
	"Witch Doctor": ["disable", "magic"],
	Lich: ["magic", "disable"],
	Enigma: ["disable"],
	"Faceless Void": ["disable"],
	"Phantom Assassin": ["evasion", "physical"],
	"Death Prophet": ["magic", "push"],
	"Templar Assassin": ["physical"],
	Viper: ["magic"],
	Luna: ["physical"],
	"Dragon Knight": ["push"],
	Dazzle: ["save"],
	Clockwerk: ["disable"],
	Leshrac: ["magic", "push"],
	"Nature's Prophet": ["push"],
	"Life Stealer": ["magic-immune"],
	"Dark Seer": ["illusions"],
	Clinkz: ["physical", "invis"],
	Omniknight: ["save"],
	Enchantress: ["magic"],
	Huskar: ["magic"],
	"Night Stalker": ["silence"],
	Broodmother: ["push", "invis"],
	"Bounty Hunter": ["invis"],
	Weaver: ["mobility"],
	Jakiro: ["magic", "disable"],
	Batrider: ["disable", "magic"],
	Chen: ["push"],
	Spectre: ["physical"],
	"Ancient Apparition": ["magic"],
	Doom: ["disable"],
	Ursa: ["physical"],
	"Spirit Breaker": ["disable"],
	Gyrocopter: ["physical"],
	Alchemist: ["physical"],
	Invoker: ["magic", "disable"],
	Silencer: ["silence"],
	"Outworld Destroyer": ["mana-burn", "magic"],
	Lycan: ["push"],
	Brewmaster: ["disable"],
	"Chaos Knight": ["illusions"],
	Meepo: ["physical"],
	Treant: ["disable"],
	"Ogre Magi": ["disable", "magic"],
	Undying: ["physical"],
	Rubick: ["disable"],
	Disruptor: ["disable", "silence"],
	"Nyx Assassin": [
		"disable",
		"mana-burn",
		"invis"
	],
	"Naga Siren": ["illusions", "disable"],
	"Keeper of the Light": ["mana-burn"],
	Wisp: ["save"],
	Visage: ["physical"],
	Slark: ["physical"],
	Medusa: ["physical"],
	"Troll Warlord": ["physical"],
	Centaur: ["disable"],
	Magnus: ["disable"],
	Timbersaw: ["magic"],
	Bristleback: ["physical"],
	Tusk: ["disable"],
	Skywrath: ["magic", "silence"],
	Abaddon: ["save"],
	"Elder Titan": ["disable"],
	"Legion Commander": ["disable"],
	Techies: ["magic"],
	"Ember Spirit": ["magic", "physical"],
	"Earth Spirit": ["disable"],
	Underlord: ["disable"],
	Terrorblade: ["illusions", "physical"],
	Phoenix: ["magic"],
	Oracle: ["save", "magic"],
	"Winter Wyvern": ["disable"],
	"Arc Warden": ["illusions"],
	"Monkey King": ["physical"],
	"Dark Willow": ["disable", "magic"],
	Pangolier: ["disable"],
	Grimstroke: ["disable", "silence"],
	Hoodwink: ["physical"],
	"Void Spirit": ["magic", "disable"],
	Snapfire: ["magic", "disable"],
	Mars: ["disable"],
	Dawnbreaker: ["save"],
	Marci: ["disable"],
	"Primal Beast": ["disable"],
	Muerta: ["physical", "magic"],
	Ringmaster: ["disable"],
	Kez: ["physical"]
};
var ITEM_KEYS = {
	bkb: ["black_king_bar"],
	mkb: ["monkey_king_bar"],
	bloodthorn: ["bloodthorn"],
	pipe: ["pipe"],
	linkens: ["sphere"],
	bfury: ["bfury"],
	mjollnir: ["mjollnir"],
	crimson: ["crimson_guard"],
	dust: ["dust"],
	gem: ["gem"],
	sentry: ["ward_sentry"],
	manta: ["manta"],
	hex: ["sheepstick"],
	nullifier: ["nullifier"],
	silver: ["silver_edge"],
	euls: ["cyclone"],
	lotus: ["lotus_orb"],
	glimmer: ["glimmer_cape"],
	force: ["force_staff"],
	ghost: ["ghost"]
};
var STEAM64_BASE = 76561197960265728n;
function parseLookup(raw) {
	let s = raw.trim();
	if (!s) return { error: "چیزی وارد نشده." };
	const urlId = s.match(/\/profiles\/(\d{17})/);
	if (urlId) s = urlId[1];
	const vanity = s.match(/steamcommunity\.com\/id\/([^/?#]+)/i);
	if (vanity) return { error: `لینک سفارشی استیم (${vanity[1]}) را اینجا نمی‌شود مستقیم خواند. SteamID64 یا Account ID بگذار.` };
	const matchFromUrl = s.match(/matches\/(\d{6,12})/);
	if (matchFromUrl) return { matchId: Number(matchFromUrl[1]) };
	if (!/^\d+$/.test(s)) return { error: "فقط عدد: SteamID64، Account ID یا Match ID." };
	if (s.length >= 17) {
		const id = Number(BigInt(s) - STEAM64_BASE);
		if (id <= 0 || id > 4e9) return { error: "SteamID64 نامعتبر است." };
		return { accountId: id };
	}
	const n = Number(s);
	if (n > 5e7) return { matchId: n };
	return { accountId: n };
}
function num(v) {
	return typeof v === "number" && Number.isFinite(v) ? v : 0;
}
function itemName(key, names) {
	return names[key] ?? key.replaceAll("_", " ");
}
function pctFromBins(bins, value) {
	if (!Array.isArray(bins) || bins.length === 0) return null;
	let best = 0;
	for (const b of bins) {
		const row = b;
		if (value >= num(row.value)) best = Math.round(num(row.percentile) * 100);
	}
	return best;
}
function hasAny(keys, list) {
	return list.some((k) => keys.has(k));
}
function fa(n) {
	return Math.round(n).toLocaleString("fa-IR");
}
function artOf(heroId, npcFallback, catalogs) {
	const npc = catalogs.heroNpcs[heroId] || (npcFallback.startsWith("npc_dota_hero_") ? npcFallback : "");
	const slug = heroSlug(npc);
	return {
		slug,
		heroName: catalogs.heroNames[heroId] ?? (slug || `هیرو ${heroId}`),
		portrait: slug ? heroPortrait(slug) : "",
		heroUrl: slug ? heroPage(slug) : "https://www.dota2.com/heroes"
	};
}
function slotsOf(player, catalogs) {
	const ids = [
		0,
		1,
		2,
		3,
		4,
		5
	].map((i) => player[`item_${i}`]).filter((id) => typeof id === "number" && id > 0);
	const neutral = player.item_neutral;
	if (typeof neutral === "number" && neutral > 0) ids.push(neutral);
	const out = [];
	for (const id of ids) {
		const key = catalogs.itemIds[id];
		if (!key) continue;
		out.push({
			key,
			name: itemName(key, catalogs.itemNames),
			icon: itemIcon(key)
		});
	}
	return out;
}
function replayOf(match, matchId) {
	const replayRaw = match.replay_url;
	const cluster = num(match.cluster);
	const salt = num(match.replay_salt);
	if (typeof replayRaw === "string" && replayRaw.startsWith("http")) return replayRaw;
	if (cluster && salt) return `http://replay${cluster}.valve.net/570/${matchId}_${salt}.dem.bz2`;
	return null;
}
function buildRoster(match, catalogs) {
	const players = match.players ?? [];
	const radiantWin = Boolean(match.radiant_win);
	return players.map((p, index) => {
		const radiant = num(p.player_slot) < 128;
		const art = artOf(num(p.hero_id), String(p.name ?? ""), catalogs);
		const account = num(p.account_id);
		const persona = typeof p.personaname === "string" ? p.personaname.trim() : "";
		return {
			index,
			accountId: account > 0 ? account : null,
			name: persona || "ناشناس",
			heroId: num(p.hero_id),
			heroName: art.heroName,
			slug: art.slug,
			portrait: art.portrait,
			heroUrl: art.heroUrl,
			side: radiant ? "Radiant" : "Dire",
			won: radiant === radiantWin,
			k: num(p.kills),
			d: num(p.deaths),
			a: num(p.assists),
			gpm: num(p.gold_per_min),
			xpm: num(p.xp_per_min),
			lastHits: num(p.last_hits),
			denies: num(p.denies),
			heroDamage: num(p.hero_damage),
			towerDamage: num(p.tower_damage),
			heroHealing: num(p.hero_healing),
			netWorth: num(p.net_worth) || num(p.total_gold),
			level: num(p.level),
			items: slotsOf(p, catalogs)
		};
	});
}
function leadPhrase(minute, gold) {
	if (Math.abs(gold) < 400) return `دقیقه ${fa(minute)} گلد تقریباً برابر بود`;
	const side = gold > 0 ? "ریدینت" : "دایر";
	return `دقیقه ${fa(minute)} ${side} ${fa(Math.abs(gold))} گلد جلو بود`;
}
function buildHeadline(match, roster) {
	const radiantWin = Boolean(match.radiant_win);
	const duration = num(match.duration);
	const radiantScore = num(match.radiant_score);
	const direScore = num(match.dire_score);
	const matchId = num(match.match_id);
	const mode = gameModeLabel(num(match.game_mode));
	const lobby = lobbyLabel(num(match.lobby_type));
	const radiantName = String(match.radiant_name || "ریدینت");
	const direName = String(match.dire_name || "دایر");
	const goldAdv = match.radiant_gold_adv ?? [];
	const parsed = Boolean(match.version) || Array.isArray(match.teamfights);
	const patch = num(match.patch) || null;
	const fb = typeof match.first_blood_time === "number" ? num(match.first_blood_time) : null;
	const byDamage = [...roster].sort((a, b) => b.heroDamage - a.heroDamage);
	const byNet = [...roster].sort((a, b) => b.netWorth - a.netWorth);
	const byKda = [...roster].sort((a, b) => {
		const sa = (a.k + a.a) / Math.max(1, a.d);
		return (b.k + b.a) / Math.max(1, b.d) - sa;
	});
	const healer = [...roster].sort((a, b) => b.heroHealing - a.heroHealing)[0];
	const highlights = [];
	if (byDamage[0] && byDamage[0].heroDamage > 0) highlights.push({
		label: "بیشترین آسیب",
		hero: byDamage[0].heroName,
		value: fa(byDamage[0].heroDamage),
		index: byDamage[0].index
	});
	if (byNet[0] && byNet[0].netWorth > 0) highlights.push({
		label: "بیشترین نت‌ورث",
		hero: byNet[0].heroName,
		value: fa(byNet[0].netWorth),
		index: byNet[0].index
	});
	if (byKda[0]) {
		const p = byKda[0];
		highlights.push({
			label: "بهترین KDA",
			hero: p.heroName,
			value: `${p.k}/${p.d}/${p.a}`,
			index: p.index
		});
	}
	if (healer && healer.heroHealing >= 1500) highlights.push({
		label: "بیشترین هیل",
		hero: healer.heroName,
		value: fa(healer.heroHealing),
		index: healer.index
	});
	const winner = radiantWin ? "ریدینت" : "دایر";
	const winnerTeam = radiantWin ? radiantName : direName;
	const named = winnerTeam !== winner;
	const bits = [];
	bits.push(named ? `${winnerTeam} سمت ${winner} در ${fmtClock(duration)} با ${fa(radiantScore)} به ${fa(direScore)} برد.` : `${winner} در ${fmtClock(duration)} با نتیجهٔ ${fa(radiantScore)} به ${fa(direScore)} برد.`);
	const modeBit = [lobby, mode].filter((s) => s && s !== "حالت بازی").join(" · ");
	if (modeBit) bits.push(`حالت بازی ${modeBit} بود.`);
	if (fb !== null && fb >= 0) bits.push(`فرست‌بلاد دقیقهٔ ${fmtClock(fb)} افتاد.`);
	const marks = [
		10,
		20,
		30
	].filter((m) => goldAdv.length > m);
	if (marks.length) bits.push(`${marks.map((m) => leadPhrase(m, goldAdv[m] ?? 0)).join("، ")}.`);
	const finalGold = goldAdv.length ? goldAdv[goldAdv.length - 1] : null;
	const mid = goldAdv.length > 15 ? goldAdv[15] : null;
	if (finalGold !== null && mid !== null && mid * finalGold < 0 && Math.abs(finalGold) > 2e3) {
		const came = finalGold > 0 ? "ریدینت" : "دایر";
		bits.push(`${came} از عقب گلد برگشت و بازی را جمع کرد.`);
	}
	if (byDamage[0] && byNet[0]) bits.push(`سنگین‌ترین درگیری را ${byDamage[0].heroName} داشت (${fa(byDamage[0].heroDamage)} آسیب هیرو) و بیشترین طلای پایان مال ${byNet[0].heroName} بود، با ${fa(byNet[0].netWorth)} نت‌ورث.`);
	if (!parsed) bits.push("ریپلی هنوز کامل پارس نشده؛ این خلاصه از آمار پایان بازی است، نه از تک‌تک فایت‌ها.");
	return {
		matchId,
		radiantWin,
		winner: radiantWin ? "Radiant" : "Dire",
		duration,
		radiantScore,
		direScore,
		radiantName,
		direName,
		gameMode: mode,
		lobby,
		patch,
		firstBlood: fb,
		parsed,
		summary: bits.join(" "),
		highlights: highlights.slice(0, 4),
		replayUrl: replayOf(match, matchId),
		opendotaUrl: `https://www.opendota.com/matches/${matchId}`,
		dotabuffUrl: `https://www.dotabuff.com/matches/${matchId}`
	};
}
function defaultFocus(roster, accountId) {
	if (accountId) {
		const mine = roster.find((p) => p.accountId === accountId);
		if (mine) return mine.index;
	}
	const winners = roster.filter((p) => p.won);
	const pool = winners.length ? winners : roster;
	if (!pool.length) return 0;
	return pool.reduce((best, p) => p.heroDamage > best.heroDamage ? p : best).index;
}
function buildReport(input) {
	const match = input.match;
	const players = match.players ?? [];
	let me;
	if (typeof input.focusIndex === "number") me = players[input.focusIndex];
	if (!me && input.focusAccountId) me = players.find((p) => num(p.account_id) === input.focusAccountId);
	if (!me) me = players[0];
	if (!me) throw new Error("بازیکنی در این مچ پیدا نشد.");
	const heroId = num(me.hero_id);
	const art = artOf(heroId, String(me.name ?? ""), input.catalogs);
	const heroName = art.heroName;
	const radiant = num(me.player_slot) < 128;
	const radiantWin = Boolean(match.radiant_win);
	const won = radiant === radiantWin;
	const duration = num(match.duration);
	const parsed = Boolean(match.version) || Array.isArray(match.teamfights);
	const persona = typeof me.personaname === "string" ? me.personaname.trim() : "";
	const purchase = me.purchase_log ?? [];
	const finalSlots = [
		0,
		1,
		2,
		3,
		4,
		5
	].map((i) => me[`item_${i}`]).filter((id) => typeof id === "number" && id > 0);
	const idToKey = input.catalogs.itemIds;
	const boughtMap = /* @__PURE__ */ new Map();
	for (const row of purchase) {
		const key = String(row.key ?? "");
		if (!key || boughtMap.has(key)) continue;
		const minute = Math.max(0, Math.round(num(row.time) / 60));
		boughtMap.set(key, {
			key,
			name: itemName(key, input.catalogs.itemNames),
			minute
		});
	}
	if (boughtMap.size === 0) for (const id of finalSlots) {
		const key = idToKey[id] ?? String(id);
		boughtMap.set(key, {
			key,
			name: itemName(key, input.catalogs.itemNames),
			minute: null
		});
	}
	const items = [...boughtMap.values()].sort((a, b) => (a.minute ?? 99) - (b.minute ?? 99));
	const owned = new Set(items.map((i) => i.key));
	const enemyNames = players.filter((p) => num(p.player_slot) < 128 !== radiant).map((p) => input.catalogs.heroNames[num(p.hero_id)] ?? "?");
	const tagCount = /* @__PURE__ */ new Map();
	for (const name of enemyNames) for (const tag of HERO_TAGS[name] ?? []) {
		const list = tagCount.get(tag) ?? [];
		list.push(name);
		tagCount.set(tag, list);
	}
	const suggestions = [];
	const disables = tagCount.get("disable") ?? [];
	const magics = tagCount.get("magic") ?? [];
	const evasions = tagCount.get("evasion") ?? [];
	const illus = tagCount.get("illusions") ?? [];
	const invis = tagCount.get("invis") ?? [];
	const bkbTime = items.find((i) => i.key === "black_king_bar")?.minute ?? null;
	if (disables.length >= 2 && !hasAny(owned, ITEM_KEYS.bkb)) suggestions.push({
		item: "Black King Bar",
		reason: `${disables.length} هیرو دیسیبل در تیم دشمن: ${disables.slice(0, 4).join("، ")}. در آیتم‌های نهایی BKB نیست.`
	});
	else if (bkbTime !== null && bkbTime >= 28 && disables.length >= 2) suggestions.push({
		item: "Black King Bar زودتر",
		reason: `BKB دقیقه ${bkbTime} آمده. دشمن از قبل ${disables.slice(0, 3).join("، ")} داشته.`
	});
	if (evasions.length && !hasAny(owned, [...ITEM_KEYS.mkb, ...ITEM_KEYS.bloodthorn])) suggestions.push({
		item: "Monkey King Bar",
		reason: `فرار از حمله: ${evasions.join("، ")}. نه MKB خریدی نه Bloodthorn.`
	});
	if (illus.length >= 1 && !hasAny(owned, [
		...ITEM_KEYS.bfury,
		...ITEM_KEYS.mjollnir,
		...ITEM_KEYS.crimson,
		"maelstrom",
		"gleipnir",
		"radiance"
	])) suggestions.push({
		item: "پاک‌سازی ایلوژن",
		reason: `ایلوژن/کپی: ${illus.join("، ")}. آیتم موج‌زن یا ضد ایلوژن در بیلد نیست.`
	});
	if (magics.length >= 3 && !hasAny(owned, [
		...ITEM_KEYS.pipe,
		...ITEM_KEYS.bkb,
		"hood_of_defiance",
		"eternal_shroud"
	])) suggestions.push({
		item: "Pipe یا BKB",
		reason: `حجم مجیک بالا از ${magics.slice(0, 4).join("، ")}. نه Pipe هست نه BKB.`
	});
	if (invis.length && !hasAny(owned, [
		...ITEM_KEYS.dust,
		...ITEM_KEYS.gem,
		...ITEM_KEYS.sentry,
		...ITEM_KEYS.silver
	])) suggestions.push({
		item: "دید / تشخیص",
		reason: `نامرئی: ${invis.join("، ")}. Dust، Sentry، Gem یا Silver Edge در خریدها نیست.`
	});
	const lhT = me.lh_t;
	const lh10 = Array.isArray(lhT) && lhT.length > 10 ? lhT[10] : null;
	let deathsBefore10 = null;
	if (Array.isArray(me.deaths_log)) deathsBefore10 = me.deaths_log.filter((d) => num(d.time) < 600).length;
	const gpm = num(me.gold_per_min);
	const xpm = num(me.xp_per_min);
	const benchResult = input.benchmark?.result ?? input.benchmark;
	const gpmPct = pctFromBins(benchResult?.gold_per_min, gpm);
	const xpmPct = pctFromBins(benchResult?.xp_per_min, xpm);
	const laneEvidence = [];
	if (lh10 !== null) laneEvidence.push({
		title: `لست‌هیت دقیقه ۱۰: ${lh10}`,
		detail: `تا دقیقه ۱۰ دقیقاً ${lh10} لست‌هیت ثبت شده.`
	});
	if (gpmPct !== null) laneEvidence.push({
		title: `GPM صدک ${gpmPct}`,
		detail: `گلد در دقیقه ${gpm} نسبت به بنچمارک همین هیرو روی OpenDota.`
	});
	const laneRole = num(me.lane_role);
	const roleLabel = [
		"",
		"سیف",
		"مید",
		"آف",
		"جنگل",
		"روم"
	][laneRole] ?? "نامشخص";
	let laneVerdict = "داده لین ناقص است";
	if (lh10 !== null) {
		if (lh10 >= 60 && (laneRole === 1 || laneRole === 2)) laneVerdict = "لین از نظر فارم قابل قبول";
		else if (lh10 < 40 && (laneRole === 1 || laneRole === 2)) laneVerdict = "لین از نظر فارم ضعیف";
		else laneVerdict = "لین معمولی";
	}
	const laneNote = `نقش ثبت‌شده: ${roleLabel}. لن ${num(me.lane) || "—"}.`;
	const goldAdv = match.radiant_gold_adv ?? [];
	const signed = radiant ? 1 : -1;
	const goldSeries = goldAdv.map((g, minute) => ({
		minute,
		gold: g * signed
	}));
	const turns = [];
	for (let i = 1; i < goldSeries.length; i++) {
		const swing = goldSeries[i].gold - goldSeries[i - 1].gold;
		if (Math.abs(swing) >= 1500) turns.push({
			minute: i,
			gold: goldSeries[i].gold,
			swing,
			note: swing < 0 ? `در یک دقیقه ${fa(Math.abs(swing))} گلد نسبت به تیم از دست رفت. موجودی تیم: ${fa(goldSeries[i].gold)}.` : `در یک دقیقه ${fa(swing)} گلد نسبت به تیم به‌دست آمد. موجودی: ${fa(goldSeries[i].gold)}.`
		});
	}
	turns.sort((a, b) => Math.abs(b.swing) - Math.abs(a.swing));
	const topTurns = turns.slice(0, 6).sort((a, b) => a.minute - b.minute);
	const myIndex = players.indexOf(me);
	const fights = [];
	const tfs = match.teamfights ?? [];
	for (const tf of tfs) {
		const start = num(tf.start);
		const row = (tf.players ?? [])[myIndex];
		if (!row) continue;
		const deaths = num(row.deaths);
		const damage = num(row.damage);
		const gold = num(row.gold_delta);
		if (deaths === 0 && damage < 200 && Math.abs(gold) < 200) continue;
		fights.push({
			minute: Math.round(start / 60),
			deaths,
			damage,
			gold,
			note: deaths > 0 ? `در این فایت مرد و ${fa(damage)} آسیب ثبت شد.` : `${fa(damage)} آسیب، تغییر گلد ${fa(gold)}.`
		});
	}
	const keyFights = [...fights].sort((a, b) => b.deaths - a.deaths || b.damage - a.damage).slice(0, 5);
	const fightEvidence = [];
	const diedIn = fights.filter((f) => f.deaths > 0);
	if (tfs.length) fightEvidence.push({
		title: `${fa(tfs.length)} تیم‌فایت پارس‌شده`,
		detail: diedIn.length ? `در ${fa(diedIn.length)} تا از آن‌ها حداقل یک مرگ داشت.` : "در فایت‌های ثبت‌شده مرگ نداشت."
	});
	else fightEvidence.push({
		title: "ریپلی هنوز پارس نشده",
		detail: "OpenDota جزئیات تیم‌فایت این مچ را ندارد. آمار کلی از API خام است."
	});
	const k = num(me.kills);
	const d = num(me.deaths);
	const a = num(me.assists);
	const itemEvidence = items.slice(0, 8).map((it) => ({
		title: it.minute === null ? it.name : `${it.name} · دقیقه ${it.minute}`,
		detail: it.minute === null ? "زمان خرید در داده خام نیست؛ فقط اسلات نهایی." : "از purchase_log."
	}));
	const reasons = [];
	const strengths = [];
	if (!won && d >= 8) reasons.push({
		title: `${d} مرگ`,
		detail: `نسبت KDA برابر ${k}/${d}/${a}. هر مرگ هم گلد می‌دهد هم تمپو را می‌شکند.`
	});
	if (!won && lh10 !== null && lh10 < 40 && (laneRole === 1 || laneRole === 2)) reasons.push({
		title: "فارم لین پایین",
		detail: `${lh10} لست‌هیت تا دقیقه ۱۰ برای کر (${roleLabel}) زیر سطح معمول است.`
	});
	if (!won && suggestions[0]) reasons.push({
		title: suggestions[0].item,
		detail: suggestions[0].reason
	});
	if (!won && topTurns.some((t) => t.swing <= -2e3)) {
		const worst = [...topTurns].sort((a, b) => a.swing - b.swing)[0];
		reasons.push({
			title: `سویینگ گلد دقیقه ${worst.minute}`,
			detail: worst.note
		});
	}
	if (won && gpmPct !== null && gpmPct >= 60) strengths.push({
		title: `اقتصاد قوی (صدک ${gpmPct})`,
		detail: `GPM برابر ${gpm}.`
	});
	if (d <= 4 && duration > 1500) strengths.push({
		title: "مرگ کم",
		detail: `فقط ${d} مرگ در ${Math.round(duration / 60)} دقیقه.`
	});
	if (num(me.tower_damage) > 4e3) strengths.push({
		title: "فشار آبجکتیو",
		detail: `${fa(num(me.tower_damage))} آسیب به ساختمان.`
	});
	if (won && reasons.length === 0 && strengths.length === 0) strengths.push({
		title: "نتیجه با تیم",
		detail: radiantWin ? "ریدینت برد." : "دایر برد."
	});
	if (!won && reasons.length === 0) reasons.push({
		title: "باخت تیمی",
		detail: `امتیاز ${fa(num(match.radiant_score))}–${fa(num(match.dire_score))}. یک دلیل تکی غالب در آمار شخصی برجسته نیست.`
	});
	if (d >= 6 && d < 8) reasons.push({
		title: `${d} مرگ`,
		detail: `در ${Math.round(duration / 60)} دقیقه، ${d} بار مرد. این عدد هم گلد دشمن را بالا می‌برد هم حضور در آبجکتیو را کم می‌کند.`
	});
	const next = [];
	if (suggestions[0]) next.push({
		title: suggestions[0].item,
		detail: suggestions[0].reason
	});
	if (d >= 7) next.push({
		title: "مرگ را کم کن",
		detail: `این بازی ${d} بار مرد. هدف بازی بعد: حداکثر ${Math.max(3, d - 3)} مرگ.`
	});
	if (lh10 !== null && lh10 < 50 && (laneRole === 1 || laneRole === 2)) next.push({
		title: "لست‌هیت ۱۰ دقیقه",
		detail: `این بار ${lh10}. هدف بعدی بالای ۵۵ برای کر.`
	});
	if (next.length === 0) next.push({
		title: "همین تمپو را حفظ کن",
		detail: "عددهای این مچ نقطه ضعف تکی بزرگی نشان نمی‌دهند."
	});
	let score = 5;
	if (gpmPct !== null) score += (gpmPct - 50) / 25;
	score += won ? 1.2 : -1.2;
	score -= Math.max(0, d - 5) * .25;
	if (lh10 !== null && (laneRole === 1 || laneRole === 2)) score += (lh10 - 50) / 40;
	score = Math.max(1, Math.min(10, Math.round(score * 10) / 10));
	const matchId = num(match.match_id);
	const mins = Math.round(duration / 60);
	const story = [
		`${won ? "این هیرو سمت برنده بود" : "این هیرو سمت بازنده بود"}. ${heroName}، ${persona || "بازیکن ناشناس"}، ${mins} دقیقه.`,
		`خط شخصی: ${k} کیل، ${d} دث، ${a} اسیست. در دقیقه ${gpm} گلد و ${xpm} اکسپی${gpmPct !== null ? ` (GPM حدود صدک ${gpmPct} همین هیرو)` : ""}.`,
		lh10 !== null ? `تا دقیقه ۱۰ دقیقاً ${lh10} لست‌هیت (${roleLabel}).` : "لست‌هیت دقیق دقیقه ۱۰ در این پاسخ API نیست.",
		suggestions[0] ? `نسبت به درفت دشمن، مهم‌ترین جای خالی بیلد: ${suggestions[0].item}.` : "در بیلد نهایی، کانتر مکانیکی واضحی نسبت به تگ‌های دشمن جا نمانده."
	].join(" ");
	return {
		matchId,
		radiantWin,
		won,
		duration,
		heroName,
		heroId,
		slug: art.slug,
		portrait: art.portrait,
		heroUrl: art.heroUrl,
		side: radiant ? "Radiant" : "Dire",
		playerName: persona || "ناشناس",
		k,
		d,
		a,
		gpm,
		xpm,
		lastHits: num(me.last_hits),
		denies: num(me.denies),
		heroDamage: num(me.hero_damage),
		towerDamage: num(me.tower_damage),
		netWorth: num(me.net_worth) || num(me.total_gold),
		parsed,
		gpmPct,
		xpmPct,
		lh10,
		deathsBefore10,
		laneNote,
		laneVerdict,
		laneEvidence,
		items,
		suggestions: suggestions.slice(0, 4),
		itemEvidence,
		fights: keyFights.sort((a, b) => a.minute - b.minute),
		fightEvidence,
		turns: topTurns,
		goldSeries,
		reasons: reasons.slice(0, 4),
		strengths: strengths.slice(0, 3),
		next: next.slice(0, 3),
		score,
		replayUrl: replayOf(match, matchId),
		opendotaUrl: `https://www.opendota.com/matches/${matchId}`,
		dotabuffUrl: `https://www.dotabuff.com/matches/${matchId}`,
		story,
		radiantScore: num(match.radiant_score),
		direScore: num(match.dire_score)
	};
}
function assembleMatch(input) {
	const roster = buildRoster(input.match, input.catalogs);
	if (!roster.length) throw new Error("بازیکنی در این مچ پیدا نشد.");
	const headline = buildHeadline(input.match, roster);
	const reports = roster.map((p) => buildReport({
		match: input.match,
		catalogs: input.catalogs,
		focusIndex: p.index,
		benchmark: input.benchmarks[p.heroId] ?? null
	}));
	return {
		headline,
		roster,
		goldSeries: (input.match.radiant_gold_adv ?? []).map((gold, minute) => ({
			minute,
			gold
		})),
		reports,
		focusIndex: defaultFocus(roster, input.focusAccountId)
	};
}
var BASE = "https://api.opendota.com/api";
var catalogsCache = null;
var matchCache = /* @__PURE__ */ new Map();
var benchCache = /* @__PURE__ */ new Map();
var MATCH_TTL = 6e5;
async function od(path) {
	const res = await fetch(`${BASE}${path}`, { headers: {
		Accept: "application/json",
		"User-Agent": "MonarchMatch/1.0"
	} });
	if (res.status === 404) throw new Error("پیدا نشد. شماره مچ یا آیدی را چک کن.");
	if (res.status === 429) throw new Error("OpenDota شلوغ است. چند ثانیه دیگر دوباره بزن.");
	if (!res.ok) throw new Error(`OpenDota پاسخ ${res.status} داد.`);
	return await res.json();
}
async function catalogs() {
	if (!catalogsCache) {
		const [heroes, items] = await Promise.all([od("/heroes"), od("/constants/items")]);
		const heroNames = {};
		const heroNpcs = {};
		for (const h of heroes) {
			heroNames[h.id] = h.localized_name;
			heroNpcs[h.id] = h.name;
		}
		const itemNames = {};
		const itemIds = {};
		for (const [key, row] of Object.entries(items)) {
			itemNames[key] = row.dname || key;
			if (typeof row.id === "number") itemIds[row.id] = key;
		}
		catalogsCache = {
			heroNames,
			heroNpcs,
			itemNames,
			itemIds
		};
	}
	return catalogsCache;
}
async function getMatch(matchId) {
	const hit = matchCache.get(matchId);
	if (hit && Date.now() - hit.at < MATCH_TTL) return hit.match;
	const match = await od(`/matches/${matchId}`);
	if (!match || !Array.isArray(match.players)) throw new Error("این پاسخ مچ ناقص است.");
	matchCache.set(matchId, {
		at: Date.now(),
		match
	});
	return match;
}
async function benchmarksFor(heroIds) {
	const unique = [...new Set(heroIds.filter((id) => id > 0))];
	const missing = unique.filter((id) => !benchCache.has(id));
	if (missing.length) await Promise.all(missing.map(async (id) => {
		try {
			benchCache.set(id, await od(`/benchmarks?hero_id=${id}`));
		} catch {
			benchCache.set(id, null);
		}
	}));
	const out = {};
	for (const id of unique) out[id] = benchCache.get(id) ?? null;
	return out;
}
function withTimeout(promise, ms) {
	return new Promise((resolve) => {
		const timer = setTimeout(() => resolve(null), ms);
		promise.then((value) => {
			clearTimeout(timer);
			resolve(value);
		}, () => {
			clearTimeout(timer);
			resolve(null);
		});
	});
}
var lookupPlayer_createServerFn_handler = createServerRpc({
	id: "b9ed699c6a9b4304914ac2b8e3c38fdb82847c8e6c67db782df5e86d541b05b9",
	name: "lookupPlayer",
	filename: "src/lib/dota/api.functions.ts"
}, (opts) => lookupPlayer.__executeServer(opts));
var lookupPlayer = createServerFn({ method: "POST" }).validator(object({ query: string().min(1).max(120) })).handler(lookupPlayer_createServerFn_handler, async ({ data }) => {
	const parsed = parseLookup(data.query);
	if (parsed.matchId && !parsed.accountId) throw new Error("این شماره شبیه Match ID است. تب «مچ» را بزن.");
	if (!parsed.accountId) throw new Error(parsed.error ?? "Account ID لازم است.");
	const cats = await catalogs();
	const recent = (await od(`/players/${parsed.accountId}/recentMatches`)).slice(0, 12).map((m) => {
		const radiant = Number(m.player_slot ?? 0) < 128;
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
			start: Number(m.start_time ?? 0)
		};
	});
	return {
		accountId: parsed.accountId,
		recent
	};
});
var loadReport_createServerFn_handler = createServerRpc({
	id: "e94f3f77d09b1fb62c1a58ae60c0fa24dcd516df50efa45de7bd64a3602a98a3",
	name: "loadReport",
	filename: "src/lib/dota/api.functions.ts"
}, (opts) => loadReport.__executeServer(opts));
var loadReport = createServerFn({ method: "POST" }).validator(object({
	matchId: number().int().positive(),
	accountId: number().int().positive().optional()
})).handler(loadReport_createServerFn_handler, async ({ data }) => {
	const cats = await catalogs();
	const match = await getMatch(data.matchId);
	return assembleMatch({
		match,
		catalogs: cats,
		benchmarks: await withTimeout(benchmarksFor((match.players ?? []).map((p) => Number(p.hero_id ?? 0))), 3500) ?? {},
		focusAccountId: data.accountId
	});
});
//#endregion
export { loadReport_createServerFn_handler, lookupPlayer_createServerFn_handler };

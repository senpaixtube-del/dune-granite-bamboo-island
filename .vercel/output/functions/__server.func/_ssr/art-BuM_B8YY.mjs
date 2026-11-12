//#region node_modules/.nitro/vite/services/ssr/assets/art-BuM_B8YY.js
/** Official Dota 2 website art (the same CDN dota2.com uses). */
var CDN = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react";
function heroSlug(npc) {
	if (!npc) return "";
	return npc.replace(/^npc_dota_hero_/, "");
}
function heroPortrait(slug) {
	return `${CDN}/heroes/${slug}.png`;
}
function heroPage(slug) {
	return `https://www.dota2.com/hero/${slug}`;
}
function itemIcon(key) {
	return `${CDN}/items/${key}.png`;
}
function fmtClock(sec) {
	const s = Math.max(0, Math.floor(sec));
	return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
function fmtCompact(n) {
	const abs = Math.abs(Math.round(n));
	const sign = n < 0 ? "−" : "";
	if (abs >= 1e3) {
		const k = abs / 1e3;
		return `${sign}${k >= 10 ? String(Math.round(k)) : k.toFixed(1)}k`;
	}
	return `${sign}${abs}`;
}
var GAME_MODES = {
	1: "آل‌پیک",
	2: "کپتین مود",
	3: "رندوم درفت",
	4: "سینگل درفت",
	5: "آل رندوم",
	12: "لیست‌پلی",
	16: "کپتین درفت",
	18: "ابیلیتی درفت",
	22: "آل‌پیک رنکد",
	23: "توربو"
};
var LOBBIES = {
	0: "آنرنکد",
	1: "تمرین",
	2: "تورنمنت",
	7: "رنکد",
	8: "سولو مید",
	9: "بتل کاپ"
};
function gameModeLabel(id) {
	return GAME_MODES[id] ?? "حالت بازی";
}
function lobbyLabel(id) {
	return LOBBIES[id] ?? "";
}
//#endregion
export { heroPortrait as a, lobbyLabel as c, heroPage as i, fmtCompact as n, heroSlug as o, gameModeLabel as r, itemIcon as s, fmtClock as t };

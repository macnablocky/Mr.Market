import { writable } from "svelte/store";

export let mixinConnectLoading = writable(false)
export let mixinConnected = writable(false)
export let hideBalance = writable(false);
// 0 Favorites, 1 All, 2 MainStream, 3 Layer1, 4 Layer2, 5 Inscription, 6 AI, 7 Meme, 8 Defi, 9 GameFi, 10 NFT
export let activeCoinTab = writable(1);

// For list sorting (change keys and 'sortCoins()' when data change)
export const asc = writable(true);
export const keys = ["market_cap_rank", "current_price", "price_change_percentage_24h"];
export let selectedField = writable(keys[0]);
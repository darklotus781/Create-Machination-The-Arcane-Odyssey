// priority: 1
//
// let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
// let AE2 = (id, x) => MOD("ae2", id, x)
// let CR = (id, x) => MOD("create", id, x)
// let TC = (id, x) => MOD("tconstruct", id, x)
// let MC = (id, x) => MOD("minecraft", id, x)
// let KJ = (id, x) => MOD("kubejs", id, x)
// let F = (id, x) => MOD("forge", id, x)
// let FA = (id, x) => MOD("forbidden_arcanus", id, x)

let RARITY_COMMON = "COMMON";
let RARITY_UNCOMMON = "UNCOMMON";
let RARITY_RARE = "RARE";
let RARITY_EPIC = "EPIC";

global.colors = [
    'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
]
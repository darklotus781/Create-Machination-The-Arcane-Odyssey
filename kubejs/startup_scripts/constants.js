// priority: 10
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

global.spawnableMobs = [
    {name: "Chicken Spawn Egg", mc_id: "minecraft:chicken", color_1: 0xA1A1A1, color_2: 0xFF0000},
    {name: "Cow Spawn Egg", mc_id: "minecraft:cow", color_1: 0x443626, color_2: 0xA1A1A1},
    {name: "Pig Spawn Egg", mc_id: "minecraft:pig", color_1: 0xF0A5A2, color_2: 0xDB635F},
    {name: "Rabbit Spawn Egg", mc_id: "minecraft:rabbit", color_1: 0x995F40, color_2: 0x734831},
    {name: "Sheep Spawn Egg", mc_id: "minecraft:sheep", color_1: 0xE7E7E7, color_2: 0xFFB5B5},
    {name: "Cat Spawn Egg", mc_id: "minecraft:cat", color_1: 0xEFC88E, color_2: 0x957256},
    {name: "Wolf Spawn Egg", mc_id: "minecraft:wolf", color_1: 0xD7D3D3, color_2: 0xCEAF96},
    {name: "Villager Spawn Egg", mc_id: "minecraft:wolf", color_1: 0x563C33, color_2: 0xBD8B72},
    {name: "Camel Spawn Egg", mc_id: "minecraft:camel", color_1: 0xFCC369, color_2: 0xCB9337}
];

// Tool and Other Item Colors.
//Minecraft
const copper = 0xc15a36
const iron = 0xD8D8D8
const gold = 0xFDF55F
const diamond = 0x2EDAFF
//Immersive Engineering
const tin = 0x465d6b
const silver = 0x83aab2
const lead = 0x453d5e
const nickel = 0xd8b87d
const steel = 0x43464b
const aluminum = 0xa2a8ab
const electrum = 0xE3C739
const constantan = 0xF5A280
//Mekanism
const osmium = 0x67869f
const bronze = 0xD07C1B
const uranium = 0x37A119
//Create
const zinc = 0x96b685
const brass = 0xE9BA54
//Thermal Series
const enderium = 0x1C7AA0
const lumium = 0xfffd7e
const invar = 0x87928c
const signalum = 0xe4340f
//Custom made by FooterMan
const tungsten = 0xB5FF9F
const signar = 0xc37e48
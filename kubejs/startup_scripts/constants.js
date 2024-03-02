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

// global.spawnableMobs = [
//     { name: "Chicken Spawn Egg", mc_id: "minecraft:chicken", base_color: 0xA1A1A1, overlay_color: 0xFF0000 },
//     { name: "Cow Spawn Egg", mc_id: "minecraft:cow", base_color: 0x443626, overlay_color: 0xA1A1A1 },
//     { name: "Pig Spawn Egg", mc_id: "minecraft:pig", base_color: 0xF0A5A2, overlay_color: 0xDB635F },
//     { name: "Rabbit Spawn Egg", mc_id: "minecraft:rabbit", base_color: 0x995F40, overlay_color: 0x734831 },
//     { name: "Sheep Spawn Egg", mc_id: "minecraft:sheep", base_color: 0xE7E7E7, overlay_color: 0xFFB5B5 },
//     { name: "Cat Spawn Egg", mc_id: "minecraft:cat", base_color: 0xEFC88E, overlay_color: 0x957256 },
//     { name: "Wolf Spawn Egg", mc_id: "minecraft:wolf", base_color: 0xD7D3D3, overlay_color: 0xCEAF96 },
//     { name: "Villager Spawn Egg", mc_id: "minecraft:wolf", base_color: 0x563C33, overlay_color: 0xBD8B72 },
//     { name: "Camel Spawn Egg", mc_id: "minecraft:camel", base_color: 0xFCC369, overlay_color: 0xCB9337 },
//     { name: "Axolotl Spawn Egg", mc_id: "minecraft:axolotl", base_color: 0xFBC1E3, overlay_color: 0xA62D74 }
// ];

global.spawnableMobs = [
    { name: "Allay Spawn Egg", mc_id: "minecraft:allay", base_color: 0x00DAFF, overlay_color: 0x00ADFF },
    { name: "Axolotl Spawn Egg", mc_id: "minecraft:axolotl", base_color: 0xFBC1E3, overlay_color: 0xA62D74 },
    { name: "Bat Spawn Egg", mc_id: "minecraft:bat", base_color: 0x4C3E30, overlay_color: 0x0F0F0F },
    { name: "Bee Spawn Egg", mc_id: "minecraft:bee", base_color: 0xEDC343, overlay_color: 0x43241B },
    { name: "Blaze Spawn Egg", mc_id: "minecraft:blaze", base_color: 0xF6B201, overlay_color: 0xFFF87E },
    { name: "Camel Spawn Egg", mc_id: "minecraft:camel", base_color: 0xFCC369, overlay_color: 0xCB9337 },
    { name: "Cat Spawn Egg", mc_id: "minecraft:cat", base_color: 0xEFC88E, overlay_color: 0x957256 },
    { name: "Cave Spider Spawn Egg", mc_id: "minecraft:cave_spider", base_color: 0x0C424E, overlay_color: 0xA80E0E },
    { name: "Chicken Spawn Egg", mc_id: "minecraft:chicken", base_color: 0xA1A1A1, overlay_color: 0xFF0000 },
    { name: "Cod Spawn Egg", mc_id: "minecraft:cod", base_color: 0xC1A76A, overlay_color: 0xE5C48B },
    { name: "Cow Spawn Egg", mc_id: "minecraft:cow", base_color: 0x443626, overlay_color: 0xA1A1A1 },
    { name: "Creeper Spawn Egg", mc_id: "minecraft:creeper", base_color: 0x0DA70B, overlay_color: 0x000000 },
    { name: "Dolphin Spawn Egg", mc_id: "minecraft:dolphin", base_color: 0x223B4D, overlay_color: 0xF9F9F9 },
    { name: "Donkey Spawn Egg", mc_id: "minecraft:donkey", base_color: 0x534539, overlay_color: 0x867566 },
    { name: "Drowned Spawn Egg", mc_id: "minecraft:drowned", base_color: 0x8FF1D7, overlay_color: 0x799C65 },
    { name: "Elder Guardian Spawn Egg", mc_id: "minecraft:elder_guardian", base_color: 0xCECCBA, overlay_color: 0x747693 },
    { name: "Ender Dragon Spawn Egg", mc_id: "minecraft:ender_dragon", base_color: 0x1C1C1C, overlay_color: 0xE079FA },
    { name: "Enderman Spawn Egg", mc_id: "minecraft:enderman", base_color: 0x161616, overlay_color: 0x000000 },
    { name: "Endermite Spawn Egg", mc_id: "minecraft:endermite", base_color: 0x161616, overlay_color: 0x6E6E6E },
    { name: "Evoker Spawn Egg", mc_id: "minecraft:evoker", base_color: 0x959B9B, overlay_color: 0x1E1C1A },
    { name: "Fox Spawn Egg", mc_id: "minecraft:fox", base_color: 0xD5B69F, overlay_color: 0xCC6920 },
    { name: "Frog Spawn Egg", mc_id: "minecraft:frog", base_color: 0xD07444, overlay_color: 0xFFC77C },
    { name: "Ghast Spawn Egg", mc_id: "minecraft:ghast", base_color: 0xF9F9F9, overlay_color: 0xBCBCBC },
    { name: "Glow Squid Spawn Egg", mc_id: "minecraft:glow_squid", base_color: 0x095656, overlay_color: 0x85F1BC },
    { name: "Goat Spawn Egg", mc_id: "minecraft:goat", base_color: 0xA5947C, overlay_color: 0x55493E },
    { name: "Guardian Spawn Egg", mc_id: "minecraft:guardian", base_color: 0x5A8272, overlay_color: 0xF17D30 },
    { name: "Hoglin Spawn Egg", mc_id: "minecraft:hoglin", base_color: 0xC66E55, overlay_color: 0x5F6464 },
    { name: "Horse Spawn Egg", mc_id: "minecraft:horse", base_color: 0xC09E7D, overlay_color: 0xEEE500 },
    { name: "Husk Spawn Egg", mc_id: "minecraft:husk", base_color: 0x797061, overlay_color: 0xE6CC94 },
    { name: "Iron Golem Spawn Egg", mc_id: "minecraft:iron_golem", base_color: 0xDBCDC2, overlay_color: 0x74A332 },
    { name: "Llama Spawn Egg", mc_id: "minecraft:llama", base_color: 0xC09E7D, overlay_color: 0x995F40 },
    { name: "Magma Cube Spawn Egg", mc_id: "minecraft:magma_cube", base_color: 0x340000, overlay_color: 0xFCFC00 },
    { name: "Mooshroom Spawn Egg", mc_id: "minecraft:mooshroom", base_color: 0xA00F10, overlay_color: 0xB7B7B7 },
    { name: "Mule Spawn Egg", mc_id: "minecraft:mule", base_color: 0x1B0200, overlay_color: 0x51331D },
    { name: "Ocelot Spawn Egg", mc_id: "minecraft:ocelot", base_color: 0xEFDE7D, overlay_color: 0x564434 },
    { name: "Panda Spawn Egg", mc_id: "minecraft:panda", base_color: 0xE7E7E7, overlay_color: 0x1B1B22 },
    { name: "Parrot Spawn Egg", mc_id: "minecraft:parrot", base_color: 0x0DA70B, overlay_color: 0xFF0000 },
    { name: "Phantom Spawn Egg", mc_id: "minecraft:phantom", base_color: 0x43518A, overlay_color: 0x88FF00 },
    { name: "Pig Spawn Egg", mc_id: "minecraft:pig", base_color: 0xF0A5A2, overlay_color: 0xDB635F },
    { name: "Piglin Spawn Egg", mc_id: "minecraft:piglin", base_color: 0x995F40, overlay_color: 0xF9F3A4 },
    { name: "Piglin Brute Spawn Egg", mc_id: "minecraft:piglin_brute", base_color: 0x592A10, overlay_color: 0xF9F3A4 },
    { name: "Pillager Spawn Egg", mc_id: "minecraft:pillager", base_color: 0x532F36, overlay_color: 0x959B9B },
    { name: "Polar Bear Spawn Egg", mc_id: "minecraft:polar_bear", base_color: 0xEEEEDE, overlay_color: 0xD5D6CD },
    { name: "Pufferfish Spawn Egg", mc_id: "minecraft:pufferfish", base_color: 0xF6B201, overlay_color: 0x37C3F2 },
    { name: "Rabbit Spawn Egg", mc_id: "minecraft:rabbit", base_color: 0x995F40, overlay_color: 0x734831 },
    { name: "Ravager Spawn Egg", mc_id: "minecraft:ravager", base_color: 0x757470, overlay_color: 0x5B5049 },
    { name: "Salmon Spawn Egg", mc_id: "minecraft:salmon", base_color: 0xA00F10, overlay_color: 0x0E8474 },
    { name: "Sheep Spawn Egg", mc_id: "minecraft:sheep", base_color: 0xE7E7E7, overlay_color: 0xFFB5B5 },
    { name: "Shulker Spawn Egg", mc_id: "minecraft:shulker", base_color: 0x946794, overlay_color: 0x4D3852 },
    { name: "Silverfish Spawn Egg", mc_id: "minecraft:silverfish", base_color: 0x6E6E6E, overlay_color: 0x303030 },
    { name: "Skeleton Spawn Egg", mc_id: "minecraft:skeleton", base_color: 0xC1C1C1, overlay_color: 0x494949 },
    { name: "Skeleton Horse Spawn Egg", mc_id: "minecraft:skeleton_horse", base_color: 0x68684F, overlay_color: 0xE5E5D8 },
    { name: "Slime Spawn Egg", mc_id: "minecraft:slime", base_color: 0x51A03E, overlay_color: 0x7EBF6E },
    { name: "Sniffer Spawn Egg", mc_id: "minecraft:sniffer", base_color: 0x871E09, overlay_color: 0x25AB70 },
    { name: "Snow Golem Spawn Egg", mc_id: "minecraft:snow_golem", base_color: 0xD9F2F2, overlay_color: 0x81A4A4 },
    { name: "Spider Spawn Egg", mc_id: "minecraft:spider", base_color: 0x342D27, overlay_color: 0xA80E0E },
    { name: "Squid Spawn Egg", mc_id: "minecraft:squid", base_color: 0x223B4D, overlay_color: 0x708899 },
    { name: "Stray Spawn Egg", mc_id: "minecraft:stray", base_color: 0x617677, overlay_color: 0xDDEAEA },
    { name: "Strider Spawn Egg", mc_id: "minecraft:strider", base_color: 0x9C3436, overlay_color: 0x4D494D },
    { name: "Tadpole Spawn Egg", mc_id: "minecraft:tadpole", base_color: 0x6D533D, overlay_color: 0x160A00 },
    { name: "Trader Llama Spawn Egg", mc_id: "minecraft:trader_llama", base_color: 0xEAA430, overlay_color: 0x456296 },
    { name: "Tropical Fish Spawn Egg", mc_id: "minecraft:tropical_fish", base_color: 0xEF6915, overlay_color: 0xFFF9EF },
    { name: "Turtle Spawn Egg", mc_id: "minecraft:turtle", base_color: 0xE7E7E7, overlay_color: 0x00AFAF },
    { name: "Vex Spawn Egg", mc_id: "minecraft:vex", base_color: 0x7A90A4, overlay_color: 0xE8EDF1 },
    { name: "Villager Spawn Egg", mc_id: "minecraft:villager", base_color: 0x563C33, overlay_color: 0xBD8B72 },
    { name: "Vindicator Spawn Egg", mc_id: "minecraft:vindicator", base_color: 0x959B9B, overlay_color: 0x275E61 },
    { name: "Wandering Trader Spawn Egg", mc_id: "minecraft:wandering_trader", base_color: 0x456296, overlay_color: 0xEAA430 },
    { name: "Warden Spawn Egg", mc_id: "minecraft:warden", base_color: 0x0F4649, overlay_color: 0x39D6E0 },
    { name: "Witch Spawn Egg", mc_id: "minecraft:witch", base_color: 0x340000, overlay_color: 0x51A03E },
    { name: "Wither Spawn Egg", mc_id: "minecraft:wither", base_color: 0x141414, overlay_color: 0x4D72A0 },
    { name: "Wither Skeleton Spawn Egg", mc_id: "minecraft:wither_skeleton", base_color: 0x141414, overlay_color: 0x474D4D },
    { name: "Wolf Spawn Egg", mc_id: "minecraft:wolf", base_color: 0xD7D3D3, overlay_color: 0xCEAF96 },
    { name: "Zoglin Spawn Egg", mc_id: "minecraft:zoglin", base_color: 0xC66E55, overlay_color: 0xE6E6E6 },
    { name: "Zombie Spawn Egg", mc_id: "minecraft:zombie", base_color: 0x00AFAF, overlay_color: 0x799C65 },
    { name: "Zombie Horse Spawn Egg", mc_id: "minecraft:zombie_horse", base_color: 0x315234, overlay_color: 0x97C284 },
    { name: "Zombie Villager Spawn Egg", mc_id: "minecraft:zombie_villager", base_color: 0x563C33, overlay_color: 0x799C65 },
    { name: "Zombified Piglin Spawn Egg", mc_id: "minecraft:zombified_piglin", base_color: 0xEA9393, overlay_color: 0x4C7129 }
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
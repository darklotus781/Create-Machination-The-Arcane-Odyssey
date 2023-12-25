// let lootbags = {
//     'kubejs:lootbag_poggers': 'loot:patience',
//     'kubejs:lootbag_create_andesite': 'loot:lootbag/create/andesite',
//     'kubejs:lootbag_create_brass': 'loot:lootbag/create/brass',
//     'kubejs:lootbag_create_radiant': 'loot:lootbag/create/radiant',
//     'kubejs:lootbag_plastic': 'loot:lootbag/create/plastic',
//     'kubejs:lootbag_integrational': 'loot:lootbag/create/integrational',
//     'kubejs:lootbag_magic_1': 'loot:lootbag/magic/sorcerer',
//     'kubejs:lootbag_magic_2': 'loot:lootbag/magic/wizard',
//     'kubejs:lootbag_magic_3': 'loot:lootbag/magic/mage',
// };

// ItemEvents.rightClicked(event => {
//     if (event.item.id in lootbags) {
//         let lootbag = event.item.id
//         let loottable = lootbags[lootbag]

//         // event.cancel();
//         event.player.swing(event.hand);
//         event.player.playSound('minecraft:entity.experience_orb.pickup');
//         let {x, y, z} = event.player

//         if (event.item.enchantments.isEmpty() || ! event.item.hasEnchantment('minecraft:fortune', 1)) { // If not enchanted, or enchanted but doesn't have Fortune, run once!
//             event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${x} ${y} ${z} loot ${loottable}`);
//         } else if (event.item.hasEnchantment('minecraft:fortune', 1)) { // Minimum Fortune 1 enchantment required
//             let fortuneLevel = event.item.enchantments['minecraft:fortune'];

//             for (let i = 0; i < fortuneLevel; i++) { // Fortune 3 will run 3 times, not 0, 1, 2, 3 (4 times)
//                 event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${x} ${y} ${z} loot ${loottable}`);
//             }
//         }
//         if(!event.player.isCreative()){
//             event.item.count--
//         }
//     }
// })
//open bag when rightClicked
ItemEvents.rightClicked(event => {
    function lootbag(lootbag, lootable) {
        if (event.item == lootbag) {
            let x = event.player.x;
            let y = event.player.y;
            let z = event.player.z;
            event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${event.player.x} ${event.player.y} ${event.player.z} loot ${lootable}`);
            event.server.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup player @a ${x} ${y} ${z} 1 1`);

            // in creative don't use bag
            if (!event.player.isCreative()) {
                event.item.count--;
            }
        }
    }

    //use vanilla loot table for every type of bags
    for (let i = 0; i < global.bag_name.length; i++) {
        lootbag(`kubejs:${global.bag_name[i]}_bag_common`, `loot:loot_bags/${global.bag_name[i]}/${global.bag_name[i]}_bag_common`);
        lootbag(`kubejs:${global.bag_name[i]}_bag_rare`, `loot:loot_bags/${global.bag_name[i]}/${global.bag_name[i]}_bag_rare`);
        lootbag(`kubejs:${global.bag_name[i]}_bag_epic`, `loot:loot_bags/${global.bag_name[i]}/${global.bag_name[i]}_bag_epic`);
    }
})

//Craft rare and epic bags
// ServerEvents.recipes(event => {
//     function bagBuilder(itemName, itemResult) {
//         event.shapeless(itemResult, [itemName])
//     }
//
//     for (let i = 0; i < global.bag_name.length; i++) {
//         bagBuilder(`4x kubejs:${global.bag_name[i]}_bag_common`, `kubejs:${global.bag_name[i]}_bag_rare`)
//         bagBuilder(`4x kubejs:${global.bag_name[i]}_bag_rare`, `kubejs:${global.bag_name[i]}_bag_epic`)
//     }
// })


/* Optionally, define lootbags as a "pickaxe" and they can be enchanted.

if (event.item.enchantments.isEmpty() || ! event.item.hasEnchantment('minecraft:fortune', 1)) { // If not enchanted, or enchanted but doesn't have Fortune, run once!
    event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${x} ${y} ${z} loot ${loottable}`);
} else if (event.item.hasEnchantment('minecraft:fortune', 1)) { // Minimum Fortune 1 enchantment required
    let fortuneLevel = event.item.enchantments['minecraft:fortune'];

    for (let i = 0; i < fortuneLevel; i++) { // Fortune 3 will run 3 times, not 0, 1, 2, 3 (4 times)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${x} ${y} ${z} loot ${loottable}`);
    }
}

*/
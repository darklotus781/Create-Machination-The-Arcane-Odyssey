LootJS.modifiers((event) => {
    // Add Magebloom Seeds to Artifacts Campsite Chests
    event.addLootTableModifier(/^artifacts:chests\/campsite_chest/)
        .addWeightedLoot([1, 8], Item.of('ars_nouveau:magebloom_crop').withChance(1));

    // Add Menril Shrubs to Loot Table and reduce drop chance of menril saplings
    // event.addBlockLootModifier("integrateddynamics:menril_leaves")
    //     .removeLoot('integrateddynamics:menril_sapling')
    //     .addAlternativesLoot(
    //         LootEntry.of("integrateddynamics:menril_sapling").when((c) => c.randomChance(0.008)),
    //         LootEntry.of("kubejs:menril_shrub").when((c) => c.randomChance(0.016)),
    //     );

    //Forbidden Arcanus Loot Removal
    event.addLootTableModifier('minecraft:chests/end_city_treasure').removeLoot('forbidden_arcanus:orb_of_temporary_flight');
    event.addLootTableModifier('minecraft:chests/simple_dungeon')
        .removeLoot('forbidden_arcanus:aureal_bottle')
        .removeLoot('forbidden_arcanus:splash_aureal_bottle');
    event.addLootTableModifier('minecraft:chests/abandoned_mineshaft')
        .removeLoot('forbidden_arcanus:aureal_bottle')
        .removeLoot('forbidden_arcanus:splash_aureal_bottle')
        .removeLoot('forbidden_arcanus:edelwood_bucket')
        .removeLoot('forbidden_arcanus:edelwood_suspicious_stew_bucket');
    event.disableLootModification('forbidden_arcanus:blacksmith_gavel_ore_doubling');

    // Artifacts to Aether Dungeon Chests
    event.addLootTableModifier('aether:chests/dungeon/bronze/bronze_dungeon', 'aether:chests/dungeon/silver/silver_dungeon', 'aether:chests/dungeon/gold/gold_dungeon_reward')
    .addAlternativesLoot(
            LootEntry.of('artifacts:cross_necklace').when((c) => c.randomChance(0.05)),
            LootEntry.of('artifacts:crystal_heart').when((c) => c.randomChance(0.05)),
            LootEntry.of('artifacts:lucky_scarf').when((c) => c.randomChance(0.15)),
            LootEntry.of('artifacts:night_vision_goggles').when((c) => c.randomChance(0.35)),
            LootEntry.of('artifacts:superstitious_hat').when((c) => c.randomChance(0.25)),
            LootEntry.of('artifacts:universal_attractor').when((c) => c.randomChance(0.25)),
            LootEntry.of('artifacts:bunny_hoppers').when((c) => c.randomChance(0.25))
        );
    // event.addEntityLootModifier('minecraft:wither_skeleton').get

    // Remove Demon Seeds from Grass Drops, we craft them instead!
    event.addBlockLootModifier('minecraft:grass').removeLoot('occultism:datura_seeds');
    event.addBlockLootModifier('minecraft:tall_grass').removeLoot('occultism:datura_seeds');

    event.addEntityLootModifier('minecraft:warden').pool((p) => {
        p.addLoot('occultism:datura_seeds');
        p.limitCount(2, 8);
    });
});

LootJS.modifiers((event) => {
    event.addLootTableModifier('minecraft:chests/end_city_treasure').removeLoot('forbidden_arcanus:orb_of_temporary_flight');
});

// // Get a list of LootTables for a mob on death.
// // https://discord.com/channels/303440391124942858/1164124690055438408/1164138859840417864
// EntityEvents.death(event => {

//     const $LootDataType = Java.loadClass('net.minecraft.world.level.storage.loot.LootDataType')

//     let lootData = Utils.server.getLootData()
//     // this will be a list of all the resourcelocations.
//     let allTables = lootData.getKeys($LootDataType.TABLE)
//     console.printObject(allTables)
//     // filter it for only stuff that contains chest
//     let filteredList = allTables.stream().filter(id => id.path.contains('wither_skeleton')).map(id => id.toString()).toList()

//     JsonIO.write('kubejs/exported/lootTables.json', {big_list: filteredList})

//     // create the empty file with the following json:
//     // {
//     //     "big_list": []
//     // }
    
//     // if you want to get the actual loot table object (which isnt that useful)
//     // const $LootDataId = Java.loadClass('net.minecraft.world.level.storage.loot.LootDataId')
//     // lootData.getElement(new $LootDataId($LootDataType.TABLE, "somemod:some_loot_table"))
// })

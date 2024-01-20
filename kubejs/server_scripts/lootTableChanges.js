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
});
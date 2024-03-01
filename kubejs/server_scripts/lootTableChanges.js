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

    // Add Bunny Hoppers to the Bronze Dungeon Loot Table to enable Creative Flight after defeating the Slider!
    event.addLootTableModifier('aether:chests/dungeon/bronze/bronze_dungeon_reward').addLoot('artifacts:bunny_hoppers');

    // Artifacts to Aether Dungeon Chests
    event.addLootTableModifier('aether:chests/dungeon/bronze/bronze_dungeon', 'aether:chests/dungeon/silver/silver_dungeon', 'aether:chests/dungeon/gold/gold_dungeon_reward')
    .addAlternativesLoot(
            LootEntry.of('artifacts:cross_necklace').when((c) => c.randomChance(0.1)),
            LootEntry.of('artifacts:crystal_heart').when((c) => c.randomChance(0.1)),
            LootEntry.of('artifacts:lucky_scarf').when((c) => c.randomChance(0.1)),
            LootEntry.of('artifacts:night_vision_goggles').when((c) => c.randomChance(0.1)),
            LootEntry.of('artifacts:superstitious_hat').when((c) => c.randomChance(0.1)),
            LootEntry.of('artifacts:universal_attractor').when((c) => c.randomChance(0.1))
        );
});

LootJS.modifiers((event) => {
    // Add Item(s) to the Abandoned Mineshafts Loot Tables
    event.addLootTableModifier(/^minecraft:chests\/abandoned_mineshaft/)
        .addWeightedLoot([
            Item.of('createresourcegeodes:catalyst_activator_wand').withChance(4),
        ]);
});
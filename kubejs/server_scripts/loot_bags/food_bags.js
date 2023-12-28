LootJS.modifiers((event) => {
    // Tier 1
    event.addLootTableModifier("loot:food/food_bag_common")
        .addWeightedLoot(2, [])
// Tier 2
    event.addLootTableModifier("loot:food/food_bag_rare")
        .addWeightedLoot(5, [])
// Tier 3
    event.addLootTableModifier("loot:food/food_bag_epic")
        .addWeightedLoot(7, [])
})
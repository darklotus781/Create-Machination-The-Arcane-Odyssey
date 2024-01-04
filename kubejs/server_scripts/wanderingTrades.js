// You can also modify wanderer trades. Just use morejs.wanderer.trades (1.18) or MoreJSEvents.wandererTrades (1.19) event instead.
// The difference is, that you don't use a profession. The wanderer also has 2 levels internally. The first level are for standard trades.
// The second level are for special trades.

MoreJSEvents.wandererTrades(event => {
    const asurineGeodeMap = VillagerUtils.createStructureMapTrade(Item.of('create:asurine', 8), 'createresourcegeodes:asurine_geode')
        .displayName('Asurine Geode Map').marker('banner_light_blue');
    const crimsiteGeodeMap = VillagerUtils.createStructureMapTrade([Item.of('create:crimsite', 8)], 'createresourcegeodes:crimsite_geode')
        .displayName('Crimsite Geode Map').marker('banner_red');
    const ochrumGeodeMap = VillagerUtils.createStructureMapTrade([Item.of('create:ochrum', 8)], 'createresourcegeodes:ochrum_geode')
        .displayName('Ochrum Geode Map').marker('banner_yellow');
    const veridiumGeodeMap = VillagerUtils.createStructureMapTrade([Item.of('create:veridium', 8)], 'createresourcegeodes:veridium_geode')
        .displayName('Veridium Geode Map').marker('banner_green');

    event.addTrade(2, asurineGeodeMap).maxUses(1);
    event.addTrade(2, crimsiteGeodeMap).maxUses(1);
    event.addTrade(2, ochrumGeodeMap).maxUses(1);
    event.addTrade(2, veridiumGeodeMap).maxUses(1);

    // Diamond and Cobble for Andesite Alloy
    event.addTrade(1, [TradeItem.of('minecraft:diamond', 1, 8), Item.of('minecraft:cobblestone', 64)], Item.of('create:andesite_alloy', 32)).maxUses(16);
    // Diamond and Andesite Alloy for Andesite Machines
    event.addTrade(1, [TradeItem.of('minecraft:diamond', 2, 16), TradeItem.of('create:andesite_alloy', 2, 8)], Item.of('kubejs:andesite_machine', 2)).maxUses(8);
});
//
// // for 1.18 pls use: onEvent("morejs.villager.trades", (event) => { ... })
// MoreJSEvents.villagerTrades((event) => {
//     /**
//      * Adds a trade to the given profession.
//      * - `profession`: The profession to add the trade to.
//      * - `level`: The level, the villager needs to offer the trade.
//      * - `input`: The input items for the trade. You can use a single item or an array with two items.
//      * - `output`: The output items for the trade.
//      */
//     const trade = event.addTrade(profession, level, [...input], output);
//
//     // For 1.19+ only:
//     // If you want to use random selected price ranges, you can use `TradeItem.of(item, min, max)` for input and outputs
//     // event.addTrade("farmer", 1, ["minecraft:diamond", TradeItem.of("minecraft:apple", 10, 19)], "minecraft:acacia_sapling");
//
//
//     // `addTrade` return the trade to set optional data.
//     // trade.maxUses(number); // Sets the maximum amount of uses for the trade.
//     // trade.villagerExperience(number); // Sets the amount of villager experience the trade gives.
//     // trade.priceMultiplier(number); // Sets the price multiplier for the trade.
//     // trade.transform((offer, entity, random) => { ... }); // Transforms the offer when it's generated.
// });
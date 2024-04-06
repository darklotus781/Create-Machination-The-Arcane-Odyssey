MoreJSEvents.villagerTrades((event) => {
    event.removeModdedTrades(['ars_nouveau:shady_wizard'], [1, 5]);
    event.removeModdedTrades(['ae2:fluix_researcher'], [1, 5]);
    event.removeModdedTrades(['pneumaticcraft:mechanic'], [1, 5]);
});

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
    event.addTrade(1, [TradeItem.of('minecraft:diamond', 1, 8), TradeItem.of('create:andesite_alloy', 1, 16)], Item.of('kubejs:andesite_mechanism', 2)).maxUses(8);
    // Diamond and Brass Ingots for Precision Mechanisms
    event.addTrade(1, [TradeItem.of('minecraft:diamond', 1, 8), TradeItem.of('create:brass_ingot', 1, 16)], Item.of('kubejs:brass_mechanism', 8)).maxUses(8);
});
ServerEvents.recipes(event => {
    event.remove({ mod: 'create_sa' });

    event.shaped(Item.of('create_sa:small_filling_tank'), [
        'ITI',
        'TFT',
        'ITI'
    ], {
        F: Item.of('create:framed_glass'),
        I: Ingredient.of('#forge:plates/copper'),
        T: Item.of('create:fluid_tank')
    }).id('kubejs:small_filling_tank');

    event.shaped(Item.of('create_sa:medium_filling_tank'), [
        'ITI',
        'TFT',
        'ITI'
    ], {
        F: Item.of('create_sa:small_filling_tank').weakNBT(),
        I: Ingredient.of('#forge:plates/copper'),
        T: Item.of('create:fluid_tank')
    }).id('kubejs:medium_filling_tank');

    event.shaped(Item.of('create_sa:large_filling_tank'), [
        'ITI',
        'TFT',
        'ITI'
    ], {
        F: Item.of('create_sa:medium_filling_tank').weakNBT(),
        I: Ingredient.of('#forge:plates/copper'),
        T: Item.of('create:fluid_tank')
    }).id('kubejs:large_filling_tank');

    event.shaped(Item.of('create_sa:small_fueling_tank'), [
        'ITI',
        'TFT',
        'ITI'
    ], {
        F: Item.of('create_sa:large_filling_tank').weakNBT(),
        I: Item.of('create:sturdy_sheet'),
        T: Item.of('create:fluid_tank')
    }).id('kubejs:small_fueling_tank');

    event.shaped(Item.of('create_sa:medium_fueling_tank'), [
        'ITI',
        'TFT',
        'ITI'
    ], {
        F: Item.of('create_sa:small_fueling_tank').weakNBT(),
        I: Item.of('create:sturdy_sheet'),
        T: Item.of('create:fluid_tank')
    }).id('kubejs:medium_fueling_tank');

    event.shaped(Item.of('create_sa:large_fueling_tank'), [
        'ITI',
        'TFT',
        'ITI'
    ], {
        F: Item.of('create_sa:medium_fueling_tank').weakNBT(),
        I: Item.of('create:sturdy_sheet'),
        T: Item.of('create:fluid_tank')
    }).id('kubejs:large_fueling_tank');

    event.recipes.create.mechanical_crafting(Item.of('create_sa:brass_jetpack_chestplate'), [
        ' BFB ',
        'AMTMA',
        'AWELA',
        ' N N '
    ], {
        B: Item.of('create_sa:steam_engine'),
        A: Ingredient.of('#forge:plates/netherite'),
        F: Item.of('create:encased_fan'),
        M: Item.of('kubejs:sturdy_machine'),
        N: Item.of('create_sa:fan_component'),
        T: Item.of('create:netherite_backtank').weakNBT(),
        E: Item.of('minecraft:elytra').weakNBT(),
        W: Item.of('create_sa:large_fueling_tank'),
        L: Item.of('create_sa:large_filling_tank')
    }).id('kubejs:mechanical_crafting/brass_jetpack_chestplate');

    let t = Item.of('create_sa:incomplete_steam_engine');
    event.recipes.create.sequenced_assembly([
        Item.of('create_sa:steam_engine').withChance(120),
        Item.of('alltheores:brass_plate').withChance(8),
        Item.of('create:andesite_alloy').withChance(4)
    ], Item.of('create:steam_engine'), [
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:plates/brass')]),
        event.recipes.create.deploying(t, [t, Item.of('create:cogwheel')]),
        event.recipes.create.deploying(t, [t, Item.of('create:propeller')]),
        event.recipes.create.deploying(t, [t, Item.of('create:precision_mechanism')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(3).id('kubejs:jetpack_steam_engine');

    t = Item.of('create:andesite_alloy');
    event.recipes.create.sequenced_assembly([
        Item.of('create_sa:fan_component').withChance(120),
        Item.of('create:propeller').withChance(8),
        Item.of('create:andesite_alloy').withChance(4),
    ], Item.of('create:andesite_alloy'), [
        event.recipes.create.deploying(t, [t, Item.of('kubejs:andesite_machine')]),
        event.recipes.create.deploying(t, [t, Item.of('create:cogwheel')]),
        event.recipes.create.deploying(t, [t, Item.of('create:propeller')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:kinetic_mechanism')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(3).id('kubejs:jetpack_fan_component');

    t = Item.of('thermal:drill_head');
    event.recipes.create.sequenced_assembly([
        Item.of('create_sa:brass_drill_head').withChance(120),
        Item.of('thermal:drill_head').withChance(8),
        Item.of('alltheores:brass_plate').withChance(4),
    ], Item.of('thermal:drill_head'), [
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:plates/brass')]),
        event.recipes.create.deploying(t, [t, Item.of('createaddition:diamond_grit_sandpaper')]),
        event.recipes.create.deploying(t, [t, Item.of('forbidden_arcanus:obsidian_with_iron')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:sturdy_mechanism')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(5).id('kubejs:brass_drill_head');


    event.recipes.create.mechanical_crafting(Item.of('create_sa:portable_drill'), [
        ' EBBF ',
        'SMLWAR',
        ' EBBF '
    ], {
        A: Item.of('kubejs:andesite_machine'),
        B: Item.of('create_sa:steam_engine'),
        F: Item.of('create_sa:fan_component'),
        E: Item.of('create:encased_fan'),
        S: Item.of('create_sa:brass_drill_head'),
        M: Item.of('kubejs:brass_machine'),
        W: Item.of('create_sa:large_fueling_tank'),
        L: Item.of('create_sa:large_filling_tank'),
        R: Item.of('thermal:flux_drill').weakNBT()
    }).id('kubejs:mechanical_crafting/portable_drill');

    event.recipes.create.mechanical_crafting(Item.of('create_sa:grapplin_whisk'), [
        ' EBBF ',
        'SMLWAR',
        ' EBBF '
    ], {
        A: Item.of('kubejs:andesite_machine'),
        B: Item.of('create_sa:steam_engine'),
        F: Item.of('create_sa:fan_component'),
        E: Item.of('create:encased_fan'),
        S: Item.of('create:whisk'),
        M: Item.of('kubejs:brass_machine'),
        W: Item.of('create_sa:large_fueling_tank'),
        L: Item.of('create_sa:large_filling_tank'),
        R: Item.of('create:deployer')
    }).id('kubejs:mechanical_crafting/grapplin_whisk');
});
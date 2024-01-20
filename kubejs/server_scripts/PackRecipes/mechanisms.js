ServerEvents.tags('item', event => {
    event.add('forge:mechanisms/tier/basic', ['kubejs:wooden_mechanism', 'kubejs:kinetic_mechanism']);
    event.add('forge:mechanisms/tier/1', 'kubejs:kinetic_mechanism');
    event.add('forge:mechanisms/tier/2', 'create:precision_mechanism');
    event.add('forge:mechanisms/tier/3', ['kubejs:integrational_mechanism', 'kubejs:radiant_mechanism', 'kubejs:sturdy_mechanism']);
    event.add('forge:mechanisms/tier/4', 'kubejs:radiant_mechanism');
    event.add('forge:mechanisms/tier/5', 'kubejs:plastic_mechanism');
});

ServerEvents.recipes(event => {
    // Tiers advance and use the previous tier as the input ingredient except Tier 0/1

    // Wooden Mechanism - TIER 0
    event.shapeless('kubejs:wooden_mechanism', [
        Ingredient.of('#forge:stripped_logs', 2),
        Ingredient.of('#forge:tools/saws'),
        Item.of('create:andesite_alloy', 4)
    ]).damageIngredient(Ingredient.of('#forge:tools/saws')).id('kubejs:wooden_mechanism_manual_only');

    // Kinetic Mechanism - Tier 1
    let t = Item.of('kubejs:incomplete_kinetic_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:kinetic_mechanism'),
    ], Item.of('integrateddynamics:menril_slab'), [
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/saws')]),
        event.recipes.create.deploying(t, [t, Item.of('create:andesite_alloy')]),
        event.recipes.create.filling(t, [t, Fluid.of('integrateddynamics:menril_resin').withAmount(15)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:kinetic_mechanism');

    // Rotation Mechanism - Tier 1
    t = Item.of('kubejs:incomplete_rotation_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:rotation_mechanism'),
    ], Ingredient.of('#minecraft:wooden_slabs'), [
        event.recipes.create.deploying(t, [t, Item.of('create:cogwheel')]),
        event.recipes.create.deploying(t, [t, Item.of('create:large_cogwheel')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/saws')])
    ]).transitionalItem(t).loops(1).id('kubejs:rotation_mechanism')

    // Rotation Mechanism - Tier 1 / Chapter 1
    t = Item.of('kubejs:incomplete_logistics_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:logistics_mechanism'),
    ], Item.of('kubejs:kinetic_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('create:electron_tube')]),
        event.recipes.create.deploying(t, [t, Item.of('create:electron_tube')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/screwdrivers')])
    ]).transitionalItem(t).loops(1).id('kubejs:logistics_mechanism');

    // Sealed Mechanism - Tier 2 level but not tier 2 (not used with other mechanisms...)
    event.shapeless('kubejs:sealed_mechanism', [Item.of('kubejs:enriched_rubber', 2), Ingredient.of('#forge:mechanisms/tier/basic')])
        .id('kubejs:sealed_mechanism_from_enriched_rubber');
    event.shapeless('kubejs:sealed_mechanism', [Item.of('thermal:cured_rubber', 4), Ingredient.of('#forge:mechanisms/tier/basic')])
        .id('kubejs:sealed_mechanism_from_cured_rubber');

    // Precision Mechanism - Tier 2
    t = Item.of('create:incomplete_precision_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism'),
    ], Item.of('kubejs:kinetic_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('create:electron_tube')]),
        event.recipes.create.deploying(t, [t, Item.of('create:electron_tube')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/screwdrivers')])
    ]).transitionalItem(t).loops(1).id('kubejs:precision_mechanism');

    // event.recipes.create.sequenced_assembly([
    //     Item.of('create:precision_mechanism'),
    // ], Item.of('kubejs:kinetic_mechanism'), [
    //     event.recipes.create.deploying(t, [t, Item.of('integrateddynamics:variable')]),
    //     event.recipes.create.deploying(t, [t, Item.of('create:electron_tube')]),
    //     event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/screwdrivers')])
    // ]).transitionalItem(t).loops(1).id('kubejs:precision_mechanism_alt');

    // Integrational Mechanism - Tier 3
    t = Item.of('kubejs:incomplete_integrational_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:integrational_mechanism'),
    ], Item.of('create:precision_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('ars_nouveau:source_gem')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:sourcegem_fragments')]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:integrational_mechanism');

    // Radiant Mechanism - Tier 3
    t = Item.of('kubejs:incomplete_radiant_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:radiant_mechanism'),
    ], Item.of('create:precision_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('kubejs:radiant_coil')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:radiant_coil')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/resonators')])
    ]).transitionalItem(t).loops(1).id('kubejs:radiant_mechanism');

    // Sturdy Mechanism - Tier 3
    t = Item.of('kubejs:incomplete_sturdy_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:sturdy_mechanism'),
    ], Item.of('create:precision_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('kubejs:rotation_mechanism')]),
        event.recipes.create.deploying(t, [t, Item.of('create:sturdy_sheet')]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:sturdy_mechanism');

    // // Integrated Mechanism - Tier 3
    // t = Item.of('kubejs:incomplete_integrated_mechanism');
    // event.recipes.create.sequenced_assembly([
    //     Item.of('kubejs:integrated_mechanism')
    // ], Item.of('create:precision_mechanism'), [
    //     event.recipes.create.deploying(t, [t, Item.of('create:electron_tube')]),
    //     event.recipes.create.deploying(t, [t, Item.of('kubejs:redstone_alloy_cable')]),
    //     event.recipes.create.pressing(t, t)
    // ]).transitionalItem(t).loops(1);

    // Scorch Mechanism - Tier 3
    t = Item.of('kubejs:incomplete_scorch_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:scorch_mechanism'),
    ], Item.of('create:precision_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('minecraft:nether_brick')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:magma_cream')]),
        event.recipes.create.filling(t, [t, Fluid.lava(1000)]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:scorch_mechanism');

    // Plastic Mechanism - Tier 4
    t = Item.of('kubejs:incomplete_plastic_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:plastic_mechanism'),
    ], Item.of('kubejs:radiant_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('pneumaticcraft:plastic')]),
        event.recipes.create.filling(t, [t, Fluid.of('pneumaticcraft:plastic').withAmount(250)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:plastic_mechanism');

    // // Power Mechanism - Tier XX
    // t = Item.of('kubejs:incomplete_power_mechanism');
    // event.recipes.create.sequenced_assembly([
    //     Item.of('kubejs:power_mechanism'),
    // ], Item.of('kubejs:explosive_mechanism'), [
    //     event.recipes.create.filling(t, [t, Fluid.of('kubejs:plastic').withAmount(30)]),
    //     event.recipes.create.filling(t, [t, Fluid.of('create_enchantment_industry:ink').withAmount(30)]),
    //     event.recipes.create.deploying(t, [t, Item.of('kubejs:electrolytic_capacitor')]),
    //     event.recipes.create.deploying(t, [t, Item.of('kubejs:ceramic_capacitor')]),
    //     event.recipes.create.deploying(t, [t, Item.of('kubejs:resistor')]),
    //     event.recipes.create.deploying(t, [t, Item.of('kubejs:inductor')]),
    //     event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/soldering_irons')]),
    // ]).transitionalItem(t).loops(1).id('kubejs:power_mechanism');

    // Time Mechanism
    // SuperCritical Mechanism
    // Quantum Mechanism
    // Ender Mechanism
    // Calculation Mechanism
    // Logistics Mechanism
    // Infernal Mechanism
    // Pressure Mechanism
    // Train Mechanism
    // Explosive Mechanism
    // Inductive Mechanism

})
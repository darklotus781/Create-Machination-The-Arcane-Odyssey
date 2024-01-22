ServerEvents.recipes(event => {
    // Saw Recipe Function
    let saw = (id, material) => {
        event.shaped(id, [
            'SSS',
            'SMS',
            '   '
        ], {
            S: Item.of('minecraft:stick'),
            M: material,
        })
    }

    // Casing Recipe
    let caseify = (result, inputBlock, inputItem) => {
        let resultItem = Item.of(result).item.toString();
        event.remove({output: result});
        event.recipes.create.item_application(Item.of(result), [inputItem, inputBlock]).id('kubejs:item_application/recipe/' + resultItem);
        // event.recipes.create.deploying(Item.of(result), [inputItem, inputBlock]).id('kubejs:deploying/'+result_item+'_from_'+blockItem+'_and_'+itemItem);
    }

    // 1x Screwdriver
    event.shaped(Item.of('kubejs:screwdriver'), [
        '  G',
        'PAP',
        ' P '
    ], {
        G: Ingredient.of('#forge:ingots/iron'),
        A: Item.of('create:andesite_alloy'),
        P: Item.of('thermal:cured_rubber')
    })

    // 2x Screwdriver
    event.shaped(Item.of('kubejs:screwdriver', 2), [
        '  G',
        'PAP',
        ' P '
    ], {
        G: Ingredient.of('#forge:ingots/iron'),
        A: Item.of('create:andesite_alloy'),
        P: Item.of('kubejs:enriched_rubber')
    })

    const runicrelics = [['zombie_heart', '6x minecraft:rotten_flesh'], ['squid_beak', '3x minecraft:ink_sac'], ['rib_bone', '5x minecraft:bone'], ['catalyzing_gland', '4x minecraft:gunpowder'], ['chelicerae', '2x minecraft:spider_eye'], ['slime_pearl', '4x minecraft:slime_ball'], ['bat_wing', '2x minecraft:feather'], ['molten_core', '2x minecraft:blaze_rod'], ['eye_of_the_storm', '2x thermal:blitz_rod'], ['nebulous_heart', '3x minecraft:ender_eye'], ['frozen_core', '5x minecraft:snowball']]

    runicrelics.forEach(element => {
        event.shapeless(Item.of('reliquary:' + element[0]), [element[1], Item.of('kubejs:runic_tablet')]);
    });

    // Runic Tablet
    event.recipes.create.filling(Item.of('kubejs:empty_runic_tablet'), [Item.of('forbidden_arcanus:polished_darkstone_slab'), Fluid.of('kubejs:source').withAmount(100)]).id('kubejs:filling/empty_runic_tablet');
    event.recipes.create.deploying(Item.of('kubejs:runic_tablet'), [Item.of('kubejs:empty_runic_tablet'), Item.of('forbidden_arcanus:rune')]).id('kubejs:filling/runic_tablet');
    event.custom({
        type: 'botania:elven_trade',
        ingredients: [Item.of('kubejs:runic_tablet').toJson()],
        output: Item.of('ars_nouveau:source_gem').toJson()
    }).id('kubejs:elven_trade/source_gem_from_tablet');

    // Produce Ars Sapling Liquids
    event.recipes.create.compacting(Fluid.of('kubejs:cascading_juice').withAmount(250), Item.of('ars_nouveau:blue_archwood_sapling')).heatRequirement('superheated');
    event.recipes.create.compacting(Fluid.of('kubejs:flourishing_juice').withAmount(250), Item.of('ars_nouveau:green_archwood_sapling')).heatRequirement('superheated');
    event.recipes.create.compacting(Fluid.of('kubejs:vexing_juice').withAmount(250), Item.of('ars_nouveau:purple_archwood_sapling')).heatRequirement('superheated');
    event.recipes.create.compacting(Fluid.of('kubejs:blazing_juice').withAmount(250), Item.of('ars_nouveau:red_archwood_sapling')).heatRequirement('superheated');

    // Process Vials
    // event.recipes.create.compacting(Fluid.of('kubejs:superheated_anthracene').withAmount(144), Item.of('thermal:tar')).heatRequirement('superheated').processingTime(400);

    event.recipes.create.emptying([Item.of('kubejs:chromium'), Fluid.of('kubejs:chromatic_waste').withAmount(250)], Item.of('minecraft:glowstone_dust'));
    // event.recipes.create.emptying([Item.of('kubejs:empty_vial'), Fluid.of('kubejs:liquid_anthraquinone').withAmount(56)], Item.of('kubejs:anthraquinone'));

    // event.recipes.create.filling(Item.of('kubejs:anthracene'), [Item.of('kubejs:empty_vial'), Fluid.of('kubejs:superheated_anthracene').withAmount(144)]);
    event.recipes.create.filling(Item.of('pneumaticcraft:plastic'), [Item.of('create:sturdy_sheet'), Fluid.of('pneumaticcraft:plastic').withAmount(500)]);

    event.recipes.create.filling([Item.of('kubejs:enriched_rubber')], [
        Item.of('thermal:cured_rubber'),
        Fluid.of('integrateddynamics:menril_resin').withAmount(100)
    ]);

    // Redstone Alloy Ingot
    event.recipes.create.mixing([Item.of('kubejs:redstone_alloy_ingot', 2)], [Ingredient.of('#forge:ingots/iron'), Item.of('minecraft:redstone')]).heatRequirement('heated');

    // Redstone Alloy Cable
    event.custom({
        type: 'createaddition:rolling',
        input: {item: 'kubejs:redstone_alloy_ingot'},
        result: {item: 'kubejs:redstone_alloy_cable', count: 4}
    });

    // Radiant Steel to Radiant Coils
    event.custom({
        type: 'createaddition:rolling',
        input: {item: 'kubejs:radiant_steel'},
        result: {item: 'kubejs:radiant_coil', count: 4}
    });

    event.recipes.create.mechanical_crafting(Item.of('kubejs:radiant_coil'), [
        'C'
    ], {
        C: Item.of('kubejs:radiant_sheet'),
    }).id('kubejs:crafter/radiant_coil_from_sheet');

    event.recipes.create.mechanical_crafting(Item.of('kubejs:radiant_coil', 2), [
        'CS'
    ], {
        C: Item.of('kubejs:radiant_sheet'),
        S: Item.of('create:shadow_steel')
    }).id('kubejs:crafter/radiant_coil_from_sheet_and_shadow_steel_horizontal');

    event.recipes.create.mechanical_crafting(Item.of('kubejs:radiant_coil', 2), [
        'C',
        'S'
    ], {
        S: Item.of('kubejs:radiant_sheet'),
        C: Item.of('create:shadow_steel')
    }).id('kubejs:crafter/radiant_coil_from_sheet_and_shadow_steel_vertical');

    // Radiant Steel Alloy
    t = Item.of('kubejs:radiant_steel');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:radiant_steel'),
    ], Item.of('create:shadow_steel'), [
        event.recipes.create.deploying(t, [t, Item.of('create:refined_radiance')]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:chromatic_solution').withAmount(80)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:radiant_steel');

    // Electron Tubes
    t = Item.of('kubejs:empty_tube');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:empty_tube')
    ], Ingredient.of('#forge:plates/iron'), [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:molten_glass').withAmount(150)]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:nuggets/iron')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1);

    event.recipes.create.sequenced_assembly([
        Item.of('create:electron_tube')
    ], Item.of('kubejs:empty_tube'), [
        event.recipes.create.deploying(t, [t, Item.of('create:polished_rose_quartz')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1);

    t = Item.of('kubejs:incomplete_rose_quartz');
    event.recipes.create.sequenced_assembly([
        Item.of('create:rose_quartz')
    ], Item.of('minecraft:quartz'), [
        event.recipes.create.filling(t, [t, Fluid.of('thermal:redstone').withAmount(150)]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/rose_quartz');

    event.recipes.create.mixing([Item.of('create:rose_quartz')],[Fluid.of('thermal:redstone').withAmount(200),Item.of('kubejs:certus_quartz_cluster')]).processingTime(160).id('kubejs:mixing/rose_quartz_from_quartz_cluster');
    event.recipes.create.mixing([Item.of('create:rose_quartz')],[Fluid.of('thermal:redstone').withAmount(200),Item.of('kubejs:quartz_cluster')]).processingTime(160).id('kubejs:mixing/rose_quartz_from_certus_quartz_cluster');

    event.recipes.create.mixing([Fluid.of('thermal:redstone').withAmount(100)], Item.of('minecraft:redstone')).heatRequirement('heated').id('kubejs:melting/destabilized_redstone');

    // Molten Glass
    event.recipes.create.mixing([Fluid.of('kubejs:molten_glass').withAmount(100)], Item.of('minecraft:glass')).heatRequirement('heated').id('kubejs:melting/glass_from_glass');
    event.recipes.create.mixing([Fluid.of('kubejs:molten_glass').withAmount(100)], Item.of('minecraft:sand')).heatRequirement('heated').id('kubejs:melting/glass_from_sand');

    // Fiberglass Plate from Molten Glass
    event.recipes.create.compacting([Item.of('kubejs:fiberglass_plate')], [Item.of('minecraft:string', 4), Fluid.of('kubejs:molten_glass').withAmount(500)]);

    // Sky Solution
    event.recipes.create.mixing(Fluid.of('kubejs:sky_slurry').withAmount(100), ['ae2:sky_dust', Fluid.water(100)]).id('kubejs:sky_slurry_from_sky_dust_and_water');
    // Gunpowder from Powdered Flint and Refined Fuel
    event.recipes.create.mixing(Item.of('minecraft:gunpowder', 4), [Item.of('kubejs:powdered_flint', 4), Fluid.of('thermal:refined_fuel').withAmount(600)])
        .id('kubejs:gunpowder_from_powdered_flint_and_refined_fuel');
    event.recipes.create.mixing(Fluid.of('kubejs:impure_source').withAmount(200), [Fluid.of('kubejs:magebloom_juice').withAmount(100), Fluid.of('kubejs:sourceberry_juice').withAmount(100)]);
    event.recipes.create.mixing(Fluid.of('kubejs:source').withAmount(3), [Fluid.of('kubejs:impure_source').withAmount(12)]).heatRequirement('heated');
    event.recipes.create.mixing('integrateddynamics:menril_sapling', [Item.of('integrateddynamics:menril_berries', 8), 'kubejs:rejuvinated_menril_shrub']);
    event.recipes.create.pressing(Item.of('kubejs:radiant_sheet'), [Item.of('create:refined_radiance')]);
    event.recipes.create.pressing(Item.of('create:sturdy_sheet'), Item.of('pneumaticcraft:ingot_iron_compressed'));
    event.recipes.create.compacting(Fluid.of('kubejs:sourceberry_juice').withAmount(65), [Item.of('ars_nouveau:sourceberry_bush')]);
    event.recipes.create.compacting(Fluid.of('kubejs:magebloom_juice').withAmount(65), [Item.of('ars_nouveau:magebloom')]);

    // PCB
    let t = Item.of('kubejs:incomplete_pcb');
    event.recipes.create.sequenced_assembly([
            Item.of('kubejs:pcb')
        ], Item.of('kubejs:fiberglass_plate'), [
            event.recipes.create.deploying(t, [t, Ingredient.of('#forge:plates/copper')]),
            event.recipes.create.pressing(t, t),
            event.recipes.create.filling(t, [t, Fluid.of('kubejs:soldermask').withAmount(1000)]),
            event.recipes.create.pressing(t, t)
        ]
    ).transitionalItem(t).loops(1);

    // Incomplete Electronic Circuit
    event.recipes.create.deploying(Item.of('kubejs:incomplete_electronic_circuit'), [Item.of('kubejs:pcb'), Item.of('kubejs:integrated_mechanism')])

    // Custom Saws
    saw('kubejs:stone_saw', '#forge:cobblestone')
    saw('kubejs:iron_saw', '#forge:ingots/iron')
    saw('kubejs:diamond_saw', 'minecraft:diamond')


    // event.recipes.create.mixing([Fluid.of('kubejs:sulfuric_acid').withAmount(1000)], [Item.of('thermal:sulfur_dust'), Fluid.water(1000)])

    // Thermal Machine Frame
    event.remove({output: 'thermal:machine_frame'})
    event.shapeless(Item.of('kubejs:power_machine'), Item.of('thermal:machine_frame'));

    event.recipes.create.pressing(Item.of('kubejs:carbon_sheet'), Item.of('minecraft:charcoal'));
    event.recipes.create.filling(Item.of('kubejs:soaked_sheet'), [Ingredient.of('#forge:plates/copper'), Fluid.of('kubejs:sulfuric_acid').withAmount(100)]);
    event.recipes.create.filling(Item.of('kubejs:plastic'), [Item.of('kubejs:carbon_sheet'), Fluid.of('kubejs:plastic').withAmount(90)]);

    // Dirty Inductor
    t = Item.of('kubejs:incomplete_inductor');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:dirt_inductor'),
    ], Item.of('kubejs:inductor_core'), [
        event.recipes.create.deploying(t, [t, Item.of('createaddition:copper_wire')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:plastic')]),
        event.recipes.create.deploying(t, [t, Item.of('createaddition:copper_wire')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:plastic')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:inductor');

    // Dirty Resistor
    t = Item.of('kubejs:incomplete_resistor');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:dirt_resistor'),
    ], Item.of('kubejs:plastic'), [
        event.recipes.create.deploying(t, [t, Item.of('thermal:drill_head')]).keepHeldItem(),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:carbon_sheet')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:carbon_sheet')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:clay_ball')]),
        event.recipes.create.deploying(t, [t, Item.of('createaddition:copper_rod')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:resistor_assembly');

    // Dirty Electrolytic Capacitor
    t = Item.of('kubejs:incomplete_electrolytic_capacitor');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:dirt_electrolytic_capacitor'),
    ], Item.of('kubejs:rough_sheet'), [
        event.recipes.create.filling(t, [t, Fluid.water(500)]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:sulfuric_acid').withAmount(200)]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:plates/copper')]),
        event.recipes.create.deploying(t, [t, Item.of('createaddition:copper_rod')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:plastic')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:electrolytic_capacitor_assembly');

    // Dirty Ceramic Capacitor
    t = Item.of('kubejs:incomplete_ceramic_capacitor');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:dirt_ceramic_capacitor'),
    ], Item.of('kubejs:ceramic_powder'), [
        event.recipes.create.pressing(t, t),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:plates/copper')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:mica_sheet')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:plates/copper')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:ceramic_powder')]),
        event.recipes.create.deploying(t, [t, Item.of('createaddition:copper_rod')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:resistor')

    // Cleaning Dirty Components
    event.recipes.create.mixing([Item.of('kubejs:resistor'), Fluid.of('kubejs:dirt_water').withAmount(110)], [Item.of('kubejs:dirt_resistor'), Fluid.water(100)]);
    event.recipes.create.mixing([Item.of('kubejs:ceramic_capacitor'), Fluid.of('kubejs:dirt_water').withAmount(110)], [Item.of('kubejs:dirt_ceramic_capacitor'), Fluid.water(100)]);
    event.recipes.create.mixing([Item.of('kubejs:electrolytic_capacitor'), Fluid.of('kubejs:dirt_water').withAmount(110)], [Item.of('kubejs:dirt_electrolytic_capacitor'), Fluid.water(100)]);
    event.recipes.create.mixing([Item.of('kubejs:inductor'), Fluid.of('kubejs:dirt_water').withAmount(110)], [Item.of('kubejs:dirt_inductor'), Fluid.water(100)]);

    // Soldering Iron
    event.shaped(Item.of('kubejs:soldering_iron'), [
        ' PW',
        ' IP',
        'I  '
    ], {
        P: Item.of('kubejs:plastic'),
        I: Item.of('minecraft:iron_ingot'),
        W: Item.of('createaddition:copper_wire')
    });

    // Inductor Core
    t = Item.of('kubejs:incomplete_inductor_core');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:inductor_core'),
    ], Item.of('kubejs:carbon_sheet'), [
        event.recipes.create.deploying(t, [t, Item.of('createaddition:copper_rod')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:fiberglass_plate')]),
        event.recipes.create.pressing(t, t),
        event.custom({type: 'createaddition:rolling', input: Item.of(t).toJson(), result: Item.of(t).toJson()})
    ]).transitionalItem(t).loops(1).id('kubejs:inductor_core');

    // Rough Sheet
    event.custom({
        type: 'createaddition:charging',
        input: Item.of('kubejs:soaked_sheet').toJson(),
        result: Item.of('kubejs:rough_sheet').toJson(),
        energy: 4000
    }).id('kubejs:rough_sheet_from_charged_soaked_sheet');

    // Washing Dirty Bowls to Mage Leaf and Empty Bowls
    // event.recipes.create.splashing([Item.of('minecraft:bowl'), Item.of('kubejs:mage_leaf').withChance(0.35)], Item.of('kubejs:dirty_bowl'));
    // Washing Menril Shrub to Rejuvinated Menril Shrub
    event.recipes.create.splashing(Item.of('kubejs:rejuvinated_menril_shrub'), [Item.of('kubejs:menril_shrub')]);

    caseify('create:andesite_casing', Item.of('create:andesite_alloy'), Ingredient.of('#forge:lumber/all'));
    caseify('create:copper_casing', Ingredient.of('#forge:plates/copper'), Ingredient.of('#forge:lumber/all'));
    caseify('create:brass_casing', Ingredient.of('#forge:plates/brass'), Ingredient.of('#forge:lumber/all'));
    caseify('kubejs:zinc_casing', Ingredient.of('#forge:plates/zinc'), Ingredient.of('#forge:stone'));
    caseify('kubejs:invar_casing', Ingredient.of('#forge:ingots/invar'), Ingredient.of('#forge:stone'));
    caseify('kubejs:fluix_casing', Ingredient.of('#forge:plates/lead'), Item.of('minecraft:basalt'));
    caseify('kubejs:gold_casing', Ingredient.of('#forge:plates/gold'), Ingredient.of('#forge:lumber/stripped'));
    caseify('create:refined_radiance_casing', Item.of('create:refined_radiance'), Ingredient.of('#forge:lumber/stripped'));
    caseify('create:shadow_steel_casing', Item.of('create:shadow_steel'), Ingredient.of('#forge:lumber/stripped'));
    caseify('kubejs:supercritical_casing', Item.of('create:refined_radiance_casing'), Item.of('create:shadow_steel_casing'));
    caseify('kubejs:enderium_casing', Ingredient.of('#forge:ingots/enderium'), Item.of('#forge:lumber/all'));

    event.shaped(Item.of('kubejs:machine_smithing_template'), [
        'DMD',
        'DAD',
        'DDD'
    ], {
        M: Ingredient.of('#forge:mechanisms/tier/basic'),
        A: Item.of('minecraft:andesite'),
        D: Item.of('minecraft:diamond'),
    }).id('kubejs:recipe/machine_smithing_template_manual_only');

    event.shaped(Item.of('kubejs:machine_smithing_template', 2), [
        'MTM',
        'MAM',
        'MMM'
    ], {
        M: Ingredient.of('#forge:mechanisms/tier/basic'),
        A: Item.of('minecraft:andesite'),
        T: Item.of('kubejs:machine_smithing_template'),
    }).id('kubejs:recipe/machine_smithing_template_alt_manual_only');

    event.shaped(Item.of('kubejs:machine_smithing_template', 4), [
        'PTP',
        'PAP',
        'PPP'
    ], {
        P: Item.of('create:precision_mechanism'),
        A: Item.of('minecraft:andesite'),
        T: Item.of('kubejs:machine_smithing_template'),
    }).id('kubejs:recipe/machine_smithing_template_alt_2_manual_only');

    // Polyethylene Slurry
    event.recipes.create.mixing(Fluid.of('kubejs:ethylene').withAmount(150), [Item.of('kubejs:andesite_blend', 4), Fluid.of('thermal:resin').withAmount(150), Fluid.of('integrateddynamics:menril_resin').withAmount(150)]).heatRequirement('superheated').id('kubejs:mixing/ethylene_slurry');

    // Polyethylene Slurry + LPG to Molten Plastic
    event.recipes.create.mixing(Fluid.of('pneumaticcraft:plastic').withAmount(500), [Fluid.of('kubejs:ethylene').withAmount(250), Fluid.of('pneumaticcraft:lpg').withAmount(250)]).heatRequirement('superheated').id('kubejs:mixing/molten_plastic');

    // Bundle
    event.shaped(Item.of('minecraft:bundle'), [
        'SHS',
        'H H',
        'HHH'
        ], {
        S: Item.of('minecraft:string'),
        H: Item.of('minecraft:rabbit_hide')
    }).id('kubejs:recipe/minecraft_bundle');

    /** Clusters and Seeds */
    // Quartz Cluster
    t = Item.of('kubejs:quartz_seed');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:quartz_cluster').withChance(30),
        Item.of(t).withChance(70),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:sky_slurry').withAmount(50)]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:sand')])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/quartz_cluster_processing');

    // Certus Quartz Cluster
    t = Item.of('kubejs:certus_quartz_seed');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:certus_quartz_cluster').withChance(30),
        Item.of(t).withChance(70),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:sky_slurry').withAmount(50)]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:sand')])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/certus_quartz_cluster_processing');

    // Redstone Cluster
    t = Item.of('kubejs:redstone_seed');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:redstone_cluster').withChance(30),
        Item.of(t).withChance(70)
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:sky_slurry').withAmount(150)]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:sand')])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/redstone_cluster_processing');

    // Fluix Cluster
    t = Item.of('kubejs:fluix_seed');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:fluix_cluster').withChance(25),
        Item.of(t).withChance(75)
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:sky_slurry').withAmount(150)]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:sand')])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/fluix_cluster_processing');

    event.recipes.create.milling(Item.of('kubejs:quartz_seed', 3), Item.of('minecraft:quartz'));
    event.recipes.create.milling(Item.of('kubejs:redstone_seed', 3), Item.of('minecraft:redstone'));
    event.recipes.create.milling(Item.of('kubejs:certus_quartz_seed', 3), Item.of('ae2:charged_certus_quartz_crystal'));
    event.recipes.create.milling(Item.of('kubejs:fluix_seed', 3), Item.of('ae2:fluix_crystal'));

    event.blasting(Item.of('minecraft:quartz'), Item.of('kubejs:quartz_cluster'));
    event.blasting(Item.of('ae2:certus_quartz_crystal'), Item.of('kubejs:certus_quartz_cluster'));
    event.blasting(Item.of('minecraft:redstone'), Item.of('kubejs:redstone_cluster'));
    event.blasting(Item.of('ae2:fluix_crystal'), Item.of('kubejs:fluix_cluster'));

    event.remove({type: 'thermal:press'});
    trading(event);
});

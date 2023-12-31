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

    event.recipes.create.deploying(Item.of('kubejs:runic_tablet'), [Item.of('minecraft:smooth_stone_slab'), Item.of('forbidden_arcanus:rune')]);

    // Produce Ars Sapling Liquids
    event.recipes.create.compacting(Fluid.of('kubejs:cascading_juice').withAmount(250), Item.of('ars_nouveau:blue_archwood_sapling')).heatRequirement('superheated');
    event.recipes.create.compacting(Fluid.of('kubejs:flourishing_juice').withAmount(250), Item.of('ars_nouveau:green_archwood_sapling')).heatRequirement('superheated');
    event.recipes.create.compacting(Fluid.of('kubejs:vexing_juice').withAmount(250), Item.of('ars_nouveau:purple_archwood_sapling')).heatRequirement('superheated');
    event.recipes.create.compacting(Fluid.of('kubejs:blazing_juice').withAmount(250), Item.of('ars_nouveau:red_archwood_sapling')).heatRequirement('superheated');

    // Process Vials
    event.recipes.create.compacting(Fluid.of('kubejs:superheated_anthracene').withAmount(144), Item.of('thermal:tar')).heatRequirement('superheated').processingTime(400);

    event.recipes.create.emptying([Item.of('kubejs:chromium'), Fluid.of('kubejs:chromatic_waste').withAmount(250)], Item.of('minecraft:glowstone_dust'));
    event.recipes.create.emptying([Item.of('kubejs:empty_vial'), Fluid.of('kubejs:liquid_anthraquinone').withAmount(56)], Item.of('kubejs:anthraquinone'));
    event.recipes.create.emptying([Item.of('kubejs:dirty_bowl'), Fluid.of('kubejs:impure_source').withAmount(50)], Item.of('kubejs:mageberry_smoothie'));

    event.recipes.create.filling(Item.of('kubejs:anthracene'), [Item.of('kubejs:empty_vial'), Fluid.of('kubejs:superheated_anthracene').withAmount(144)]);
    event.recipes.create.filling(Item.of('kubejs:mageberry_smoothie'), [Item.of('minecraft:bowl'), Fluid.of('kubejs:mageberry_smoothie').withAmount(100)]);
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

    // Create Electron Tube
    event.recipes.create.filling([Item.of('create:electron_tube')], [
        Item.of('create:rose_quartz'),
        Fluid.of('kubejs:molten_iron').withAmount(45)
    ]).id('kubejs:electron_tube_from_iron');

    // Create Rose Quartz
    event.recipes.create.filling([Item.of('create:rose_quartz')], [
        Item.of('minecraft:redstone'),
        Fluid.of('thermal:redstone').withAmount(25)
    ]).id('kubejs:rose_quartz_from_redstone');

    // Molten Glass from Glass Block
    event.recipes.create.mixing([Fluid.of('kubejs:molten_glass').withAmount(100)], Item.of('minecraft:glass')).heatRequirement('heated');

    // Fiberglass Plate from Molten Glass
    event.recipes.create.compacting([Item.of('kubejs:fiberglass_plate')], [Item.of('minecraft:string', 4), Fluid.of('kubejs:molten_glass').withAmount(500)]);

    // Volatile Sky Solution
    event.recipes.create.mixing(Fluid.of('kubejs:sky_solution').withAmount(100), ['ae2:sky_dust', Fluid.water(100)]).id('kubejs:volatile_sky_solution_from_sky_dust_and_water');
    // Gunpowder from Powdered Flint and Refined Fuel
    event.recipes.create.mixing(Item.of('minecraft:gunpowder', 4), [Item.of('kubejs:powdered_flint', 4), Fluid.of('thermal:refined_fuel').withAmount(600)])
        .id('kubejs:gunpowder_from_powdered_flint_and_refined_fuel');
    event.recipes.create.mixing(Fluid.of('kubejs:mageberry_smoothie').withAmount(200), [Fluid.of('kubejs:magebloom_juice').withAmount(100), Fluid.of('kubejs:sourceberry_juice').withAmount(100)]);
    event.recipes.create.mixing(Fluid.of('kubejs:source').withAmount(3), [Fluid.of('kubejs:impure_source').withAmount(12)]).heatRequirement('heated');
    event.recipes.create.mixing('integrateddynamics:menril_sapling', [Item.of('integrateddynamics:menril_berries', 8), 'kubejs:rejuvinated_menril_shrub']);
    event.recipes.create.mixing(Fluid.of('kubejs:source').withAmount(500), ['ars_nouveau:spell_parchment', Fluid.of('kubejs:impure_source').withAmount(500)]);
    event.recipes.create.compacting(Item.of('create:chromatic_compound'), [Fluid.of('kubejs:liquid_anthraquinone').withAmount(144)]);
    event.recipes.create.pressing(Item.of('kubejs:radiant_sheet'), [Item.of('create:refined_radiance')]);
    event.recipes.create.pressing(Item.of('create:sturdy_sheet'), Item.of('pneumaticcraft:ingot_iron_compressed'));
    event.recipes.create.compacting(Fluid.of('kubejs:sourceberry_juice').withAmount(100), [Item.of('ars_nouveau:sourceberry_bush')]);
    event.recipes.create.compacting(Fluid.of('kubejs:magebloom_juice').withAmount(100), [Item.of('ars_nouveau:magebloom')]);

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
    event.recipes.create.splashing([Item.of('minecraft:bowl'), Item.of('kubejs:mage_leaf').withChance(0.35)], Item.of('kubejs:dirty_bowl'));
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
})

ServerEvents.recipes(event => {
    // 1x Screwdriver
    event.shaped('kubejs:screwdriver', [
        '  G',
        'PAP',
        ' P '
    ], {
        G: 'minecraft:iron_ingot',
        A: 'create:andesite_alloy',
        P: 'thermal:cured_rubber'
    })

    // 2x Screwdriver
    event.shaped('2x kubejs:screwdriver', [
        '  G',
        'PAP',
        ' P '
    ], {
        G: 'minecraft:iron_ingot',
        A: 'create:andesite_alloy',
        P: 'kubejs:enriched_rubber'
    })

    const runicrelics = [['zombie_heart', '6x minecraft:rotten_flesh'], ['squid_beak', '3x minecraft:ink_sac'], ['rib_bone', '5x minecraft:bone'], ['catalyzing_gland', '4x minecraft:gunpowder'], ['chelicerae', '2x minecraft:spider_eye'], ['slime_pearl', '4x minecraft:slime_ball'], ['bat_wing', '2x minecraft:feather'], ['molten_core', '2x minecraft:blaze_rod'], ['eye_of_the_storm', '2x thermal:blitz_rod'], ['nebulous_heart', '3x minecraft:ender_eye'], ['frozen_core', '5x minecraft:snowball']]

    runicrelics.forEach(element => {
        event.shapeless('reliquary:' + element[0], [element[1], 'kubejs:runic_tablet']);
    });

    event.recipes.create.deploying('kubejs:runic_tablet', ['minecraft:smooth_stone_slab', 'forbidden_arcanus:rune']);
    event.recipes.create.deploying('kubejs:sturdy_mechanism', ['create:precision_mechanism', 'create:sturdy_sheet']);

    // Produce Ars Sapling Liquids
    event.recipes.create.compacting(Fluid.of('kubejs:cascading_juice').withAmount(250), Item.of('ars_nouveau:blue_archwood_sapling')).superheated();
    event.recipes.create.compacting(Fluid.of('kubejs:flourishing_juice').withAmount(250), Item.of('ars_nouveau:green_archwood_sapling')).superheated();
    event.recipes.create.compacting(Fluid.of('kubejs:vexing_juice').withAmount(250), Item.of('ars_nouveau:purple_archwood_sapling')).superheated();
    event.recipes.create.compacting(Fluid.of('kubejs:blazing_juice').withAmount(250), Item.of('ars_nouveau:red_archwood_sapling')).superheated();

    // Process Vials
    event.recipes.create.emptying([Item.of('kubejs:chrom'), Fluid.of('kubejs:chromatic_waste').withAmount(250)], Item.of('minecraft:glowstone_dust'));
    event.recipes.create.emptying([Item.of('kubejs:empty_vial'), Fluid.of('kubejs:liquid_anthraquinone').withAmount(56)], Item.of('kubejs:anthraquinone'));
    event.recipes.create.emptying([Item.of('kubejs:dirty_bowl'), Fluid.of('kubejs:impure_source').withAmount(50)], Item.of('kubejs:mageberry_smoothie'));

    event.recipes.create.filling('kubejs:anthracene', ['kubejs:empty_vial', Fluid.of('kubejs:superheated_anthracene').withAmount(144)]);
    event.recipes.create.filling('kubejs:mageberry_smoothie', ['minecraft:bowl', Fluid.of('kubejs:mageberry_smoothie').withAmount(100)]);
    event.recipes.create.filling('pneumaticcraft:plastic', ['create:sturdy_sheet', Fluid.of('pneumaticcraft:plastic').withAmount(500)]);

    event.recipes.create.filling([Item.of('kubejs:enriched_rubber')], [
        Item.of('thermal:cured_rubber'),
        Fluid.of('integrateddynamics:menril_resin').withAmount(100)
    ]);

    // Redstone Alloy Ingot
    event.recipes.create.mixing([Item.of('kubejs:redstone_alloy_ingot', 2)], [Item.of('minecraft:iron_ingot'), Item.of('minecraft:redstone')]).heatRequirement('heated');

    // Redstone Alloy Cable
    event.custom({
        type: 'createaddition:rolling',
        input: {item: 'kubejs:redstone_alloy_ingot'},
        result: {item: 'kubejs:redstone_alloy_cable', count: 4}
    });

    event.recipes.create.filling([Item.of('create:electron_tube')], [
        Item.of('create:rose_quartz'),
        Fluid.of('kubejs:molten_iron').withAmount(45)
    ]).id('create:electron_tube_from_iron');

    event.recipes.create.filling([Item.of('create:rose_quartz')], [
        Item.of('minecraft:redstone'),
        Fluid.of('thermal:redstone').withAmount(25)
    ]).id('create:rose_quartz_from_redstone');

    event.shapeless('kubejs:sealed_mechanism', [Item.of('kubejs:enriched_rubber', 2), '#create:kinetic_mechanisms'])
    event.shapeless('kubejs:sealed_mechanism', [Item.of('thermal:cured_rubber', 4), '#create:kinetic_mechanisms'])

    // Molten Glass from Glass Block
    event.recipes.create.mixing([Fluid.of('kubejs:molten_glass').withAmount(100)], Item.of('minecraft:glass')).heatRequirement('heated');

    // Fiberglass Plate from Molten Glass
    event.recipes.create.compacting([Item.of('kubejs:fiberglass_plate')], [Item.of('minecraft:string', 4), Fluid.of('kubejs:molten_glass').withAmount(500)]);

    event.recipes.create.mixing(Fluid.of('kubejs:mageberry_smoothie').withAmount(200), [Fluid.of('kubejs:magebloom_juice').withAmount(100), Fluid.of('kubejs:sourceberry_juice').withAmount(100)])
    event.recipes.create.mixing(Fluid.of('kubejs:source').withAmount(3), [Fluid.of('kubejs:impure_source').withAmount(12)]).heated()
    event.recipes.create.mixing('integrateddynamics:menril_sapling', [Item.of('integrateddynamics:menril_berries', 8), 'kubejs:rejuvinated_menril_shrub'])
    event.recipes.create.mixing(Fluid.of('kubejs:source').withAmount(500), ['ars_nouveau:spell_parchment', Fluid.of('kubejs:impure_source').withAmount(500)])
    event.recipes.create.compacting(Item.of('create:chromatic_compound'), [Fluid.of('kubejs:liquid_anthraquinone').withAmount(144)])
    event.recipes.create.pressing(Item.of('kubejs:radiant_sheet'), [Item.of('create:refined_radiance')])
    event.recipes.create.pressing(Item.of('create:sturdy_sheet'), Item.of('pneumaticcraft:ingot_iron_compressed'))
    event.recipes.create.compacting(Fluid.of('kubejs:sourceberry_juice').withAmount(100), [Item.of('ars_nouveau:sourceberry_bush')])
    event.recipes.create.compacting(Fluid.of('kubejs:magebloom_juice').withAmount(100), [Item.of('ars_nouveau:magebloom')])

    // PCB
    let t = 'kubejs:incomplete_pcb';
    event.recipes.create.sequenced_assembly([
            Item.of('kubejs:pcb')
        ], Item.of('kubejs:fiberglass_plate'), [
            event.recipes.create.deploying(t, [t, Item.of('create:copper_sheet')]),
            event.recipes.create.pressing(t, t),
            event.recipes.create.filling(t, [t, Fluid.of('kubejs:soldermask').withAmount(1000)]),
            event.recipes.create.pressing(t, t)
        ]
    ).transitionalItem(t).loops(1);

    // Incomplete Electronic Circuit
    event.recipes.create.deploying(Item.of('kubejs:incomplete_electronic_circuit'), [Item.of('kubejs:pcb'), Item.of('kubejs:integrated_mechanism')])

    // Integrated Mechanism
    t = 'kubejs:incomplete_integrated_mechanism';
    event.recipes.create.sequenced_assembly([
            Item.of('kubejs:integrated_mechanism')
        ], Item.of('create:precision_mechanism'), [
            event.recipes.create.deploying(t, [t, Item.of('create:electron_tube')]),
            event.recipes.create.deploying(t, [t, Item.of('kubejs:redstone_alloy_cable')]),
            event.recipes.create.pressing(t, t)
        ]
    ).transitionalItem(t).loops(1);

    // SAW
    let saw = (id, material) => {
        event.shaped(id, [
            'SSS',
            'SMS',
            '   '
        ], {
            S: 'minecraft:stick',
            M: material,
        })
    }

    saw('kubejs:stone_saw', '#forge:cobblestone')
    saw('kubejs:iron_saw', 'minecraft:iron_ingot')
    saw('kubejs:diamond_saw', 'minecraft:diamond')

    // Ceramic Powder
    event.recipes.create.milling('kubejs:ceramic_powder', 'minecraft:brick').processingTime(50);

    event.recipes.create.mixing([Fluid.of('kubejs:sulfuric_acid').withAmount(1000)], ['thermal:sulfur_dust', Fluid.water(1000)])

    let tweak_casing = (r, i1, i2, tag) => {
        event.remove({output: r})
        if (tag) {
            event.custom({
                'type': 'create:item_application',
                'ingredients': [
                    {
                        'tag': i2
                    },
                    {
                        'item': i1
                    }
                ],
                'results': [
                    {
                        'item': r
                    }
                ]
            })
        } else {
            event.custom({
                'type': 'create:item_application',
                'ingredients': [
                    {
                        'item': i2
                    },
                    {
                        'item': i1
                    }
                ],
                'results': [
                    {
                        'item': r
                    }
                ]
            })
        }

        // event.recipes.create.deploying(r, [i2, i1])
    }

    // Scorched Mechanism
    t = 'kubejs:incomplete_scorch_mechanism'
    event.recipes.create.sequenced_assembly([
        'kubejs:scorch_mechanism',
    ], 'create:precision_mechanism', [
        event.recipes.create.deploying(t, [t, 'minecraft:nether_brick']),
        event.recipes.create.deploying(t, [t, 'minecraft:magma_cream']),
        event.recipes.create.filling(t, [t, Fluid.lava(1000)]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:scorch_mechanism');

    // Zinc Machine
    event.shaped('kubejs:zinc_machine', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'kubejs:zinc_casing',
        S: 'kubejs:scorch_mechanism'
    });

    // Thermal Machine Frame
    event.remove({output: 'thermal:machine_frame'})
    event.shapeless('kubejs:power_machine', 'thermal:machine_frame')

    event.recipes.create.pressing('kubejs:carbon_sheet', 'minecraft:charcoal')

    event.recipes.create.filling('kubejs:soaked_sheet', ['create:copper_sheet', Fluid.of('kubejs:sulfuric_acid').withAmount(100)])

    event.recipes.create.filling('kubejs:plastic', ['kubejs:carbon_sheet', Fluid.of('kubejs:plastic').withAmount(90)])


    t = 'kubejs:incomplete_inductor'
    event.recipes.create.sequenced_assembly([
        'kubejs:dirt_inductor',
    ], 'kubejs:inductor_core', [
        event.recipes.create.deploying(t, [t, 'createaddition:copper_wire']),
        event.recipes.create.deploying(t, [t, 'kubejs:plastic']),
        event.recipes.create.deploying(t, [t, 'createaddition:copper_wire']),
        event.recipes.create.deploying(t, [t, 'kubejs:plastic']),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t)
        .loops(1)
        .id('kubejs:inductor')

    t = 'kubejs:incomplete_resistor'
    event.recipes.create.sequenced_assembly([
        'kubejs:dirt_resistor',
    ], 'kubejs:plastic', [
        event.recipes.create.deploying(t, [t, 'thermal:drill_head']).keepHeldItem(),
        event.recipes.create.deploying(t, [t, 'kubejs:carbon_sheet']),
        event.recipes.create.deploying(t, [t, 'kubejs:carbon_sheet']),
        event.recipes.create.deploying(t, [t, 'minecraft:clay_ball']),
        event.recipes.create.deploying(t, [t, 'createaddition:copper_rod']),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t)
        .loops(1)
        .id('kubejs:resistor_assembly')

    t = 'kubejs:incomplete_electrolytic_capacitor'
    event.recipes.create.sequenced_assembly([
        'kubejs:dirt_electrolytic_capacitor',
    ], 'kubejs:rough_sheet', [
        event.recipes.create.filling(t, [t, Fluid.water(500)]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:sulfuric_acid').withAmount(200)]),
        event.recipes.create.deploying(t, [t, 'create:copper_sheet']),
        event.recipes.create.deploying(t, [t, 'createaddition:copper_rod']),
        event.recipes.create.deploying(t, [t, 'kubejs:plastic']),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:electrolytic_capacitor_assembly')

    t = 'kubejs:incomplete_ceramic_capacitor'
    event.recipes.create.sequenced_assembly([
        'kubejs:dirt_ceramic_capacitor',
    ], 'kubejs:ceramic_powder', [
        event.recipes.create.pressing(t, t),
        event.recipes.create.deploying(t, [t, 'create:copper_sheet']),
        event.recipes.create.deploying(t, [t, 'kubejs:mica_sheet']),
        event.recipes.create.deploying(t, [t, 'create:copper_sheet']),
        event.recipes.create.deploying(t, [t, 'kubejs:ceramic_powder']),
        event.recipes.create.deploying(t, [t, 'createaddition:copper_rod']),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:resistor')

    event.recipes.create.mixing(['kubejs:resistor', Fluid.of('kubejs:dirt_water').withAmount(110)], ['kubejs:dirt_resistor', Fluid.water(100)])
    event.recipes.create.mixing(['kubejs:ceramic_capacitor', Fluid.of('kubejs:dirt_water').withAmount(110)], ['kubejs:dirt_ceramic_capacitor', Fluid.water(100)])
    event.recipes.create.mixing(['kubejs:electrolytic_capacitor', Fluid.of('kubejs:dirt_water').withAmount(110)], ['kubejs:dirt_electrolytic_capacitor', Fluid.water(100)])
    event.recipes.create.mixing(['kubejs:inductor', Fluid.of('kubejs:dirt_water').withAmount(110)], ['kubejs:dirt_inductor', Fluid.water(100)])

    t = 'kubejs:incomplete_power_mechanism'
    event.recipes.create.sequenced_assembly([
        'kubejs:power_mechanism',
    ], 'kubejs:explosive_mechanism', [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:plastic').withAmount(30)]),
        event.recipes.create.filling(t, [t, Fluid.of('create_enchantment_industry:ink').withAmount(30)]),

        event.recipes.create.deploying(t, [t, 'kubejs:electrolytic_capacitor']),
        event.recipes.create.deploying(t, [t, 'kubejs:ceramic_capacitor']),
        event.recipes.create.deploying(t, [t, 'kubejs:resistor']),
        event.recipes.create.deploying(t, [t, 'kubejs:inductor']),

        event.recipes.create.deploying(t, [t, '#forge:soldering_irons']),
    ]).transitionalItem(t).loops(1).id('kubejs:power_mechanism')


    event.shaped('kubejs:soldering_iron', [
        ' PW',
        ' IP',
        'I  '
    ], {
        P: 'kubejs:plastic',
        I: 'minecraft:iron_ingot',
        W: 'createaddition:copper_wire'
    })

    event.shaped('kubejs:power_machine', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'create:copper_sheet',
        S: 'kubejs:power_mechanism'
    })

    event.remove({output: 'createaddition:electric_motor'})
    event.remove({output: 'createaddition:alternator'})
    event.replaceInput({id: 'createaddition:crafting/modular_accumulator'}, 'createaddition:capacitor', 'kubejs:electrolytic_capacitor')
    event.replaceInput({input: 'createaddition:capacitor'}, 'createaddition:capacitor', 'kubejs:ceramic_capacitor')

    event.recipes.create.mechanical_crafting('createaddition:electric_motor', [
        ' BIB ',
        'BSPSB',
        ' BSB '
    ], {
        S: 'createaddition:copper_spool',
        B: 'create:brass_sheet',
        P: 'kubejs:power_machine',
        I: 'createaddition:iron_rod'
    })

    event.recipes.create.mechanical_crafting('createaddition:alternator', [
        ' BIB ',
        'BSPSB',
        ' BSB '
    ], {
        S: 'createaddition:copper_spool',
        B: 'kubejs:carbon_sheet',
        P: 'kubejs:power_machine',
        I: 'createaddition:iron_rod'
    })


    tweak_casing('create:andesite_casing', 'create:andesite_alloy', 'minecraft:logs', true)
    tweak_casing('create:copper_casing', 'create:copper_sheet', 'minecraft:logs', true)
    tweak_casing('create:brass_casing', 'create:brass_sheet', 'minecraft:logs', true)
    tweak_casing('kubejs:zinc_casing', 'createaddition:zinc_sheet', 'minecraft:stone')
    tweak_casing('kubejs:invar_casing', 'thermal:invar_ingot', 'minecraft:stone')
    tweak_casing('kubejs:fluix_casing', 'thermal:lead_plate', 'minecraft:basalt')
})

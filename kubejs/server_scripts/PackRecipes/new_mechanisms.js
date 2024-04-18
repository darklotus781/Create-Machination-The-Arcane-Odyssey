ServerEvents.recipes(event => {
    let mechSmithing = (recipes, mechanism, template) => {
        if (recipes.length === 0) return;
        recipes.forEach(entry => {
            let inputItem = entry[0];
            let outputItem = entry[1];
            let keep = entry[2];

            // console.log(`${outputItem}, ${template}, ${inputItem}, ${mechanism}, ${keep}`)
            if (!keep) {
                event.remove({ output: outputItem });
            }

            event.smithing(outputItem, template, inputItem, mechanism);
        });
    }

    let mechCutting = (recipes, input) => {
        if (recipes.length === 0) return;
        recipes.forEach(output => {
            let outputItem = output[0];
            let keep = output[1];
            if (!keep) {
                event.remove({output: outputItem});
            }
            event.stonecutting(outputItem, input);
        });
    }

    const andesiteMechSmithing = [
        [Item.of('thermal:drill_head'), Item.of('create:mechanical_drill')],
        [Item.of('thermal:saw_blade'), Item.of('create:mechanical_saw')],
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_stirling')],
        [Item.of('create:propeller'), Item.of('create:encased_fan')],
        [Item.of('minecraft:iron_block'), Item.of('create:mechanical_press')],
        [Item.of('create:whisk'), Item.of('create:mechanical_mixer')],
        [Item.of('create:brass_hand'), Item.of('create:deployer')],
        [Item.of('minecraft:bucket'), Item.of('thermal:device_tree_extractor')],
        [Item.of('minecraft:compass'), Item.of('ae2:meteorite_compass')],
        [Item.of('minecraft:compass'), Item.of('explorerscompass:explorerscompass')],
        ['#forge:rods/copper', Item.of('createaddition:connector', 4)],
        ['#forge:rods/gold', Item.of('createaddition:connector', 2)],
        ['sophisticatedstorage:diamond_barrel', Item.of('sophisticatedstorage:controller')],
        [Item.of('minecraft:lightning_rod'), Item.of('create_new_age:energiser_t1')],
        ['#forge:tools/knives', Item.of('sliceanddice:slicer')],
        [Item.of('create_new_age:magnetite_block', 2), Item.of('create_new_age:basic_motor')],
        ['#minecraft:buttons', Item.of('create:contraption_controls')],
        ['minecraft:piston', Item.of('create:mechanical_piston')],
        ['minecraft:sticky_piston', Item.of('create:mechanical_bearing')],
        [Item.of('create:crushing_wheel'), Item.of('create:mechanical_roller')],
        [Item.of('rechiseled:chisel'), Item.of('rechiseledcreate:mechanical_chisel')],
        [Item.of('supplementaries:rope'), Item.of('create:rope_pulley')],
        [Item.of('minecraft:compass'), Item.of('create:speedometer')],
        ['#sophisticatedstorage:barrels', Item.of('create:item_vault', 4), true]
    ];

    const brassMechSmithing = [
        [Item.of('create:gearshift'), Item.of('create:sequenced_gearshift')],
        [Item.of('minecraft:crafting_table'), Item.of('create:mechanical_crafter')],
        [Item.of('minecraft:glowstone_dust'), Item.of('torchmaster:feral_flare_lantern')],
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_numismatic')],
        ['#ae2:all_fluix', Item.of('createaddition:tesla_coil')],
        [Item.of('createaddition:capacitor'), Item.of('createaddition:modular_accumulator')],
        [Item.of('createaddition:connector'), Item.of('createaddition:portable_energy_interface')],
        ['#functionalstorage:drawer', Item.of('functionalstorage:storage_controller')],
        [Item.of('create_new_age:overcharged_iron'), Item.of('create_new_age:advanced_motor')],
        [Item.of('create:chute'), Item.of('create:smart_chute')],
        [Item.of('create:rope_pulley'), Item.of('create:elevator_pulley')]

    ];

    const copperMechSmithing = [
        [Item.of('minecraft:copper_block'), Item.of('create:copper_backtank')],
        [Item.of('minecraft:hopper'), Item.of('create:spout')],
        [Item.of('minecraft:iron_bars'), Item.of('create:item_drain')],
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_magmatic')],
        [Item.of('minecraft:bucket'), Item.of('thermal:device_water_gen')],
        [Item.of('minecraft:crafting_table'), Item.of('thermal:tinker_bench')],
        [Item.of('minecraft:composter'), Item.of('thermal:device_composter')],
        [Item.of('minecraft:fishing_rod'), Item.of('thermal:device_fisher')],
        [Item.of('minecraft:shears'), Item.of('thermal:device_hive_extractor')],
        [Item.of('thermal:fluid_cell_frame'), Item.of('thermal:fluid_cell')],
        [Item.of('minecraft:redstone'), Item.of('thermal:upgrade_augment_1')],
        [Item.of('create:cogwheel'), Item.of('create:mechanical_pump')],
        ['#forge:barrels', Item.of('create:fluid_tank', 4), true]
    ];

    const logisticsMechSmithing = [
       
    ];

    const sturdyMechSmithing = [
        [Item.of('create:contraption_controls'), Item.of('create:controls')],
        [Item.of('minecraft:observer'), Item.of('create:track_observer')],
        [Item.of('thermal:energy_cell_frame'), Item.of('thermal:energy_cell')],
        [Item.of('minecraft:compass'), Item.of('create:track_station')],
        [Item.of('create:electron_tube'), Item.of('create:track_signal')],
        [Item.of('minecraft:redstone'), Item.of('thermal:upgrade_augment_2')],
        ['#functionalstorage:drawer', Item.of('functionalstorage:controller_extension')],
        ['#forge:glass', Item.of('pneumaticcraft:thermal_lagging', 8)],
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_lapidary')],
        [Item.of('pneumaticcraft:turbine_rotor'), Item.of('pneumaticcraft:fluid_mixer')],
        [Item.of('minecraft:furnace'), Item.of('pneumaticcraft:air_compressor')],
        [Item.of('pneumaticcraft:small_tank'), Item.of('pneumaticcraft:liquid_compressor')],
        [Item.of('create:blaze_burner'), Item.of('pneumaticcraft:thermal_compressor')],
        [Item.of('minecraft:diamond'), Item.of('pneumaticcraft:refinery_output')],
        [Item.of('kubejs:brass_mechanism'), Item.of('pneumaticcraft:refinery')],
        [Item.of('pneumaticcraft:drill_pipe'), Item.of('pneumaticcraft:gas_lift')],
        [Item.of('create:basin'), Item.of('pneumaticcraft:thermopneumatic_processing_plant')],
        [Item.of('create:blaze_burner'), Item.of('compressedcreativity:heater')],
    ];

    const plasticMechSmithing = [
        [Item.of('minecraft:glass_bottle'), Item.of('thermal:device_potion_diffuser')],
        [Item.of('minecraft:cactus'), Item.of('thermal:device_nullifier')],
        [Item.of('minecraft:ender_pearl'), Item.of('thermal:device_collector')],
        [Item.of('minecraft:piston'), Item.of('thermal:device_rock_gen')],
        [Item.of('minecraft:redstone'), Item.of('thermal:upgrade_augment_3')],
        [Item.of('pneumaticcraft:reinforced_pressure_tube'), Item.of('compressedcreativity:industrial_air_blower')],
        [Item.of('create:copper_casing'), Item.of('compressedcreativity:air_blower')],
        [Item.of('compressedcreativity:engine_rotor'), Item.of('compressedcreativity:compressed_air_engine')],
        [Item.of('create:brass_casing'), Item.of('compressedcreativity:rotational_compressor')],
        [Item.of('create:gantry_carriage'), Item.of('pneumaticcraft:elevator_base')],
        [Item.of('kubejs:brass_mechanism'), Item.of('pneumaticcraft:programmer')],
        [Item.of('kubejs:runic_tablet'), Item.of('pneumaticcraft:electrostatic_compressor')],
        [Item.of('pneumaticcraft:cannon_barrel'), Item.of('pneumaticcraft:air_cannon')],
        [Item.of('pneumaticcraft:liquid_compressor'), Item.of('pneumaticcraft:advanced_liquid_compressor')],
        [Item.of('pneumaticcraft:air_compressor'), Item.of('pneumaticcraft:advanced_air_compressor')],
        [Item.of('minecraft:hopper'), Item.of('pneumaticcraft:omnidirectional_hopper')],
        [Item.of('pneumaticcraft:small_tank'), Item.of('pneumaticcraft:liquid_hopper')],
        [Item.of('thermal:rf_coil'), Item.of('pneumaticcraft:pneumatic_dynamo')],
        [Item.of('minecraft:ender_eye'), Item.of('pneumaticcraft:vacuum_trap')],
        [Item.of('pneumaticcraft:empty_spawner'), Item.of('pneumaticcraft:pressurized_spawner')],
        [Item.of('pneumaticcraft:pressurized_spawner'), Item.of('pneumaticcraft:spawner_agitator')],
        [Item.of('pneumaticcraft:solar_cell'), Item.of('pneumaticcraft:solar_compressor')]
    ];

    const radiantMechSmithing = [
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_compression')],
        [Item.of('minecraft:nether_bricks'), Item.of('thermal:machine_crucible')],
        [Item.of('minecraft:bricks'), Item.of('thermal:machine_furnace')],
        [Item.of('minecraft:packed_ice'), Item.of('thermal:machine_chiller')],
        [Item.of('minecraft:blaze_rod'), Item.of('thermal:machine_pyrolyzer')],
        [Item.of('minecraft:bucket'), Item.of('thermal:machine_bottler')],
        [Item.of('minecraft:compass'), Item.of('thermal:machine_centrifuge')],
        ['#forge:glass', Item.of('thermal:machine_refinery')],
        [Item.of('minecraft:flint'), Item.of('thermal:machine_pulverizer')],
        [Item.of('minecraft:blast_furnace'), Item.of('thermal:machine_smelter')],
        [Item.of('thermal:saw_blade'), Item.of('thermal:machine_sawmill')],
        [Item.of('minecraft:brewing_stand'), Item.of('thermal:machine_brewer')],
        [Item.of('minecraft:dirt'), Item.of('thermal:machine_insolator')],
        [Item.of('minecraft:quartz'), Item.of('thermal:machine_crystallizer')],
        [Item.of('create:mechanical_press'), Item.of('thermal:machine_press')],
        [Item.of('minecraft:crafting_table'), Item.of('thermal:machine_crafter')],
        [Item.of('kubejs:brass_mechanism'), Item.of('pneumaticcraft:assembly_controller')],
        [Item.of('pneumaticcraft:pneumatic_cylinder'), Item.of('pneumaticcraft:assembly_laser')],
        [Item.of('create:mechanical_drill'), Item.of('pneumaticcraft:assembly_drill')],
        [Item.of('create:mechanical_arm'), Item.of('pneumaticcraft:assembly_io_unit_export')],
        [Item.of('create:deployer'), Item.of('pneumaticcraft:assembly_io_unit_import')],
        [Item.of('create:depot'), Item.of('pneumaticcraft:assembly_platform')],
        [Item.of('forbidden_arcanus:pixie_utrem_jar'), Item.of('ars_nouveau:mob_jar')],
    ];

    const cyberMechSmithing = [
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_gourmand')],
        // [Item.of('integrateddynamics:part_display_panel'), Item.of('integratedterminals:part_terminal_storage')],
        // [Item.of('minecraft:crafting_table'), Item.of('integratedterminals:part_terminal_crafting_job')],
        [Item.of('integrateddynamics:part_static_light_panel'), Item.of('integrateddynamics:part_display_panel')],
        [Item.of('minecraft:clock'), Item.of('integrateddynamics:delay')],
        [Item.of('integrateddynamics:drying_basin'), Item.of('integrateddynamics:mechanical_drying_basin')],
        [Item.of('integrateddynamics:squeezer'), Item.of('integrateddynamics:mechanical_squeezer')],
        [Item.of('integrateddynamics:variable'), Item.of('integrateddynamics:materializer')],
        [Item.of('integrateddynamics:variablestore'), Item.of('integrateddynamics:proxy')],
        [Item.of('minecraft:chest'), Item.of('integrateddynamics:variablestore')],
        [Item.of('createaddition:modular_accumulator'), Item.of('integrateddynamics:energy_battery')],
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_disenchantment')],
        [Item.of('minecraft:glowstone_dust'), Item.of('ae2:semi_dark_monitor')],
        [Item.of('ae2:fluix_pearl'), Item.of('ae2:condenser')],
        [Item.of('ae2:controller'), Item.of('ae2:terminal')],
        [Item.of('functionalstorage:storage_controller'), Item.of('ae2:controller')]
    ];

    const temporalMechSmithing = [
        [Item.of('waystones:warp_stone'), Item.of('waystones:waystone')],
        [Item.of('waystones:warp_stone'), Item.of('waystones:mossy_waystone')],
        [Item.of('waystones:warp_stone'), Item.of('waystones:sandy_waystone')]
    ];

    const powerMechSmithing = [
        [Item.of('createaddition:capacitor'), Item.of('createaddition:alternator')],
        [Item.of('create:rotation_speed_controller'), Item.of('createaddition:electric_motor')],
    ];

    const andesiteMechCutting = [
        [Item.of('create:portable_storage_interface')],
        [Item.of('create:mechanical_harvester')],
        [Item.of('create:mechanical_plough')],
        [Item.of('create:andesite_funnel')],
        [Item.of('create:andesite_tunnel')],
        [Item.of('create:weighted_ejector')],
        [Item.of('createaddition:rolling_mill')]
    ];

    const brassMechCutting = [
        [Item.of('create:rotation_speed_controller')],
        [Item.of('create:mechanical_arm')],
        [Item.of('create:stockpile_switch')],
        [Item.of('create:content_observer')],
        [Item.of('create:brass_funnel')],
        [Item.of('create:brass_tunnel')],
        [Item.of('create:display_link')],
        [Item.of('create:redstone_link', 2)],
        [Item.of('create:powered_toggle_latch', 2)],
        [Item.of('create:powered_latch', 2)],
        [Item.of('create:pulse_extender', 2)],
        [Item.of('create:pulse_repeater', 2)],
        [Item.of('minecraft:repeater', 2), true],
        [Item.of('minecraft:comparator', 2), true],
        [Item.of('minecraft:daylight_detector', 2), true]
    ];

    const copperMechCutting = [
        [Item.of('create:smart_fluid_pipe', 2)],
        [Item.of('create:hose_pulley', 1)],
        [Item.of('create:portable_fluid_interface', 2)],
        [Item.of('create:steam_engine', 3)],
        [Item.of('sliceanddice:sprinkler', 2)],
        [Item.of('create:fluid_pipe', 4)],
        [Item.of('create:copper_valve_handle', 2)]
    ];

    const logisticsMechCutting = [

    ];

    const sturdyMechCutting = [
        [Item.of('pneumaticcraft:turbine_blade')],
        [Item.of('pneumaticcraft:heat_pipe', 2)],
        [Item.of('railways:track_coupler')],
        [Item.of('create:display_board', 2)],
        [Item.of('create:track', 8), true],
        [Item.of('railways:track_create_andesite_wide', 8), true],
        [Item.of('railways:track_create_andesite_narrow', 8), true],
    ];

    const sturdyMechCutting_2 = [
        [Item.of('pneumaticcraft:pressure_tube', 2)],
        [Item.of('pneumaticcraft:manual_compressor')]
    ];

    const plasticMechCutting = [
        [Item.of('pneumaticcraft:charging_station')]
    ];

    const cyberMechCutting = [
        [Item.of('integrateddynamics:variable_transformer_output', 2)],
        [Item.of('integrateddynamics:variable_transformer_input', 2)],
        [Item.of('integrateddynamics:part_static_light_panel', 2)],
        [Item.of('integrateddynamics:logic_programmer')],
        [Item.of('integrateddynamics:portable_logic_programmer')],
        [Item.of('integrateddynamics:cable', 4)],
        [Item.of('ae2:formation_core', 2)],
        [Item.of('ae2:annihilation_core', 2)]
    ];

    const temporalMechCutting = [

    ];

    mechCutting(andesiteMechCutting, Item.of('kubejs:andesite_mechanism'));
    mechCutting(brassMechCutting, Item.of('kubejs:brass_mechanism'));
    mechCutting(copperMechCutting, Item.of('kubejs:copper_mechanism'));
    mechCutting(sturdyMechCutting, Item.of('kubejs:sturdy_mechanism'));
    mechCutting(plasticMechCutting, Item.of('kubejs:plastic_mechanism'));
    mechCutting(cyberMechCutting, Item.of('kubejs:cyber_mechanism'));
    mechCutting(temporalMechCutting, Item.of('kubejs:temporal_mechanism'));

    mechSmithing(andesiteMechSmithing, Item.of('kubejs:andesite_mechanism'), Item.of('kubejs:mechanism_smithing_template'));
    mechSmithing(brassMechSmithing, Item.of('kubejs:brass_mechanism'), Item.of('kubejs:mechanism_smithing_template'));
    mechSmithing(copperMechSmithing, Item.of('kubejs:copper_mechanism'), Item.of('kubejs:mechanism_smithing_template'));
    // mechSmithing(logisticsMechSmithing, Item.of('kubejs:logistics_mechanism'), Item.of('kubejs:mechanism_smithing_template'));
    mechSmithing(sturdyMechSmithing, Item.of('kubejs:sturdy_mechanism'), Item.of('kubejs:mechanism_smithing_template'));
    mechSmithing(plasticMechSmithing, Item.of('kubejs:plastic_mechanism'), Item.of('kubejs:mechanism_smithing_template'));
    mechSmithing(radiantMechSmithing, Item.of('kubejs:radiant_mechanism'), Item.of('kubejs:mechanism_smithing_template'));
    mechSmithing(cyberMechSmithing, Item.of('kubejs:cyber_mechanism'), Item.of('kubejs:mechanism_smithing_template'));
    mechSmithing(temporalMechSmithing, Item.of('kubejs:temporal_mechanism'), Item.of('kubejs:mechanism_smithing_template'));
    mechSmithing(powerMechSmithing, Item.of('kubejs:power_mechanism'), Item.of('kubejs:mechanism_smithing_template'));

    // Wooden Mechanism - TIER 0
    event.shaped('kubejs:wooden_mechanism', ['LLS', 'AAA', 'A  '], {
        L: Ingredient.of('#forge:stripped_logs', 2),
        S: Ingredient.of('#forge:tools/saws'),
        A: Item.of('create:andesite_alloy', 4)
    }).id('kubejs:wooden_mechanism_manual_only');

    // Andesite Mechanism - Tier 1
    let t = Item.of('kubejs:incomplete_andesite_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:andesite_mechanism'),
    ], Item.of('create:andesite_casing'), [
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/saws')]),
        event.recipes.create.deploying(t, [t, Item.of('create:cogwheel')]),
        event.recipes.create.deploying(t, [t, Item.of('create:andesite_alloy')]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/andesite_mechanisms');

    // Logistics Mechanism - Tier 1 / Chapter 1
    t = Item.of('kubejs:incomplete_logistics_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:logistics_mechanism'),
    ], Item.of('kubejs:andesite_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('minecraft:barrel')]),
        event.recipes.create.pressing(t, [t]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:nuggets/zinc')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/screwdrivers')]),
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/logistics_mechanism');

    // Copper Mechanism - Tier 1A / Tier 2
    t = Item.of('kubejs:incomplete_copper_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:copper_mechanism'),
    ], Item.of('kubejs:andesite_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('minecraft:slime_ball')]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:molten_copper').withAmount(50)]),
        event.recipes.create.deploying(t, [t, Item.of('thermal:cured_rubber')]),
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/copper_mechanisms');

    // Copper Mechanism - Tier 1A / Tier 2
    t = Item.of('kubejs:incomplete_copper_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:copper_mechanism', 2),
    ], Item.of('kubejs:andesite_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('minecraft:slime_ball')]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:molten_copper').withAmount(50)]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:enriched_rubber')]),
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/copper_mechanisms_alt');

    // Sealed Mechanism - Tier 2 level but not tier 2 (not used with other mechanisms...)
    event.recipes.create.mixing(Item.of('kubejs:copper_mechanism'), [
        Fluid.of('kubejs:molten_copper').withAmount('125'),
        Item.of('kubejs:andesite_mechanism'),
        Item.of('minecraft:slime_ball'),
        Item.of('thermal:cured_rubber', 2)
    ]).heated().id('kubejs:copper_mechanism_from_cured_rubber');

    event.recipes.create.mixing(Item.of('kubejs:copper_mechanism', 2), [
        Fluid.of('kubejs:molten_copper').withAmount('125'),
        Item.of('kubejs:andesite_mechanism'),
        Item.of('minecraft:slime_ball'),
        Item.of('kubejs:enriched_rubber', 2)
    ]).heated().id('kubejs:copper_mechanism_from_enriched_rubber');

    // Precision Mechanism - Tier 2
    t = Item.of('kubejs:incomplete_brass_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:brass_mechanism'),
    ], Item.of('kubejs:andesite_mechanism'), [
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:plates/brass')]),
        event.recipes.create.deploying(t, [t, Item.of('create:electron_tube')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/screwdrivers')]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/brass_mechanism');

    // Radiant Mechanism - Tier 3
    t = Item.of('kubejs:incomplete_radiant_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:radiant_mechanism'),
    ], Item.of('kubejs:brass_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('kubejs:radiant_coil')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:radiant_coil')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/resonators')]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/radiant_mechanism');

    // Sturdy Mechanism - Tier 2
    t = Item.of('kubejs:incomplete_sturdy_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:sturdy_mechanism'),
    ], Item.of('kubejs:andesite_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('kubejs:carbon_sheet')]),
        event.recipes.create.deploying(t, [t, Item.of('create:sturdy_sheet')]),
        event.recipes.create.deploying(t, [t, Item.of('create:large_cogwheel')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/screwdrivers')]),
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/sturdy_mechanism');

    // Power Mechanism - Tier 2
    t = Item.of('kubejs:incomplete_power_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:power_mechanism'),
    ], Item.of('kubejs:brass_mechanism'), [
        event.recipes.create.filling(t, [t, Fluid.of('create_enchantment_industry:ink').withAmount(30)]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:ceramic_capacitor')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:resistor')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:inductor')]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:soldermask').withAmount(30)]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/soldering_irons')]),
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/power_mechanism');

    // Scorch Mechanism - Tier 3
    t = Item.of('kubejs:incomplete_scorch_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:scorch_mechanism'),
    ], Item.of('kubejs:brass_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('minecraft:nether_brick')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:magma_cream')]),
        event.recipes.create.filling(t, [t, Fluid.lava(250)]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/scorch_mechanism');

    // Integrational Mechanism - Tier 4
    t = Item.of('kubejs:incomplete_cyber_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:cyber_mechanism'),
    ], Item.of('kubejs:radiant_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('ars_nouveau:source_gem')]),
        event.recipes.create.filling(t, [t, Fluid.of('integrateddynamics:menril_resin').withAmount(100)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/cyber_mechanism');

    // Plastic Mechanism - Tier 4
    t = Item.of('kubejs:incomplete_plastic_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:plastic_mechanism'),
    ], Item.of('kubejs:radiant_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('pneumaticcraft:plastic')]),
        event.recipes.create.filling(t, [t, Fluid.of('pneumaticcraft:plastic').withAmount(250)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/plastic_mechanism');

    // Quantum Mechanism in Different file

    // Time Mechanism - Tier 6
    t = Item.of('kubejs:incomplete_temporal_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:temporal_mechanism'),
    ], Item.of('kubejs:radiant_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('minecraft:clock')]),
        event.recipes.create.deploying(t, [t, Item.of('supplementaries:hourglass')]),
        event.recipes.create.deploying(t, [t, Item.of('tiab:time_in_a_bottle').weakNBT()]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/temporal_mechanism');
})

ServerEvents.tags('item', event => {
    event.add('forge:mechanisms/tier/basic', ['kubejs:wooden_mechanism', 'kubejs:andesite_mechanism']);
    event.add('forge:mechanisms/tier/1', 'kubejs:andesite_mechanism');
    event.add('forge:mechanisms/tier/2', ['kubejs:brass_mechanism', 'kubejs:power_mechanism', 'kubejs:sturdy_mechanism', 'kubejs:scorch_mechanism']);
    event.add('forge:mechanisms/tier/3', 'kubejs:radiant_mechanism');
    event.add('forge:mechanisms/tier/4', ['kubejs:cyber_mechanism', 'kubejs:plastic_mechanism']);
    event.add('forge:mechanisms/tier/5', 'kubejs:quantum_mechanism');
    event.add('forge:mechanisms/tier/6', 'kubejs:temporal_mechanism');
});
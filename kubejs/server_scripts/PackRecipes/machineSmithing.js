ServerEvents.recipes(event => {
    let wrencharray = []
    let machine_smithing = (recipes, machine, smithing_material, remove_old) => {
        recipes.forEach(entry => {
            if (remove_old) {
                event.remove({output: entry[1]})
            }

            event.smithing(entry[1], smithing_material, machine, entry[0])
            if (remove_old) {
                event.recipes.create.compacting([machine, Item.of(entry[0]).withChance(0.4)], [entry[1], 'kubejs:radiant_mechanism'])
            }
            if (!entry[1].toString().startsWith('x ', 1) && !entry[1].toString().startsWith('x ', 2)) {
                if (Item.of(entry[1]).isBlock()) {
                    event.recipes.create.item_application(entry[1], [machine, entry[0]])
                }
            }
            if (entry[1].toString().startsWith('x ', 1) || entry[1].toString().startsWith('x ', 2)) {

                event.recipes.create.deploying(entry[1], [machine, entry[0]])

            }

            if (entry[1].toString().startsWith('x ', 1)) {
                entry[1] = entry[1].slice(3)
            }
            wrencharray.push(Item.of(entry[1]))

        })
    }

    const andesite_machine_smithing = [
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
        [Ingredient.of('#forge:rods/copper'), Item.of('createaddition:connector', 4)],
        [Item.of('createaddition:capacitor'), Item.of('createaddition:alternator')],
        [Item.of('sophisticatedstorage:diamond_barrel').withNBT({woodType: "spruce"}), Item.of('sophisticatedstorage:controller')]
    ]

    const brass_machine_smithing = [
        [Item.of('minecraft:crafting_table'), Item.of('create:mechanical_crafter', 3)],
        [Item.of('minecraft:glowstone_dust'), Item.of('torchmaster:feral_flare_lantern')],
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_numismatic')],
        ['#ae2:all_fluix', Item.of('createaddition:tesla_coil')],
        [Item.of('createaddition:capacitor'), Item.of('createaddition:modular_accumulator')],
        [Item.of('createaddition:connector'), Item.of('createaddition:portable_energy_interface')],
        [Item.of('create:rotation_speed_controller'), Item.of('createaddition:electric_motor')],
        ['#functionalstorage:drawer', Item.of('functionalstorage:storage_controller')]
    ]

    const copper_machine_smithing = [
        [Item.of('minecraft:copper_block'), Item.of('create:copper_backtank')],
        [Item.of('minecraft:hopper'), Item.of('create:spout', 2)],
        [Item.of('minecraft:iron_bars'), Item.of('create:item_drain')],
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_magmatic')],
        [Item.of('minecraft:bucket'), Item.of('thermal:device_water_gen')],
        [Item.of('minecraft:crafting_table'), Item.of('thermal:tinker_bench')],
        [Item.of('minecraft:composter'), Item.of('thermal:device_composter')],
        [Item.of('minecraft:fishing_rod'), Item.of('thermal:device_fisher')],
        [Item.of('minecraft:shears'), Item.of('thermal:device_hive_extractor')],
        [Item.of('thermal:fluid_cell_frame'), Item.of('thermal:fluid_cell')],
        [Item.of('minecraft:obsidian'), Item.of('functionalstorage:void_upgrade', 2)],
        [Item.of('minecraft:redstone'), Item.of('thermal:upgrade_augment_1')]
    ]

    const sturdy_machine_smithing = [
        [Item.of('minecraft:lever'), Item.of('create:controls')],
        [Item.of('minecraft:observer'), Item.of('create:track_observer', 2)],
        [Item.of('thermal:energy_cell_frame'), Item.of('thermal:energy_cell')],
        [Item.of('minecraft:compass'), Item.of('create:track_station', 2)],
        [Item.of('create:electron_tube'), Item.of('create:track_signal', 4)],
        [Item.of('minecraft:redstone'), Item.of('thermal:upgrade_augment_2')],
        ['#forge:glass', Item.of('pneumaticcraft:thermal_lagging', 8)],
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_lapidary')],
        [Item.of('pneumaticcraft:turbine_rotor'), Item.of('pneumaticcraft:fluid_mixer')],
        [Item.of('minecraft:furnace'), Item.of('pneumaticcraft:air_compressor')],
        [Item.of('pneumaticcraft:small_tank'), Item.of('pneumaticcraft:liquid_compressor')],
        [Item.of('create:blaze_burner'), Item.of('pneumaticcraft:thermal_compressor')],
        [Item.of('minecraft:diamond'), Item.of('pneumaticcraft:refinery_output')],
        [Item.of('create:precision_mechanism'), Item.of('pneumaticcraft:refinery')],
        [Item.of('pneumaticcraft:drill_pipe'), Item.of('pneumaticcraft:gas_lift')],
        [Item.of('create:basin'), Item.of('pneumaticcraft:thermopneumatic_processing_plant')],
        [Item.of('create:blaze_burner'), Item.of('compressedcreativity:heater')]
    ]

    const plastic_machine_smithing = [
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
        [Item.of('create:precision_mechanism'), Item.of('pneumaticcraft:programmer')],
        [Item.of('kubejs:runic_tablet'), Item.of('pneumaticcraft:electrostatic_compressor')],
        [Item.of('pneumaticcraft:cannon_barrel'), Item.of('pneumaticcraft:air_cannon')],
        [Item.of('pneumaticcraft:liquid_compressor'), Item.of('pneumaticcraft:advanced_liquid_compressor')],
        [Item.of('pneumaticcraft:air_compressor'), Item.of('pneumaticcraft:advanced_air_compressor')],
        [Item.of('minecraft:hopper'), Item.of('pneumaticcraft:omnidirectional_hopper')],
        [Item.of('pneumaticcraft:small_tank'), Item.of('pneumaticcraft:liquid_hopper')],
        [Item.of('thermal:rf_coil'), Item.of('pneumaticcraft:pneumatic_dynamo')],
        [Item.of('minecraft:ender_eye'), Item.of('pneumaticcraft:vacuum_trap')],
        [Item.of('pneumaticcraft:printed_circuit_board'), Item.of('pneumaticcraft:pressurized_spawner')],
        // [Item.of('spirit:broken_spawner'), Item.of('pneumaticcraft:spawner_agitator')],
        [Item.of('pneumaticcraft:solar_cell'), Item.of('pneumaticcraft:solar_compressor')]
    ]

    const radiant_machine_smithing = [
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
        ['#functionalstorage:drawer', Item.of('functionalstorage:controller_extension')],
        [Item.of('create:mechanical_press'), Item.of('thermal:machine_press')],
        [Item.of('minecraft:crafting_table'), Item.of('thermal:machine_crafter')],
        [Item.of('create:precision_mechanism'), Item.of('pneumaticcraft:assembly_controller')],
        [Item.of('pneumaticcraft:pneumatic_cylinder'), Item.of('pneumaticcraft:assembly_laser')],
        [Item.of('create:mechanical_drill'), Item.of('pneumaticcraft:assembly_drill')],
        [Item.of('create:mechanical_arm'), Item.of('pneumaticcraft:assembly_io_unit_export')],
        [Item.of('create:deployer'), Item.of('pneumaticcraft:assembly_io_unit_import')],
        [Item.of('create:depot'), Item.of('pneumaticcraft:assembly_platform')],
        [Item.of('ars_nouveau:ritual_containment'), Item.of('ars_nouveau:mob_jar')],
    ]

    const integrational_machine_smithing = [
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
        // [Item.of('integrateddynamics:variable_transformer_input'), Item.of('integratednbt:nbt_extractor')]
    ]

    const integrational_machine_smithing_2 = [
        [Item.of('createaddition:modular_accumulator'), Item.of('integrateddynamics:energy_battery')]
    ]

    const time_machine_smithing = [
        [Item.of('thermal:rf_coil'), Item.of('thermal:dynamo_disenchantment')],
        [Item.of('minecraft:glowstone_dust'), Item.of('ae2:semi_dark_monitor')],
        [Item.of('ae2:fluix_pearl'), Item.of('ae2:condenser')],
        // [Item.of('integratedterminals:part_terminal_storage'), Item.of('ae2:terminal')],
        [Item.of('waystones:warp_stone'), Item.of('waystones:waystone')],
        [Item.of('waystones:warp_stone'), Item.of('waystones:mossy_waystone')],
        [Item.of('waystones:warp_stone'), Item.of('waystones:sandy_waystone')]
    ]

    // const supercritical_machine_smithing = [
    //     [Item.of('minecraft:nether_star'), Item.of('pneumaticcraft:aerial_interface')]
    // ]

    machine_smithing(andesite_machine_smithing, 'kubejs:andesite_machine', Item.of('kubejs:machine_smithing_template'), true)
    machine_smithing(brass_machine_smithing, 'kubejs:brass_machine', Item.of('kubejs:machine_smithing_template'), true)
    machine_smithing(copper_machine_smithing, 'kubejs:copper_machine', Item.of('kubejs:machine_smithing_template'), true)
    machine_smithing(sturdy_machine_smithing, 'kubejs:sturdy_machine', Item.of('kubejs:machine_smithing_template'), true)
    machine_smithing(plastic_machine_smithing, 'kubejs:plastic_machine', Item.of('kubejs:machine_smithing_template'), true)
    machine_smithing(radiant_machine_smithing, 'kubejs:radiant_machine', Item.of('kubejs:machine_smithing_template'), true)
    machine_smithing(integrational_machine_smithing, 'kubejs:integrational_machine', Item.of('kubejs:machine_smithing_template'), true)
    machine_smithing(integrational_machine_smithing_2, 'kubejs:integrational_machine', Item.of('kubejs:machine_smithing_template'), false)
    machine_smithing(time_machine_smithing, 'kubejs:time_machine', Item.of('kubejs:machine_smithing_template'), true)
    // machine_smithing(supercritical_machine_smithing,'kubejs:supercritical_machine', Item.of('kubejs:machine_smithing_template'), true)
})
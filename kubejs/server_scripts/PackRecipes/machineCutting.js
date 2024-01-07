ServerEvents.recipes(event => {
    let wrencharray = []
    let multicut = (outputs, input, remove_old) => {
        outputs.forEach(output => {
            if (remove_old) {
                event.remove({output: output})
            }
            event.stonecutting(output, input)
            if (remove_old) {
                event.recipes.create.compacting(input, [output, 'kubejs:radiant_mechanism'])
            }
            if (output.toString().startsWith('x ', 1)) {
                output = output.slice(3)
            }
            wrencharray.push(Item.of(output))
        })
    }

    const andesite_machines_cutting = [
        Item.of('create:portable_storage_interface', 2),
        Item.of('create:mechanical_harvester', 2),
        Item.of('create:mechanical_plough', 2),
        Item.of('create:andesite_funnel', 4),
        Item.of('create:andesite_tunnel', 4),
        Item.of('create:weighted_ejector', 2),
        Item.of('createaddition:rolling_mill', 1)
    ]

    const brass_machines_cutting = [
        Item.of('create:sequenced_gearshift', 2),
        Item.of('create:rotation_speed_controller', 1),
        Item.of('create:mechanical_arm', 1),
        Item.of('create:stockpile_switch', 2),
        Item.of('create:content_observer', 2),
        Item.of('create:stockpile_switch', 2),
        Item.of('create:brass_funnel', 4),
        Item.of('create:brass_tunnel', 4),
        Item.of('create:display_link', 2),
        Item.of('create:display_board', 6)
    ]

    const brass_machines_redstone_cutting = [
        Item.of('create:redstone_link', 4),
        Item.of('create:powered_toggle_latch', 2),
        Item.of('create:powered_latch', 2),
        Item.of('create:pulse_extender', 2),
        Item.of('create:pulse_repeater', 2),
        Item.of('minecraft:repeater', 2),
        Item.of('minecraft:comparator', 2),
        Item.of('minecraft:daylight_detector', 2)
    ]

    const copper_machines_cutting = [
        Item.of('create:smart_fluid_pipe', 2),
        Item.of('create:hose_pulley', 1),
        Item.of('create:portable_fluid_interface', 2),
        Item.of('create:steam_engine', 3),
    ]

    const sturdy_machine_cutting = [
        Item.of('pneumaticcraft:turbine_blade', 4),
        Item.of('pneumaticcraft:heat_pipe', 8),
        Item.of('railways:track_coupler', 2)

    ]
    const sturdy_machine_cutting_2 = [
        Item.of('pneumaticcraft:pressure_tube', 16),
        Item.of('pneumaticcraft:manual_compressor', 4)
    ]

    const plastic_machine_cutting = [
        Item.of('pneumaticcraft:charging_station')
    ]

    const dynamic_machine_cutting = [
        Item.of('integrateddynamics:variable_transformer_output', 4),
        Item.of('integrateddynamics:variable_transformer_input', 4),
        Item.of('integrateddynamics:part_static_light_panel', 4),
        Item.of('integrateddynamics:logic_programmer'),
        Item.of('integrateddynamics:portable_logic_programmer'),
        Item.of('integrateddynamics:cable', 4)
    ]

    const time_machine_cutting = [
        Item.of('ae2:formation_core', 4),
        Item.of('ae2:annihilation_core', 4),
        Item.of('ae2:controller')
    ]

    const supercritical_machine_cutting = [
        Item.of('entangled:block', 2),
    ]

    multicut(andesite_machines_cutting, 'kubejs:andesite_machine', true)
    multicut(brass_machines_cutting, 'kubejs:brass_machine', true)
    multicut(brass_machines_redstone_cutting, 'kubejs:brass_machine', false)
    multicut(copper_machines_cutting, 'kubejs:copper_machine', true)
    multicut(sturdy_machine_cutting, 'kubejs:sturdy_machine', true)
    multicut(sturdy_machine_cutting_2, 'kubejs:sturdy_machine', false)
    multicut(plastic_machine_cutting, 'kubejs:plastic_machine', true)
    multicut(dynamic_machine_cutting, 'kubejs:dynamic_machine', true)
    multicut(time_machine_cutting, 'kubejs:time_machine', true)
    multicut(supercritical_machine_cutting, 'kubejs:supercritical_machine', true)
})
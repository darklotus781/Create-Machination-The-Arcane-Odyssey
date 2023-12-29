//priority: 0

ServerEvents.recipes(event => {
    let t; // default!
    event.remove({output: 'ae2:inscriber'})
    event.remove({type: 'ae2:inscriber'})
    event.remove({output: 'ae2:charger'})
    event.remove({type: 'ae2:charger'})
    event.remove({output: 'ae2:not_so_mysterious_cube'})
    event.remove({id:"ae2:network/blocks/quantum_ring"})

    event.shapeless('ae2:semi_dark_monitor','ae2:dark_monitor')
    event.shapeless('ae2:fluix_covered_cable',['#ae2:covered_cable','#ae2:can_remove_color'])

    // Calculation Processor Press
    event.recipes.create.cutting('ae2:calculation_processor_press', 'ae2:quartz_block').processingTime(500)
    // Engineering Processor Press
    event.recipes.create.cutting('ae2:engineering_processor_press', 'diamond_block').processingTime(500)
    // Silicon Press
    event.recipes.create.cutting('ae2:silicon_press', 'iron_block').processingTime(500)
    // Logic Processor Press
    event.recipes.create.cutting('ae2:logic_processor_press', 'gold_block').processingTime(500)

    // AE2 Printed Silicon
    t = "ae2:silicon"
    event.recipes.create.sequenced_assembly([
        'ae2:printed_silicon',
    ], t, [
        event.recipes.create.pressing(t, [t]),
        event.recipes.create.deploying(t, [t, "ae2:silicon_press"]).keepHeldItem(),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1)

    // AE2 Printed Engineering Circuit
    t = "minecraft:diamond"
    event.recipes.create.sequenced_assembly([
        'ae2:printed_engineering_processor',
    ], t, [
        event.recipes.create.pressing(t, [t]),
        event.recipes.create.deploying(t, [t, "ae2:engineering_processor_press"]).keepHeldItem(),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1)

    // AE2 Printed Logic Circuit
    t = "create:golden_sheet"
    event.recipes.create.sequenced_assembly([
        'ae2:printed_logic_processor',
    ], t, [
        event.recipes.create.pressing(t, [t]),
        event.recipes.create.deploying(t, [t, "ae2:logic_processor_press"]).keepHeldItem(),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1)

    // AE2 Printed Calculation Circuit
    t = "ae2:certus_quartz_crystal"
    event.recipes.create.sequenced_assembly([
        'ae2:printed_calculation_processor',
    ], t, [
        event.recipes.create.pressing(t, [t]),
        event.recipes.create.deploying(t, [t, "ae2:calculation_processor_press"]).keepHeldItem(),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1)

    // AE2 Engineering Processor
    t = "ae2:printed_engineering_processor"
    event.recipes.create.sequenced_assembly([
        'ae2:engineering_processor',
    ], t, [
        event.recipes.create.deploying(t, [t, "ae2:printed_silicon"]),
        event.recipes.create.deploying(t, [t, "minecraft:redstone"]),
        event.recipes.create.filling(t, [t, Fluid.of("kubejs:molten_diamond", 100)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1)

    // AE2 Logic Processor
    t = "ae2:printed_logic_processor"
    event.recipes.create.sequenced_assembly([
        'ae2:logic_processor',
    ], t, [
        event.recipes.create.deploying(t, [t, "ae2:printed_silicon"]),
        event.recipes.create.deploying(t, [t, "minecraft:redstone"]),
        event.recipes.create.filling(t, [t, Fluid.of("kubejs:molten_gold", 90)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1)

    // AE2 Calculation Processor
    t = "ae2:printed_calculation_processor"
    event.recipes.create.sequenced_assembly([
        'ae2:calculation_processor',
    ], t, [
        event.recipes.create.deploying(t, [t, "ae2:printed_silicon"]),
        event.recipes.create.deploying(t, [t, "minecraft:redstone"]),
        event.recipes.create.filling(t, [t, Fluid.of("integrateddynamics:menril_resin", 120)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1)
})
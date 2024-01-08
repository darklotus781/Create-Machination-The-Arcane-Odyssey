//priority: 0

ServerEvents.recipes(event => {
    let t; // default!
    event.remove({output: 'ae2:inscriber'});
    event.remove({type: 'ae2:inscriber'});
    event.remove({output: 'ae2:charger'});
    event.remove({type: 'ae2:charger'});
    event.remove({output: 'ae2:not_so_mysterious_cube'});
    event.remove({id: 'ae2:network/blocks/quantum_ring'});

    event.shapeless(Item.of('ae2:semi_dark_monitor'), Item.of('ae2:dark_monitor'));
    event.shapeless(Item.of('ae2:fluix_covered_cable'), [Ingredient.of('#ae2:covered_cable'), Ingredient.of('#ae2:can_remove_color')]);

    // Calculation Processor Press
    event.recipes.create.cutting(Item.of('ae2:calculation_processor_press'), Item.of('ae2:quartz_block')).processingTime(500);
    // Engineering Processor Press
    event.recipes.create.cutting(Item.of('ae2:engineering_processor_press'), Item.of('diamond_block')).processingTime(500);
    // Silicon Press
    event.recipes.create.cutting(Item.of('ae2:silicon_press'), Item.of('iron_block')).processingTime(500);
    // Logic Processor Press
    event.recipes.create.cutting(Item.of('ae2:logic_processor_press'), Item.of('gold_block')).processingTime(500);

    event.replaceInput({id: 'ae2:network/cells/item_storage_components_cell_1k_part'}, Item.of('ae2:logic_processor'), Item.of('kubejs:time_mechanism'));
    event.replaceInput({id: 'ae2:network/cells/item_storage_components_cell_4k_part'}, Item.of('ae2:calculation_processor'), Item.of('kubejs:time_mechanism'));

    // AE2 Printed Silicon
    t = Item.of('ae2:silicon');
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:printed_silicon'),
    ], t, [
        event.recipes.create.pressing(t, [t]),
        event.recipes.create.deploying(t, [t, Item.of('ae2:silicon_press')]).keepHeldItem(),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1);

    // AE2 Printed Engineering Circuit
    t = Item.of('minecraft:diamond');
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:printed_engineering_processor'),
    ], t, [
        event.recipes.create.pressing(t, [t]),
        event.recipes.create.deploying(t, [t, Item.of('ae2:engineering_processor_press')]).keepHeldItem(),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1);

    // AE2 Printed Logic Circuit
    t = Ingredient.of('#forge:plates/gold');
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:printed_logic_processor'),
    ], t, [
        event.recipes.create.pressing(t, [t]),
        event.recipes.create.deploying(t, [t, Item.of('ae2:logic_processor_press')]).keepHeldItem(),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1);

    // AE2 Printed Calculation Circuit
    t = Item.of('ae2:certus_quartz_crystal');
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:printed_calculation_processor'),
    ], t, [
        event.recipes.create.pressing(t, [t]),
        event.recipes.create.deploying(t, [t, Item.of('ae2:calculation_processor_press')]).keepHeldItem(),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1);

    // AE2 Engineering Processor
    t = Item.of('kubejs:incomplete_engineering_processor');
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:engineering_processor'),
    ], Item.of('ae2:printed_engineering_processor'), [
        event.recipes.create.deploying(t, [t, Item.of('ae2:printed_silicon')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:redstone')]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:molten_diamond').withAmount(100)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1);

    // AE2 Logic Processor
    t = Item.of('kubejs:incomplete_logic_processor');
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:logic_processor'),
    ], Item.of('ae2:printed_logic_processor'), [
        event.recipes.create.deploying(t, [t, Item.of('ae2:printed_silicon')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:redstone')]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:molten_gold').withAmount(90)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1);

    // AE2 Calculation Processor
    t = Item.of('kubejs:incomplete_calculation_processor');
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:calculation_processor'),
    ], Item.of('ae2:printed_calculation_processor'), [
        event.recipes.create.deploying(t, [t, Item.of('ae2:printed_silicon')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:redstone')]),
        event.recipes.create.filling(t, [t, Fluid.of('integrateddynamics:menril_resin').withAmount(120)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1);
})
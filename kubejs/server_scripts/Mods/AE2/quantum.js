ServerEvents.recipes(event => {
    event.remove({id: 'ae2:quantum_ring'});
    event.remove({id: 'ae2:network/blocks/quantum_ring'});
    event.remove({id: 'ae2:quantum_link'});
    event.remove({id: 'ae2:network/blocks/quantum_link'});

    // Nether Star Dust
    event.recipes.create.crushing(Item.of('kubejs:nether_star_dust').withChance(0.25), [Item.of('nether_star', 1)]);

    // Nether Star Plate
    let t = Item.of('kubejs:nether_star_dust');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:nether_star_plate'),
    ], Item.of('kubejs:nether_star_dust'), [
        event.recipes.create.deploying(t, [t, 'red_sand']), // What else is red sand good for?
        event.recipes.create.filling(t, [t, Fluid.of('integrateddynamics:menril_resin').withAmount(250)]),
        // event.recipes.create.filling(t, [t, Fluid.of('kubejs:aureal_essence', 250)]),
        // event.recipes.create.filling(t, [t, Fluid.of(TC('liquid_soul'), 250)]),
        // event.recipes.create.filling(t, [t, Fluid.of('kubejs:liquid_resent', 250)]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:soul_sand')]),
        event.recipes.create.deploying(t, [t, Item.of('pneumaticcraft:glycerol')]), // Adhesive, LOL
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(8)

    // Quantum Mechanisms from Nether Stars and processing.
    t = Item.of('kubejs:incomplete_quantum_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:quantum_mechanism'),
    ], Item.of('kubejs:nether_star_plate'), [
        event.recipes.create.deploying(t, [t, Item.of('forbidden_arcanus:stellarite_piece')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:warp_fragments')]),
        event.recipes.create.deploying(t, [t, Item.of('ae2:singularity')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:runic_tablet')]),
        // event.recipes.create.filling(t, [t, Fluid.of('thermal:ender').withAmount(1000)]),
        event.recipes.create.deploying(t, [t, Item.of('forbidden_arcanus:eternal_stella')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1)

    // ME Quantum Ring from Quantum Mechanisms and a Particle Accelerator
    event.recipes.create.mechanical_crafting(Item.of('ae2:quantum_ring',), [
        'DDDDDDDDD',
        'DQQQQQQQD',
        'DQDDDDDQD',
        'DQD   DQD',
        'DQD   DQD',
        'DQD   DQD',
        'DQDDDDDQD',
        'DQQQQQQQD',
        'DDDDDDDDD',
    ], {
        Q: Item.of('kubejs:quantum_mechanism'),
        D: Item.of('ae2:dense_energy_cell'),
    })

    // ME Quantum Link
    event.recipes.create.mechanical_crafting(Item.of('ae2:quantum_link'), [
        'QQQQQQQ',
        'QGGGGGQ',
        'QGHRHGQ',
        'QGRWRGQ',
        'QGHRHGQ',
        'QGGGGGQ',
        'QQQQQQQ'
    ], {
        R: Item.of('ae2:quantum_ring'),
        Q: Item.of('kubejs:quantum_mechanism'),
        G: Item.of('ae2:quartz_vibrant_glass'),
        H: Item.of('netherite_block'),
        W: Item.of('waystones:warp_stone')
    })
})
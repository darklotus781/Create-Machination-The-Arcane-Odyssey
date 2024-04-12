ServerEvents.recipes(event => {
    event.remove({id: 'ae2:quantum_ring'});
    event.remove({id: 'ae2:network/blocks/quantum_ring'});
    event.remove({id: 'ae2:quantum_link'});
    event.remove({id: 'ae2:network/blocks/quantum_link'});
    event.remove({id: 'ae2:transform/entangled_singularity'});
    event.remove({id: 'ae2:transform/entangled_singularity_from_pearl'});

    // Nether Star Dust
    event.recipes.create.crushing(Item.of('kubejs:nether_star_dust').withChance(0.50), [Item.of('nether_star', 1)]);

    // Quantum Fluid
    event.recipes.create.emptying([Fluid.of('kubejs:quantum_fluid').withAmount(50), Item.of('ae2:matter_ball')], [Item.of('ae2:singularity')]);

    // Nether Star Plate
    let t;
    // event.recipes.create.sequenced_assembly([
    //     Item.of('kubejs:nether_star_plate'),
    // ], Item.of('kubejs:nether_star_dust'), [
    //     event.recipes.create.deploying(t, [t, Item.of('pneumaticcraft:glycerol')]), // Adhesive, LOL
    //     event.recipes.create.pressing(t, t)
    // ]).transitionalItem(t).loops(1).id('kubejs:sequence/nether_star_plate');

    // Quantum Mechanisms from Nether Stars and processing.
    t = Item.of('kubejs:incomplete_quantum_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:quantum_mechanism'),
    ], Item.of('kubejs:cyber_mechanism'), [
        event.recipes.create.deploying(t, [t, Item.of('kubejs:nether_star_dust')]),
        event.recipes.create.deploying(t, [t, Item.of('forbidden_arcanus:stellarite_piece')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:runic_tablet')]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:quantum_fluid', 50)]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1);

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
    });

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
    });

    event.shapeless(
        Item.of('ae2:quantum_entangled_singularity', 2),
        [
            Item.of('ae2:singularity', 2),
            Item.of('kubejs:quantum_mechanism')
        ]
    ).modifyResult((grid, result) => {
        return getSingularityWithFrequency(result);
    });

    // Custom Quantum Singularity NBT...
    // Item.of('ae2:quantum_entangled_singularity', 2, '{freq:170551511978700L}')
    /** // singularitySeed = 0;
     *  public static void assignFrequency(ItemStack stack) {
     *     var frequency = new Date().getTime() * 100 + singularitySeed++ % 100;
     *     stack.getOrCreateTag().putLong("freq", frequency);
     *  }
     */
})
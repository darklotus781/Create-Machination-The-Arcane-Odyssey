ServerEvents.recipes(event => {
    event.remove({id: 'ae2:quantum_ring'});
    event.remove({id: 'ae2:network/blocks/quantum_ring'});
    event.remove({id: 'ae2:quantum_link'});
    event.remove({id: 'ae2:network/blocks/quantum_link'});
    event.remove({id: 'ae2:transform/entangled_singularity'});
    event.remove({id: 'ae2:transform/entangled_singularity_from_pearl'});

    // Nether Star Dust
    event.recipes.create.crushing([Item.of('kubejs:nether_star_dust', 3), Item.of('kubejs:nether_star_dust').withChance(0.25), Item.of('kubejs:netherite_dust').withChance(0.05)], [Item.of('nether_star')]);

    // Quantum Fluid
    event.recipes.create.emptying([Fluid.of('kubejs:quantum_fluid').withAmount(50), Item.of('ae2:matter_ball')], [Item.of('ae2:quantum_entangled_singularity').weakNBT()]);

    // Nether Star Plate
    let t;
    // event.recipes.create.sequenced_assembly([
    //     Item.of('kubejs:nether_star_plate'),
    // ], Item.of('kubejs:nether_star_dust'), [
    //     event.recipes.create.deploying(t, [t, Item.of('pneumaticcraft:glycerol')]), // Adhesive, LOL
    //     event.recipes.create.pressing(t, t)
    // ]).transitionalItem(t).loops(1).id('kubejs:sequence/nether_star_plate');

    // // Quantum Mechanism
    t = Item.of('kubejs:incomplete_quantum_mechanism');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:quantum_mechanism'),
    ], Item.of('forbidden_arcanus:stellarite_piece'), [
        event.recipes.create.deploying(t, [t, Item.of('kubejs:cyber_mechanism')]),
        event.recipes.create.filling(t, [t, Fluid.of('create_enchantment_industry:hyper_experience').withAmount(25)]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:nether_star_dust')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:runic_tablet')]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:aureal_essence', 25)]),
        event.recipes.create.deploying(t, [t, Item.of('botania:life_essence')]).keepHeldItem(),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(4);

    // ME Quantum Ring from Quantum Mechanisms and a Particle Accelerator
    event.recipes.create.mechanical_crafting(Item.of('ae2:quantum_ring',), [
        'DDMDD',
        'DQQQD',
        'MQNQM',
        'DQQQD',
        'DDMDD',
    ], {
        Q: Item.of('kubejs:quantum_mechanism'),
        D: Item.of('ae2:dense_energy_cell'),
        M: Item.of('alexscaves:magnetic_activator'),
        N: Item.of('alexscaves:notor_gizmo')
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
        W: Item.of('alexscaves:heart_of_iron')
    });

    // Quantum Entangled Singularity
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
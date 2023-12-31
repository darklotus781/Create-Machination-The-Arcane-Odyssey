ServerEvents.recipes(event => {
    let t;

    // Quartz Cluster
    t = Item.of('kubejs:quartz_seed');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:quartz_cluster').withChance(30),
        Item.of(t).withChance(70),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:sky_solution').withAmount(50)]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:sand')])
    ]).transitionalItem(t).loops(1).id('minecraft:quartz');

    // Certus Quartz Cluster
    t = Item.of('kubejs:certus_quartz_seed');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:certus_quartz_cluster').withChance(30),
        Item.of(t).withChance(70),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:sky_solution').withAmount(50)]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:sand')])
    ]).transitionalItem(t).loops(1).id('ae2:certus_quartz_crystal');

    // Redstone Cluster
    t = Item.of('kubejs:redstone_seed');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:redstone_cluster').withChance(30), Item.of(t).withChance(70)
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:sky_solution').withAmount(150)]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:sand')])
    ]).transitionalItem(t).loops(1).id('minecraft:redstone');
})
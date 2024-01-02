ServerEvents.recipes(event => {
    let t;

    // Quartz Cluster
    t = "kubejs:quartz_seed";
    event.recipes.create.sequenced_assembly([
        Item.of("kubejs:quartz_cluster").withChance(30),
        Item.of(t).withChance(70),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of("kubejs:sky_solution", 50)]),
        event.recipes.create.deploying(t, [t, "minecraft:sand"])
    ]).transitionalItem(t).loops(1).id('minecraft:quartz')

    // Certus Quartz Cluster
    t = 'kubejs:certus_quartz_seed'
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:certus_quartz_cluster').withChance(30),
        Item.of(t).withChance(70),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of("kubejs:sky_solution", 50)]),
        event.recipes.create.deploying(t, [t, 'minecraft:sand'])
    ]).transitionalItem(t).loops(1).id('ae2:certus_quartz_crystal')

    // Redstone Cluster
    t = 'kubejs:redstone_seed'
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:redstone_cluster').withChance(30), Item.of(t).withChance(70)
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of("kubejs:sky_solution", 150)]),
        event.recipes.create.deploying(t, [t, 'minecraft:sand'])
    ]).transitionalItem(t).loops(1).id('minecraft:redstone')
})
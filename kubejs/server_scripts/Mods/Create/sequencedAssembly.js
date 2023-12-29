ServerEvents.recipes(event => {
    let t = 'kubejs:incomplete_kinetic_mechanism'
    // event.recipes.create.sequenced_assembly([
    //     'kubejs:kinetic_mechanism',
    // ], 'integrateddynamics:menril_slab', [
    //     event.recipes.create.deploying(t, [t, 'create:andesite_alloy']),
    //     event.recipes.create.deploying(t, [t, 'create:andesite_alloy']),
    //     event.recipes.create.deploying(t, [t, '#forge:saws'])
    // ]).transitionalItem('kubejs:incomplete_kinetic_mechanism').loops(1)
    //
    // t = 'minecraft:leather'
    // event.recipes.create.sequenced_assembly([
    //     'minecraft:saddle',
    // ], 'minecraft:leather', [
    //     event.recipes.create.deploying(t, [t, 'minecraft:iron_ingot']),
    //     event.recipes.create.deploying(t, [t, 'minecraft:iron_ingot'])
    // ]).transitionalItem(t).loops(1)
    //
    // t = 'minecraft:tall_grass'
    // event.recipes.create.sequenced_assembly([
    //     '2x minecraft:tall_grass',
    // ], 'minecraft:tall_grass', [
    //     event.recipes.create.filling(t, [t, Fluid.of('minecraft:water')])
    // ]).transitionalItem(t).loops(200)

    let inter = "kubejs:quartz_seed";
    event.recipes.create.sequenced_assembly([
        Item.of("kubejs:quartz_cluster").withChance(30),
        Item.of(inter).withChance(70),
    ], inter, [
        event.recipes.create.filling(inter, [Fluid.of("kubejs:sky_solution", 50)]),
        event.recipes.create.deploying(inter, [inter, "minecraft:sand"])
    ]).transitionalItem(inter).loops(1);

    // t = 'ae2:certus_crystal_seed'
    // event.recipes.create.sequenced_assembly([
    //     Item.of('kubejs:certus_quartz_cluster').withChance(30), Item.of(t).withChance(70),
    // ], t, [
    //     event.recipes.create.filling(t, [Fluid.of("kubejs:sky_solution", 50)]),
    //     event.recipes.create.deploying(t, [t, 'minecraft:sand'])
    // ]).transitionalItem(t)
    //     .loops(1)
    //     .id('ae2:certus_quartz_crystal')
    //
    // t = 'kubejs:redstone_seed'
    // event.recipes.create.sequenced_assembly([
    //     Item.of('kubejs:redstone_cluster').withChance(45), Item.of(t).withChance(70)
    // ], t, [
    //     event.recipes.create.filling(t, [Fluid.of("kubejs:sky_solution", 150)]),
    //     event.recipes.create.deploying(t, [t, 'minecraft:sand'])
    // ]).transitionalItem(t)
    //     .loops(1)
    //     .id('minecraft:redstone')

    // // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
    // let inter = 'kubejs:incomplete_spore_blossom' // making a variable to store the transitional item makes the code more readable
    // event.recipes.create.sequenced_assembly([
    //     Item.of('spore_blossom').withChance(16.0), // this is the item that will appear in JEI as the result
    //     Item.of('flowering_azalea_leaves').withChance(16.0), // the rest of these items will be part of the scrap
    //     Item.of('azalea_leaves').withChance(2.0),
    //     'oak_leaves',
    //     'spruce_leaves',
    //     'birch_leaves',
    //     'jungle_leaves',
    //     'acacia_leaves',
    //     'dark_oak_leaves'
    // ], 'flowering_azalea_leaves', [ // 'flowering_azalea_leaves' is the input
    //     // the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
    //     event.recipes.createPressing(inter, inter),
    //     // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    //     event.recipes.createDeploying(inter, [inter, 'minecraft:hanging_roots']),
    //     event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
    //     event.recipes.createDeploying(inter, [inter, 'minecraft:moss_carpet']),
    //     event.recipes.createCutting(inter, inter)
    // ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})
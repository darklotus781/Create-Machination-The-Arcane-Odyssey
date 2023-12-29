ServerEvents.recipes(event => {
    let t;

    // SADDLE
    t = 'minecraft:leather'
    event.recipes.create.sequenced_assembly([
        'minecraft:saddle',
    ], 'minecraft:leather', [
        event.recipes.create.deploying(t, [t, 'minecraft:iron_ingot']),
        event.recipes.create.deploying(t, [t, 'minecraft:iron_ingot'])
    ]).transitionalItem(t).loops(1)

    // 16x Cogwheel
    t = 'kubejs:incomplete_cogwheel'
    event.recipes.createSequencedAssembly([
        Item.of('create:cogwheel', 16),
    ], 'create:shaft', [
        event.recipes.create.deploying(t, [t, '#minecraft:wooden_buttons']),
        event.recipes.create.cutting(t, t)
    ]).transitionalItem('kubejs:incomplete_cogwheel').loops(4)

    // Train Track
    t = 'create:incomplete_track'
    event.recipes.createSequencedAssembly([
        '16x create:track',
    ], '#create:sleepers', [
        event.recipes.createDeploying(t, [t, '#create:recipenuggets']),
        event.recipes.createDeploying(t, [t, '#create:recipenuggets']),
        event.recipes.createPressing(t, t)
    ]).transitionalItem(t).loops(1)
})
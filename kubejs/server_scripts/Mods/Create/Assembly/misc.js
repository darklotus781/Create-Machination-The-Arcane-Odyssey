ServerEvents.recipes(event => {
    let t;
    // SADDLE
    event.remove({output: 'minecraft:saddle'})
    t = 'kubejs:incomplete_saddle'
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:saddle'),
    ], 'minecraft:leather', [
        event.recipes.create.deploying(t, [t, '#forge:tools/knives']),
        event.recipes.create.deploying(t, [t, 'minecraft:iron_ingot']),
        event.recipes.create.deploying(t, [t, 'minecraft:iron_ingot'])
    ]).transitionalItem(t).loops(2);

    // 16x Cogwheel
    t = 'kubejs:incomplete_cogwheel'
    event.recipes.create.sequenced_assembly([
        Item.of('create:cogwheel', 16),
    ], 'create:shaft', [
        event.recipes.create.deploying(t, [t, '#minecraft:wooden_buttons']),
        event.recipes.create.cutting(t, t)
    ]).transitionalItem(t).loops(4);

    // Train Track
    t = 'create:incomplete_track'
    event.recipes.create.sequenced_assembly([
        Item.of('create:track', 16)
    ], '#create:sleepers', [
        event.recipes.create.deploying(t, [t, '#create:recipenuggets']),
        event.recipes.create.deploying(t, [t, '#create:recipenuggets']),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1);
});
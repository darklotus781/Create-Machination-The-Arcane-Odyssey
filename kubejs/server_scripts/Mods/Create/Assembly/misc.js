ServerEvents.recipes(event => {
    let t;
    // SADDLE
    event.remove({output: 'minecraft:saddle'});
    t = Item.of('kubejs:incomplete_saddle');
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:saddle'),
    ], Item.of('minecraft:leather'), [
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/knives')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:iron_ingot')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:iron_ingot')])
    ]).transitionalItem(t).loops(2);

    // 16x Cogwheel
    t = Item.of('kubejs:incomplete_cogwheel');
    event.recipes.create.sequenced_assembly([
        Item.of('create:cogwheel', 16),
    ], Item.of('create:shaft'), [
        event.recipes.create.deploying(t, [t, Ingredient.of('#minecraft:wooden_buttons')]),
        event.recipes.create.cutting(t, t)
    ]).transitionalItem(t).loops(4);

    // Train Track
    t = Item.of('create:incomplete_track');
    event.recipes.create.sequenced_assembly([
        Item.of('create:track', 16)
    ], Ingredient.of('#create:sleepers'), [
        event.recipes.create.deploying(t, [t, Ingredient.of('#create:recipenuggets')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#create:recipenuggets')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1);
});
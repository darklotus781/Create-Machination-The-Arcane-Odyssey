ServerEvents.recipes(event => {
    event.remove({id : 'allthemodium:teleport_pad'});

    let t = Item.of('allthemodium:teleport_pad');
    event.recipes.create.sequenced_assembly([
        Item.of('allthemodium:teleport_pad'),
    ], Item.of('minecraft:ender_pearl'), [
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:nuggets/allthemodium')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:plates/brass')]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(4).id('kubejs:sequenced_assembly/teleport_pad');
});
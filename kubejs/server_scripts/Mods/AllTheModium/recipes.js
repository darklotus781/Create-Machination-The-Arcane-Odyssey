ServerEvents.recipes(event => {
    event.remove({id : 'allthemodium:teleport_pad'});

    // let t = Item.of('allthemodium:teleport_pad');
    // event.recipes.create.sequenced_assembly([
    //     Item.of('allthemodium:teleport_pad'),
    // ], Item.of('minecraft:ender_eye'), [
    //     event.recipes.create.deploying(t, [t, Ingredient.of('#forge:nuggets/allthemodium')]),
    //     event.recipes.create.deploying(t, [t, Ingredient.of('#forge:ingots/deorum')]),
    //     event.recipes.create.pressing(t, [t])
    // ]).transitionalItem(t).loops(4).id('kubejs:sequenced_assembly/teleport_pad');

    event.recipes.occultism.ritual(Item.of('allthemodium:teleport_pad'), [
            '#forge:ingots/allthemodium',
            '#forge:ingots/allthemodium',
            '#forge:ingots/allthemodium',
            '#forge:ingots/allthemodium',
            '#forge:ingots/vibranium',
            '#forge:ingots/vibranium',
            '#forge:storage_blocks/deorum',
            '#forge:storage_blocks/deorum',
            'minecraft:ender_eye'
        ],
        'occultism:book_of_binding_bound_djinni',
        'occultism:craft_djinni',
        240)
        .dummy('kubejs:ritual_dummy/teleport_pad')
        .id('occultism:ritual/craft_teleport_pad');
});
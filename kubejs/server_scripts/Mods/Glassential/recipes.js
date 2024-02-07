ServerEvents.recipes(event => {
    event.remove({id: 'glassential:glass_ghostly'});

    event.recipes.create.deploying(Item.of('glassential:glass_ghostly'), [Ingredient.of('#forge:glass/colorless'),Item.of('quark:soul_bead')]);
});
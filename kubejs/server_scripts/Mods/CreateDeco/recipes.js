ServerEvents.recipes(event => {
    event.replaceInput({mod: 'createdeco'}, Item.of('createdeco:zinc_sheet'), Ingredient.of('#forge:plates/zinc'));
    event.replaceInput({mod: 'createdeco'}, Item.of('createdeco:netherite_sheet'), Ingredient.of('#forge:plates/netherite'));
    event.replaceInput({mod: 'createdeco'}, Item.of('createdeco:andesite_sheet'), Ingredient.of('#forge:plates/andesite'));
    event.replaceInput({mod: 'createdeco'}, Item.of('create:iron_sheet'), Ingredient.of('#forge:plates/iron'));
    event.replaceInput({mod: 'createdeco'}, Item.of('create:brass_sheet'), Ingredient.of('#forge:plates/brass'));
    event.replaceInput({mod: 'createdeco'}, Item.of('create:copper_sheet'), Ingredient.of('#forge:plates/copper'));
});
ServerEvents.recipes(event => {
    // Galena Recipes
    event.remove('')

    // Galena
    event.recipes.create.mixing('alexscaves:galena', [Fluid.of('minecraft:lava').withAmount(250), Ingredient.of('#forge:nuggets/lead'), Item.of('minecraft:stone')]).id('kubejs:compacting/galena');
    event.recipes.create.compacting([Item.of('alexscaves:energized_galena_neutral', 8)], [Item.of('alexscaves:packed_galena', 8), Item.of('thermal:lightning_charge')]);
});
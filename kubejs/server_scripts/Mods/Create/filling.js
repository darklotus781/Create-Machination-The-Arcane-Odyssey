ServerEvents.recipes(event => {

    // Concrete Powder Filling Recipes
    global.colors.forEach(color => {
        event.remove({id: 'create:splashing/' + color + '_concrete_powder'});
        event.recipes.create.filling(Item.of(color + '_concrete'), [Item.of(color + '_concrete_powder'), Fluid.water(500)]).id('kubejs:filling/' + color + '_powder');
    });
});
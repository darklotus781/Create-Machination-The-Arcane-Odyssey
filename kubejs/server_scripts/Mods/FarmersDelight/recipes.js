ServerEvents.recipes(event => {
    event.remove({id: 'farmersdelight:flint_knife'});
    event.remove({id: 'farmersdelight:iron_knife'});
    event.remove({id: 'farmersdelight:golden_knife'});
    event.remove({id: 'farmersdelight:diamond_knife'});
    event.shaped(Item.of('farmersdelight:flint_knife'), ['S ', ' M'], {
        M: Item.of('minecraft:flint'),
        S: Ingredient.of('#rods/wooden')
    });
    event.shaped(Item.of('farmersdelight:iron_knife'), ['S ', ' M'], {
        M: Ingredient.of('#forge:ingots/iron'),
        S: Ingredient.of('#rods/wooden')
    });
    event.shaped(Item.of('farmersdelight:golden_knife'), ['S ', ' M'], {
        M: Ingredient.of('#forge:ingots/gold'),
        S: Ingredient.of('#rods/wooden')
    });
    event.shaped(Item.of('farmersdelight:diamond_knife'), ['S ', ' M'], {
        M: Item.of('minecraft:diamond'),
        S: Ingredient.of('#rods/wooden')
    });
})
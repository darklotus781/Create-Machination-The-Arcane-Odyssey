ServerEvents.recipes(event => {

    //Internal.OutputFluid_|OutputItem_)[], ingredients: (Internal.InputFluid_|InputItem_)[], xp?: number, energy?: number
    // Output, Input, XP, Energy
    // event.recipes.thermal.press([Fluid.of('thermal:latex').withAmount(10)],[Item.of('minecraft:dandelion', 3)]);
    // event.recipes.thermal.press([Fluid.of('thermal:latex').withAmount(12)],[Ingredient.of('#forge:vines', 4)]);
});
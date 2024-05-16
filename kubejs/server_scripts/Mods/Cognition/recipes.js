ServerEvents.recipes(event => {
    event.replaceInput({id: 'experienceobelisk:cognitive_alloy'}, 'minecraft:copper_ingot', 'thermal:signalum_ingot');
    event.replaceInput({id: 'experienceobelisk:cognitive_crystal'}, 'minecraft:emerald', 'alexscaves:uranium_rod');
    event.remove({output: 'experienceobelisk:cognitive_flux'});

    event.recipes.create.mixing(Item.of('experienceobelisk:cognitive_flux', 2), [
        Item.of('minecraft:soul_sand'),
        Item.of('minecraft:lapis_lazuli'),
        Ingredient.of('#forge:gems/quartz'),
        Ingredient.of('#forge:dusts/mundabitur')
    ]).id('kubejs:mixing/cognitive_flux');
});
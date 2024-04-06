ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:ender_eye' });
    event.replaceInput({ input: 'minecraft:ender_eye' }, 'minecraft:ender_eye', 'reliquary:eye_of_the_storm');

    event.shapeless(Item.of('minecraft:ender_eye'), [Item.of('minecraft:blaze_rod'), Item.of('minecraft:ender_pearl')]).stage('end_access').id('kubejs:ender_eye_manual_only');

    event.recipes.create.mixing(Fluid.of('kubejs:molten_copper').withAmount(1000), [Ingredient.of('#forge:ingots/copper', 8)]).heated().id('kubejs:molten_copper_from_ingots');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_iron').withAmount(1000), [Ingredient.of('#forge:ingots/iron', 8)]).heated().id('kubejs:molten_iron_from_ingots');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold').withAmount(1000), [Ingredient.of('#forge:ingots/gold', 8)]).heated().id('kubejs:molten_gold_from_ingots');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_lead').withAmount(1000), [Ingredient.of('#forge:ingots/lead', 8)]).heated().id('kubejs:molten_lead_from_ingots');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_diamond').withAmount(1000), [Ingredient.of('#forge:gems/diamond', 8)]).superheated().id('kubejs:molten_diamond_from_gems');

    //Alchemical Conversion via Super Heated mixing
    event.recipes.create.mixing(Fluid.of('kubejs:molten_copper').withAmount(250), [Ingredient.of('#forge:ingots/iron', 2), Fluid.of('kubejs:molten_copper').withAmount(125), Fluid.of('kubejs:source').withAmount(25)]).superheated().id('kubejs:alchemy/copper');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold').withAmount(250), [Ingredient.of('#forge:ingots/iron', 2), Fluid.of('kubejs:molten_gold').withAmount(125), Fluid.of('kubejs:source').withAmount(25)]).superheated().id('kubejs:alchemy/gold');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_lead').withAmount(250), [Ingredient.of('#forge:ingots/iron', 2), Fluid.of('kubejs:molten_lead').withAmount(125), Fluid.of('kubejs:source').withAmount(25)]).superheated().id('kubejs:alchemy/lead');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_diamond').withAmount(250), [Ingredient.of('#forge:gems/emerald'), Fluid.of('kubejs:molten_diamond').withAmount(125), Fluid.of('kubejs:source').withAmount(25)]).superheated().id('kubejs:alchemy/diamond');

    event.recipes.create.mixing([Item.of('minecraft:barrel')],[Ingredient.of('#minecraft:planks',6), Ingredient.of('#minecraft:slabs', 2)]).id('kubejs:basin/barrel');
});

ItemEvents.rightClicked('minecraft:ender_eye', cancelEnderEye);

function cancelEnderEye(event) {
    if (event.player.stages.has('end_access')) return;
    event.player.tell(Text.gold("The item vibrates in your hand but doesn't seem to do anything."));
    event.cancel();
}


// TODO:
// Renewable Lapis Recipe
// deploy ars_nouveau:experience_gem on ae2:certus_quartz
// spout kubejs:chromatic_solution
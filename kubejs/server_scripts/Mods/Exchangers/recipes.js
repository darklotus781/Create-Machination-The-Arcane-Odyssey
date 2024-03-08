ServerEvents.recipes(event => {
    event.replaceInput({id: 'exchangers:vanilla/exchanger_core_tier1'}, Item.of('minecraft:red_dye'), Item.of('kubejs:kinetic_mechanism'));
    event.replaceInput({id: 'exchangers:vanilla/normal/exchanger_core_tier2'}, Item.of('minecraft:lapis_lazuli'), Item.of('create:precision_mechanism'));
    event.replaceInput({id: 'exchangers:vanilla/normal/exchanger_core_tier3'}, Item.of('minecraft:diamond'), Item.of('kubejs:menril_mechanism'));

    event.replaceInput({id: /exchangers\:vanilla.*/}, Ingredient.of('#minecraft:logs'), Item.of('botania:livingwood_log'));
    event.replaceInput({id: /exchangers\:vanilla.*/}, Ingredient.of('#bookshelf:stones'), Item.of('botania:livingrock'));
    event.replaceInput({id: /exchangers\:vanilla.*/}, Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:plates/iron'));
    event.replaceInput({id: /exchangers\:vanilla.*/}, Ingredient.of('#forge:ingots/gold'), Ingredient.of('#forge:plates/gold'));
    event.replaceInput({id: /exchangers\:vanilla.*/}, Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:plates/copper'));
    event.replaceInput({id: /exchangers\:vanilla.*/}, Item.of('minecraft:diamond'), Ingredient.of('#forge:plates/diamond'));

    event.remove ({id: /exchangers\:special.*/});
    event.remove ({id: /exchangers\:thermal.*/});
});

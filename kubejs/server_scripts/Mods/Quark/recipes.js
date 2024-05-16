ServerEvents.recipes(event => {
    event.remove({id: 'quark:automation/crafting/crafter'});
    event.replaceInput({id: 'quark:tools/crafting/pickarang_heart'}, Ingredient.of('#minecraft:planks'), Item.of('botania:livingwood_planks'));
    event.replaceInput({id: 'quark:tools/crafting/pickarang_heart'}, Item.of('minecraft:diamond'), Item.of('botania:mana_diamond'));
});
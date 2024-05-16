ServerEvents.recipes(event => {
    event.replaceInput({id: 'toms_storage:inventory_connector'}, Item.of('minecraft:diamond'), Item.of('botania:mana_diamond'));
    event.replaceInput({id: 'toms_storage:wireless_terminal'}, Ingredient.of('#minecraft:planks'), Item.of('botania:livingwood_planks'));
    event.replaceInput({id: 'toms_storage:wireless_terminal'}, Ingredient.of('#forge:ender_pearls'), Item.of('kubejs:radiant_mechanism'));
    event.replaceInput({id: 'toms_storage:wireless_terminal'}, Ingredient.of('#forge:glass'), Item.of('aether:quicksoil_glass'));
    event.remove({id: 'toms_storage:adv_wireless_terminal'});

    // event.recipes.create.mechanical_crafting(Item.of('toms_storage:wireless_terminal'), [
    //     'CMT',
    //     'MSM',
    //     ' R '
    // ], {
    //     C: Item.of('chipped:carpenters_table'),
    //     T: Item.of('chipped:tinkering_table'),
    //     S: Item.of('toms_storage:storage_terminal'),
    //     M: Item.of('botania:mana_diamond_block'),
    //     R: Item.of('kubejs:radiant_mechanism')
    // }).id('kubejs:crafting/toms_storage_crafting_terminal');
});
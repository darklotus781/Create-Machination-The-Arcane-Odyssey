//priority: 0

ServerEvents.recipes(event => {
    event.remove({id: 'functionalstorage:ender_drawer'});
    event.remove({output: /^functionalstorage\:fluid_/});

    event.remove({id: /functionalstorage\:oak_drawer_alternate_.*/});
    // event.remove({id: /functionalstorage\:.*_upgrade/});
    // event.remove({id: /functionalstorage\:.*tool/});

    event.replaceInput({id: /functionalstorage\:.*_upgrade/}, Ingredient.of('#functionalstorage:drawer'), Item.of('kubejs:fs_upgrade_base'));
    event.replaceInput({id: /functionalstorage\:.*_downgrade/}, Ingredient.of('#functionalstorage:drawer'), Item.of('kubejs:fs_upgrade_base'));
    event.replaceInput({id: /functionalstorage\:.*tool/}, Ingredient.of('#functionalstorage:drawer'), Item.of('kubejs:fs_upgrade_base'));
    event.replaceInput({id: /functionalstorage\:.*tool/}, Ingredient.of('#forge:ingots/iron'),Ingredient.of('#forge:plates/iron'));
    event.replaceInput({id: /functionalstorage\:.*tool/}, Ingredient.of('#forge:ingots/gold'),Ingredient.of('#forge:plates/gold'));
    event.replaceInput({id: /functionalstorage\:.*tool/}, Item.of('minecraft:diamond'),Ingredient.of('#forge:plates/diamond'));
    event.replaceInput({id: /functionalstorage\:.*_upgrade/}, Ingredient.of('#forge:chests/wooden'), Ingredient.of('#functionalstorage:drawer'));
    event.replaceInput({id: /functionalstorage\:.*_upgrade/}, Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:plates/copper'));
    event.replaceInput({id: /functionalstorage\:.*_upgrade/}, Ingredient.of('#forge:ingots/gold'), Ingredient.of('#forge:plates/gold'));
    event.replaceInput({id: /functionalstorage\:.*_upgrade/}, Item.of('minecraft:diamond'), Ingredient.of('#forge:plates/diamond'));
    event.replaceInput({id: /functionalstorage\:.*_upgrade/}, Item.of('minecraft:redstone'), Item.of('kubejs:redstone_alloy_ingot'));
    event.replaceInput({id: /functionalstorage\:.*_downgrade/}, Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:plates/iron'));

    event.smithing(Item.of('kubejs:fs_upgrade_base'), Item.of('kubejs:logistics_mechanism'), Ingredient.of('#functionalstorage:drawer'), Ingredient.of('#forge:plates/iron'))
});

    // 'functionalstorage:oak_1',
    // 'functionalstorage:oak_2',
    // 'functionalstorage:oak_4',
    // 'functionalstorage:copper_upgrade',
    // 'functionalstorage:gold_upgrade',
    // 'functionalstorage:diamond_upgrade',
    // 'functionalstorage:netherite_upgrade',
    // 'functionalstorage:iron_downgrade',
    // 'functionalstorage:collector_upgrade',
    // 'functionalstorage:puller_upgrade',
    // 'functionalstorage:pusher_upgrade',
    // 'functionalstorage:void_upgrade',
    // 'functionalstorage:redstone_upgrade',
    // 'functionalstorage:linking_tool',
    // 'functionalstorage:configuration_tool',
    // 'functionalstorage:storage_controller',
    // 'functionalstorage:controller_extension',
    // 'functionalstorage:armory_cabinet'
//priority: 0

ServerEvents.recipes(event => {
    event.remove({ id: 'functionalstorage:framed_storage_controller' });
    event.remove({ id: 'functionalstorage:framed_controller_extension' });
    event.remove({ id: 'functionalstorage:ender_drawer' });
    event.remove({ output: /^functionalstorage\:fluid_/ });

    event.remove({ output: /^functionalstorage\:framed_.*/ });
    event.remove({ output: 'functionalstorage:compacting_framed_drawer' });

    event.remove({ id: /functionalstorage\:oak_drawer_alternate_.*/ });
    // event.remove({id: /functionalstorage\:.*_upgrade/});
    // event.remove({id: /functionalstorage\:.*tool/});

    event.replaceInput({ id: /functionalstorage\:.*_upgrade/ }, Ingredient.of('#functionalstorage:drawer'), Item.of('kubejs:fs_upgrade_base'));
    event.replaceInput({ id: /functionalstorage\:.*_downgrade/ }, Ingredient.of('#functionalstorage:drawer'), Item.of('kubejs:fs_upgrade_base'));
    event.replaceInput({ id: /functionalstorage\:.*tool/ }, Ingredient.of('#functionalstorage:drawer'), Item.of('kubejs:fs_upgrade_base'));
    event.replaceInput({ id: /functionalstorage\:.*tool/ }, Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:plates/iron'));
    event.replaceInput({ id: /functionalstorage\:.*tool/ }, Ingredient.of('#forge:ingots/gold'), Ingredient.of('#forge:plates/gold'));
    event.replaceInput({ id: /functionalstorage\:.*tool/ }, Item.of('minecraft:diamond'), Ingredient.of('#forge:plates/diamond'));
    event.replaceInput({ id: /functionalstorage\:.*_upgrade/ }, Ingredient.of('#forge:chests/wooden'), Ingredient.of('#functionalstorage:drawer'));
    event.replaceInput({ id: /functionalstorage\:.*_upgrade/ }, Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:plates/copper'));
    event.replaceInput({ id: /functionalstorage\:.*_upgrade/ }, Ingredient.of('#forge:ingots/gold'), Ingredient.of('#forge:plates/gold'));
    event.replaceInput({ id: /functionalstorage\:.*_upgrade/ }, Item.of('minecraft:diamond'), Ingredient.of('#forge:plates/diamond'));
    event.replaceInput({ id: /functionalstorage\:.*_upgrade/ }, Item.of('minecraft:redstone'), Item.of('kubejs:redstone_alloy_ingot'));
    event.replaceInput({ id: /functionalstorage\:.*_downgrade/ }, Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:plates/iron'));

    event.replaceInput({ id: /functionalstorage\:oak_.*/ }, Item.of('minecraft:oak_planks'), Ingredient.of('#machination:oak_planks'));

    event.smithing(Item.of('kubejs:fs_upgrade_base', 2), Item.of('kubejs:logistics_mechanism'), Ingredient.of('#functionalstorage:drawer'), Ingredient.of('#forge:plates/iron'));
    event.smithing(Item.of('functionalstorage:void_upgrade', 2), Item.of('kubejs:logistics_mechanism'), Item.of('kubejs:fs_upgrade_base'), Item.of('minecraft:obsidian'));

    event.shaped(Item.of('functionalstorage:framed_1'), ['NNN','NDN','NNN'],{N: Ingredient.of('#forge:nuggets/iron'), D: Ingredient.of('#functionalstorage:drawer_1')}).id('kubejs:functional_framed_1_from_drawer_1');
    event.shaped(Item.of('functionalstorage:framed_2'), ['NNN','NDN','NNN'],{N: Ingredient.of('#forge:nuggets/iron'), D: Ingredient.of('#functionalstorage:drawer_2')}).id('kubejs:functional_framed_2_from_drawer_2');
    event.shaped(Item.of('functionalstorage:framed_4'), ['NNN','NDN','NNN'],{N: Ingredient.of('#forge:nuggets/iron'), D: Ingredient.of('#functionalstorage:drawer_4')}).id('kubejs:functional_framed_4_from_drawer_4');
    event.shaped(Item.of('functionalstorage:compacting_framed_drawer'), ['NNN','NDN','NNN'],{N: Ingredient.of('#forge:nuggets/iron'), D: Item.of('functionalstorage:compacting_drawer')}).id('kubejs:framed_compacting_drawer_from_drawer');
    event.shaped(Item.of('functionalstorage:framed_simple_compacting_drawer'), ['NNN','NDN','NNN'],{N: Ingredient.of('#forge:nuggets/iron'), D: Item.of('functionalstorage:simple_compacting_drawer')}).id('kubejs:framed_simple_compacting_drawer_from_drawer');
    event.shaped(Item.of('functionalstorage:framed_storage_controller'), ['NNN','NDN','NNN'],{N: Ingredient.of('#forge:nuggets/iron'), D: Item.of('functionalstorage:storage_controller')}).id('kubejs:framed_controller_from_controller');
    event.shaped(Item.of('functionalstorage:framed_controller_extension'), ['NNN','NDN','NNN'],{N: Ingredient.of('#forge:nuggets/iron'), D: Item.of('functionalstorage:controller_extension')}).id('kubejs:framed_extension_from_extension');
});

ServerEvents.tags('item', event => {
    event.get('functionalstorage:drawer_1').add([
        'functionalstorage:oak_1',
        'functionalstorage:spruce_1',
        'functionalstorage:birch_1',
        'functionalstorage:jungle_1',
        'functionalstorage:acacia_1',
        'functionalstorage:dark_oak_1',
        'functionalstorage:crimson_1',
        'functionalstorage:warped_1',
        'functionalstorage:mangrove_1',
        'functionalstorage:cherry_1'
    ]);

    event.get('functionalstorage:drawer_2').add([
        'functionalstorage:oak_2',
        'functionalstorage:spruce_2',
        'functionalstorage:birch_2',
        'functionalstorage:jungle_2',
        'functionalstorage:acacia_2',
        'functionalstorage:dark_oak_2',
        'functionalstorage:crimson_2',
        'functionalstorage:warped_2',
        'functionalstorage:mangrove_2',
        'functionalstorage:cherry_2'
    ]);

    event.get('functionalstorage:drawer_4').add([
        'functionalstorage:oak_4',
        'functionalstorage:spruce_4',
        'functionalstorage:birch_4',
        'functionalstorage:jungle_4',
        'functionalstorage:acacia_4',
        'functionalstorage:dark_oak_4',
        'functionalstorage:crimson_4',
        'functionalstorage:warped_4',
        'functionalstorage:mangrove_4',
        'functionalstorage:cherry_4'
    ]);
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
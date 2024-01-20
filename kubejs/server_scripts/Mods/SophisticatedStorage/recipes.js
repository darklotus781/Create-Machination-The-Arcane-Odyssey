//priority: 0

ServerEvents.recipes(event => {
    event.remove({output: 'sophisticatedstorage:upgrade_base'});
    event.remove({output: /sophisticatedstorage\:stack_upgrade_tier/});
    event.remove({output: /sophisticatedstorage\:.*_tier_upgrade/});
    event.remove({id: 'sophisticatedstorage:pump_upgrade'});
    event.remove({id: 'sophisticatedstorage:advanced_pump_upgrade'});
    event.remove({id: 'sophisticatedstorage:xp_pump_upgrade'});
    event.remove({id: 'sophisticatedstorage:jukebox_upgrade'});
    event.remove({id: 'sophisticatedstorage:smoking_upgrade_from_smelting_upgrade'});
    event.remove({id: 'sophisticatedstorage:auto_smoking_upgrade_from_auto_smelting_upgrade'});
    event.remove({id: 'sophisticatedstorage:blasting_upgrade_from_smelting_upgrade'});
    event.remove({id: 'sophisticatedstorage:auto_blasting_upgrade_from_auto_smelting_upgrade'});
    event.remove({id: 'sophisticatedstorage:advanced_magnet_upgrade_from_basic'});

    event.remove({id: /sophisticatedstorage\:chipped\/.*_upgrade/});

    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:redstone', 'kubejs:logistics_mechanism');
    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:string', 'ars_nouveau:magebloom_fiber');
    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:iron_ingot', '#forge:plates/iron');
    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:gold_ingot', '#forge:plates/brass');

    event.shaped('sophisticatedstorage:upgrade_base', ['P P', ' T ', 'P P'], {
        T: 'kubejs:runic_tablet',
        P: 'botania:livingwood_planks'
    });

    let upgrades = [
        'pickup',
        'filter',
        'magnet',
        'feeding',
        'compacting',
        'void',
        'smelting',
        'smoking',
        'blasting'
    ];

    upgrades.forEach(upgrade => {
        let type = ['smelting', 'smoking', 'blasting'].includes(upgrade) ? 'auto' : 'advanced';

        event.remove({id: 'sophisticatedstorage:' + type + '_' + upgrade + '_upgrade'});

        event.shaped(Item.of('sophisticatedstorage:' + type + '_' + upgrade + '_upgrade'), [
            ' D ',
            'BUB',
            'LLL'
        ], {
            D: '#forge:plates/diamond',
            B: '#forge:plates/brass',
            U: 'sophisticatedstorage:' + upgrade + '_upgrade',
            L: 'kubejs:logistics_mechanism'
        }).id('kubejs:storageupgrade/' + type + '_' + upgrade + '_upgrade');
    });

    // event.smithing('sophisticatedstorage:xp_pump_upgrade', Item.of('kubejs:runic_tablet'), 'sophisticatedstorage:advanced_pump_upgrade', 'thermal:xp_crystal');
    event.smithing('sophisticatedstorage:stack_upgrade_tier_1', Item.of('kubejs:runic_tablet'), 'sophisticatedstorage:upgrade_base', 'minecraft:anvil');
    event.smithing('sophisticatedstorage:stack_upgrade_tier_2', Item.of('kubejs:runic_tablet'), 'sophisticatedstorage:stack_upgrade_tier_1', 'ars_nouveau:source_gem');
    event.smithing('sophisticatedstorage:stack_upgrade_tier_3', Item.of('kubejs:runic_tablet'), 'sophisticatedstorage:stack_upgrade_tier_2', 'forbidden_arcanus:corrupti_dust');
    event.smithing('sophisticatedstorage:stack_upgrade_tier_4', Item.of('kubejs:runic_tablet'), 'sophisticatedstorage:stack_upgrade_tier_3', 'forbidden_arcanus:dark_matter');

    event.smithing('sophisticatedstorage:jukebox_upgrade', Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:upgrade_base'), Item.of('minecraft:jukebox'));

    event.smithing(Item.of('sophisticatedstorage:basic_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Ingredient.of('#forge:barrels/wooden'), Item.of('minecraft:redstone'));
    event.smithing(Item.of('sophisticatedstorage:basic_to_iron_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Ingredient.of('#forge:barrels/wooden'), Ingredient.of('#forge:storage_blocks/iron'));
    event.smithing(Item.of('sophisticatedstorage:basic_to_gold_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Ingredient.of('#forge:barrels/wooden'), Ingredient.of('#forge:storage_blocks/gold'));
    event.smithing(Item.of('sophisticatedstorage:basic_to_diamond_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Ingredient.of('#forge:barrels/wooden'), Ingredient.of('#forge:storage_blocks/diamond'));
    event.smithing(Item.of('sophisticatedstorage:basic_to_netherite_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Ingredient.of('#forge:barrels/wooden'), Ingredient.of('#forge:ingots/netherite'));

    event.smithing(Item.of('sophisticatedstorage:iron_to_gold_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:basic_tier_upgrade'), Ingredient.of('#forge:storage_blocks/gold'));
    event.smithing(Item.of('sophisticatedstorage:iron_to_diamond_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:iron_to_gold_tier_upgrade'), Ingredient.of('#forge:storage_blocks/diamond'));
    event.smithing(Item.of('sophisticatedstorage:iron_to_netherite_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:iron_to_diamond_tier_upgrade'), Ingredient.of('#forge:ingots/netherite'));

    event.smithing(Item.of('sophisticatedstorage:gold_to_diamond_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:basic_tier_upgrade'), Ingredient.of('#forge:storage_blocks/diamond'));
    event.smithing(Item.of('sophisticatedstorage:gold_to_netherite_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:gold_to_diamond_tier_upgrade'), Ingredient.of('#forge:ingots/netherite'));

    event.smithing(Item.of('sophisticatedstorage:diamond_to_netherite_tier_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:basic_tier_upgrade'), Ingredient.of('#forge:ingots/netherite'));

    event.smithing(Item.of('sophisticatedstorage:chipped/botanist_workbench_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:botanist_workbench'));
    event.smithing(Item.of('sophisticatedstorage:chipped/glassblower_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:glassblower'));
    event.smithing(Item.of('sophisticatedstorage:chipped/carpenters_table_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:carpenters_table'));
    event.smithing(Item.of('sophisticatedstorage:chipped/loom_table_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:loom_table'));
    event.smithing(Item.of('sophisticatedstorage:chipped/mason_table_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:mason_table'));
    event.smithing(Item.of('sophisticatedstorage:chipped/alchemy_bench_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:alchemy_bench'));
    event.smithing(Item.of('sophisticatedstorage:chipped/tinkering_table_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:tinkering_table'));
});
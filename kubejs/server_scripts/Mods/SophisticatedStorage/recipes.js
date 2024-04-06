//priority: 0

ServerEvents.recipes(event => {
    // event.remove({mod:'sophisticatedstorage'});
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

    event.remove({output: 'sophisticatedstorage:barrel'});
    event.remove({output: 'sophisticatedstorage:chest'});
    event.remove({output: 'sophisticatedstorage:shulker_box'});
    event.remove({output: 'sophisticatedstorage:limited_barrel_1'});
    event.remove({output: 'sophisticatedstorage:limited_barrel_2'});
    event.remove({output: 'sophisticatedstorage:limited_barrel_3'});
    event.remove({output: 'sophisticatedstorage:limited_barrel_4'});
    event.remove({output: /sophisticatedstorage\:(copper|iron|gold|diamond|netherite)_(barrel|chest|shulker_box)/});
    event.remove({output: /sophisticatedstorage\:limited_(copper|iron|gold|diamond|netherite)_barrel_1/});
    event.remove({output: /sophisticatedstorage\:limited_(copper|iron|gold|diamond|netherite)_barrel_2/});
    event.remove({output: /sophisticatedstorage\:limited_(copper|iron|gold|diamond|netherite)_barrel_3/});
    event.remove({output: /sophisticatedstorage\:limited_(copper|iron|gold|diamond|netherite)_barrel_4/});

    event.remove({id: /sophisticatedstorage\:chipped\/.*_upgrade/});

    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:redstone', 'kubejs:logistics_mechanism');
    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:string', 'ars_nouveau:magebloom_fiber');
    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:copper_ingot', '#forge:plates/copper');
    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:iron_ingot', '#forge:plates/iron');
    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:gold_ingot', '#forge:plates/brass');
    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:diamond_ingot', '#forge:plates/diamond');
    event.replaceInput({mod: 'sophisticatedstorage'}, 'minecraft:netherite_ingot', '#forge:plates/netherite');

    event.shaped('sophisticatedstorage:upgrade_base', ['P P', ' T ', 'P P'], {
        T: 'kubejs:runic_tablet',
        P: 'botania:livingwood_planks'
    });

    event.shaped(Item.of('sophisticatedstorage:shulker_box'), [' S ', 'MCM', ' S '], {
        S: Item.of('minecraft:shulker_shell'),
        C: Ingredient.of('#sophisticatedstorage:chests'),
        M: Item.of('kubejs:logistics_mechanism')
    }).id('kubejs:ss_shulker_box');

    let makeBarrel = (wood) => {
        event.shaped(Item.of('sophisticatedstorage:barrel', '{woodType:"' + wood + '"}'), ['LPL', 'LML', 'LPL'], {
            L: Item.of('minecraft:' + wood + '_log'),
            P: Item.of('minecraft:' + wood + '_planks'),
            M: Item.of('kubejs:logistics_mechanism')
        }).id('kubejs:ss_' + wood + '_barrel');
    }

    let makeChest = (wood) => {
        event.shaped(Item.of('sophisticatedstorage:chest', '{woodType:"' + wood + '"}'), ['LLL', 'LML', 'LLL'], {
            L: Item.of('minecraft:' + wood + '_log'),
            M: Item.of('kubejs:logistics_mechanism')
        }).id('kubejs:ss_' + wood + '_chest');
    }

    let woodTypes = [
        'acacia',
        'birch',
        'cherry',
        'dark_oak',
        'jungle',
        'mangrove',
        'oak',
        'spruce'
    ];

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

    woodTypes.forEach(wood => {
        makeBarrel(wood);
        makeChest(wood);
    });

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
    event.smithing(Item.of('sophisticatedstorage:stack_upgrade_tier_1', 2), Item.of('kubejs:runic_tablet'), 'sophisticatedstorage:upgrade_base', 'minecraft:anvil');
    event.smithing(Item.of('sophisticatedstorage:stack_upgrade_tier_2', 2), Item.of('kubejs:runic_tablet'), 'sophisticatedstorage:stack_upgrade_tier_1', 'ars_nouveau:source_gem');
    event.smithing(Item.of('sophisticatedstorage:stack_upgrade_tier_3', 2), Item.of('kubejs:runic_tablet'), 'sophisticatedstorage:stack_upgrade_tier_2', 'forbidden_arcanus:corrupti_dust');
    event.smithing(Item.of('sophisticatedstorage:stack_upgrade_tier_4', 2), Item.of('kubejs:runic_tablet'), 'sophisticatedstorage:stack_upgrade_tier_3', 'forbidden_arcanus:dark_matter');

    event.smithing('sophisticatedstorage:jukebox_upgrade', Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedstorage:upgrade_base'), Item.of('minecraft:jukebox'));

    let UpgradeIngredient = Item.of('sophisticatedstorage:basic_tier_upgrade');
    let SmithingTemplate = Item.of('kubejs:logistics_mechanism');
    // VANILLA to ...
    event.smithing(Item.of('sophisticatedstorage:basic_tier_upgrade', 2), SmithingTemplate, Ingredient.of('#sophisticatedstorage:barrels'), Item.of('minecraft:redstone'));
    event.smithing(Item.of('sophisticatedstorage:basic_to_copper_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:storage_blocks/copper'));
    event.smithing(Item.of('sophisticatedstorage:basic_to_iron_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:storage_blocks/iron'));
    event.smithing(Item.of('sophisticatedstorage:basic_to_gold_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:storage_blocks/gold'));
    event.smithing(Item.of('sophisticatedstorage:basic_to_diamond_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:storage_blocks/diamond'));
    event.smithing(Item.of('sophisticatedstorage:basic_to_netherite_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:ingots/netherite'));

    UpgradeIngredient = Item.of('sophisticatedstorage:basic_to_copper_tier_upgrade');
    // COPPER to ...
    event.smithing(Item.of('sophisticatedstorage:copper_to_iron_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:storage_blocks/iron'));
    event.smithing(Item.of('sophisticatedstorage:copper_to_gold_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:storage_blocks/gold'));
    event.smithing(Item.of('sophisticatedstorage:copper_to_diamond_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:storage_blocks/diamond'));
    event.smithing(Item.of('sophisticatedstorage:copper_to_netherite_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:ingots/netherite'));

    UpgradeIngredient = Item.of('sophisticatedstorage:copper_to_iron_tier_upgrade');
    // IRON to ...
    event.smithing(Item.of('sophisticatedstorage:iron_to_gold_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:storage_blocks/gold'));
    event.smithing(Item.of('sophisticatedstorage:iron_to_diamond_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:storage_blocks/diamond'));
    event.smithing(Item.of('sophisticatedstorage:iron_to_netherite_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:ingots/netherite'));

    UpgradeIngredient = Item.of('sophisticatedstorage:iron_to_gold_tier_upgrade');
    // GOLD to ...
    event.smithing(Item.of('sophisticatedstorage:gold_to_diamond_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:storage_blocks/diamond'));
    event.smithing(Item.of('sophisticatedstorage:gold_to_netherite_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:ingots/netherite'));

    UpgradeIngredient = Item.of('sophisticatedstorage:gold_to_diamond_tier_upgrade');
    // DIAMOND to ...
    event.smithing(Item.of('sophisticatedstorage:diamond_to_netherite_tier_upgrade', 2), SmithingTemplate, UpgradeIngredient, Ingredient.of('#forge:ingots/netherite'));

    event.smithing(Item.of('sophisticatedstorage:chipped/botanist_workbench_upgrade'), SmithingTemplate, Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:botanist_workbench'));
    event.smithing(Item.of('sophisticatedstorage:chipped/glassblower_upgrade'), SmithingTemplate, Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:glassblower'));
    event.smithing(Item.of('sophisticatedstorage:chipped/carpenters_table_upgrade'), SmithingTemplate, Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:carpenters_table'));
    event.smithing(Item.of('sophisticatedstorage:chipped/loom_table_upgrade'), SmithingTemplate, Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:loom_table'));
    event.smithing(Item.of('sophisticatedstorage:chipped/mason_table_upgrade'), SmithingTemplate, Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:mason_table'));
    event.smithing(Item.of('sophisticatedstorage:chipped/alchemy_bench_upgrade'), SmithingTemplate, Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:alchemy_bench'));
    event.smithing(Item.of('sophisticatedstorage:chipped/tinkering_table_upgrade'), SmithingTemplate, Item.of('sophisticatedstorage:upgrade_base'), Item.of('chipped:tinkering_table'));
});

//priority: 0

ServerEvents.recipes(event => {
    event.remove({output: 'sophisticatedbackpacks:upgrade_base'});
    event.remove({output: /sophisticatedbackpacks\:stack_upgrade_tier/});
    event.remove({id: 'sophisticatedbackpacks:tank_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:battery_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:jukebox_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:xp_pump_upgrade'});
    event.remove({output: /sophisticatedbackpacks\:.*_backpack/});
    event.remove({id: 'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic'});
    event.remove({id: /sophisticatedbackpacks\:chipped\/.*_upgrade/});
    event.replaceInput({mod: 'sophisticatedbackpacks'}, 'minecraft:redstone', 'kubejs:logistics_mechanism');
    event.replaceInput({mod: 'sophisticatedbackpacks'}, 'minecraft:string', 'ars_nouveau:magebloom_fiber');
    event.replaceInput({mod: 'sophisticatedbackpacks'}, 'minecraft:iron_ingot', '#forge:plates/iron');
    event.replaceInput({mod: 'sophisticatedbackpacks'}, 'minecraft:gold_ingot', '#forge:plates/brass');

    let upgrades = [
        'pickup',
        'filter',
        'magnet',
        'feeding',
        'compacting',
        'void',
        'restock',
        'deposit',
        'refill',
        'smelting',
        'smoking',
        'blasting',
        'tool_swapper',
        'pump'
    ];

    upgrades.forEach(upgrade => {
        let type = ['smelting', 'smoking', 'blasting'].includes(upgrade) ? 'auto' : 'advanced';

        event.remove({id: 'sophisticatedbackpacks:' + type + '_' + upgrade + '_upgrade'});

        event.shaped(Item.of('sophisticatedbackpacks:' + type + '_' + upgrade + '_upgrade'), [
            ' D ',
            'BUB',
            'LLL'
        ], {
            D: '#forge:plates/diamond',
            B: '#forge:plates/brass',
            U: 'sophisticatedbackpacks:' + upgrade + '_upgrade',
            L: 'kubejs:logistics_mechanism'
        }).id('kubejs:backpackupgrades/' + type + '_' + upgrade + '_upgrade');
    });

    event.smithing(Item.of('kubejs:leather_pocket'), Item.of('kubejs:runic_tablet'), Item.of('minecraft:bundle'), Ingredient.of('#forge:ingots/iron'));

    event.shaped('sophisticatedbackpacks:upgrade_base', [' L ', 'LTL', ' L '], {
        T: 'kubejs:runic_tablet',
        L: 'minecraft:leather'
    });

    event.smithing('sophisticatedbackpacks:stack_upgrade_tier_1', Item.of('kubejs:runic_tablet'), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('minecraft:anvil'));
    event.smithing('sophisticatedbackpacks:stack_upgrade_tier_2', Item.of('kubejs:runic_tablet'), Item.of('sophisticatedbackpacks:stack_upgrade_tier_1'), Item.of('ars_nouveau:source_gem'));
    event.smithing('sophisticatedbackpacks:stack_upgrade_tier_3', Item.of('kubejs:runic_tablet'), Item.of('sophisticatedbackpacks:stack_upgrade_tier_2'), Item.of('forbidden_arcanus:corrupti_dust'));
    event.smithing('sophisticatedbackpacks:stack_upgrade_tier_4', Item.of('kubejs:runic_tablet'), Item.of('sophisticatedbackpacks:stack_upgrade_tier_3'), Item.of('forbidden_arcanus:dark_matter'));

    event.smithing('sophisticatedbackpacks:xp_pump_upgrade', Item.of('kubejs:runic_tablet'), Item.of('sophisticatedbackpacks:advanced_pump_upgrade'), Item.of('thermal:xp_crystal'));
    event.smithing('sophisticatedbackpacks:tank_upgrade', Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedbackpacks:advanced_pump_upgrade'), Item.of('thermal:fluid_cell_frame'));
    event.smithing('sophisticatedbackpacks:jukebox_upgrade', Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('minecraft:jukebox'));
    event.smithing('sophisticatedbackpacks:battery_upgrade', Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('thermal:energy_cell_frame'));

    event.smithing(Item.of('sophisticatedbackpacks:chipped/botanist_workbench_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('chipped:botanist_workbench'));
    event.smithing(Item.of('sophisticatedbackpacks:chipped/glassblower_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('chipped:glassblower'));
    event.smithing(Item.of('sophisticatedbackpacks:chipped/carpenters_table_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('chipped:carpenters_table'));
    event.smithing(Item.of('sophisticatedbackpacks:chipped/loom_table_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('chipped:loom_table'));
    event.smithing(Item.of('sophisticatedbackpacks:chipped/mason_table_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('chipped:mason_table'));
    event.smithing(Item.of('sophisticatedbackpacks:chipped/alchemy_bench_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('chipped:alchemy_bench'));
    event.smithing(Item.of('sophisticatedbackpacks:chipped/tinkering_table_upgrade'), Item.of('kubejs:logistics_mechanism'), Item.of('sophisticatedbackpacks:upgrade_base'), Item.of('chipped:tinkering_table'));

    event.shapeless('sophisticatedbackpacks:gold_backpack', ['sophisticatedbackpacks:backpack', Ingredient.of('#forge:plates/brass')]).modifyResult((inventory, itemstack) => {
        let backpack = inventory.find(Item.of('sophisticatedbackpacks:backpack').weakNBT());
        if (backpack.nbt == null) return itemstack;
        let nbt = backpack.nbt;
        nbt.inventorySlots += 18;
        nbt.upgradeSlots -= 1;
        return itemstack.withNBT(nbt);
    });
    event.shapeless('sophisticatedbackpacks:iron_backpack', ['sophisticatedbackpacks:gold_backpack', 'kubejs:radiant_coil']).modifyResult((inventory, itemstack) => {
        let backpack = inventory.find(Item.of('sophisticatedbackpacks:gold_backpack').weakNBT());
        if (backpack.nbt == null) return itemstack;
        let nbt = backpack.nbt;
        nbt.inventorySlots += 18;
        nbt.upgradeSlots += 1;
        return itemstack.withNBT(nbt);
    });
    event.shapeless('sophisticatedbackpacks:diamond_backpack', ['sophisticatedbackpacks:iron_backpack', 'pneumaticcraft:module_expansion_card']).modifyResult((inventory, itemstack) => {
        let backpack = inventory.find(Item.of('sophisticatedbackpacks:iron_backpack').weakNBT());
        if (backpack.nbt == null) return itemstack;
        let nbt = backpack.nbt;
        nbt.inventorySlots -= 9;
        nbt.upgradeSlots += 3;
        return itemstack.withNBT(nbt);
    });
    event.shapeless('sophisticatedbackpacks:netherite_backpack', ['sophisticatedbackpacks:iron_backpack', 'pneumaticcraft:printed_circuit_board']).modifyResult((inventory, itemstack) => {
        let backpack = inventory.find(Item.of('sophisticatedbackpacks:iron_backpack').weakNBT())
        if (backpack.nbt == null) return itemstack;
        let nbt = backpack.nbt;
        nbt.inventorySlots += 18;
        nbt.upgradeSlots += 1;
        return itemstack.withNBT(nbt);
    });
});
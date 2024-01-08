//priority: 0
BlockEvents.rightClicked(event => {
    let {block, item} = event;
    if (event.hand != 'main_hand') {
        return;
    }
    if (event.player.crouching) {
        return;
    }
    if (block.entityId != 'sophisticatedbackpacks:backpack') {
        return;
    }

    let data = block.getEntityData();
    let bpTag = block.entityData.backpackData.tag;
    let slots = 0;
    let upgradeSlots = 0;
    if (bpTag.leather == undefined) {
        data.backpackData.tag.leather = parseInt(0);
        data.backpackData.tag.string = parseInt(0);
        data.backpackData.tag.pocket = parseInt(0);
        data.backpackData.tag.obelisk = parseInt(0);
        // data.backpackData.tag.pcb = parseInt(0);
        //data.backpackData.tag. <others> = parseInt(0);
        block.mergeEntityData(data);
        bpTag = block.entityData.backpackData.tag;
    }

    if (item == Item.of('minecraft:leather').id && bpTag.leather < 4) {
        slots = 1;
        data.backpackData.tag.leather++;
    } else if (item == Item.of('minecraft:string').id && bpTag.string < 2) {
        slots = 1;
        data.backpackData.tag.string++;
    } else if (item == Item.of('kubejs:leather_pocket').id && bpTag.pocket < 2) {
        slots = 6;
        data.backpackData.tag.pocket++;
    } else if (item == Item.of('forbidden_arcanus:arcane_crystal_obelisk').id && bpTag.obelisk < 1) {
        upgradeSlots = 1;
        data.backpackData.tag.obelisk++;
    }
    // else if (item == Item.of('kubejs:finalpcb').id && bpTag.pcb < 2) {upgradeSlots = 1; data.backpackData.tag.pcb++}
    else {
        return;
    }

    data.backpackData.tag.inventorySlots += slots;
    data.backpackData.tag.upgradeSlots += upgradeSlots;
    block.mergeEntityData(data);
    if (!event.player.creativeMode) {
        item.count--;
    }
    event.cancel();
})

ServerEvents.recipes(event => {
    event.smithing(Item.of('kubejs:leather_pocket'), Item.of('kubejs:runic_tablet'), Item.of('minecraft:bundle'), Ingredient.of('#forge:ingots/iron'));
    event.remove({output: 'sophisticatedbackpacks:upgrade_base'});
    event.shaped('sophisticatedbackpacks:upgrade_base', [' T ', 'TDT', ' T '], {
        T: 'kubejs:runic_tablet',
        D: 'forbidden_arcanus:polished_darkstone'
    });
    event.remove({output: /sophisticatedbackpacks\:stack_upgrade_tier/});
    event.smithing('sophisticatedbackpacks:stack_upgrade_tier_1', Item.of('kubejs:runic_tablet'), 'sophisticatedbackpacks:upgrade_base', 'minecraft:anvil');
    event.smithing('sophisticatedbackpacks:stack_upgrade_tier_2', Item.of('kubejs:runic_tablet'), 'sophisticatedbackpacks:stack_upgrade_tier_1', 'ars_nouveau:source_gem');
    event.smithing('sophisticatedbackpacks:stack_upgrade_tier_3', Item.of('kubejs:runic_tablet'), 'sophisticatedbackpacks:stack_upgrade_tier_1', 'forbidden_arcanus:aureal_bottle');
    event.smithing('sophisticatedbackpacks:stack_upgrade_tier_4', Item.of('kubejs:runic_tablet'), 'sophisticatedbackpacks:stack_upgrade_tier_1', 'forbidden_arcanus:orb_of_temporary_flight');
    event.remove({id: 'sophisticatedbackpacks:xp_pump_upgrade'});
    event.smithing('sophisticatedbackpacks:xp_pump_upgrade', Item.of('kubejs:runic_tablet'), 'sophisticatedbackpacks:upgrade_base', 'thermal:xp_crystal');
    event.remove({output: /sophisticatedbackpacks\:.*_backpack/});

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
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
});
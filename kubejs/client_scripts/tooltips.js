ItemEvents.tooltip(tooltip => {
    // description on bags
    function add_color_description(itemName, rarity, color) {
        tooltip.add(itemName, Text.of(rarity)[color]())
    }

    for (let i = 0; i < global.bag_name.length; i++) {
        add_color_description(`kubejs:${global.bag_name[i]}_bag_${global.rarity[0]}`, 'Common', global.rarity_color.common)
        add_color_description(`kubejs:${global.bag_name[i]}_bag_${global.rarity[1]}`, 'Rare', global.rarity_color.rare)
        add_color_description(`kubejs:${global.bag_name[i]}_bag_${global.rarity[2]}`, 'Epic', global.rarity_color.epic);
    }

    tooltip.addAdvanced('ars_nouveau:source_gem', (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.darkPurple('Made by squirting Source onto Runic Tablets.'))
    })

    tooltip.addAdvanced(/sophisticatedbackpacks:.*backpack/, (item, advanced, text) => {
        if (!tooltip.isShift()) {
            if (item.nbt) {
                text.add(1, "§7Leather:§r " + (item.nbt.leather ? item.nbt.leather : 0) + "§7/§r4§7   (§r+1§7 Slot each)")
                text.add(2, "§7String:  §r " + (item.nbt.string ? item.nbt.string : 0) + "§7/§r2§7   (§r+1§7 Slot each)")
                text.add(3, "§7Pockets:§r " + (item.nbt.pocket ? item.nbt.pocket : 0) + "§7/§r2§7   (§r+6§7 Slots each)")
                text.add(4, "§7Obelisks:§r " + (item.nbt.obelisk ? item.nbt.obelisk : 0) + "§7/§r1§7   (§r+1§7 Upgrade Slot each)")
                // text.add(5, "§7Final PCBs:§r " + (item.nbt.pcb ? item.nbt.pcb : 0) + "§7/§r2§7   (§r+1§7 Upgrade Slot each)")
            } else {
                text.add(1, "§7Leather:§r 0§7/§r4§7   (§r+1§7 Slot)")
                text.add(2, "§7String:  §r 0§7/§r2§7   (§r+1§7 Slot)")
                text.add(3, "§7Pockets:§r 0§7/§r2§7   (§r+6§7 Slots)")
                text.add(4, "§7Obelisks:§r 0§7/§r1§7   (§r+1§7 Upgrade Slot)")
                // text.add(5, "§7Final PCBs:§r 0§7/§r2§7   (§r+1§7 Upgrade Slot)")
            }
        }
    })
    tooltip.addAdvanced("sophisticatedbackpacks:backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r9§7 Slots, §r1§7 Upgrade Slot")
        }
    })
    tooltip.addAdvanced("sophisticatedbackpacks:iron_backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r45§7 Slots, §r1§7 Upgrade Slot")
        }
    })
    tooltip.addAdvanced("sophisticatedbackpacks:gold_backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r27§7 Slots, §r0§7 Upgrade Slot")
        }
    })
    tooltip.addAdvanced("sophisticatedbackpacks:diamond_backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r36§7 Slots, §r4§7 Upgrade Slots")
        }
    })
    tooltip.addAdvanced("sophisticatedbackpacks:netherite_backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r63§7 Slots, §r2§7 Upgrade Slots")
        }
    })
})
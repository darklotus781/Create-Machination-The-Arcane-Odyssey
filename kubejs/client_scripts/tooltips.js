ItemEvents.tooltip(tooltip => {
    // description on bags
    function add_color_description(itemName, rarity, color) {
        tooltip.add(itemName, Text.of(rarity)[color]());
    }

    for (let i = 0; i < global.bag_name.length; i++) {
        add_color_description(`kubejs:${global.bag_name[i]}_bag_${global.rarity[0]}`, 'Common', global.rarity_color.common);
        add_color_description(`kubejs:${global.bag_name[i]}_bag_${global.rarity[1]}`, 'Rare', global.rarity_color.rare);
        add_color_description(`kubejs:${global.bag_name[i]}_bag_${global.rarity[2]}`, 'Epic', global.rarity_color.epic);
    }

    let locked_item = (id, quest) => tooltip.addAdvanced(id, (item, advanced, text) => {
        text.add(1, Text.aqua('Special Item:'))
        text.add(2, Text.gray("This item cannot be crafted until it's unlocked in a quest!"));
        text.add(3, Text.of(""));
        text.add(4, Text.of(`§6Unlocked in§r §2${quest}`));
    });

    let main_assembly = (id, stage) => tooltip.add(id, [`§7Main Assembly: ${stage == "7" ? "§6Finale" : "§6Chapter " + stage}`, '§8Consider automating this item'])
    let bonus_assembly = (id, stage) => tooltip.add(id, [`§7Bonus Assembly: §6Chapter ${stage}`, '§8Consider automating this item'])
    let not_consumed = (id, stage) => tooltip.add(id, [`§7Not consumed in the`, `§7Assembly Process`])

    locked_item('minecraft:ender_eye', 'Chapter 3: Overworld Conquered');

    tooltip.addAdvanced('ars_nouveau:source_gem', (item, advanced, text) => {
        text.remove(1);
        text.add(1, Text.darkPurple('Made by tossing a Runic Tablet through an Elven Portal'));
    });

    tooltip.addAdvanced('ars_nouveau:magebloom_crop', (item, advanced, text) => {
        text.remove(1);
        text.add(1, Text.darkPurple('Cannot be crafted, only found in loot bags and chests!'));
    });

    tooltip.addAdvanced('ars_nouveau:magebloom', (item, advanced, text) => {
        text.remove(1);
        text.add(1, 'Grown from seeds found in loot bags and chests.');
    });

    tooltip.add('create:refined_radiance', 'Toss Chromatic Compound on a Beacon');
    tooltip.add('create:shadow_steel', 'Toss Chromatic Compound into the Void or below Bedrock');

    tooltip.add('createresourcegeodes:catalyst_activator_wand', 'Used for moving Catalysts by right clicking.');

    tooltip.addAdvanced(/sophisticatedbackpacks:.*backpack/, (item, advanced, text) => {
        if (!tooltip.isShift()) {
            if (item.nbt) {
                text.add(1, "§7Leather:§r " + (item.nbt.leather ? item.nbt.leather : 0) + "§7/§r4§7   (§r+1§7 Slot each)");
                text.add(2, "§7String:  §r " + (item.nbt.string ? item.nbt.string : 0) + "§7/§r2§7   (§r+1§7 Slot each)");
                text.add(3, "§7Pockets:§r " + (item.nbt.pocket ? item.nbt.pocket : 0) + "§7/§r2§7   (§r+6§7 Slots each)");
                text.add(4, "§7Obelisks:§r " + (item.nbt.obelisk ? item.nbt.obelisk : 0) + "§7/§r1§7   (§r+1§7 Upgrade Slot each)");
                // text.add(5, "§7Final PCBs:§r " + (item.nbt.pcb ? item.nbt.pcb : 0) + "§7/§r2§7   (§r+1§7 Upgrade Slot each)")
            } else {
                text.add(1, "§7Leather:§r 0§7/§r4§7   (§r+1§7 Slot)");
                text.add(2, "§7String:  §r 0§7/§r2§7   (§r+1§7 Slot)");
                text.add(3, "§7Pockets:§r 0§7/§r2§7   (§r+6§7 Slots)");
                text.add(4, "§7Obelisks:§r 0§7/§r1§7   (§r+1§7 Upgrade Slot)");
                // text.add(5, "§7Final PCBs:§r 0§7/§r2§7   (§r+1§7 Upgrade Slot)")
            }
        }
    });
    tooltip.addAdvanced("sophisticatedbackpacks:backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r9§7 Slots, §r1§7 Upgrade Slot");
        }
    });
    tooltip.addAdvanced("sophisticatedbackpacks:copper_backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r27§7 Slots, §r0§7 Upgrade Slot");
        }
    });
    tooltip.addAdvanced("sophisticatedbackpacks:iron_backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r36§7 Slots, §r1§7 Upgrade Slot");
        }
    });
    tooltip.addAdvanced("sophisticatedbackpacks:gold_backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r54§7 Slots, §r2§7 Upgrade Slot");
        }
    });
    tooltip.addAdvanced("sophisticatedbackpacks:diamond_backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r72§7 Slots, §r4§7 Upgrade Slots");
        }
    });
    tooltip.addAdvanced("sophisticatedbackpacks:netherite_backpack", (item, advanced, text) => {
        if (!tooltip.isShift()) {
            text.add(1, "§7Base: §r108§7 Slots, §r4§7 Upgrade Slots");
        }
    });
    tooltip.addAdvanced("artifacts:bunny_hoppers", (item, advanced, text) => {
        text.add(3,'§6Enables Flight in The Aether');
    });


    main_assembly('kubejs:kinetic_mechanism', "1")
    main_assembly('kubejs:andesite_machine', "1")
    bonus_assembly('kubejs:sealed_mechanism', "1A")
    bonus_assembly('kubejs:sealed_machine', "1A")
    bonus_assembly('kubejs:logistics_mechaism', "1B")
    bonus_assembly('kubejs:rotation_mechanism', "1C")
    main_assembly('create:precision_mechanism', "2")
    main_assembly('kubejs:brass_machine', "2")
    bonus_assembly('kubejs:power_mechanism', "2A")
    bonus_assembly('kubejs:power_machine', "2A")
    bonus_assembly('kubejs:scorch_mechanism', "2B")
    bonus_assembly('kubejs:scorch_machine', "2B")
    bonus_assembly('kubejs:sturdy_mechanism', "2C")
    bonus_assembly('kubejs:sturdy_machine', "2C")
    main_assembly('kubejs:radiant_mechanism', "3")
    main_assembly('kubejs:radiant_machine', "3")
    main_assembly('kubejs:plastic_mechanism', "4")
    main_assembly('kubejs:plastic_machine', "4")
    main_assembly('kubejs:integrational_mechanism', "5")
    main_assembly('kubejs:integrational_machine', "5")
    main_assembly('kubejs:quantum_mechanism', "6")
    main_assembly('kubejs:time_mechanism', "7")
    main_assembly('kubejs:time_machine', "7")


    tooltip.add('kubejs:leather_pocket', Text.gold('Useful for adding more slots to your backpack'));
})
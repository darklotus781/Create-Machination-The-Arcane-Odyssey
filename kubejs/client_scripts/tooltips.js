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

    // let locked_item = (id, quest, extra) => tooltip.addAdvanced(id, (item, advanced, text) => {
    //     text.add(Text.aqua('Special Item:'))
    //     text.add(Text.gray("This item cannot be manually crafted until it's unlocked in a quest!"));
    //     if (extra) {
    //         text.add(extra);
    //     }
    //     text.add(Text.of(""));
    //     text.add(Text.of(`§6Unlocked in§r §2${quest}`));
    // });

    // locked_item('minecraft:ender_eye', 'Chapter 3: Overworld Conquered', Text.gray('Can be acquired via a Ritual'));

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

    tooltip.add('create:refined_radiance', '');
    tooltip.add('create:shadow_steel', '');

    tooltip.add('createresourcegeodes:catalyst_activator_wand', 'Used for moving Catalysts by right clicking.');

    tooltip.addAdvanced(/kubejs:.*spawn_egg/, (item, advanced, text) => {
        if (tooltip.isShift()) {
            text.add("§6Doesn't work on Spawners!");
        }
    });

    tooltip.addAdvanced('kubejs:magical_rock_candy', (item, advanced, text) => {
        text.add("§1Flight (2:30)");
        text.add("§6Fire Resistance (1:30)");
        text.add("§4Warning:§r §cOnly eat in The Aether!");
        if (tooltip.isShift()) {
            text.add("§cEating outside The Aether will cause negative effects and remove flight!");
        }
    });

    tooltip.addAdvanced('occultism:datura_seeds', (item, advanced, text) => {
        text.add(Text.darkAqua('Only dropped by the Elder Guardian!'));
    });

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

    let frameText = Text.aqua('This is an intermediate product, chisel it smooth to make a working casing!');
    tooltip.add('kubejs:andesite_frame', frameText);
    tooltip.add('kubejs:brass_frame', frameText);
    tooltip.add('kubejs:copper_frame', frameText);
    tooltip.add('kubejs:railway_frame', frameText);
    tooltip.add('kubejs:refined_radiance_frame', frameText);
    tooltip.add('kubejs:shadow_steel_frame', frameText);

    let chiselText = Text.green('Used for smoothing out a Casing Frame');
    tooltip.addAdvanced('kubejs:andesite_chisel', (item, advanced, text) => {
        text.add(chiselText);
        text.add('Can be repaired in an Anvil with Andesite Alloy');
    });
    tooltip.addAdvanced('kubejs:brass_chisel', (item, advanced, text) => {
        text.add(chiselText);
        text.add('Can be repaired in an Anvil with Brass Plates');
    });
    tooltip.addAdvanced('kubejs:copper_chisel', (item, advanced, text) => {
        text.add(chiselText);
        text.add('Can be repaired in an Anvil with Copper Plates');
    });
    tooltip.addAdvanced('kubejs:refined_chisel', (item, advanced, text) => {
        text.add(chiselText);
        text.add('Can be repaired in an Anvil with Refined Radiance');
    });
    tooltip.addAdvanced('kubejs:diamond_chisel', (item, advanced, text) => {
        text.add(chiselText);
        text.add('Can be repaired in an Anvil with Diamonds');
    });

    tooltip.add('kubejs:copper_mechanism', Text.gold('Copper tightly sealed with rubber!'));
    tooltip.add('kubejs:plastic_mechanism', Text.gold('It\'s very sturdy and coated in plastic!'));
    tooltip.add('kubejs:cyber_mechanism', Text.gold('It sounds like a 56k modem!?'));
    tooltip.add('kubejs:quantum_mechanism', Text.gold('Vibrates gently with a slight hum...'));
    tooltip.add('kubejs:temporal_mechanism', Text.gold('It smells like Space and Time...'));

    tooltip.add('kubejs:leather_pocket', Text.gold('Useful for adding more slots to your backpack'));
});

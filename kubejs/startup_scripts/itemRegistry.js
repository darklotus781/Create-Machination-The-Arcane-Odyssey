ItemEvents.toolTierRegistry(event => {
    event.add('stone_tool', tier => {
        tier.speed = 0;
        tier.attackDamageBonus = 0;
        tier.level = 0;
        tier.uses = 64;
        tier.repairIngredient = '#forge:stone';
    });
    event.add('iron_tool', tier => {
        tier.speed = 0;
        tier.attackDamageBonus = 0;
        tier.level = 0;
        tier.uses = 128;
        tier.repairIngredient = '#forge:plates/iron';
    });
    event.add('diamond_tool', tier => {
        tier.speed = 0;
        tier.attackDamageBonus = 0;
        tier.level = 0;
        tier.uses = 256;
        tier.repairIngredient = '#forge:gems/diamond';
    });
    event.add('andesite_tool', tier => {
        tier.speed = 0;
        tier.attackDamageBonus = 0;
        tier.level = 0;
        tier.uses = 128;
        tier.repairIngredient = '#forge:ingots/andesite_alloy';
    });
    event.add('brass_tool', tier => {
        tier.speed = 0;
        tier.attackDamageBonus = 0;
        tier.level = 0;
        tier.uses = 256;
        tier.repairIngredient = '#forge:plates/brass';
    });
    event.add('copper_tool', tier => {
        tier.speed = 0;
        tier.attackDamageBonus = 0;
        tier.level = 0;
        tier.uses = 256;
        tier.repairIngredient = '#forge:plates/copper';
    });
    event.add('refined_tool', tier => {
        tier.speed = 0;
        tier.attackDamageBonus = 0;
        tier.level = 0;
        tier.uses = 256;
        tier.repairIngredient = '#forge:ingots/refined_radiance';
    });
});

StartupEvents.registry('item', event => {
    let mechanism = (name, rarity, add_glow) => {
        let id = name.toLowerCase();
        event.create(id + '_mechanism')
            .texture('kubejs:item/mechanisms/' + id + '_mechanism')
            .displayName(name + ' Mechanism')
            .rarity(rarity ? rarity : RARITY_COMMON)
            .glow(add_glow ? add_glow : false);
    }

    let incomplete_mechanism = (name, rarity, add_glow) => {
        let id = name.toLowerCase();

        event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly')
            .texture('kubejs:item/mechanisms/incomplete_' + id + '_mechanism')
            .displayName('Incomplete ' + name + ' Mechanism')
            .rarity(rarity ? rarity : RARITY_COMMON)
            .glow(add_glow ? add_glow : false);
    }

    //https://minecraft.wiki/w/Spawn_Egg_colors
    let spawn_egg = (name, base_color, overlay_color) => {
        let id = name.toLowerCase().replace("'", "").split(' ').join('_')
        event.create(id)
            .color(0, base_color)
            .color(1, overlay_color)
            .parentModel("kubejs:item/spawn_egg")
            .texture("kubejs:item/spawn_egg_0")
            .displayName(name);
    }

    let tool = (name, rarity) => {
        let id = name.toLowerCase();
        event.create(id, 'sword').tier('tool').texture('kubejs:item/' + id).displayName(name).rarity(RARITY_COMMON);
    }

    event.create('wooden_mechanism')
        .texture('kubejs:item/mechanisms/wooden_mechanism')
        .tooltip('The Mechanism isn\'t sturdy enough to support further tiers of mechanisms.');


    mechanism('Logistics'); // Tier 1 Supplemental
    incomplete_mechanism('Logistics');
    mechanism('Andesite'); // Tier 1 Base
    incomplete_mechanism('Andesite');
    mechanism('Brass'); // Tier 2 Base
    incomplete_mechanism('Brass');
    mechanism('Copper'); // Tier 2 Base
    incomplete_mechanism('Copper');
    // mechanism('Rotation'); // Tier 2 Supplemental
    // incomplete_mechanism('Rotation');
    mechanism('Sturdy'); // Tier 2 Supplemental
    incomplete_mechanism('Sturdy');
    mechanism('Plastic', RARITY_UNCOMMON); // Tier 3 Base
    incomplete_mechanism('Plastic');
    mechanism('Cyber', RARITY_UNCOMMON);
    incomplete_mechanism('Cyber');
    mechanism('Temporal', RARITY_RARE);
    mechanism('Quantum', RARITY_EPIC, true);
    incomplete_mechanism('Quantum');
    mechanism('Radiant', RARITY_RARE, true);
    incomplete_mechanism('Radiant');
    mechanism('Power');
    incomplete_mechanism('Power');
    mechanism('Scorch');
    incomplete_mechanism('Scorch');

    event.create('redstone_alloy_ingot').displayName('Redstone Alloy Ingot');
    event.create('redstone_alloy_cable').displayName('Redstone Alloy Cable');
    event.create('fiberglass_plate').displayName('Fiberglass Plate');
    event.create('incomplete_pcb').displayName('Incomplete PCB');
    event.create('pcb').displayName('PCB');
    event.create('andesite_blend').texture('kubejs:item/andesite_blend').displayName('Andesite Blend');
    event.create('andesite_dust').texture('kubejs:item/andesite_dust').displayName('Andesite Dust');

    event.create('soaked_sheet').texture('kubejs:item/soaked_sheet').displayName('Soaked Copper Sheet');
    event.create('rough_sheet').texture('kubejs:item/rough_sheet').displayName('Rough Copper Sheet');

    event.create('resistor').texture('kubejs:item/resistor').displayName('Resistor');
    event.create('inductor').texture('kubejs:item/inductor').displayName('Induction Coil');
    event.create('ceramic_capacitor').texture('kubejs:item/capacitor_ceramic').displayName('Ceramic Capacitor');
    event.create('electrolytic_capacitor').texture('kubejs:item/capacitor_electrolytic').displayName('Electrolytic Capacitor');

    event.create('dirt_resistor').texture('kubejs:item/resistor_dirt').displayName('Dirty Resistor');
    event.create('dirt_inductor').texture('kubejs:item/inductor_dirt').displayName('Dirty Induction Coil');
    event.create('dirt_ceramic_capacitor').texture('kubejs:item/capacitor_ceramic_dirt').displayName('Dirty Ceramic Capacitor');
    event.create('dirt_electrolytic_capacitor').texture('kubejs:item/capacitor_electrolytic_dirt').displayName('Dirty Electrolytic Capacitor');
    event.create('inductor_core').texture('kubejs:item/inductor_core').displayName('Magnetic Core');

    // Chromatic Stuff
    event.create('red_compound').texture('kubejs:item/red_compound').displayName('Red Chroma Compound');
    event.create('green_compound').texture('kubejs:item/green_compound').displayName('Green Chroma Compound');
    event.create('blue_compound').texture('kubejs:item/blue_compound').displayName('Blue Chroma Compound');
    event.create('pink_compound').texture('kubejs:item/pink_compound').displayName('Pink Chroma Compound');
    event.create('dirty_dye_compound').texture('kubejs:item/dirty_compound').displayName('Dirty Chroma Compound');
    event.create('chroma_compound').texture('kubejs:item/chroma_compound').displayName('Pure Chroma Compound').rarity(RARITY_RARE);
    event.create('radiant_steel').texture('kubejs:item/radiant_steel').displayName('Radiant Steel Alloy').glow(true).rarity(RARITY_RARE);

    // Tools
    event.create('stone_saw', 'sword').tier('stone_tool').texture('kubejs:item/stone_saw').displayName('Stone Saw').attackDamageBaseline(0);
    event.create('iron_saw', 'sword').tier('iron_tool').texture('kubejs:item/iron_saw').displayName('Iron Saw').attackDamageBaseline(0);
    event.create('diamond_saw', 'sword').tier('diamond_tool').texture('kubejs:item/diamond_saw').displayName('Diamond Saw').attackDamageBaseline(0);
    event.create('screwdriver', 'sword').tier('iron_tool').texture('kubejs:item/screwdriver').displayName('Screwdriver').attackDamageBaseline(0);
    event.create('andesite_chisel', 'sword').tier('andesite_tool').texture('kubejs:item/andesite_chisel').displayName('Andesite Chisel').attackDamageBaseline(0);
    event.create('brass_chisel', 'sword').tier('brass_tool').texture('kubejs:item/brass_chisel').displayName('Brass Chisel').attackDamageBaseline(0);
    event.create('copper_chisel', 'sword').tier('copper_tool').texture('kubejs:item/copper_chisel').displayName('Copper Chisel').attackDamageBaseline(0);
    event.create('refined_chisel', 'sword').tier('refined_tool').texture('kubejs:item/refined_chisel').displayName('Refined Chisel').attackDamageBaseline(0);
    event.create('diamond_chisel', 'sword').tier('diamond_tool').texture('kubejs:item/diamond_chisel').displayName('Diamond Chisel').attackDamageBaseline(0);
    event.create('soldering_iron', 'sword').tier('iron_tool').texture('kubejs:item/soldering_iron').displayName('Soldering Iron').attackDamageBaseline(0);
    event.create('resonator', 'sword').tier('iron_tool').texture('kubejs:item/resonator').displayName('Magnetic Resonator').attackDamageBaseline(0);

    // Different Tubes
    event.create('empty_tube');

    // Incomplete / Transitional Devices

    event.create('incomplete_cogwheel', 'create:sequenced_assembly').displayName('Broken Cogwheel').parentModel('create:block/cogwheel_shaftless');
    event.create('incomplete_resistor', 'create:sequenced_assembly').texture('kubejs:item/incomplete_resistor').displayName('Incomplete Resistor');
    event.create('incomplete_inductor', 'create:sequenced_assembly').texture('kubejs:item/incomplete_inductor').displayName('Incomplete Induction Coil');
    event.create('incomplete_ceramic_capacitor', 'create:sequenced_assembly').texture('kubejs:item/incomplete_capacitor_ceramic').displayName('Incomplete Ceramic Capacitor');
    event.create('incomplete_electrolytic_capacitor', 'create:sequenced_assembly').texture('kubejs:item/incomplete_capacitor_electrolytic').displayName('Incomplete Electrolytic Capacitor');
    event.create('incomplete_inductor_core', 'create:sequenced_assembly').texture('kubejs:item/incomplete_inductor_core').displayName('Incomplete Magnetic Core');
    event.create('incomplete_electronic_circuit', 'create:sequenced_assembly').displayName('Incomplete Electronic Circuit');
    event.create('incomplete_saddle', 'create:sequenced_assembly').texture('kubejs:item/incomplete_saddle').displayName('Incomplete Saddle');
    event.create('incomplete_rose_quartz', 'create:sequenced_assembly').texture('kubejs:item/incomplete_rose_quartz').displayName('Incomplete Rose Quartz');
    event.create('incomplete_empty_tube', 'create:sequenced_assembly').texture('kubejs:item/incomplete_empty_tube').displayName('Incomplete Empty Tube');
    event.create('incomplete_netherite_dust', 'create:sequenced_assembly');
    event.create('blank_runic_tablet').texture('kubejs:item/blank_runic_tablet').displayName('Blank Runic Tablet');

    // AE2 Incomplete Processors
    event.create('incomplete_calculation_processor', 'create:sequenced_assembly').texture('kubejs:item/incomplete_calculation_processor').displayName('Incomplete Calculation Processor');
    event.create('incomplete_engineering_processor', 'create:sequenced_assembly').texture('kubejs:item/incomplete_engineering_processor').displayName('Incomplete Engineering Processor');
    event.create('incomplete_logic_processor', 'create:sequenced_assembly').texture('kubejs:item/incomplete_logic_processor').displayName('Incomplete Logic Processor');

    // Functional Storage Supplemental
    event.create('fs_upgrade_base').texture('kubejs:item/fs_upgrade_base').displayName('Storage Upgrade Base');
    event.create('fs_upgrade_input').texture('kubejs:item/fs_upgrade_input').displayName('Storage Upgrade Base Input');
    event.create('fs_upgrade_output').texture('kubejs:item/fs_upgrade_output').displayName('Storage Upgrade Base Output');

    // Misc Items
    event.create('leather_pocket').texture('kubejs:item/leather_pocket').displayName('Leather Pocket').tooltip(Text.gold('Used to add slots to backpacks.'));
    event.create('runic_tablet').displayName('Runic Tablet').tooltip('What mysteries may this behold?');
    event.create('warp_fragments').rarity(RARITY_RARE).glow(true);
    event.create('nether_star_dust').texture('kubejs:item/nether_star_crushed').displayName('Nether Star Dust').rarity(RARITY_UNCOMMON).glow(true);
    event.create('nether_star_plate').texture('kubejs:item/nether_star_plate').displayName('Nether Star Plate').rarity(RARITY_RARE).glow(true);
    event.create('radiant_coil').texture('kubejs:item/radiant_coil').displayName('Radiant Induction Coil').glow(true);
    event.create('radiant_sheet').texture('kubejs:item/radiant_sheet').displayName('Radiant Sheet').glow(true);
    event.create('petrified_sheet').texture('kubejs:item/petrified_sheet').displayName('Petrified Sheet');
    event.create('enriched_rubber').texture('kubejs:item/enriched_rubber').displayName('Menril Enriched Rubber');
    event.create('rune_dust').displayName('Rune Dust');
    event.create('anthracene').displayName('Anthracene').tooltip('C₁₄H₁₀');
    event.create('incomplete_anthraquinone').displayName('Incomplete Anthraquinone').tooltip('Next: Submerge in Chromic Acid');
    event.create('anthraquinone').displayName('Anthraquinone').tooltip('C₁₄H₈O₂');
    event.create('chromium').displayName('Chromium').tooltip('Cr');
    event.create('powdered_flint').displayName('Powdered Flint').tooltip('Mix with Refined Fuel to create gunpowder');
    event.create('empty_vial').displayName('Empty Vial');
    event.create('netherite_dust')


    event.create('sourcegem_fragments').displayName('Source Crystal Fragments');
    // event.create('menril_shrub').tooltip('With the weakening of the Arcane so have the Arcane Trees been weakened. Can you restore this artifact?');
    // event.create('rejuvinated_menril_shrub').tooltip('Youve restored it, well to some part. To fully restore the Menril Sapling you must continue.');
    event.create('time_crystal').displayName('Time Crystal Shards');
    event.create('carbon_sheet').texture('kubejs:item/carbon_sheet').displayName('Carbon Sheet');
    event.create('mica_sheet').texture('kubejs:item/mica_sheet').displayName('Mica Sheet');
    event.create('ceramic_powder').texture('kubejs:item/ceramic_powder').displayName('Ceramic Powder');
    event.create('plastic').texture('kubejs:item/plastic').displayName('Plastic Bar');
    event.create('nickel_compound').texture('kubejs:item/nickel_compound').displayName('Nickel Compound');
    event.create('invar_compound', 'create:sequenced_assembly').texture('kubejs:item/invar_compound').displayName('Unprocessed Invar Ingot');

    // Seeds / Clusters
    event.create('certus_quartz_seed').texture('kubejs:item/certus_quartz_seed').displayName('Certus Quartz Seed');
    event.create('certus_quartz_cluster').texture('kubejs:item/certus_quartz_cluster').displayName('Certus Quartz Cluster');
    event.create('redstone_seed').texture('kubejs:item/redstone_seed').displayName('Redstone Seed');
    event.create('redstone_cluster').texture('kubejs:item/redstone_cluster').displayName('Redstone Cluster');
    event.create('quartz_seed').texture('kubejs:item/quartz_seed').displayName('Quartz Seed');
    event.create('quartz_cluster').texture('kubejs:item/quartz_cluster').displayName('Quartz Cluster');
    event.create('fluix_seed').texture('kubejs:item/fluix_seed').displayName('Fluix Seed');
    event.create('fluix_cluster').texture('kubejs:item/fluix_cluster').displayName('Fluix Cluster');
    event.create('lapis_seed').texture('kubejs:item/lapis_seed').displayName('Lapis Seed');
    event.create('lapis_cluster').texture('kubejs:item/lapis_cluster').displayName('Lapis Cluster');

    // AE2 Stuff
    event.create('ae2:logic_processor_press').displayName('Logic Processor Press');
    event.create('ae2:calculation_processor_press').displayName('Calculation Processor Press');
    event.create('ae2:silicon_press').displayName('Silicon Press');
    event.create('ae2:engineering_processor_press').displayName('Engineering Processor Press');

    // Smithing
    event.create('mechanism_smithing_template', 'smithing_template')
        .displayName('Machination Smithing Template')
        .appliesTo('Mechanisms')
        .ingredients('Catalyzing Items')
        .appliesToSlotDescription('Insert one (1) Item')
        .ingredientsSlotDescription('Insert one (1) Mechanism')
        .texture('kubejs:item/mechanism_smithing_template');

    event.create('machine_smithing_template');

    event.create('ritual_dummy/ender_eye')
        .displayName('Ritual: Craft Eye of Ender')
        .tooltip("Used to locate a stronghold and activate the end portal.  Ritual Crafting is a way to bypass the crafting grid recipe.")
        .texture('occultism:item/ritual_dummy');

    // Spawn Eggs - custom spawn eggs don't work on spawners ;)
    global.spawnableMobs.forEach(egg => {
        spawn_egg(egg.name, egg.base_color, egg.overlay_color)
    });

    event.create('magical_rock_candy').displayName('§a§lMagical Rock Candy').food(food => {
        food
            .hunger(1)
            .saturation(0.5)
            .effect('ars_nouveau:flight', 20 * 60 * 1.5, 1, 1)
            .alwaysEdible()
            .fastToEat()

    }).maxStackSize(8).rarity(RARITY_EPIC).glow(true);
});

ItemEvents.modification(event => {
    let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
    colors.forEach(element => {
        event.modify('ae2:' + element + '_paint_ball', item => {
            const ItemBuilder = Java.loadClass("dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder")
            const builder = new ItemBuilder(item.id).glow(true);
            item.setItemBuilder(builder);
            item.maxStackSize = 1
        })
    });
});

// ADD GLOW TO EXISTING ITEMS
// ItemEvents.modification(event => {
//     event.modify('supplementaries:bomb_spiky', item => {
//         const ItemBuilder = Java.loadClass("dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder")
//         const builder = new ItemBuilder("supplementaries:bomb_spiky").glow(true);
//         item.setItemBuilder(builder);
//     })
// })
ItemEvents.toolTierRegistry(event => {
    event.add('tool', tier => {
        tier.uses = 250
        tier.repairIngredient = '#forge:ingots/iron'
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

    event.create('wooden_mechanism').texture('kubejs:item/mechanisms/wooden_mechanism').tooltip('The Mechanism isn\'t sturdy enough to support further tiers of mechanisms.');
    mechanism('Rotation');
    incomplete_mechanism('Rotation');
    mechanism('Kinetic');
    incomplete_mechanism('Kinetic');
    mechanism('Sealed');
    incomplete_mechanism('Sealed');
    mechanism('Sturdy');
    incomplete_mechanism('Sturdy');
    mechanism('Plastic', RARITY_UNCOMMON);
    incomplete_mechanism('Plastic');
    mechanism('Menril', RARITY_UNCOMMON);
    incomplete_mechanism('Menril');
    mechanism('Temporal', RARITY_RARE);
    mechanism('Quantum', RARITY_EPIC, true);
    incomplete_mechanism('Quantum');
    mechanism('Radiant', RARITY_RARE, true);
    incomplete_mechanism('Radiant');
    mechanism('Logistics');
    incomplete_mechanism('Logistics');
    mechanism('Scorch');
    incomplete_mechanism('Scorch');
    mechanism('Power');
    incomplete_mechanism('Power');
    // mechanism('Pressure');
    // incomplete_mechanism('Pressure');
    // mechanism('Supercritical', RARITY_RARE);
    // mechanism('Ender');
    // incomplete_mechanism('Ender');
    // mechanism('Calculation');
    // incomplete_mechanism('Calculation');
    // mechanism('Infernal');
    // incomplete_mechanism('Infernal');
    // mechanism('Integrated');
    // incomplete_mechanism('Integrated');
    // mechanism('Train');
    // incomplete_mechanism('Train');
    // mechanism('Explosive');
    // incomplete_mechanism('Explosive');
    // mechanism('Inductive');
    // incomplete_mechanism('Inductive');

    event.create('redstone_alloy_ingot').displayName('Redstone Alloy Ingot');
    event.create('redstone_alloy_cable').displayName('Redstone Alloy Cable');
    event.create('fiberglass_plate').displayName('Fiberglass Plate');
    event.create('incomplete_pcb').displayName('Incomplete PCB');
    event.create('pcb').displayName('PCB');
    event.create('andesite_blend').texture('kubejs:item/andesite_blend').displayName('Andesite Blend');
    event.create('andesite_dust').texture('kubejs:item/andesite_dust').displayName('Andesite Dust');

    // event.create('forbidden_arcanus:pixie_utrem_jar').texture('kubejs:item/pixie_utrem_jar').displayName('Pixie Utrem Jar');
    // event.create('forbidden_arcanus:corrupted_pixie_utrem_jar').texture('kubejs:item/corrupted_pixie_utrem_jar').displayName('Corrupted Pixie Utrem Jar');

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
    event.create('stone_saw').texture('kubejs:item/stone_saw').displayName('Stone Saw').maxDamage(64);
    event.create('iron_saw').texture('kubejs:item/iron_saw').displayName('Iron Saw').maxDamage(128);
    event.create('diamond_saw').texture('kubejs:item/diamond_saw').displayName('Diamond Saw').maxDamage(512);
    event.create('screwdriver').texture('kubejs:item/screwdriver').displayName('Screwdriver').maxDamage(256);
    // event.create('lube_can').texture('kubejs:item/lube_can').displayName('Lubricant Can').maxDamage(256);
    event.create('soldering_iron').texture('kubejs:item/soldering_iron').displayName('Soldering Iron').maxDamage(512);
    tool('Resonator');

    // Different Tubes
    // event.create('golden_tube').texture('kubejs:item/yellow_tube').displayName('Golden Tube');
    // event.create('diamond_tube').texture('kubejs:item/blue_tube').displayName('Diamond Tube');
    event.create('empty_tube').texture('kubejs:item/empty_tube').displayName('Empty Tube');

    // Incomplete / Transitional Devices
    // event.create('incomplete_sturdy_device', 'create:sequenced_assembly');
    // event.create('incomplete_mechanical_device', 'create:sequenced_assembly');
    // event.create('incomplete_sealed_device', 'create:sequenced_assembly');
    // event.create('incomplete_smart_device', 'create:sequenced_assembly');
    // event.create('incomplete_locomotive_device', 'create:sequenced_assembly');
    // event.create('incomplete_logic_device', 'create:sequenced_assembly');
    // event.create('incomplete_red_stringed_device', 'create:sequenced_assembly');
    // event.create('incomplete_furnished_device', 'create:sequenced_assembly');

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
    event.create('empty_runic_tablet').texture('kubejs:item/empty_runic_tablet').displayName('Empty Runic Tablet');

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
    event.create('menril_shrub').tooltip('With the weakening of the Arcane so have the Arcane Trees been weakened. Can you restore this artifact?');
    event.create('rejuvinated_menril_shrub').tooltip('Youve restored it, well to some part. To fully restore the Menril Sapling you must continue.');
    event.create('time_crystal').displayName('Time Crystal Shards');
    event.create('carbon_sheet').texture('kubejs:item/carbon_sheet').displayName('Carbon Sheet');
    event.create('mica_sheet').texture('kubejs:item/mica_sheet').displayName('Mica Sheet');
    event.create('ceramic_powder').texture('kubejs:item/ceramic_powder').displayName('Ceramic Powder');
    event.create('plastic').texture('kubejs:item/plastic').displayName('Plastic');
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
    event.create('machine_smithing_template', 'smithing_template')
        .displayName('Machine Smithing Template')
        .appliesTo('Machines')
        .ingredients('Catalyzing Items')
        .appliesToSlotDescription('Insert one (1) Item')
        .ingredientsSlotDescription('Insert one (1) Machine')
        .texture('kubejs:item/machine_smithing_template')

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
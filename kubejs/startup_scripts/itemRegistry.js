ItemEvents.toolTierRegistry(event => {
    event.add("tool", tier => {
        tier.uses = 250
        tier.repairIngredient = "#forge:ingots/iron"
    })
});

StartupEvents.registry("item", event => {
    let mechanism = (name, rarity, add_glow) => {
        let id = name.toLowerCase()
        event.create(id + "_mechanism")
            .texture("kubejs:item/" + id + "_mechanism")
            .displayName(name + " Mechanism")
            .rarity(rarity ? rarity : RARITY_COMMON)
            .glow(add_glow ? add_glow : false);
    }

    let incomplete_mechanism = (name, rarity, add_glow) => {
        let id = name.toLowerCase()

        event.create("incomplete_" + id + "_mechanism", "create:sequenced_assembly")
            .texture("kubejs:item/incomplete_" + id + "_mechanism")
            .displayName("Incomplete " + name + " Mechanism")
            .rarity(rarity ? rarity : RARITY_COMMON)
            .glow(add_glow ? add_glow : false)
    }

    let tool = (name,rarity) => {
        let id = name.toLowerCase()
        event.create(id, "sword").tier("tool").texture("kubejs:item/" + id).displayName(name).rarity(RARITY_COMMON)
    }

    mechanism("Kinetic")
    incomplete_mechanism("Kinetic")
    mechanism("Sealed")
    incomplete_mechanism("Sealed")
    mechanism("Sturdy")
    incomplete_mechanism("Sturdy")
    mechanism("Plastic", RARITY_UNCOMMON)
    incomplete_mechanism("Plastic")
    mechanism("Integrational", RARITY_UNCOMMON)
    incomplete_mechanism("Integrational")
    mechanism("Time", RARITY_RARE)
    mechanism("Supercritical", RARITY_RARE)
    mechanism("Quantum", RARITY_EPIC, true);
    incomplete_mechanism("Quantum");
    mechanism("Radiant", RARITY_RARE, true)
    incomplete_mechanism("Radiant")
    event.create("makeshift_kinetic_mechanism").tooltip("The Mechanism isn't sturdy enough to support further tiers of mechanisms.")

    event.create("leather_pocket").texture("kubejs:item/leather_pocket").displayName("Leather Pocket");
    event.create("runic_tablet").displayName("Runic Tablet").tooltip("What mysteries may this behold?")
    event.create("warp_fragments").rarity(RARITY_RARE).glow(true)
    event.create("nether_star_dust").texture("kubejs:item/nether_star_crushed").displayName("Nether Star Dust").rarity(RARITY_UNCOMMON)
    event.create("nether_star_plate").texture("kubejs:item/nether_star_plate").displayName("Nether Star Plate").rarity(RARITY_RARE).glow(true)
    event.create("radiant_coil").glow(true).texture("kubejs:item/radiant_coil").displayName("Radiant Induction Coil")
    event.create("radiant_sheet").glow(true).texture("kubejs:item/radiant_sheet").displayName("Radiant Sheet")
    event.create("petrified_sheet").texture("kubejs:item/petrified_sheet").displayName("Petrified Sheet")
    event.create("enriched_rubber").texture("kubejs:item/enriched_rubber").displayName("Menril Enriched Rubber")
    event.create("rune_dust").displayName("Rune Dust")
    event.create("anthracene").displayName("Anthracene").tooltip("C₁₄H₁₀")
    event.create("incomplete_anthraquinone").displayName("Incomplete Anthraquinone").tooltip("Next: Submerge in Chromic Acid")
    event.create("anthraquinone").displayName("Anthraquinone").tooltip("C₁₄H₈O₂")
    event.create("chrom").displayName("Chrom").tooltip("Cr")
    event.create("powdered_flint").displayName("Powdered Flint").tooltip("Mix with Refined Fuel to create gunpowder")
    event.create("empty_vial").displayName("Empty Vial")
    event.create("mage_leaf").displayName("Magically Blooming Leaves")
    event.create("mageberry_smoothie").displayName("Mageberry Smoothie").food(food => {
        food.hunger(8).saturation(0.75).effect("ars_nouveau:mana_regen",300,2,1).eaten(ctx => {
            ctx.player.give(Item.of("minecraft:bowl",1))
        })
    })
    event.create("dirty_bowl").displayName("Bowl of Leaves")
    event.create("sourcegem_fragments").displayName("Source Crystal Fragments")
    event.create("incomplete_cogwheel", "create:sequenced_assembly").displayName("Broken Cogwheel").parentModel("create:block/cogwheel_shaftless")
    event.create("menril_shrub").tooltip("With the weakening of the Arcane so have the Arcane Trees been weakened. Can you restore this artifact?")
    event.create("rejuvinated_menril_shrub").tooltip("Youve restored it, well to some part. To fully restore the Menril Sapling you must continue.")
    event.create("time_crystal").displayName("Time Crystal Shards")

    //AE2
    event.create('incomplete_calculation_circuit', 'create:sequenced_assembly').displayName('Incomplete Calculation Circuit').texture("kubejs:item/incomplete_kinetic_mechanism")
    event.create('incomplete_logic_circuit', 'create:sequenced_assembly').displayName('Incomplete Logic Circuit').texture("create:item/incomplete_precision_mechanism")
    event.create('incomplete_engineering_circuit', 'create:sequenced_assembly').displayName('Incomplete Engineering Circuit').texture("kubejs:item/incomplete_radiant_mechanism")


    // Seeds / Clusters
    event.create("certus_quartz_seed").texture("kubejs:item/certus_quartz_seed").displayName("Certus Quartz Seed")
    event.create("certus_quartz_cluster").texture("kubejs:item/certus_quartz_cluster").displayName("Certus Quartz Cluster")
    event.create("redstone_seed").texture("kubejs:item/redstone_seed").displayName("Redstone Seed")
    event.create("redstone_cluster").texture("kubejs:item/redstone_cluster").displayName("Redstone Cluster")
    event.create("quartz_seed").texture("kubejs:item/quartz_seed").displayName("Quartz Seed")
    event.create("quartz_cluster").texture("kubejs:item/quartz_cluster").displayName("Quartz Cluster")

    event.create("ae2:logic_processor_press").displayName('Logic Processor Press')
    event.create("ae2:calculation_processor_press").displayName('Calculation Processor Press')
    event.create("ae2:silicon_press").displayName('Silicon Press')
    event.create("ae2:engineering_processor_press").displayName('Engineering Processor Press')

    tool("Resonator")
    tool("Saw")
    tool("Screwdriver")
});
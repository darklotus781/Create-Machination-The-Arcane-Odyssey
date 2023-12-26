// Sorcerer
LootJS.modifiers((event) => {
    event.addLootTableModifier("loot:arcane/arcane_bag_common").addWeightedLoot(2, [
        Item.of("ars_nouveau:lava_lily").withChance(4),
        Item.of("forbidden_arcanus:rune").withChance(6),
        Item.of("ars_nouveau:arcanist_hood").withChance(1),
        Item.of("ars_nouveau:arcanist_robes").withChance(1),
        Item.of("ars_nouveau:arcanist_leggings").withChance(1),
        Item.of("ars_nouveau:arcanist_boots").withChance(1),
        Item.of("2x ars_nouveau:source_berry_roll").withChance(3),
        // Item.of("4x ars_nouveau:sas_ashlar").withChance(3),
        Item.of("ars_nouveau:wilden_wing").withChance(4),
        Item.of("ars_nouveau:wilden_horn").withChance(4),
        Item.of("6x ars_nouveau:magebloom_fiber").withChance(5),
        Item.of("ars_nouveau:mundane_belt").withChance(2),
        Item.of("ars_nouveau:ring_of_potential").withChance(2),
        Item.of("10x forbidden_arcanus:xpetrified_orb").withChance(3),
        Item.of("12x forbidden_arcanus:arcane_bone_meal").withChance(2),
        Item.of("4x forbidden_arcanus:arcane_gold_nugget").withChance(3),
        Item.of("forbidden_arcanus:mundabitur_dust").withChance(2),
        // Item.of("4x kubejs:empty_vial").withChance(3),
        // Item.of("3x quark:soul_bead").withChance(4),
        Item.of("ars_nouveau:runic_chalk", "{Damage:0}").withChance(1),
        // Item.of("5x kubejs:magebloom_sourceberry_smoothie_bowl").withChance(2),
        Item.of("forbidden_arcanus:obsidian_skull").withChance(1),
        Item.of("12x forbidden_arcanus:ender_pearl_fragment").withChance(2),
        Item.of("6x forbidden_arcanus:dark_rune").withChance(3),
        Item.of("forbidden_arcanus:mortem_helmet").withChance(1),
        Item.of("forbidden_arcanus:arcane_golden_pickaxe").withChance(2),
        Item.of("4x forbidden_arcanus:cloth").withChance(3),
        Item.of("3x ars_nouveau:magebloom_crop").withChance(5),
        Item.of("13x ars_nouveau:magebloom").withChance(3),
        // Item.of("4x ars_nouveau:blaze_fiber").withChance(2),
        Item.of("forbidden_arcanus:dark_matter").withChance(2),
        Item.of("reliquary:bat_wing").withChance(3),
        Item.of("reliquary:nebulous_heart").withChance(3),
        Item.of("reliquary:infernal_claw").withChance(2),
        Item.of("3x minecraft:feather").withChance(3),
        // Item.of("4x ars_nouveau:end_fiber").withChance(2),
        Item.of("reliquary:rib_bone").withChance(2),
        Item.of("reliquary:guardian_spike").withChance(2)
    ])

    // Wizard
    event.addLootTableModifier("loot:arcane/arcane_bag_rare")
        .addWeightedLoot(5, [
            Item.of("ars_nouveau:lava_lily").withChance(4),
            // Item.of("minecraft:enchanted_book").withChance(2),
            Item.of("3x forbidden_arcanus:rune").withChance(6),
            // Item.of("ars_nouveau:novice_robes").withChance(1),
            // Item.of("ars_nouveau:novice_hood").withChance(1),
            // Item.of("ars_nouveau:novice_leggings").withChance(1),
            // Item.of("ars_nouveau:novice_boots").withChance(1),
            Item.of("3x ars_nouveau:source_berry_roll").withChance(3),
            Item.of("forbidden_arcanus:sanity_meter").withChance(1),
            // Item.of("4x ars_nouveau:sas_ashlar").withChance(3),
            Item.of("3x kubejs:runic_tablet").withChance(2),
            Item.of("ars_nouveau:wilden_wing").withChance(4),
            Item.of("ars_nouveau:wilden_horn").withChance(4),
            Item.of("6x ars_nouveau:magebloom_fiber").withChance(5),
            Item.of("ars_nouveau:mundane_belt").withChance(2),
            Item.of("ars_nouveau:ring_of_potential").withChance(2),
            Item.of("10x forbidden_arcanus:xpetrified_orb").withChance(3),
            Item.of("2x forbidden_arcanus:arcane_crystal_block").withChance(1),
            Item.of("12x forbidden_arcanus:arcane_bone_meal").withChance(2),
            Item.of("6x forbidden_arcanus:arcane_crystal").withChance(2),
            Item.of("4x forbidden_arcanus:arcane_gold_nugget").withChance(3),
            Item.of("forbidden_arcanus:mundabitur_dust").withChance(2),
            // Item.of("4x kubejs:empty_vial").withChance(3),
            // Item.of("3x quark:soul_bead").withChance(4),
            Item.of("ars_nouveau:runic_chalk", "{Damage:0}").withChance(1),
            Item.of("5x kubejs:magebloom_sourceberry_smoothie_bowl").withChance(2),
            Item.of("forbidden_arcanus:obsidian_skull").withChance(1),
            Item.of("12x forbidden_arcanus:ender_pearl_fragment").withChance(2),
            Item.of("6x forbidden_arcanus:dark_rune").withChance(3),
            Item.of("forbidden_arcanus:mortem_helmet").withChance(1),
            Item.of("forbidden_arcanus:mortem_boots").withChance(1),
            Item.of("forbidden_arcanus:arcane_golden_pickaxe").withChance(2),
            Item.of("3x forbidden_arcanus:dragon_scale").withChance(1),
            Item.of("4x forbidden_arcanus:cloth").withChance(3),
            Item.of("3x ars_nouveau:magebloom_crop").withChance(5),
            Item.of("13x ars_nouveau:magebloom").withChance(3),
            // Item.of("4x ars_nouveau:blaze_fiber").withChance(2),
            Item.of("forbidden_arcanus:dark_matter").withChance(2),
            Item.of("reliquary:bat_wing").withChance(3),
            Item.of("reliquary:nebulous_heart").withChance(3),
            Item.of("reliquary:infernal_claw").withChance(2),
            Item.of("3x minecraft:feather").withChance(3),
            // Item.of("4x ars_nouveau:end_fiber").withChance(2),
            Item.of("reliquary:rib_bone").withChance(2),
            Item.of("reliquary:guardian_spike").withChance(2),
            Item.of("3x reliquary:glowing_bread").withChance(4)
        ])

    // Mage
    event.addLootTableModifier("loot:arcane/arcane_bag_epic") 
        .addWeightedLoot(7, [
            Item.of("ars_nouveau:lava_lily").withChance(4),
            // Item.of("minecraft:enchanted_book").withChance(2),
            Item.of("3x forbidden_arcanus:rune").withChance(6),
            // Item.of("ars_nouveau:novice_robes").withChance(1),
            // Item.of("ars_nouveau:novice_hood").withChance(1),
            // Item.of("ars_nouveau:novice_leggings").withChance(1),
            // Item.of("ars_nouveau:novice_boots").withChance(1),
            Item.of("3x ars_nouveau:source_berry_roll").withChance(3),
            Item.of("forbidden_arcanus:sanity_meter").withChance(1),
            // Item.of("4x ars_nouveau:sas_ashlar").withChance(3),
            Item.of("3x kubejs:runic_tablet").withChance(2),
            Item.of("ars_nouveau:wilden_wing").withChance(4),
            Item.of("ars_nouveau:wilden_horn").withChance(4),
            Item.of("6x ars_nouveau:magebloom_fiber").withChance(5),
            Item.of("ars_nouveau:mundane_belt").withChance(2),
            Item.of("ars_nouveau:ring_of_potential").withChance(2),
            Item.of("10x forbidden_arcanus:xpetrified_orb").withChance(3),
            Item.of("2x forbidden_arcanus:arcane_crystal_block").withChance(1),
            Item.of("12x forbidden_arcanus:arcane_bone_meal").withChance(2),
            Item.of("6x forbidden_arcanus:arcane_crystal").withChance(2),
            Item.of("4x forbidden_arcanus:arcane_gold_nugget").withChance(3),
            Item.of("forbidden_arcanus:mundabitur_dust").withChance(2),
            // Item.of("4x kubejs:empty_vial").withChance(3),
            // Item.of("3x quark:soul_bead").withChance(4),
            Item.of("ars_nouveau:runic_chalk", "{Damage:0}").withChance(1),
            // Item.of("5x kubejs:magebloom_sourceberry_smoothie_bowl").withChance(2),
            Item.of("forbidden_arcanus:obsidian_skull").withChance(1),
            Item.of("12x forbidden_arcanus:ender_pearl_fragment").withChance(2),
            Item.of("6x forbidden_arcanus:dark_rune").withChance(3),
            Item.of("forbidden_arcanus:mortem_helmet").withChance(1),
            Item.of("forbidden_arcanus:mortem_boots").withChance(1),
            Item.of("forbidden_arcanus:arcane_golden_pickaxe").withChance(2),
            Item.of("3x forbidden_arcanus:dragon_scale").withChance(1),
            Item.of("4x forbidden_arcanus:cloth").withChance(3),
            Item.of("3x ars_nouveau:magebloom_crop").withChance(5),
            Item.of("13x ars_nouveau:magebloom").withChance(3),
            // Item.of("4x ars_nouveau:blaze_fiber").withChance(2),
            Item.of("forbidden_arcanus:dark_matter").withChance(2),
            Item.of("reliquary:bat_wing").withChance(3),
            Item.of("reliquary:nebulous_heart").withChance(3),
            Item.of("reliquary:infernal_claw").withChance(2),
            Item.of("3x minecraft:feather").withChance(3),
            // Item.of("4x ars_nouveau:end_fiber").withChance(2),
            Item.of("reliquary:rib_bone").withChance(2),
            Item.of("reliquary:guardian_spike").withChance(2),
            Item.of("3x reliquary:glowing_bread").withChance(4),
            Item.of("reliquary:rending_gale").withChance(1),
        ])


    // let items = [
    //     "ars_nouveau:magebloom_block",
    //     "ars_nouveau:sky_block",
    //     "ars_nouveau:smooth_sourcestone_alternating",
    //     "ars_elemental:siren_shards",
    //     "ars_nouveau:starbuncle_shards",
    //     "ars_nouveau:whirlisprig_shards",
    //     "ars_nouveau:wixie_shards",
    //     "ars_nouveau:drygmy_shard",
    //     "ars_nouveau:abjuration_essence",
    //     "ars_nouveau:conjuration_essence",
    //     "ars_nouveau:air_essence",
    //     "ars_nouveau:earth_essence",
    //     "ars_nouveau:fire_essence",
    //     "ars_nouveau:manipulation_essence",
    //     "ars_nouveau:water_essence",
    //     "ars_nouveau:dull_trinket",
    //     "ars_nouveau:novice_spell_book",
    //     "ars_elemental:curio_bag",
    //     "ars_nouveau:warp_scroll",
    //     "ars_nouveau:spell_parchment",
    //     "ars_nouveau:source_gem",
    //     "ars_nouveau:wixie_hat",
    //     "ars_nouveau:magebloom",
    //     "ars_nouveau:magebloom_crop",
    //     "ars_nouveau:sourceberry_bush",
    //     "ars_nouveau:source_berry_pie",
    //     "ars_nouveau:source_berry_roll",
    //     "ars_nouveau:wilden_horn",
    //     "ars_nouveau:greater_experience_gem",
    //     "ars_nouveau:wilden_wing",
    //     "ars_nouveau:wilden_spike"
    // ]
});
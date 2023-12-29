// LootJS.modifiers((event) => {
//     // Tier 1
//     event.addLootTableModifier("loot:andesite/andesite_bag_common")
//         .addWeightedLoot([1, 2], [
//             Item.of("2x create:millstone").withChance(4),
//             Item.of("create:mechanical_plough").withChance(2),
//             Item.of("create:mechanical_piston").withChance(4),
//             Item.of("create:sticky_mechanical_piston").withChance(2),
//             Item.of("create:mechanical_bearing").withChance(3),
//             Item.of("create:windmill_bearing").withChance(3),
//             Item.of("create:gantry_carriage").withChance(3),
//             Item.of("create:rope_pulley").withChance(3),
//             Item.of("create:water_wheel").withChance(3),
//             Item.of("create:large_water_wheel").withChance(3),
//             Item.of("create:speedometer").withChance(1),
//             Item.of("create:stressometer").withChance(1),
//             Item.of("3x create:portable_storage_interface").withChance(3),
//             Item.of("create:empty_blaze_burner").withChance(3),
//             Item.of("4x kubejs:makeshift_kinetic_mechanism").withChance(9),
//             Item.of("4x kubejs:kinetic_mechanism").withChance(7),
//             Item.of("3x kubejs:sealed_mechanism").withChance(5),
//             Item.of("create:propeller").withChance(3),
//             Item.of("create:whisk").withChance(3),
//             Item.of("thermal:drill_head").withChance(3),
//             Item.of("thermal:saw_blade").withChance(3),
//             Item.of("create:brass_hand").withChance(1)
//         ])
//
//     // Tier 2
//     event.addLootTableModifier("loot:andesite/andesite_bag_rare")
//         .addWeightedLoot(5,[
//                 Item.of("create:mechanical_press").withChance(8),
//                 Item.of("create:mechanical_mixer").withChance(8),
//                 Item.of("create:mechanical_drill").withChance(6),
//                 Item.of("create:mechanical_saw").withChance(6),
//                 Item.of("create:mechanical_harvester").withChance(8),
//                 Item.of("create:encased_fan").withChance(8),
//                 Item.of("create:deployer").withChance(4),
//                 Item.of("ars_creo:starbuncle_wheel").withChance(1)
//         ])
//     // Tier 3
//     event.addLootTableModifier("loot:andesite/arcane_bag_epic")
//         .addWeightedLoot(7, [])
// })
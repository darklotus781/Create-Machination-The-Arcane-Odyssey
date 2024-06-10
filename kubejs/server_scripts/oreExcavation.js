// console.info('Ore Excavation Time')
//
ServerEvents.recipes(event => {
    event.remove({type: 'createoreexcavation:vein'}); //removing the pre existing veins
    event.remove({type: 'createoreexcavation:drilling'}); //removing the generated ores from pre existing veins
    event.remove({type: 'createoreexcavation:extracting'}); //removing the generated ores from pre existing veins

    function veinCreation(veinName, Output, spacing, separation, salt, id, biome, veinSize1, veinSize2) {
        if (veinSize1 == undefined && veinSize2 == undefined) {
            event.recipes.createoreexcavation.vein(veinName, Output).placement(spacing, separation, salt).alwaysInfinite().biomeWhitelist(biome).id(id)
        } else {
            event.recipes.createoreexcavation.vein(veinName, Output).placement(spacing, separation, salt).alwaysFinite().veinSize(veinSize1, veinSize2).biomeWhitelist(biome).id(id)
        }
    }

    //Tier 1 veins
    veinCreation('Coal Vein', 'minecraft:coal', 4, 3, 64825185, 'createoreexcavation:coal_vein', 'minecraft:is_overworld', 0.25, 2.5)
    veinCreation('Cuprum Vein', 'minecraft:raw_copper', 5, 4, 64825185, 'createoreexcavation:cuprum_vein', 'minecraft:is_overworld', 0.50, 4.5)
    veinCreation('Ferrum Vein', 'minecraft:raw_iron', 5, 4, 64825185, 'createoreexcavation:ferrum_vein', 'minecraft:is_overworld', 0.50, 4.5)
    veinCreation('Zinc Vein', 'alltheores:raw_zinc', 6, 5, 64825185, 'createoreexcavation:zinc_vein', 'minecraft:is_overworld', 0.25, 6.5)
    veinCreation('Aurum Vein', 'minecraft:raw_gold', 6, 5, 64825185, 'createoreexcavation:aurum_nugget_vein', 'minecraft:is_overworld', 0.25, 6.5)

    //Tier 2 veins
    veinCreation('Carbon Vein', 'minecraft:diamond', 7, 6, 64825185, 'createoreexcavation:carbon_vein', 'minecraft:is_overworld', 0.05, 1.5)

    //Tier 3 veins
    veinCreation('Dense Overworled Ore Vein', 'minecraft:raw_iron', 8, 7, 64825185, 'createoreexcavation:dense_ore_vein', 'machination:infinite_ore_biomes')
    veinCreation('Dense Overworled Gem Vein', 'minecraft:diamond_ore', 8, 7, 64825185, 'createoreexcavation:dense_gem_vein', 'machination:infinite_gem_biomes')
    veinCreation('Netherite Vein', 'minecraft:netherite_scrap', 14, 13, 64825185, 'createoreexcavation:netherite_vein', 'allthemodium:mining', 0.05, 1.5)

    //Tier 4 veins
    veinCreation('Dense Netherite Vein', 'minecraft:ancient_debris', 15, 14, 64825185, 'createoreexcavation:dense_netherite_vein', 'allthemodium:other')
    veinCreation('Allthemodium Vein', 'allthemodium:raw_allthemodium', 15, 14, 64825185, 'createoreexcavation:allthemodium_vein', 'allthemodium:mining', 0.016, 0.18)
    veinCreation('Vibranium Vein', 'allthemodium:raw_vibranium', 15, 14, 64825185, 'createoreexcavation:vibranium_vein', 'allthemodium:mining', 0.016, 0.18)
    veinCreation('Unobtainium Vein', 'allthemodium:raw_unobtainium', 15, 14, 64825185, 'createoreexcavation:unobtainium_vein', 'allthemodium:mining', 0.016, 0.18)

    function oreDrill(Output, id, ticks, stress, amount) {
        if (Output == 'minecraft:netherite_scrap' || Output == 'minecraft:ancient_debris') {
            event.recipes.createoreexcavation.drilling(Output, id, ticks).drill('createoreexcavation:hardened_drill').stress(stress).fluid('pneumaticcraft:lubricant ' + amount)
            event.recipes.createoreexcavation.drilling(Output, id, ticks / 2).drill('createoreexcavation:arcane_drill').stress(stress).fluid('pneumaticcraft:lubricant ' + amount)
        } else if (Output == 'allthemodium:raw_allthemodium' || Output == 'allthemodium:raw_vibranium' || Output == 'allthemodium:raw_unobtainium') {
            event.recipes.createoreexcavation.drilling(Output, id, ticks).drill('createoreexcavation:molten_drill').stress(stress).fluid('pneumaticcraft:lubricant ' + amount)
        } else {
            event.recipes.createoreexcavation.drilling(Output, id, ticks).drill('createoreexcavation:hardened_drill').stress(stress / 2).fluid('pneumaticcraft:lubricant ' + amount)
            event.recipes.createoreexcavation.drilling(Output, id, ticks / 2).drill('createoreexcavation:arcane_drill').stress(stress / 2).fluid('pneumaticcraft:lubricant ' + amount)
        }
    }

    //tier 1 drilling
    oreDrill('minecraft:coal', 'createoreexcavation:coal_vein', 80, 128, 20)
    oreDrill('minecraft:raw_copper', 'createoreexcavation:cuprum_vein', 80, 256, 20)
    oreDrill('minecraft:raw_iron', 'createoreexcavation:ferrum_vein', 80, 256, 20)
    oreDrill('alltheores:raw_zinc', 'createoreexcavation:zinc_vein', 60, 256, 50)
    oreDrill('minecraft:gold_nugget', 'createoreexcavation:aurum_nugget_vein', 80, 192, 20)

    //tier 2 drilling
    oreDrill([Item.of('minecraft:coal'), Item.of('minecraft:diamond').withChance(0.25)], 'createoreexcavation:carbon_vein', 60, 256, 100)

    //tier 3 drilling
    oreDrill('minecraft:netherite_scrap', 'createoreexcavation:netherite_vein', 200, 512, 150)

    //tier 4 drilling
    oreDrill('minecraft:ancient_debris', 'createoreexcavation:dense_netherite_vein', 200, 512, 250)
    oreDrill('allthemodium:raw_allthemodium', 'createoreexcavation:allthemodium_vein', 800, 1024, 1000)
    oreDrill('allthemodium:raw_vibranium', 'createoreexcavation:vibranium_vein', 800, 1024, 1000)
    oreDrill('allthemodium:raw_unobtainium', 'createoreexcavation:unobtainium_vein', 800, 1024, 1000)

    event.recipes.createoreexcavation.drilling(
        [
            Item.of('minecraft:coal').withChance(0.45),
            Item.of('minecraft:raw_iron').withChance(0.30),
            Item.of('minecraft:raw_copper').withChance(0.25),
            Item.of('alltheores:raw_zinc').withChance(0.20),
            Item.of('minecraft:raw_gold').withChance(0.15),
        ],
        'createoreexcavation:dense_ore_vein',
        500
    )
        .drill('createoreexcavation:molten_drill')
        .stress(512)
        .fluid(Fluid.of('pneumaticcraft:lubricant').withAmount(250))

    event.recipes.createoreexcavation.drilling(
        [
            Item.of('createoreexcavation:raw_redstone').withChance(0.25),
            Item.of('minecraft:lapis_lazuli').withChance(0.20),
            Item.of('createoreexcavation:raw_diamond').withChance(0.15),
            Item.of('createoreexcavation:raw_emerald').withChance(0.10),
        ],
        'createoreexcavation:dense_gem_vein',
        500
    )
        .drill('createoreexcavation:molten_drill')
        .stress(512)
        .fluid(Fluid.of('pneumaticcraft:lubricant').withAmount(250))
});


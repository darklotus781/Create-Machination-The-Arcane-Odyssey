// console.info('Ore Excavation Time')
//
// ServerEvents.recipes(event => {
//     event.remove({type:'createoreexcavation:vein'}); //removing the pre existing veins
//     event.remove({type:'createoreexcavation:drilling'}); //removing the generated ores from pre existing veins
//     event.remove({output:'createoreexcavation:drill'})
//     event.remove({output:'createoreexcavation:diamond_drill'})
//
//     //Custom Drill Recipes
//     event.shaped('createoreexcavation:drill', [
//         'SB ',
//         'BSB',
//         ' BB'
//     ], {
//         S: 'minecraft:stone',
//         B: 'minecraft:stone_slab',
//     })
//
//     event.shaped('createoreexcavation:iron_drill', [
//         'BI ',
//         'ISI',
//         ' II'
//     ], {
//         B: 'minecraft:iron_block',
//         I: 'minecraft:iron_ingot',
//         S: 'createoreexcavation:drill'
//     })
//
//     event.shaped('createoreexcavation:diamond_drill', [
//         'BG ',
//         'GIG',
//         ' GG'
//     ], {
//         B: 'minecraft:diamond_block',
//         G: 'minecraft:diamond',
//         I: 'createoreexcavation:iron_drill'
//     })
//
//
//     function veinCreation(veinName, Output, spacing, separation, salt, id, veinSize1, veinSize2){
//         if(veinSize1 == undefined && veinSize2 == undefined){
//             event.recipes.createoreexcavation.vein(veinName, Output).placement(spacing, separation, salt).alwaysInfinite().id(id)
//         } else {
//             event.recipes.createoreexcavation.vein(veinName, Output).placement(spacing, separation, salt).alwaysFinite().veinSize(veinSize1, veinSize2).id(id)
//         }
//     }
//
//     //Tier 1 veins
//     veinCreation('Coal Vein', 'minecraft:coal', 4, 3, 64825185, 'createoreexcavation:coal_vein', 0.032, 0.096)
//     veinCreation('Cuprum Vein', 'minecraft:raw_copper', 5, 4, 64825185, 'createoreexcavation:cuprum_vein', 0.016, 0.096)
//     veinCreation('Ferrum Vein', 'minecraft:raw_iron', 5, 4, 64825185, 'createoreexcavation:ferrum_vein', 0.016, 0.064)
//     veinCreation('Aurum Nugget Vein', 'minecraft:gold_nugget', 6, 5, 64825185, 'createoreexcavation:aurum_nugget_vein', 0.032, 0.064)
//
//     //Tier 2 veins
//     veinCreation('Carbon Vein', 'minecraft:diamond', 7, 6, 64825185, 'createoreexcavation:carbon_vein', 0.032, 0.064)
//     veinCreation('Zinc Vein', 'create:raw_zinc', 6, 5, 64825185, 'createoreexcavation:zinc_vein', 0.024, 0.064)
//     veinCreation('Aurum Vein', 'minecraft:raw_gold', 7, 2, 64825185, 'createoreexcavation:aurum_vein', 0.032, 0.064)
//     veinCreation('Dense Coal Vein', 'minecraft:coal_block', 8, 7, 64825185, 'createoreexcavation:dense_coal_vein')
//     veinCreation('Dense Cuprum Vein', 'minecraft:copper_ore', 10, 9, 64825185, 'createoreexcavation:dense_cuprum_vein')
//     veinCreation('Dense Ferrum Vein', 'minecraft:iron_ore', 10, 9, 64825185, 'createoreexcavation:dense_ferrum_vein')
//
//     //Tier 3 veins
//     veinCreation('Dense Carbon Vein', 'minecraft:diamond_ore', 14, 13, 64825185, 'createoreexcavation:dense_carbon_vein')
//     veinCreation('Dense Zinc Vein', 'create:zinc_ore', 12, 11, 64825185, 'createoreexcavation:dense_zinc_vein')
//     veinCreation('Dense Aurum Vein', 'minecraft:gold_ore', 14, 13, 64825185, 'createoreexcavation:dense_aurum_vein')
//     veinCreation('Netherite Vein', 'minecraft:netherite_scrap', 14, 13, 64825185, 'createoreexcavation:netherite_vein', 0.004, 0.008)
//
//     //Tier 4 veins
//     veinCreation('Dense Netherite Vein', 'minecraft:ancient_debris', 15, 14, 64825185, 'createoreexcavation:dense_netherite_vein')
//
//     function oreDrill(Output, id, ticks, stress, amount){
//         if(amount == undefined){
//             event.recipes.createoreexcavation.drilling(Output, id, ticks).drill('createoreexcavation:drill').stress(stress)
//             event.recipes.createoreexcavation.drilling(Output, id, ticks/2).drill('createoreexcavation:iron_drill').stress(stress)
//             event.recipes.createoreexcavation.drilling(Output, id, ticks/3).drill('createoreexcavation:diamond_drill').stress(stress)
//             event.recipes.createoreexcavation.drilling(Output, id, ticks/4).drill('createoreexcavation:netherite_drill').stress(stress)
//         } else if(Output == 'minecraft:netherite_scrap' || Output == 'minecraft:ancient_debris'){
//             event.recipes.createoreexcavation.drilling(Output, id, ticks).drill('createoreexcavation:diamond_drill').stress(stress).fluid('minecraft:lava '+amount)
//             event.recipes.createoreexcavation.drilling(Output, id, ticks/2).drill('createoreexcavation:netherite_drill').stress(stress).fluid('minecraft:lava '+amount)
//         } else {
//             event.recipes.createoreexcavation.drilling(Output, id, ticks/2).drill('createoreexcavation:iron_drill').stress(stress/2).fluid('minecraft:water '+amount)
//             event.recipes.createoreexcavation.drilling(Output, id, ticks/3).drill('createoreexcavation:diamond_drill').stress(stress/2).fluid('minecraft:water '+amount)
//             event.recipes.createoreexcavation.drilling(Output, id, ticks/4).drill('createoreexcavation:netherite_drill').stress(stress/2).fluid('minecraft:water '+amount)
//             event.recipes.createoreexcavation.drilling('3x '+Output, id, ticks).drill('createoreexcavation:iron_drill').stress(stress*2).fluid('minecraft:lava '+amount)
//             event.recipes.createoreexcavation.drilling('3x '+Output, id, ticks/2).drill('createoreexcavation:diamond_drill').stress(stress*2).fluid('minecraft:lava '+amount)
//             event.recipes.createoreexcavation.drilling('3x '+Output, id, ticks/3).drill('createoreexcavation:netherite_drill').stress(stress*2).fluid('minecraft:lava '+amount)
//         }
//     }
//
//     //tier 1 drilling
//     oreDrill('minecraft:coal', 'createoreexcavation:coal_vein', 20, 128)
//     oreDrill('minecraft:raw_copper', 'createoreexcavation:cuprum_vein', 40, 256)
//     oreDrill('minecraft:raw_iron', 'createoreexcavation:ferrum_vein', 50, 256)
//     oreDrill('minecraft:gold_nugget', 'createoreexcavation:aurum_nugget_vein', 80, 192)
//
//     //tier 2 drilling
//     event.recipes.createoreexcavation.drilling([Item.of('minecraft:coal'), Item.of('minecraft:diamond').withChance(0.25)], 'createoreexcavation:carbon_vein', 60, 256, 500)
//     oreDrill('create:raw_zinc', 'createoreexcavation:zinc_vein', 50, 256, 100)
//     oreDrill('minecraft:raw_gold', 'createoreexcavation:aurum_vein', 120, 128, 200)
//     oreDrill('minecraft:coal_block', 'createoreexcavation:dense_coal_vein', 40, 256, 50)
//     oreDrill('minecraft:copper_ore', 'createoreexcavation:dense_cuprum_vein', 80, 150)
//     oreDrill('minecraft:iron_ore', 'createoreexcavation:dense_ferrum_vein', 100, 250)
//
//     //tier 3 drilling
//     oreDrill([Item.of('minecraft:coal_ore'), Item.of('minecraft:diamond_ore').withChance(0.25)], 'createoreexcavation:dense_carbon_vein', 120, 500)
//     oreDrill('create:zinc_ore', 'createoreexcavation:dense_zinc_vein', 100, 100)
//     oreDrill('minecraft:gold_ore', 'createoreexcavation:dense_aurum_vein', 160, 200)
//     oreDrill('minecraft:netherite_scrap', 'createoreexcavation:netherite_vein', 200, 500)
//
//     //tier 4 drilling
//     oreDrill('minecraft:ancient_debris', 'createoreexcavation:dense_netherite_vein', 200, 1000)
// })
//

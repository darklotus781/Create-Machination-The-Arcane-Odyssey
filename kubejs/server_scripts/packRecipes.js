ServerEvents.recipes(event => {
    // function nineitemstoitem(o,i) {
    //     event.shaped(o, [
    //         'SSS',
    //         'SSS',
    //         'SSS'
    //     ], {
    //         S: i
    //     })
    // }
    //
    // function itemtoninetimes(o,i){
    //     event.shapeless(Item.of(o,9),Item.of(i))
    // }

    // 1x Screwdriver
    event.shaped('kubejs:screwdriver', [
        '  G',
        'PAP',
        ' P '
    ], {
        G: 'minecraft:iron_ingot',
        A: 'create:andesite_alloy',
        P: 'thermal:cured_rubber'
    })

    // 2x Screwdriver
    event.shaped('2x kubejs:screwdriver', [
        '  G',
        'PAP',
        ' P '
    ], {
        G: 'minecraft:iron_ingot',
        A: 'create:andesite_alloy',
        P: 'kubejs:enriched_rubber'
    })

    const runicrelics = [['zombie_heart','6x minecraft:rotten_flesh'],['squid_beak','3x minecraft:ink_sac'],['rib_bone','5x minecraft:bone'],['catalyzing_gland','4x minecraft:gunpowder'],['chelicerae','2x minecraft:spider_eye'],['slime_pearl','4x minecraft:slime_ball'],['bat_wing','2x minecraft:feather'],['molten_core','2x minecraft:blaze_rod'],['eye_of_the_storm','2x thermal:blitz_rod'],['nebulous_heart','3x minecraft:ender_eye'],['frozen_core','5x minecraft:snowball']]

    runicrelics.forEach(element => {
        event.shapeless('reliquary:'+ element[0],[element[1],'kubejs:runic_tablet'])
    });

    event.recipes.create.deploying('kubejs:runic_tablet', ['minecraft:smooth_stone_slab', 'forbidden_arcanus:rune'])
    event.recipes.create.deploying('kubejs:sturdy_mechanism', ['create:precision_mechanism', 'create:sturdy_sheet'])

    // Produce Ars Sapling Liquids
    event.recipes.create.compacting(Fluid.of('kubejs:cascading_juice',250),Item.of('ars_nouveau:blue_archwood_sapling')).superheated()
    event.recipes.create.compacting(Fluid.of('kubejs:flourishing_juice',250),Item.of('ars_nouveau:green_archwood_sapling')).superheated()
    event.recipes.create.compacting(Fluid.of('kubejs:vexing_juice',250),Item.of('ars_nouveau:purple_archwood_sapling')).superheated()
    event.recipes.create.compacting(Fluid.of('kubejs:blazing_juice',250),Item.of('ars_nouveau:red_archwood_sapling')).superheated()

    // Process Vials
    event.recipes.create.emptying([Item.of('kubejs:chrom'),Fluid.of('kubejs:chromatic_waste', 250)], Item.of('minecraft:glowstone_dust'))
    event.recipes.create.emptying([Item.of('kubejs:empty_vial'),Fluid.of('kubejs:liquid_anthraquinone', 56)], Item.of('kubejs:anthraquinone'))
    event.recipes.create.emptying([Item.of('kubejs:dirty_bowl'),Fluid.of('kubejs:impure_source', 50)], Item.of('kubejs:magebloom_sourceberry_smoothie_bowl'))

    event.recipes.create.filling('kubejs:anthracene', ['kubejs:empty_vial', Fluid.of('kubejs:superheated_anthracene', 144)])
    event.recipes.create.filling('kubejs:magebloom_sourceberry_smoothie_bowl', ['minecraft:bowl', Fluid.of('kubejs:magebloom_sourceberry_smoothie', 100)])
    event.recipes.create.filling('pneumaticcraft:plastic',['create:sturdy_sheet', Fluid.of('pneumaticcraft:plastic', 500)])

    event.recipes.create.filling(Item.of('kubejs:enriched_rubber'), [
        Item.of('thermal:cured_rubber'),
        Fluid.of('integrateddynamics:menril_resin', 100)
    ])
    event.recipes.create.filling(Item.of('create:electron_tube'), [
        Item.of('create:rose_quartz'),
        Fluid.of('kubejs:molten_iron', 45)
    ])
    event.recipes.create.filling(Item.of('create:rose_quartz'), [
        Item.of('minecraft:redstone'),
        Fluid.of('thermal:redstone', 25)
    ])
})

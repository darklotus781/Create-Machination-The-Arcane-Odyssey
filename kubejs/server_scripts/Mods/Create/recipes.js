//priority: 0

ServerEvents.recipes(event => {
    // Scrap
    event.remove({id: /create:crushing\/update_one\/scrap_*/})
    event.remove({id: /create:crushing\/misc\/scrap_*/})
    event.remove({id: /create:crushing\/iron\/scrap_*/})
    event.remove({id: /create:crushing\/wood\/scrap_*/})
    event.remove({id: /create:crushing\/*\/scrap_*/})
    event.remove({id: /create:crushing\/scrap_*/})
    // Create Recycling...
    event.remove({id: 'create:crushing/diorite_recycling'})
    event.remove({id: 'create:crushing/tuff_recycling'})
    // Create Crushing
    event.remove({id: 'create:crushing/diorite'})
    event.remove({id: 'create:crushing/tuff'})
    // Create Milling
    event.remove({id: 'create:milling/andesite'})
    event.remove({id: 'create:milling/gravel'})
    event.remove({id: 'create:compat/ae2/milling/certus_quartz'})
    // Create Compacting
    event.remove({id: 'create:compacting/andesite_from_flint'})
    // Crafting
    event.remove({id: 'create:crafting/materials/rose_quartz'})
    event.remove({id: 'create:crafting/materials/electron_tube'})
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    // Create Mixing
    event.remove({id: 'create:mixing/andesite_alloy'})
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})

    event.remove({output: 'create:andesite_alloy'})
    event.remove({id: 'create:filling/redstone'})
    event.remove({id: 'create:sequenced_assembly/track'})
    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
    event.remove({id: 'thermal:compat/create/smelter_create_alloy_andesite_alloy'})


    // Blaze Burner from Empty Blaze Burner + Runic Tablet
    event.shapeless(Item.of('create:blaze_burner'), [Item.of('create:empty_blaze_burner'), Item.of('kubejs:runic_tablet')]).id('kubejs:filled_blaze_burner_from_empty_burner_and_runic_table_manual_only');

    event.replaceInput({id: 'create:crafting/kinetics/elevator_pulley'}, 'minecraft:dried_kelp_block', 'thermal:cured_rubber_block')
    event.replaceInput({id: 'create:crafting/kinetics/train_door'}, 'create:brass_sheet', 'create:sturdy_sheet')
    event.replaceInput({id: 'create:crafting/kinetics/train_trapdoor'}, 'create:brass_sheet', 'create:sturdy_sheet')

    event.replaceInput({id: 'create:mechanical_crafting/wand_of_symmetry'}, 'minecraft:ender_pearl', 'create:refined_radiance')
    event.replaceInput({id: 'create:mechanical_crafting/wand_of_symmetry'}, 'create:precision_mechanism', 'kubejs:radiant_mechanism')

    event.replaceInput({id: 'create:crafting/kinetics/rope_pulley'}, '#forge:wool', '#supplementaries:ropes')

    event.shapeless(Item.of('create:andesite_alloy'), [Item.of('minecraft:diorite'), Item.of('minecraft:andesite')]).id('andesite_alloy_manual_only')
    event.recipes.create.mixing(Item.of('create:andesite_alloy', 4), [Item.of('integrateddynamics:crystalized_menril_chunk'), Item.of('minecraft:andesite')])

    event.shapeless(Item.of('create:andesite_alloy', 9), Item.of('create:andesite_alloy_block'))

    // Andesite Blend
    event.shaped(Item.of('kubejs:andesite_blend', 2), [
        'SA',
        'AS'
    ], {
        A: Item.of('minecraft:andesite'),
        S: Item.of('minecraft:clay_ball')
    }).id('kubejs:andesite_blend_from_dust_and_clay_manual_only');

    //Andesite Alloy
    event.shaped(Item.of('create:andesite_alloy', 2), [
        'SA',
        'AS'
    ], {
        A: Item.of('kubejs:andesite_blend'),
        S: Item.of('create:zinc_nugget')
    }).id('kubejs:andesite_alloy_from_blend_and_zinc_manual_only');

    event.recipes.create.mixing(Item.of('create:andesite_alloy', 2), [Item.of('create:zinc_nugget'), Item.of('kubejs:andesite_blend')]).id('kubejs:mixing/andesite_alloy_from_blend_and_zinc');
    event.recipes.create.mixing(Item.of('kubejs:andesite_blend'), [Item.of('kubejs:andesite_dust'), Item.of('minecraft:clay_ball')]).id('kubejs:mixing/andesite_blend_from_dust_and_clay');

    event.recipes.create.milling(Item.of('kubejs:andesite_dust'), Item.of('minecraft:andesite')).id('kubejs:milling/andesite_dust_from_andesite');

    event.remove({output: 'create:sail_frame'})
    event.remove({output: 'create:white_sail'})
    event.shapeless(Item.of('create:sail_frame'), [Item.of('create:white_sail')]).id('kubejs:sail_frame_from_sail_manual_only');
    event.shaped(Item.of('create:white_sail', 2), [
        'SSS',
        'NAN',
        'SSS'
    ], {
        A: Item.of('minecraft:white_wool'),
        N: Item.of('create:zinc_nugget'),
        S: Item.of('minecraft:stick')
    }).id('kubejs:sail_frame_from_sail');

    event.remove({id: 'create:crafting/kinetics/belt_connector'})
    event.shaped(Item.of('create:belt_connector', 3), [
        'SSS',
        'SSS'
    ], {
        S: Item.of('thermal:cured_rubber')
    }).id('create:crafting/kinetics/belt_connector');

    event.recipes.create.mechanical_crafting(Item.of('kubejs:radiant_coil'), [
        'C'
    ], {
        C: Item.of('kubejs:radiant_sheet'),
    }).id('kubejs:crafter/radiant_coil_from_sheet');

    event.recipes.create.mechanical_crafting(Item.of('kubejs:radiant_coil', 4), [
        'CS'
    ], {
        C: Item.of('kubejs:radiant_sheet'),
        S: Item.of('create:shadow_steel')
    }).id('kubejs:crafter/radiant_coil_from_sheet_and_shadow_steel_horizontal');

    event.recipes.create.mechanical_crafting(Item.of('kubejs:radiant_coil', 4), [
        'C',
        'S'
    ], {
        S: Item.of('kubejs:radiant_sheet'),
        C: Item.of('create:shadow_steel')
    }).id('kubejs:crafter/radiant_coil_from_sheet_and_shadow_steel_vertical');
});
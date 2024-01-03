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
    event.shapeless('create:blaze_burner', ['create:empty_blaze_burner', 'kubejs:runic_tablet'])

    event.replaceInput({id: 'create:crafting/kinetics/elevator_pulley'}, 'minecraft:dried_kelp_block', 'thermal:cured_rubber_block')
    event.replaceInput({id: 'create:crafting/kinetics/train_door'}, 'create:brass_sheet', 'create:sturdy_sheet')
    event.replaceInput({id: 'create:crafting/kinetics/train_trapdoor'}, 'create:brass_sheet', 'create:sturdy_sheet')

    event.replaceInput({id: 'create:mechanical_crafting/wand_of_symmetry'}, 'minecraft:ender_pearl', 'create:refined_radiance')
    event.replaceInput({id: 'create:mechanical_crafting/wand_of_symmetry'}, 'create:precision_mechanism', 'kubejs:radiant_mechanism')

    event.replaceInput({id: 'create:crafting/kinetics/rope_pulley'}, '#forge:wool', '#supplementaries:ropes')

    event.shapeless(Item.of('create:andesite_alloy'), [Item.of('minecraft:diorite'), Item.of('minecraft:andesite')]).id('andesite_alloy_manual_only')
    event.recipes.create.mixing(Item.of('create:andesite_alloy', 4), [Item.of('integrateddynamics:crystalized_menril_chunk'), Item.of('minecraft:andesite')])

    event.shapeless(Item.of('create:andesite_alloy', 9), Item.of('create:andesite_alloy_block'))

    let tweak_casing = (r, i1, i2, tag) => {
        event.remove({output: r})
        if (tag) {
            event.custom({
                'type': 'create:item_application',
                'ingredients': [
                    {
                        'tag': i2
                    },
                    {
                        'item': i1
                    }
                ],
                'results': [
                    {
                        'item': r
                    }
                ]
            })
        } else {
            event.custom({
                'type': 'create:item_application',
                'ingredients': [
                    {
                        'item': i2
                    },
                    {
                        'item': i1
                    }
                ],
                'results': [
                    {
                        'item': r
                    }
                ]
            })
        }

        // event.recipes.createDeploying(r, [i2, i1])
    }

    // Andesite Blend
    event.shaped(Item.of('kubejs:andesite_blend', 2), [
        'SA',
        'AS'
    ], {
        A: 'minecraft:andesite',
        S: 'minecraft:clay_ball'
    })

    //Andesite Alloy
    event.shaped(Item.of('create:andesite_alloy', 2), [
        'SA',
        'AS'
    ], {
        A: Item.of('kubejs:andesite_blend'),
        S: Item.of('create:zinc_nugget')
    })

    event.recipes.create.mixing(Item.of('create:andesite_alloy', 2), ['create:zinc_nugget', 'kubejs:andesite_blend'])
    event.recipes.create.mixing(Item.of('kubejs:andesite_blend'), ['kubejs:andesite_dust', 'minecraft:clay_ball'])

    event.recipes.create.milling(Item.of('kubejs:andesite_dust'), 'minecraft:andesite')

    tweak_casing('create:andesite_casing', 'create:andesite_alloy', 'minecraft:logs', true)
    tweak_casing('create:copper_casing', 'create:copper_sheet', 'minecraft:logs', true)
    tweak_casing('create:brass_casing', 'create:brass_sheet', 'minecraft:logs', true)
    tweak_casing('kubejs:zinc_casing', 'createdeco:zinc_sheet', 'minecraft:stone')
    tweak_casing('kubejs:invar_casing', 'thermal:invar_ingot', 'minecraft:stone')
    tweak_casing('kubejs:fluix_casing', 'thermal:lead_plate', 'minecraft:basalt')

    event.remove({output: 'create:sail_frame'})
    event.remove({output: 'create:white_sail'})
    event.shapeless('create:sail_frame', ['create:white_sail'])
    event.shaped('2x create:white_sail', [
        'SSS',
        'NAN',
        'SSS'
    ], {
        A: 'minecraft:white_wool',
        N: 'create:zinc_nugget',
        S: 'minecraft:stick'
    })

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
    })

    event.recipes.create.mechanical_crafting(Item.of('kubejs:radiant_coil', 4), [
        'CS'
    ], {
        C: Item.of('kubejs:radiant_sheet'),
        S: Item.of('create:shadow_steel')
    })

    event.recipes.create.mechanical_crafting(Item.of('kubejs:radiant_coil', 4), [
        'C',
        'S'
    ], {
        S: Item.of('kubejs:radiant_sheet'),
        C: Item.of('create:shadow_steel')
    })
})
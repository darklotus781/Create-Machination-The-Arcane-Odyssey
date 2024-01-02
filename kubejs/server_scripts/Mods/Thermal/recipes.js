//priority: 0

ServerEvents.recipes(event => {
    event.remove({id: 'thermal:tools/satchel'});
    event.remove({id: 'thermal:machines/pulverizer/pulverizer_blaze_rod'})
    event.remove({output: 'thermal:cinnabar'})
    event.remove({output: 'thermal:apatite'})
    event.remove({mod: 'thermal', id: /.*dust_[0-9]/})
    event.remove({output: 'thermal:niter'})
    event.remove({output: 'thermal:glowstone_mushroom_spores'})
    event.remove({output: 'thermal:gunpowder_mushroom_spores'})
    event.remove({output: 'thermal:redstone_mushroom_spores'})
    event.remove({output: 'thermal:slime_mushroom_spores'})
    event.remove({id: 'thermal:glowstone_mushroom_spores'})
    event.remove({id: 'thermal:compat/create/smelter_create_alloy_chromatic_compound'})
    event.remove({id: 'thermal:gunpowder_mushroom_spores'})
    event.remove({id: 'thermal:redstone_mushroom_spores'})
    event.remove({id: 'thermal:slime_mushroom_spores'})
    event.remove({id: 'thermal:slime_mushroom_spores'})
    event.remove({id: 'thermal:compat/create/pulverzier_create_tuff'})
    event.remove({id: 'thermal:compat/create/smelter_create_alloy_andesite_alloy'})

    event.replaceInput({id:/.*thermal\:fire_charge.*/}, 'minecraft:fire_charge', 'forbidden_arcanus:smelter_prism')
    event.replaceInput({output: 'thermal:lumium_ingot'}, 'minecraft:glowstone_dust' , 'create:refined_radiance')

    event.recipes.create.haunting(Item.of('thermal:ender_tnt').withChance(0.65),'minecraft:tnt')

    // Thermal Drill Head
    event.remove({ output: 'thermal:drill_head' })
    event.shaped(Item.of('thermal:drill_head'), [
        'NN ',
        'NLP',
        ' PL'
    ], {
        N: Item.of('minecraft:iron_nugget'),
        P: Item.of('create:iron_sheet'),
        L: '#forge:ingots/lead'
    })

    // Thermal Saw Blade
    event.remove({ output: 'thermal:saw_blade' })
    event.shaped('thermal:saw_blade', [
        'NPN',
        'PLP',
        'NPN'
    ], {
        N: Item.of('minecraft:iron_nugget'),
        P: Item.of('create:iron_sheet'),
        L: '#forge:ingots/lead'
    })

    let overrideTreeOutput = (id, trunk, leaf) => {
        event.remove({ id: id })
        event.custom({
            'type': 'thermal:tree_extractor',
            'trunk': trunk,
            'leaves': leaf,
            'result': {
                'fluid': 'thermal:resin',
                'amount': 25
            }
        });
    }

    overrideTreeOutput('thermal:devices/tree_extractor/tree_extractor_jungle', 'minecraft:jungle_log', 'minecraft:jungle_leaves')
    overrideTreeOutput('thermal:devices/tree_extractor/tree_extractor_spruce', 'minecraft:spruce_log', 'minecraft:spruce_leaves')
    overrideTreeOutput('thermal:devices/tree_extractor/tree_extractor_dark_oak', 'minecraft:dark_oak_log', 'minecraft:dark_oak_leaves')
    overrideTreeOutput('thermal:compat/biomesoplenty/tree_extractor_bop_maple', 'minecraft:oak_log', 'biomesoplenty:maple_leaves')

    event.recipes.create.compacting(Item.of('thermal:rubber'), [Fluid.of('minecraft:water', 250), Item.of('#forge:vines', 4)])
    event.recipes.create.compacting(Item.of('thermal:rubber'), [Fluid.of('minecraft:water', 250), Item.of('#forge:flowers', 4)])
    event.recipes.create.compacting(Item.of('thermal:rubber'), [Fluid.of('thermal:resin', 250)])

    event.remove({ id: 'thermal:rubber_3' })
    event.remove({ id: 'thermal:rubber_from_dandelion' })
    event.remove({ id: 'thermal:rubber_from_vine' })
})
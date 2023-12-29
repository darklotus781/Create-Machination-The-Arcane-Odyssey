//priority: 0

ServerEvents.recipes(event => {
    event.remove({id: "thermal:tools/satchel"});
    event.remove({id: 'thermal:machines/pulverizer/pulverizer_blaze_rod'})
    event.remove({output: 'thermal:cinnabar'})
    event.remove({output: 'thermal:apatite'})
    event.remove({mod: "thermal", id: /.*dust_[0-9]/})
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

    event.replaceInput({id:/.*thermal\:fire_charge.*/}, "minecraft:fire_charge", "forbidden_arcanus:smelter_prism")
    event.replaceInput({output: "thermal:lumium_ingot"}, 'minecraft:glowstone_dust' , 'create:refined_radiance')

    event.recipes.create.haunting(Item.of('thermal:ender_tnt').withChance(0.65),'minecraft:tnt')


})
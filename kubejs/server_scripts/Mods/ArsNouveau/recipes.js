//priority: 0

ServerEvents.recipes(event => {
    event.remove({id: 'ars_nouveau:magebloom_fiber'})
    event.remove({output: 'ars_nouveau:source_gem'})
    event.remove({id: 'ars_nouveau:imbuement_amethyst_block'})

    event.shapeless(Item.of("ars_nouveau:source_gem",4),"ars_nouveau:source_gem_block")

    event.recipes.create.deploying('ars_nouveau:magebloom_fiber', ['kubejs:mage_leaf', '#forge:tools/knives'])

    event.shapeless("ars_nouveau:spell_parchment", "4x ars_nouveau:magebloom_fiber")

    //Storage Lectern - Gated but early game
})
ServerEvents.recipes(event => {
    let waystones = ['waystones:waystone',
        'waystones:mossy_waystone',
        'waystones:sandy_waystone'
    ]
    waystones.forEach(i => {
        event.recipes.create.crushing([Item.of('kubejs:warp_fragments', 5), Item.of('kubejs:warp_fragments')], i)
    })

    event.recipes.create.crushing(Item.of('kubejs:sourcegem_fragments').withChance(0.4), Item.of('ars_nouveau:source_gem'))
})
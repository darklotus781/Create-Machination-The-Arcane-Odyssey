ServerEvents.recipes(event => {
    event.remove({id: 'botania:red_string_alt'});

    event.remove({ id: 'botania:flighttiara_0' })
    event.shaped('botania:flight_tiara', [
        'LLL',
        'ERE',
        'FAF'
    ], {
        L: 'botania:life_essence',
        E: 'botania:elementium_ingot',
        R: 'create:refined_radiance',
        F: 'minecraft:feather',
        A: 'botania:ender_air_bottle'
    })
});
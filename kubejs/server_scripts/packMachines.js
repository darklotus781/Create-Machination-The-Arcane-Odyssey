ServerEvents.recipes(event => {
    // Andesite Machine
    event.shaped('kubejs:andesite_machine', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'create:andesite_casing',
        S: '#create:kinetic_mechanisms'
    })

    // Sealed Machine
    event.shaped('kubejs:sealed_machine', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'create:copper_casing',
        S: 'kubejs:sealed_mechanism'
    })

    // Brass Machine
    event.shaped('kubejs:brass_machine', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'create:brass_casing',
        S: 'create:precision_mechanism'
    })

    // Sturdy Machine
    event.shaped('kubejs:sturdy_machine', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        C: 'create:railway_casing',
        S: 'kubejs:sturdy_mechanism'
    })

    function machinerator(mechanism,casing) {
        event.shaped('kubejs:' + mechanism + '_machine', [
            'SSS',
            'SCS',
            'SSS'
        ], {
            C: casing,
            S: 'kubejs:' + mechanism + '_mechanism'
        }).id('wrenchable' + mechanism)
    }

    machinerator('radiant','thermal:machine_frame')
    machinerator('integrational','kubejs:gold_casing')
    machinerator('plastic','kubejs:zinc_casing')
    machinerator('time','kubejs:enderium_casing')
    machinerator('supercritical','kubejs:supercritical_casing')
})
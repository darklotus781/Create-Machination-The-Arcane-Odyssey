StartupEvents.registry("block", event => {
    const device = name => {
        return event
            .create(name, 'cardinal')
            .hardness(2)
            .resistance(6)
            .tagBlock('create:wrench_pickup')
            .opaque(false)
            .notSolid()
            .redstoneConductor(false)
            .fullBlock(false)
            .noValidSpawns(true)
            .suffocating(false)
            .viewBlocking(false)
            .defaultCutout()
            .transparent(true);
    };



    const machine = (name, display, layer) => {
        let id = name.toLowerCase()
        event.create(id + '_machine')
            .model('kubejs:block/' + id + '_machine')
            .material('lantern')
            .hardness(3.0)
            .displayName(display + ' Machine')
            .notSolid()
            .renderType(layer)
    }

    device('sturdy_device')
        .material('stone')
        .soundType('stone');

    device('logic_device')
        .material('stone')
        .soundType('stone')
        .box(0, 0, 0, 16, 2, 16);

    device('sealed_device')
        .material('metal')
        .soundType('copper')
        .box(0, 0, 0, 16, 15, 16);

    device('smart_device')
        .material('metal')
        .soundType('metal');

    device('furnished_device')
        .material('wood')
        .soundType('wood')
        .box(0, 0, 0, 16, 12, 16);

    device('mechanical_device')
        .material('metal')
        .soundType('wood');

    device('locomotive_device')
        .material('metal')
        .soundType('metal')
        .box(3, 0, 0, 13, 9, 16)
        .box(4, 9, 4, 12, 12, 16);

    device('red_stringed_device')
        .material('stone')
        .soundType('stone')
        .box(2, 0, 1, 14, 14, 15);

    machine('Precision', 'Precision',"translucent")
    machine('Copper', 'Pressure', "cutout")
    machine('Zinc', 'Scorch',"cutout")
    machine('Train', 'Track', "cutout")
    machine('Enderium', 'Abstruse',"cutout")
    machine('Power', 'Power', "translucent")

    event.create('enderium_casing').model('kubejs:block/enderium_casing').material('metal').hardness(4.0).displayName('Ender Casing')
    event.create('zinc_casing').material('metal').hardness(3.0).displayName('Zinc Casing')
    event.create('invar_casing').material('metal').hardness(3.0).displayName('Invar Casing')
    event.create('fluix_casing').material('metal').hardness(3.0).displayName('Fluix Casing')

    event.create('mica_block').material('metal').hardness(3.0).displayName('Mica Block')

    let layer = "cutout"
    event.create('andesite_machine').displayName('Andesite Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('brass_machine').displayName('Brass Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('sealed_machine').displayName('Sealed Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('integrational_machine').displayName('Integrational Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('sturdy_machine').displayName('Sturdy Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('radiant_machine').displayName('Radiant Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('plastic_machine').displayName('Plastic Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('time_machine').displayName('Time Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('supercritical_machine').displayName('Supercritical Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)

    event.create('gold_casing')
    // event.create('zinc_casing')
    // event.create('enderium_casing')
    event.create('supercritical_casing')
})
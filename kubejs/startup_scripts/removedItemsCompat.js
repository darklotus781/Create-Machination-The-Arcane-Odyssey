StartupEvents.registry('block', event => {
    // const device = name => {
    //     return event
    //         .create(name, 'cardinal')
    //         .hardness(2)
    //         .resistance(6)
    //         .tagBlock('create:wrench_pickup')
    //         .opaque(false)
    //         .notSolid()
    //         .redstoneConductor(false)
    //         .fullBlock(false)
    //         .noValidSpawns(true)
    //         .suffocating(false)
    //         .viewBlocking(false)
    //         .defaultCutout()
    //         .transparent(true);
    // };
    // const machine = (name, display, layer) => {
    //     let id = name.toLowerCase()
    //     event.create(id + '_machine')
    //         .model('kubejs:block/' + id + '_machine')
    //         .hardness(3.0)
    //         .displayName(display + ' Machine')
    //         .notSolid()
    //         .hardness(2)
    //         .resistance(6)
    //         .tagBlock('create:wrench_pickup')
    //         .renderType(layer);
    // };

    // device('sturdy_device')
    //     .soundType('stone');
    //
    // device('logic_device')
    //     .soundType('stone')
    //     .box(0, 0, 0, 16, 2, 16);
    //
    // device('sealed_device')
    //     .soundType('copper')
    //     .box(0, 0, 0, 16, 15, 16);
    //
    // device('smart_device')
    //     .soundType('metal');
    //
    // device('furnished_device')
    //     .soundType('wood')
    //     .box(0, 0, 0, 16, 12, 16);
    //
    // device('mechanical_device')
    //     .soundType('wood');
    //
    // device('locomotive_device')
    //     .soundType('metal')
    //     .box(3, 0, 0, 13, 9, 16)
    //     .box(4, 9, 4, 12, 12, 16);
    //
    // device('red_stringed_device')
    //     .soundType('stone')
    //     .box(2, 0, 1, 14, 14, 15);

    // let layer = "cutout";
    // event.create('andesite_machine').displayName('Andesite Machine').notSolid().renderType(layer).hardness(3.0);
    // event.create('brass_machine').displayName('Brass Machine').notSolid().renderType(layer).hardness(3.0);
    // event.create('copper_machine').displayName('Copper Machine').notSolid().renderType(layer).hardness(3.0);
    // event.create('cyber_machine').displayName('Cyber Machine').notSolid().renderType(layer).hardness(3.0);
    // event.create('sturdy_machine').displayName('Sturdy Machine').notSolid().renderType(layer).hardness(3.0);
    // event.create('radiant_machine').displayName('Radiant Machine').notSolid().renderType(layer).hardness(3.0);
    // event.create('plastic_machine').displayName('Plastic Machine').notSolid().renderType(layer).hardness(3.0);
    // event.create('temporal_machine').displayName('Time Machine').notSolid().renderType(layer).hardness(3.0);

    // machine('Copper', 'Pressure', "cutout");
    // machine('Zinc', 'Scorch', "cutout");
    // machine('Train', 'Track', "cutout") // Terrible Icon and duplicate of Sturdy
    // machine('Enderium', 'Abstruse', "cutout");
    // machine('Power', 'Power', "translucent");

    // event.create('enderium_casing').model('kubejs:block/enderium_casing').hardness(4.0).displayName('Ender Casing');
    // event.create('zinc_casing').hardness(3.0).displayName('Zinc Casing');
    // event.create('invar_casing').hardness(3.0).displayName('Invar Casing');
    // event.create('fluix_casing').hardness(3.0).displayName('Fluix Casing');
    // event.create('supercritical_casing');
    // event.create('gold_casing');

    // event.create('supercritical_machine').displayName('Supercritical Machine').notSolid().renderType(layer).hardness(3.0);

    // event.create('corrupted_pixie_utrem_jar').displayName('Corrupted Pixie Utrem Jar').notSolid().renderType(layer);
    // event.create('pixie_utrem_jar').displayName('Pixie Utrem Jar').notSolid().renderType(layer);
});

StartupEvents.registry('item', event => {
    // event.create('kubejs:kinetic_mechanism');
    // event.create('kubejs:sealed_mechanism');
    // event.create('lube_can').texture('kubejs:item/lube_can').displayName('Lubricant Can').maxDamage(256);

    // event.create('forbidden_arcanus:pixie_utrem_jar').texture('kubejs:item/pixie_utrem_jar').displayName('Pixie Utrem Jar');
    // event.create('forbidden_arcanus:corrupted_pixie_utrem_jar').texture('kubejs:item/corrupted_pixie_utrem_jar').displayName('Corrupted Pixie Utrem Jar');

    // Different Tubes
    // event.create('golden_tube').texture('kubejs:item/yellow_tube').displayName('Golden Tube');
    // event.create('diamond_tube').texture('kubejs:item/blue_tube').displayName('Diamond Tube');

    // Incomplete / Transitional Devices
    // event.create('incomplete_sturdy_device', 'create:sequenced_assembly');
    // event.create('incomplete_mechanical_device', 'create:sequenced_assembly');
    // event.create('incomplete_sealed_device', 'create:sequenced_assembly');
    // event.create('incomplete_smart_device', 'create:sequenced_assembly');
    // event.create('incomplete_locomotive_device', 'create:sequenced_assembly');
    // event.create('incomplete_logic_device', 'create:sequenced_assembly');
    // event.create('incomplete_red_stringed_device', 'create:sequenced_assembly');
    // event.create('incomplete_furnished_device', 'create:sequenced_assembly');
});
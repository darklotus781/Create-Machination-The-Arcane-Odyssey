StartupEvents.registry("block", event => {
    event.create('mica_block').hardness(3.0).displayName('Mica Block');

    // Custom Frame Blocks used to make Casings
    event.create('andesite_frame').tagBlock('create:wrench_pickup');
    event.create('brass_frame').tagBlock('create:wrench_pickup');
    event.create('copper_frame').tagBlock('create:wrench_pickup');
    event.create('railway_frame').tagBlock('create:wrench_pickup');
    event.create('refined_radiance_frame').tagBlock('create:wrench_pickup');
    event.create('shadow_steel_frame').tagBlock('create:wrench_pickup');

    event.create('forbidden_arcanus:corrupted_pixie_utrem_jar')
        .item(item =>
            item.modelJson({
                parent: 'minecraft:item/generated',
                textures: {
                    layer0: 'kubejs:item/corrupted_pixie_utrem_jar',
                },
            })
        ).model('kubejs:block/corrupted_pixie_utrem_jar').displayName('Corrupted Pixie Utrem Jar').notSolid().renderType('translucent');

    event.create('forbidden_arcanus:pixie_utrem_jar')
        .item(item =>
            item.modelJson({
                parent: 'minecraft:item/generated',
                textures: {
                    layer0: 'kubejs:item/pixie_utrem_jar',
                },
            })
        ).model('kubejs:block/pixie_utrem_jar').displayName('Pixie Utrem Jar').notSolid().renderType('translucent');
});

BlockEvents.modification(event => {
    event.modify('ae2:sky_stone_block', block => {
        block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() / 2; // Set to half
    });
});
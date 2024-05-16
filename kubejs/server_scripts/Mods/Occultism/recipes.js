ServerEvents.recipes(event => {
    event.replaceInput({mod: 'occultism'}, 'minecraft:gold_ingot', 'forbidden_arcanus:deorum_ingot');
    event.replaceInput({mod: 'occultism'}, 'minecraft:nether_star', 'forbidden_arcanus:dark_nether_star');
    event.replaceInput({mod: 'occultism'}, 'minecraft:diamond', 'botania:mana_diamond');
    event.remove({id: 'occultism:ritual/craft_dimensional_matrix'});
    event.remove({id: 'occultism:ritual/craft_stable_wormhole'});
    event.remove({id: 'occultism:ritual/craft_satchel'});

    // Replacement occultism:ritual/craft_dimensional_matrix
    event.recipes.occultism.ritual(Item.of('occultism:dimensional_matrix'), [
            '#forge:ender_pearls',
            '#forge:storage_blocks/quartz',
            'kubejs:cyber_mechanism',
            'botania:gaia_ingot'
        ],
        'occultism:book_of_binding_bound_djinni',
        'occultism:craft_djinni',
        240)
        .dummy('occultism:ritual_dummy/craft_dimensional_matrix')
        .id('occultism:ritual/craft_dimensional_matrix');

    // Replacement occultism:ritual/craft_stable_wormhole
    event.recipes.occultism.ritual(Item.of('occultism:stable_wormhole'), [
            'occultism:wormhole_frame',
            '#forge:storage_blocks/quartz',
            'kubejs:quantum_mechanism',
            'botania:gaia_ingot'
        ],
        'occultism:book_of_binding_bound_foliot',
        'occultism:craft_foliot',
        120)
        .dummy('occultism:ritual_dummy/craft_stable_wormhole')
        .id('occultism:ritual/craft_stable_wormhole');

    // Replacement occultism:ritual/craft_satchel
    event.recipes.occultism.ritual(Item.of('occultism:satchel'), [
            'kubejs:logistics_mechanism',
            '#forge:ingots/silver',
            '#forge:string',
            '#forge:leather',
            'sophisticatedbackpacks:backpack'
        ],
        'occultism:book_of_binding_bound_foliot',
        'occultism:craft_foliot',
        240)
        .dummy('occultism:ritual_dummy/craft_satchel')
        .id('occultism:ritual/craft_satchel');
});
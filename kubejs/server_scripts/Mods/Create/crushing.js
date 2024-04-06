ServerEvents.recipes(event => {
    // Scrap
    event.remove({id: /create:crushing\/update_one\/scrap_*/});
    event.remove({id: /create:crushing\/misc\/scrap_*/});
    event.remove({id: /create:crushing\/iron\/scrap_*/});
    event.remove({id: /create:crushing\/wood\/scrap_*/});
    event.remove({id: /create:crushing\/*\/scrap_*/});
    event.remove({id: /create:crushing\/scrap_*/});
    // Create Recycling...
    event.remove({id: 'create:crushing/diorite_recycling'});
    event.remove({id: 'create:crushing/tuff_recycling'});
    // Create Crushing
    event.remove({id: 'create:crushing/diorite'});
    event.remove({id: 'create:crushing/tuff'});
    event.remove({id: /create\:crushing\/raw_(aluminum|osmium|platinum|uranium)_block/});
    event.remove({id: /create\:crushing\/(aluminum|osmium|platinum|uranium)_ore/});
    event.remove({id: /create\:crushing\/raw_(aluminum|osmium|platinum|uranium)_ore/});

    let waystones = [
        'waystones:waystone',
        'waystones:mossy_waystone',
        'waystones:sandy_waystone'
    ];
    
    waystones.forEach(i => {
        event.recipes.create.crushing([Item.of('kubejs:warp_fragments', 5), Item.of('kubejs:warp_fragments')], Item.of(i));
    })

    event.recipes.create.crushing(Item.of('kubejs:sourcegem_fragments').withChance(0.4), Item.of('ars_nouveau:source_gem'));
});
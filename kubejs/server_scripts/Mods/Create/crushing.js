ServerEvents.recipes(event => {
    // Scrap
    event.remove({id: /create:crushing\/update_one\/scrap_*/});
    event.remove({id: /create:crushing\/misc\/scrap_*/});
    event.remove({id: /create:crushing\/iron\/scrap_*/});
    event.remove({id: /create:crushing\/wood\/scrap_*/});
    event.remove({id: /create:crushing\/*\/scrap_*/});
    event.remove({id: /create:crushing\/.*\/scrap_*_ingot/});
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


});
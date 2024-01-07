ServerEvents.recipes(event => {
    event.remove({id: 'ars_creo:starbuncle_wheel'});

    // Ars Creo Starbuncle Wheel
    event.shaped('ars_creo:starbuncle_wheel', [
        'XXX',
        'XWX',
        'XXX'
    ], {
        X: Item.of('ars_nouveau:starbuncle_shards'),
        W: Item.of('create:water_wheel')
    });
});
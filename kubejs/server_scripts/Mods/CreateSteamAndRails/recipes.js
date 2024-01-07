ServerEvents.recipes(event => {
    event.remove({output: 'railways:track_monorail'});

    // Monorail
    let t = Item.of('railways:track_incomplete_monorail');
    event.recipes.create.sequenced_assembly([
        Item.of('railways:track_monorail', 16)
    ], Item.of('create:metal_girder'), [
        event.recipes.create.deploying(t, [t, Item.of('create:metal_bracket')]),
        event.recipes.create.deploying(t, [t, Item.of('create:iron_sheet')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1);
});
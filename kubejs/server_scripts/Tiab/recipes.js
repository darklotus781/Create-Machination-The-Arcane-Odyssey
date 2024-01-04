ServerEvents.recipes(event => {
    event.remove({id: 'tiab:time_in_a_bottle'});

    let t = Item.of('forbidden_arcanus:aureal_bottle');
    // Create a Time in the bottle!
    event.recipes.create.sequenced_assembly([
        Item.of('tiab:time_in_a_bottle'),
    ], t, [
        event.recipes.create.deploying(t, [t, Item.of('forbidden_arcanus:arcane_crystal')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:sourcegem_fragments')]),
        event.recipes.create.deploying(t, [t, Item.of('forbidden_arcanus:deorum_nugget')]),
        event.recipes.create.deploying(t, [t, Item.of('forbidden_arcanus:deorum_nugget')]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:source', 144)]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:time_in_a_bottle');
});
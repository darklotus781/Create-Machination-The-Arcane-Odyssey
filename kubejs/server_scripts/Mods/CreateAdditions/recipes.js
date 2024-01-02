ServerEvents.recipes(event => {

    let t = 'kubejs:incomplete_inductor_core'
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:inductor_core'),
    ], Item.of('kubejs:carbon_sheet'), [
        event.recipes.create.deploying(t, [t, Item.of('createaddition:copper_rod')]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:fiberglass_plate')]),
        event.recipes.create.pressing(t, t),
        event.custom({type: 'createaddition:rolling', input: Item.of(t).toJson(), result: Item.of(t).toJson()})
    ]).transitionalItem(t).loops(1)

    event.custom({
        type: 'createaddition:charging',
        input: {
            item: 'kubejs:soaked_sheet',
            count: 1
        },
        result: {
            item: 'kubejs:rough_sheet',
            count: 1
        },
        energy: 4000
    });
});
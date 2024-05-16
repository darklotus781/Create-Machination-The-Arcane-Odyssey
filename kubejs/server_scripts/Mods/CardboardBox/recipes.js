ServerEvents.recipes(event => {
    event.remove({ id: 'cardboardbox:crate' });

    let t = Item.of('dustrial_decor:cardboard_box');
    event.recipes.create.sequenced_assembly([
        Item.of('cardboardbox:crate'),
    ], Item.of('sophisticatedstorage:netherite_barrel').weakNBT(), [
        event.recipes.create.deploying(t, [t, Item.of('dustrial_decor:cardboard')]),
        event.recipes.create.deploying(t, [t, Item.of('dustrial_decor:cardboard')]),
        event.recipes.create.deploying(t, [t, Item.of('dustrial_decor:cardboard')]),
        event.recipes.create.deploying(t, [t, Item.of('create:super_glue')]).damageIngredient('create:super_glue'),
        event.recipes.create.deploying(t, [t, Ingredient.of('#create:sandpaper')]).damageIngredient('#create:sandpaper'),
        event.recipes.create.cutting(t, [t]),
        event.recipes.create.deploying(t, [t, Item.of('sophisticatedstorage:packing_tape')]).damageIngredient('sophisticatedstorage:packing_tape')
        
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/cardboardbox_crate');
});
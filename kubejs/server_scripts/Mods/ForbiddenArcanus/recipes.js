BlockEvents.rightClicked(event => {
    if (event.block.id == 'minecraft:soul_sand' && event.item.id == 'forbidden_arcanus:soul_extractor') {
        event.block.set('forbidden_arcanus:soulless_sand')
        event.block.popItemFromFace('forbidden_arcanus:soul', 'up')
    }
});

ServerEvents.recipes(event => {
    event.remove({id: 'create:haunting/soul_sand'})
    event.remove({id: 'create:splashing/soul_sand'})

    event.remove({id: 'forbidden_arcanus:golden_orchid_seeds'})
    event.remove({id: 'forbidden_arcanus:dark_matter'})
    event.remove({id: 'forbidden_arcanus:corrupti_dust'})
    event.remove({id: 'forbidden_arcanus:dark_nether_star'})
    event.remove({id: 'forbidden_arcanus:corrupted_pixie'})
    event.remove({id: 'forbidden_arcanus:blasting/arcane_crystal_dust_from_blasting'})
    event.remove({id: 'forbidden_arcanus:smelting/arcane_crystal_dust_from_smelting'})
    event.remove({id: 'forbidden_arcanus:aureal_bottle'})
    event.remove({id: 'forbidden_arcanus:deorum_ingot'})
    event.remove({id: 'forbidden_arcanus:mundabitur_dust'})

    event.recipes.create.filling(Item.of('forbidden_arcanus:aureal_bottle'), [Item.of('kubejs:empty_vial'), Fluid.of('kubejs:aureal_essence', 333)]);
    event.recipes.create.haunting(Item.of('forbidden_arcanus:dark_nether_star'), Item.of('minecraft:nether_star')).id('forbidden_arcanus:dark_nether_star');
    event.recipes.create.mixing(Item.of('forbidden_arcanus:mundabitur_dust'), [Item.of('forbidden_arcanus:arcane_crystal_dust'), Item.of('ae2:sky_dust')]);
    event.recipes.create.mixing(Item.of('forbidden_arcanus:deorum_ingot'), [Item.of('minecraft:gold_nugget', 9), Item.of('forbidden_arcanus:mundabitur_dust')]);
    event.recipes.create.haunting(Item.of('forbidden_arcanus:soulless_sand'), Ingredient.of('#forge:sand')).id('kubejs:haunting_soulless_sand');

    event.custom({
        type: 'pneumaticcraft:explosion_crafting',
        input: {
            item: 'forbidden_arcanus:dark_rune'
        },
        loss_rate: 30,
        results: [
            {
                item: 'forbidden_arcanus:corrupti_dust'
            }
        ]
    }).id('forbidden_arcanus:corrupti_dust');

    event.custom({
        type: 'pneumaticcraft:explosion_crafting',
        input: {
            item: 'ae2:matter_ball'
        },
        loss_rate: 20,
        results: [
            {
                item: 'forbidden_arcanus:dark_matter'
            }
        ]
    }).id('forbidden_arcanus:dark_matter');

    let t = Item.of('forbidden_arcanus:arcane_crystal_dust_speck');
    event.recipes.create.sequenced_assembly([
        Item.of('forbidden_arcanus:arcane_crystal'),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:aureal_essence', 16)]),
        event.recipes.create.pressing(t, t),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:aureal_essence', 16)]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(2).id('forbidden_arcanus:arcane_crystal');
})
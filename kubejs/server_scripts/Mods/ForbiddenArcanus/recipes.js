ServerEvents.recipes(event => {
    event.remove({id: 'forbidden_arcanus:golden_orchid_seeds'})

    event.recipes.create.haunting(Item.of('forbidden_arcanus:dark_nether_star'), Item.of('minecraft:nether_star'))

    event.custom({
        'type': 'pneumaticcraft:explosion_crafting',
        'input': {
            'item': 'forbidden_arcanus:dark_rune'
        },
        'loss_rate': 30,
        'results': [
            {
                'item': 'forbidden_arcanus:corrupti_dust'
            }
        ]
    })
    event.custom({
        'type': 'pneumaticcraft:explosion_crafting',
        'input': {
            'item': 'ae2:matter_ball'
        },
        'loss_rate': 20,
        'results': [
            {
                'item': 'forbidden_arcanus:dark_matter'
            }
        ]
    })
})
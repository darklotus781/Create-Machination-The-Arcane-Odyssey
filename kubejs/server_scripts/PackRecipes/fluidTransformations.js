ServerEvents.recipes(event => {
    event.custom({
        type: 'lychee:item_inside',
        item_in: {
            item: 'thermal:sulfur_dust'
        },
        block_in: {
            blocks: ['minecraft:water'],
            state: {
                level: 0
            }
        },
        post: [
            {
                type: 'place',
                block: 'kubejs:sulfuric_acid'
            },
            {
                type: 'drop_item',
                item: 'thermal:sulfur_dust',
                contextual: {
                    type: 'chance',
                    chance: 0.33
                }
            }
        ]
    }).id('sulfuric_acid_from_sulfur');

    event.custom({
        type: 'lychee:item_inside',
        item_in: {
            item: 'kubejs:chromium'
        },
        block_in: {
            blocks: ['minecraft:water'],
            state: {
                level: 0
            }
        },
        post: [
            {
                type: 'place',
                block: 'kubejs:dichromic_acid'
            },
            {
                type: 'drop_item',
                item: 'kubejs:chromium',
                contextual: {
                    type: 'chance',
                    chance: 0.33
                }
            }
        ]
    }).id('dichromic_acid_from_chromium');

    event.custom({
        type: 'lychee:item_inside',
        item_in: {
            item: 'kubejs:anthracene'
        },
        block_in: {
            blocks: ['kubejs:sulfuric_acid'],
            state: {
                level: 0
            }
        },
        post: [
            {

                type: 'place',
                block: 'minecraft:air',
                contextual: {
                    type: 'chance',
                    chance: 0.20
                }
            },
            {
                type: 'drop_item',
                item: 'kubejs:incomplete_anthraquinone',
            }
        ]
    }).id('incomplete_anthraquinone_from_anthracene');

    event.custom({
        type: 'lychee:item_inside',
        item_in: {
            item: 'kubejs:incomplete_anthraquinone'
        },
        block_in: {
            blocks: ['kubejs:dichromic_acid'],
            state: {
                level: 0
            }
        },
        post: [
            {

                type: 'place',
                block: 'minecraft:air',
                contextual: {
                    type: 'chance',
                    chance: 0.20
                }
            },
            {
                type: 'drop_item',
                item: 'kubejs:anthraquinone',
            }
        ]
    }).id('anthraquinone_from_incomplete_anthraquinone');

    event.custom({
        type: 'lychee:item_inside',
        item_in: {
            item: 'thermal:quartz_dust'
        },
        block_in: {
            blocks: ['kubejs:chromatic_solution'],
            state: {
                level: 0
            }
        },
        post: [
            {

                type: 'place',
                block: 'minecraft:air',
                contextual: {
                    type: 'chance',
                    chance: 0.10
                }
            },
            {
                type: 'drop_item',
                item: 'minecraft:glowstone_dust',
            }
        ]
    }).id('kubejs:glowstone_dust_from_quartz_dust');
});

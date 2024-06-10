ServerEvents.recipes(event => {
    event.remove('createoreexcavation:drill');
    event.remove('createoreexcavation:diamond_drill');
    event.remove('createoreexcavation:drilling_machine');
    event.remove('createoreexcavation:extractor');
    event.remove('minecraft:netherite_drill_smithing');

    event.recipes.create.mechanical_crafting(Item.of('createoreexcavation:drilling_machine'), [
        'IBCBI',
        'BTSTB',
        'ZPDPU',
        'BVVVB',
        'GBBBG',
    ], {
        I: Item.of('create:industrial_iron_block'),
        B: Ingredient.of('#forge:plates/brass'),
        C: Item.of('create:copper_casing'),
        T: Item.of('create:electron_tube'),
        S: Item.of('create:spout'),
        Z: Item.of('create:brass_casing'),
        P: Item.of('kubejs:brass_mechanism'),
        D: Item.of('create:mechanical_drill'),
        U: Item.of('create:brass_tunnel'),
        V: Item.of('create:sturdy_sheet'),
        G: Item.of('pneumaticcraft:drill_pipe')
    }).id('createoreexcavation:drilling_machine');


    // =========================================
    // Drill Heads
    // =========================================

    // Hardened Drill
    event.shaped('createoreexcavation:hardened_drill', [
            ' BA',
            'BCB',
            'BB '
        ],
        {
            A: '#forge:storage_blocks/diamond',
            B: 'alexscaves:corrodent_teeth',
            C: 'pneumaticcraft:drill_bit_netherite'
        })
        .id('createoreexcavation:hardened_drill');

    // Arcane Drill
    event.shaped('createoreexcavation:arcane_drill', [
            ' BA',
            'BCB',
            'BB '
        ],
        {
            A: '#forge:storage_blocks/deorum',
            B: '#forge:nuggets/allthemodium',
            C: 'createoreexcavation:hardened_drill',
        })
        .id('createoreexcavation:arcane_drill');

    // Molten Drill
    event.shaped('createoreexcavation:molten_drill', [
            ' BA',
            'BCB',
            'BB '
        ],
        {
            A: 'cataclysm:witherite_ingot',
            B: 'cataclysm:ignitium_ingot',
            C: 'createoreexcavation:arcane_drill',
        })
        .id('createoreexcavation:molten_drill');
});


ServerEvents.recipes(event => {
    event.remove({output: 'easy_villagers:trader'});
    event.remove({output: 'easy_villagers:auto_trader'}); // Disabled, too OP
    event.remove({output: 'easy_villagers:farmer'}); // Disabled, too OP
    event.remove({output: 'easy_villagers:breeder'});
    event.remove({output: 'easy_villagers:converter'});
    event.remove({output: 'easy_villagers:iron_farm'}); // Disabled, too OP
    event.remove({output: 'easy_villagers:incubator'}); // Disabled, just deal with the babies!

    event.shaped(Item.of('easy_villagers:trader'), [
        'PPP',
        'PNP',
        'CRC'
    ], {
        C: Item.of('forbidden_arcanus:arcane_crystal_block'),
        P: Item.of('forbidden_arcanus:dark_runic_glass_pane'),
        N: Item.of('minecraft:netherite_ingot'),
        R: Item.of('kubejs:runic_tablet')
    });

    event.shaped(Item.of('easy_villagers:converter'), [
        'PPP',
        'PZP',
        'CRC'
    ], {
        C: Item.of('forbidden_arcanus:arcane_crystal_block'),
        P: Item.of('forbidden_arcanus:dark_runic_glass_pane'),
        Z: Item.of('minecraft:zombie_head'),
        R: Item.of('kubejs:runic_tablet')
    });

    event.shaped(Item.of('easy_villagers:breeder'), [
        'PPP',
        'PBP',
        'CRC'
    ], {
        C: Item.of('forbidden_arcanus:arcane_crystal_block'),
        P: Item.of('forbidden_arcanus:dark_runic_glass_pane'),
        B: Item.of('ars_nouveau:orange_sbed'),
        R: Item.of('kubejs:runic_tablet')
    });
});
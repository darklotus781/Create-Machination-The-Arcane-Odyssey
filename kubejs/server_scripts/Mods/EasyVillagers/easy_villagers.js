ServerEvents.recipes(event => {
    event.remove({output: 'easy_villagers:trader'});
    event.remove({output: 'easy_villagers:auto_trader'}); // Disabled, too OP
    event.remove({output: 'easy_villagers:farmer'}); // Disabled, too OP
    event.remove({output: 'easy_villagers:breeder'});
    event.remove({output: 'easy_villagers:converter'});
    event.remove({output: 'easy_villagers:iron_farm'}); // Disabled, too OP
    event.remove({output: 'easy_villagers:incubator'});

    event.shaped(Item.of('easy_villagers:trader'), [
        'PPP',
        'PNP',
        'III'
    ], {
        I: Ingredient.of('#forge:plates/iron'),
        P: Item.of('forbidden_arcanus:dark_runic_glass_pane'),
        N: Ingredient.of('#forge:ingots/netherite'),
    });

    event.shaped(Item.of('easy_villagers:converter'), [
        'PPP',
        'PZP',
        'III'
    ], {
        I: Ingredient.of('#forge:plates/iron'),
        P: Item.of('forbidden_arcanus:dark_runic_glass_pane'),
        Z: Item.of('minecraft:zombie_head'),
    });

    event.shaped(Item.of('easy_villagers:breeder'), [
        'PPP',
        'PBP',
        'III'
    ], {
        I: Ingredient.of('#forge:plates/iron'),
        P: Item.of('forbidden_arcanus:dark_runic_glass_pane'),
        B: Item.of('ars_nouveau:orange_sbed'),
    });

    event.shaped(Item.of('easy_villagers:incubator'), [
        'PPP',
        'PNP',
        'III'
    ], {
        I: Ingredient.of('#forge:plates/iron'),
        P: Item.of('forbidden_arcanus:dark_runic_glass_pane'),
        N: Ingredient.of('#forge:ingots/netherite'),
    });
});
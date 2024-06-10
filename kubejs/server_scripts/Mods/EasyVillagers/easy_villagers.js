ServerEvents.recipes(event => {
    event.remove({output: 'easy_villagers:trader'});
    event.remove({output: 'easy_villagers:auto_trader'}); // Disabled, too OP
    event.remove({output: 'easy_villagers:farmer'}); // Disabled, too OP
    event.remove({output: 'easy_villagers:breeder'});
    event.remove({output: 'easy_villagers:converter'});
    event.remove({output: 'easy_villagers:iron_farm'}); // Disabled, too OP
    event.remove({output: 'easy_villagers:incubator'});

    event.shaped(Item.of('easy_villagers:auto_trader'), [
        'PPP',
        'PNP',
        'III'
    ], {
        I: Ingredient.of('#forge:plates/netherite'),
        P: Item.of('easy_villagers:trader'),
        N: Item.of('alexscaves:amber_curiosity'),
    });

    event.shaped(Item.of('easy_villagers:trader'), [
        'PPP',
        'PNP',
        'III'
    ], {
        I: Ingredient.of('#forge:plates/netherite'),
        P: Item.of('thermal:obsidian_glass'),
        N: Item.of('alexscaves:moth_ball'),
    });

    event.shaped(Item.of('easy_villagers:converter'), [
        'PPP',
        'PZP',
        'III'
    ], {
        I: Ingredient.of('#forge:plates/netherite'),
        P: Item.of('thermal:obsidian_glass'),
        Z: Item.of('alexscaves:green_soylent'),
    });

    event.shaped(Item.of('easy_villagers:breeder'), [
        'PPP',
        'PBP',
        'III'
    ], {
        I: Ingredient.of('#forge:plates/netherite'),
        P: Item.of('thermal:obsidian_glass'),
        B: Item.of('alexscaves:immortal_embryo'),
    });

    event.shaped(Item.of('easy_villagers:incubator'), [
        'PPP',
        'PNP',
        'III'
    ], {
        I: Ingredient.of('#forge:plates/netherite'),
        P: Item.of('thermal:obsidian_glass'),
        N: Item.of('alexscaves:tesla_bulb'),
    });

    event.shaped(Item.of('easy_villagers:iron_farm'), [
        'PPP',
        'PNP',
        'III'
    ], {
        I: Ingredient.of('#forge:plates/netherite'),
        P: Item.of('thermal:obsidian_glass'),
        N: Item.of('alexscaves:heart_of_iron'),
    });
});
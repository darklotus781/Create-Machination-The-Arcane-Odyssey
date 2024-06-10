ServerEvents.recipes(event => {
    event.remove({id: /alltheores\:.*_plate/});
    event.remove({id: /alltheores\:.*_rod/});
    event.remove({id: /alltheores\:.*_from_hammer_crushing/});
    event.remove({id: /alltheores\:.*_from_alloy_blending/});
    event.remove({id: /alltheores\:.*_from_crushing/});
    event.remove({id: /alltheores\:.*_from_hammer_ingot_crushing/});
    event.remove({id: /alltheores\:.*_ore_hammer/});

    let metals = [
        'aluminum', 'iridium', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin',
        'uranium', 'zinc', 'steel', 'invar', 'electrum', 'enderium', 'lumium',
        'signalum', 'constantan', 'brass', 'iron', 'gold', 'copper'
    ];

    let makePlate = (input, output, material) => {
        event.remove({output: output});
        event.recipes.create.pressing(Item.of(output), [Ingredient.of(input)]).id('kubejs:create/pressing/' + material + '_plate');
        // event.recipes.thermal.press(Item.of(output), [Ingredient.of(input)]).id('kubejs:thermal/pressing/' + material + '_plate');
    };

    let makeGear = (input, output, material) => {
        event.remove({output: output});
        event.shaped(Item.of(output), [
            ' M ',
            'MNM',
            ' M '
        ], {
            M: Ingredient.of(input),
            N: Ingredient.of('#forge:nuggets/iron'),
        }).id('kubejs:compat/crafting/' + material + '_gear_manual_only');
        // event.recipes.thermal.press(Item.of(output), [Ingredient.of(input, 4), Item.of('thermal:press_gear_die')]).id('kubejs:thermal/pressing/' + material + '_gear');
    };

    let makeRod = (input, output, material, outNum) => {
        event.remove({output: output});
        event.custom({
            type: 'createaddition:rolling',
            input: Ingredient.of(input).toJson(),
            result: Item.of(output, outNum).toJson()
        }).id('kubejs:create/rolling/' + material + '_rod');
    };

    let makeDust = (input, output, material) => {
        event.remove({output: output});
        event.recipes.create.crushing(Item.of(output), Ingredient.of(input)).id('kubejs:create/crushing/' + material + '_dust');
        event.recipes.thermal.pulverizer(Item.of(output), Ingredient.of(input)).id('kubejs:thermal/pulverizing/' + material + '_dust');
        // event.custom({
        //     type: 'mekanism:crushing',
        //     input: {
        //         ingredient: Ingredient.of(input).toJson()
        //     },
        //     output: Ingredient.of(output).toJson()
        // }).id('kubejs:mekanism/crushing/' + material + '_dust');
    };

    metals.forEach(metal => {
        makePlate('#forge:ingots/' + metal, 'alltheores:' + metal + '_plate', metal)
        makeRod('#forge:ingots/' + metal, 'alltheores:' + metal + '_rod', metal, 2);
        makeGear('#forge:ingots/' + metal,'alltheores:' + metal + '_gear', metal);
        makeDust('#forge:ingots/' + metal,'alltheores:' + metal + '_dust', metal);
    });

    // Diamond Versions:
    makePlate('minecraft:diamond','alltheores:diamond_plate', 'diamond');
    makeRod('minecraft:diamond','alltheores:diamond_rod', 'diamond', 1);
    makeGear('minecraft:diamond','alltheores:diamond_gear', 'diamond');
    makeDust('minecraft:diamond','alltheores:diamond_dust', 'diamond');

    // Netherite Versions:
    makePlate('minecraft:netherite_ingot','thermal:netherite_plate', 'netherite');
    makeGear('minecraft:netherite_ingot','thermal:netherite_gear', 'netherite');
    makeDust('minecraft:netherite_ingot','alltheores:netherite_dust', 'netherite');

    // AllTheModium Versions:
    makePlate('allthemodium:allthemodium_ingot','allthemodium:allthemodium_plate', 'allthemodium');
    makeRod('allthemodium:allthemodium_ingot','allthemodium:allthemodium_rod', 'allthemodium', 1);
    makeGear('allthemodium:allthemodium_ingot','allthemodium:allthemodium_gear', 'allthemodium');
    makeDust('allthemodium:allthemodium_ingot','allthemodium:allthemodium_dust', 'allthemodium');

    // Vibranium Versions:
    makePlate('allthemodium:vibranium_ingot','allthemodium:vibranium_plate', 'vibranium');
    makeRod('allthemodium:vibranium_ingot','allthemodium:vibranium_rod', 'vibranium', 1);
    makeGear('allthemodium:vibranium_ingot','allthemodium:vibranium_gear', 'vibranium');
    makeDust('allthemodium:vibranium_ingot','allthemodium:vibranium_dust', 'vibranium');

    // Unobtainium Versions:
    makePlate('allthemodium:unobtainium_ingot','allthemodium:unobtainium_plate', 'unobtainium');
    makeRod('allthemodium:unobtainium_ingot','allthemodium:unobtainium_rod', 'unobtainium', 1);
    makeGear('allthemodium:unobtainium_ingot','allthemodium:unobtainium_gear', 'unobtainium');
    makeDust('allthemodium:unobtainium_ingot','allthemodium:unobtainium_dust', 'unobtainium');
});
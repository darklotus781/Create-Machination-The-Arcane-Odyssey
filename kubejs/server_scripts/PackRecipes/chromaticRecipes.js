const dyes = [
    'minecraft:white_dye',
    'minecraft:orange_dye',
    'minecraft:magenta_dye',
    'minecraft:light_blue_dye',
    'minecraft:yellow_dye',
    'minecraft:lime_dye',
    'minecraft:pink_dye',
    'minecraft:gray_dye',
    'minecraft:light_gray_dye',
    'minecraft:cyan_dye',
    'minecraft:purple_dye',
    'minecraft:blue_dye',
    'minecraft:brown_dye',
    'minecraft:green_dye',
    'minecraft:red_dye',
    'minecraft:black_dye',
];

const shortWhiteFlowers = [
    'minecraft:lily_of_the_valley',
    'aether:white_flower',
    'biomesoplenty:white_petals',
    'botania:white_mystical_flower',
    'botania:white_mushroom',
];
const tallWhiteFlowers = [
    'botania:white_double_flower'
];

const shortOrangeFlowers = [
    'minecraft:orange_tulip',
    'minecraft:torchflower',
    'biomesoplenty:burning_blossom',
    'biomesoplenty:orange_cosmos',
    'botania:orange_mystical_flower',
    'botania:orange_mushroom',
];
const tallOrangeFlowers = [
    'botania:white_double_flower'
];

const shortMagentaFlowers = [
    'minecraft:allium',
    'biomesoplenty:wildflower',
    'botania:magenta_mystical_flower',
    'botania:magenta_mushroom',
];
const tallMagentaFlowers = [
    'minecraft:lilac',
    'botania:magenta_double_flower',
];

const shortLightBlueFlowers = [
    'minecraft:blue_orchid',
    'botania:light_blue_mystical_flower',
    'botania:light_blue_mushroom',
];
const tallLightBlueFlowers = [
    'biomesoplenty:icy_iris',
    'botania:light_blue_double_flower',
    'biomesoplenty:blue_hydrangea',
];

const shortYellowFlowers = [
    'minecraft:dandelion',
    'botania:yellow_mystical_flower',
    'botania:yellow_mushroom',
];
const tallYellowFlowers = [
    'minecraft:sunflower',
    'biomesoplenty:goldenrod',
    'botania:yellow_double_flower',
];

const shortLimeFlowers = [
    'botania:lime_mystical_flower',
    'botania:lime_mushroom',
];
const tallLimeFlowers = [
    'botania:lime_double_flower',
];

const shortPinkFlowers = [
    'minecraft:pink_petals',
    'minecraft:pink_tulip',
    'biomesoplenty:pink_daffodil',
    'biomesoplenty:pink_hibiscus',
    'botania:pink_mystical_flower',
    'botania:pink_mushroom',
];
const tallPinkFlowers = [
    'minecraft:peony',
    'botania:pink_double_flower',
];

const shortGrayFlowers = [
    'botania:gray_mystical_flower',
    'botania:gray_mushroom',
    'biomesoplenty:wilted_lily',
];
const tallGrayFlowers = [
    'botania:gray_double_flower',
];

const shortLightGrayFlowers = [
    'minecraft:azure_bluet',
    'minecraft:white_tulip',
    'minecraft:oxeye_daisy',
    'botania:light_gray_mystical_flower',
    'botania:light_gray_mushroom',
];
const tallLightGrayFlowers = [
    'botania:light_gray_double_flower',
];

const shortCyanFlowers = [
    'biomesoplenty:glowflower',
    'botania:cyan_mystical_flower',
    'botania:cyan_mushroom',
];
const tallCyanFlowers = [
    'minecraft:pitcher_plant',
    'botania:cyan_double_flower',
];

const shortPurpleFlowers = [
    'aether:purple_flower',
    'botania:purple_mystical_flower',
    'botania:purple_mushroom',
    'biomesoplenty:lavender',
    'biomesoplenty:violet',
];
const tallPurpleFlowers = [
    'botania:purple_double_flower',
    'biomesoplenty:tall_lavender',
];

const shortBlueFlowers = [
    'minecraft:cornflower',
    'botania:blue_mystical_flower',
    'botania:blue_mushroom',
];
const tallBlueFlowers = [
    'botania:blue_double_flower',
];

const shortBrownFlowers = [
    'botania:brown_mystical_flower',
    'botania:brown_mushroom',
    'biomesoplenty:cattail',
];
const tallBrownFlowers = [
    'botania:brown_double_flower',
];

const shortGreenFlowers = [
    'botania:green_mystical_flower',
    'botania:green_mushroom',
];
const tallGreenFlowers = [
    'botania:green_double_flower',
];

const shortRedFlowers = [
    'minecraft:poppy',
    'minecraft:red_tulip',
    'botania:red_mystical_flower',
    'botania:red_mushroom',
    'biomesoplenty:rose',
    'biomesoplenty:waterlily',
];
const tallRedFlowers = [
    'minecraft:rose_bush',
    'botania:red_double_flower',
];

const shortBlackFlowers = [
    'minecraft:wither_rose',
    'botania:black_mystical_flower',
    'botania:black_mushroom'
];
const tallBlackFlowers = [
    'botania:black_double_flower',
];

ServerEvents.recipes(event => {
    let recipesToRemove = [
        'minecraft:white_dye_from_lily_of_the_valley',
        'minecraft:wite_dye',
        'aether:flower_to_white_dye',
        'biomesoplenty:white_dye_from_white_petals',
        'minecraft:orange_dye_from_orange_tulip',
        'minecraft:orange_dye_from_torchflower',
        'biomesoplenty:orange_dye_from_burning_blossom',
        'biomesoplenty:orange_dye_from_orange_cosmos',
        'minecraft:magenta_dye_from_allium',
        'minecraft:magenta_dye_from_lilac',
        'biomesoplenty:magenta_dye_from_wildflower',
        'biomesoplenty:light_blue_dye_from_icy_iris',
        'biomesoplenty:light_blue_dye_from_blue_hydrangea',
        'minecraft:light_blue_dye_from_blue_orchid',
        'minecraft:yellow_dye_from_dandelion',
        'biomesoplenty:yellow_dye_from_goldenrod',
        'minecraft:yellow_dye_from_sunflower',
        'minecraft:pink_dye_from_pink_petals',
        'minecraft:pink_dye_from_peony',
        'minecraft:pink_dye_from_pink_tulip',
        'biomesoplenty:pink_dye_from_pink_daffodil',
        'biomesoplenty:pink_dye_from_pink_hibiscus',
        'biomesoplenty:gray_dye_from_wilted_lily',
        'minecraft:light_gray_dye_from_azure_bluet',
        'minecraft:light_gray_dye_from_white_tulip',
        'minecraft:light_gray_dye_from_oxeye_daisy',
        'minecraft:cyan_dye_from_pitcher_plant',
        'biomesoplenty:cyan_dye_from_glowflower',
        'biomesoplenty:purple_dye_from_lavender',
        'biomesoplenty:purple_dye_from_tall_lavender',
        'aether:flower_to_purple_dye',
        'biomesoplenty:purple_dye_from_violet',
        'minecraft:blue_dye_from_cornflower',
        'biomesoplenty:brown_dye_from_cattail',
        'minecraft:red_dye_from_poppy',
        'minecraft:red_dye_from_rose_bush',
        'minecraft:red_dye_from_tulip',
        'biomesoplenty:red_dye_from_waterlily',
        'biomesoplenty:red_dye_from_rose',
        'minecraft:black_dye_from_wither_rose'
    ];

    // recipesToRemove.forEach(recipe => {
    //     event.remove({id: recipe});
    // });
    // dyes.forEach(dye => {
    //     event.remove({output: Item.of(dye)});
    // })
    //
    // global.colors.forEach(color => {
    //     // Botania Recipe Fixes
    //     event.shapeless(Item.of('botania:' + color + '_petal', 2), [Item.of('botania:' + color + '_mystical_flower')]).id('botania:petal_' + color + '');
    //     event.shapeless(Item.of('botania:' + color + '_petal', 4), [Item.of('botania:' + color + '_double_flower')]).id('botania:petal_' + color + '_double');
    // })
    //
    // // Replace Wilden Spike to Orange Dye Recipe
    // event.shapeless(Item.of('minecraft:orange_dye', 5), [Item.of('ars_nouveau:wilden_spike')]).id('ars_nouveau:spike_to_dye');

    // Chromatic Solution
    event.recipes.create.mixing(Fluid.of('kubejs:chromatic_solution').withAmount(750), [
        Fluid.of('kubejs:dye_slurry_red').withAmount(500),
        Fluid.of('kubejs:dye_slurry_green').withAmount(500),
        Fluid.of('kubejs:dye_slurry_blue').withAmount(500)
    ]).heated().id('create:mixing/chromatic_solution');

    // Chromatic Compound
    event.custom({
        type: 'createdieselgenerators:basin_fermenting',
        ingredients: [Fluid.of('kubejs:chromatic_solution').withAmount(1000).toJson()],
        processingTime: 300,
        results: [Item.of('kubejs:chroma_compound').toJson(), Fluid.of('kubejs:dirty_chroma_slurry').withAmount(250).toJson()]
    }).id('kubejs:fermenting/chromatic_solution_to_compound');

    // Reprocessing
    event.recipes.create.mixing(Fluid.of('kubejs:chromatic_solution').withAmount(250), [
        Fluid.of('kubejs:dirty_chroma_slurry').withAmount(1000),
        Item.of('kubejs:dirty_dye_compound', 4)
    ]).superheated().id('create:mixing/chromatic_reprocessing');

    // Red Chromatic Compound
    event.recipes.create.deploying(Item.of('kubejs:red_compound'), ['#forge:flowers/red', '#forge:tools/knives']);

    // Red Chromatic Slurry
    event.recipes.create.mixing([Fluid.of('kubejs:dye_slurry_red').withAmount(1000), Item.of('kubejs:dirty_dye_compound', 1)], [
        Item.of('kubejs:red_compound', 8),
        Fluid.water(1000),
    ]).heated().id('create:mixing/red_chromatic_slurry');

    // Green Chromatic Compound
    event.recipes.create.deploying(Item.of('kubejs:green_compound'), ['#forge:flowers/green', '#forge:tools/knives']);

    // Green Chromatic Slurry
    event.recipes.create.mixing([Fluid.of('kubejs:dye_slurry_green').withAmount(1000), Item.of('kubejs:dirty_dye_compound', 1)], [
        Item.of('kubejs:green_compound', 8),
        Fluid.water(1000),
    ]).heated().id('create:mixing/green_chromatic_slurry');

    // Blue Chromatic Compound
    event.recipes.create.deploying(Item.of('kubejs:blue_compound'), ['#forge:flowers/blue', '#forge:tools/knives']);

    // Blue Chromatic Slurry
    event.recipes.create.mixing([Fluid.of('kubejs:dye_slurry_blue').withAmount(1000), Item.of('kubejs:dirty_dye_compound', 1)], [
        Item.of('kubejs:blue_compound', 8),
        Fluid.water(1000),
    ]).heated().id('create:mixing/blue_chromatic_slurry');
})

ServerEvents.tags('item', event => {
    let whiteFlowers = [shortWhiteFlowers, tallWhiteFlowers];
    let orangeFlowers = [shortOrangeFlowers, tallOrangeFlowers];
    let magentaFlowers = [shortMagentaFlowers, tallMagentaFlowers];
    let lightBlueFlowers = [shortLightBlueFlowers, tallLightBlueFlowers];
    let yellowFlowers = [shortYellowFlowers, tallYellowFlowers];
    let limeFlowers = [shortLimeFlowers, tallLimeFlowers];
    let pinkFlowers = [shortPinkFlowers, tallPinkFlowers];
    let grayFlowers = [shortGrayFlowers, tallGrayFlowers];
    let lightGrayFlowers = [shortLightGrayFlowers, tallLightGrayFlowers];
    let cyanFlowers = [shortCyanFlowers, tallCyanFlowers];
    let purpleFlowers = [shortPurpleFlowers, tallPurpleFlowers];
    let blueFlowers = [shortBlueFlowers, tallBlueFlowers];
    let brownFlowers = [shortBrownFlowers, tallBrownFlowers];
    let greenFlowers = [shortGreenFlowers, tallGreenFlowers];
    let redFlowers = [shortRedFlowers, tallRedFlowers];
    let blackFlowers = [shortBlackFlowers, tallBlackFlowers];

    event.add('forge:flowers/white', whiteFlowers);
    event.add('forge:flowers/orange', orangeFlowers);
    event.add('forge:flowers/magenta', magentaFlowers);
    event.add('forge:flowers/light_blue', lightBlueFlowers);
    event.add('forge:flowers/yellow', yellowFlowers);
    event.add('forge:flowers/lime', limeFlowers);
    event.add('forge:flowers/pink', pinkFlowers);
    event.add('forge:flowers/gray', grayFlowers);
    event.add('forge:flowers/light_gray', lightGrayFlowers);
    event.add('forge:flowers/cyan', cyanFlowers);
    event.add('forge:flowers/purple', purpleFlowers);
    event.add('forge:flowers/blue', blueFlowers);
    event.add('forge:flowers/brown', brownFlowers);
    event.add('forge:flowers/green', greenFlowers);
    event.add('forge:flowers/red', redFlowers);
    event.add('forge:flowers/black', blackFlowers);
});
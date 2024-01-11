ServerEvents.recipes(event => {
    // Black Dye
    event.shaped(Item.of('minecraft:black_dye', 6), [
        '   ',
        'EE ',
        '  E'
    ], {
        E: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:black_dye_from_chroma_compound');

    // Blue Dye
    event.shaped(Item.of('minecraft:blue_dye', 6), [
        '   ',
        ' E ',
        'E E'
    ], {
        E: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:blue_dye_from_chroma_compound');

    // Brown Dye
    event.shaped(Item.of('minecraft:brown_dye', 6), [
        '  E',
        ' E ',
        '  E'
    ], {
        E: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:brown_dye_from_chroma_compound');

    // Cyan Dye
    event.shaped(Item.of('minecraft:cyan_dye', 6), [
        'E E',
        ' E ',
        '   '
    ], {
        E: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:cyan_dye_from_chroma_compound');

    // Gray Dye
    event.shaped(Item.of('minecraft:gray_dye', 6), [
        '  E',
        ' E ',
        'E  '
    ], {
        E: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:gray_dye_from_chroma_compound');

    // Green Dye
    event.shaped(Item.of('minecraft:green_dye', 6), [
        '  E',
        'EE ',
        '   '
    ], {
        E: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:green_dye_from_chroma_compound');

    // Light Blue Dye
    event.shaped(Item.of('minecraft:light_blue_dye', 6), [
        'E  ',
        'E  ',
        'E  '
    ], {
        E: Item.of('kubejs:chroma_compound'),
    }).noShrink().noShrink().noMirror().id('kubejs:light_blue_dye_from_chroma_compound');

    // Light Gray Dye
    event.shaped(Item.of('minecraft:light_gray_dye', 6), [
        ' E ',
        ' E ',
        '  E'
    ], {
        E: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:light_gray_dye_from_chroma_compound');

    // Lime Dye
    event.shaped(Item.of('minecraft:lime_dye', 6), [
        '  E',
        '  E',
        '  E'
    ], {
        E: Item.of('kubejs:chroma_compound'),
    }).noShrink().noShrink().noMirror().id('kubejs:lime_dye_from_chroma_compound');

    // Magenta Dye
    event.shaped(Item.of('minecraft:magenta_dye', 6), [
        '   ',
        '   ',
        'MMM'
    ], {
        M: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:magenta_dye_from_chroma_compound');

    // Orange Dye
    event.shaped(Item.of('minecraft:orange_dye', 6), [
        '   ',
        'OOO',
        '   '
    ], {
        O: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:orange_dye_from_chroma_compound');

    // Pink Dye
    event.shaped(Item.of('minecraft:pink_dye', 6), [
        'K  ',
        ' K ',
        '  K'
    ], {
        K: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:pink_dye_from_chroma_compound');

    // Purple Dye
    event.shaped(Item.of('minecraft:purple_dye', 6), [
        '  P',
        '  P',
        ' P '
    ], {
        P: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:purple_dye_from_chroma_compound');

    // Red Dye
    event.shaped(Item.of('minecraft:red_dye', 6), [
        '  R',
        ' R ',
        ' R '
    ], {
        R: Item.of('kubejs:chroma_compound')
    }).noShrink().noMirror().id('kubejs:red_dye_from_chroma_compound');

    // White Dye
    event.shaped(Item.of('minecraft:white_dye', 6), [
        'WWW',
        '   ',
        '   '
    ], {
        W: Item.of('kubejs:chroma_compound')
    }).noShrink().noMirror().id('kubejs:white_dye_from_chroma_compound');

    // Yellow Dye
    event.shaped(Item.of('minecraft:yellow_dye', 6), [
        ' Y ',
        ' Y ',
        ' Y '
    ], {
        Y: Item.of('kubejs:chroma_compound'),
    }).noShrink().noMirror().id('kubejs:yellow_dye_from_chroma_compound');
});
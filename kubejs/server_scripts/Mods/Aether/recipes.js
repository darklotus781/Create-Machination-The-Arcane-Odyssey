// Because we start in the Aether, we need some simple compat recipes to ensure typical earlyish game items are still craftable.
// Basically using Zanite in place of Iron for some recipes and Holystone in place of Cobblestone.

ServerEvents.recipes(event => {
    event.shaped(Item.of('minecraft:stonecutter'), [
        '   ',
        ' M ',
        'SSS'
    ], {
        S: Item.of('aether:holystone'),
        M: Item.of('aether:zanite_gemstone')
    }).id('aether:stonecutter');

    event.shaped(Item.of('rechiseled:chisel'), [
        ' M ',
        'S  ',
        '   '
    ], {
        S: Item.of('aether:skyroot_stick'),
        M: Item.of('aether:zanite_gemstone')
    }).id('aether:chisel');

    event.shaped(Item.of('constructionwand:stone_wand'), [
        '  M',
        ' S ',
        'S  '
    ], {
        S: Item.of('aether:skyroot_stick'),
        M: Item.of('aether:holystone')
    }).id('aether:stone_wand');

    event.shaped(Item.of('constructionwand:iron_wand'), [
        '  M',
        ' S ',
        'S  '
    ], {
        S: Item.of('aether:skyroot_stick'),
        M: Item.of('aether:zanite_gemstone')
    }).id('aether:iron_wand');

    event.shaped(Item.of('framedblocks:framed_cube'), [
        'PSP',
        'S S',
        'PSP'
    ], {
        S: Item.of('aether:skyroot_stick'),
        P: Item.of('aether:skyroot_planks')
    }).id('aether:framed_cube');

    event.shaped(Item.of('functionalstorage:oak_1'), [
        'PPP',
        'PCP',
        'PPP'
    ], {
        C: Item.of('minecraft:chest'),
        P: Item.of('aether:skyroot_planks')
    }).id('aether:functionalstorage_oak_1');

    event.shaped(Item.of('functionalstorage:oak_2'), [
        'PCP',
        'PPP',
        'PCP'
    ], {
        C: Item.of('minecraft:chest'),
        P: Item.of('aether:skyroot_planks')
    }).id('aether:functionalstorage_oak_2');

    event.shaped(Item.of('functionalstorage:oak_4'), [
        'CPC',
        'PPP',
        'CPC'
    ], {
        C: Item.of('minecraft:chest'),
        P: Item.of('aether:skyroot_planks')
    }).id('aether:functionalstorage_oak_4');

    //Enchanting
    event.custom({
        "type": "aether:enchanting",
        "category": "enchanting_blocks",
        "cookingtime": 120,
        "experience": 0.5,
        "ingredient": {
            "item": "aether:skyroot_sapling"
        },
        "result": "minecraft:oak_sapling"
    });

    event.custom({
        "type": "aether:enchanting",
        "category": "enchanting_blocks",
        "cookingtime": 20,
        "experience": 0.1,
        "ingredient": {
            "item": "aether:holystone_bricks"
        },
        "result": "minecraft:cobblestone"
    });

    
    event.custom({
        "type": "aether:freezing",
        "category": "freezable_blocks",
        "cookingtime": 20 * 60 * 1,
        "experience": 0.1,
        "ingredient": {
          "item": "aether:skyroot_remedy_bucket"
        },
        "result": "kubejs:magical_rock_candy"
      });
});
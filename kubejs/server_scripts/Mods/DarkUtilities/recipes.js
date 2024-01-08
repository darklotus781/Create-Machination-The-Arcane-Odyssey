ServerEvents.recipes(event => {
    event.remove({ id: 'darkutils:stonecutting/dark_stones_to_blank_plate' });
    event.remove({ id: 'darkutils:crafting/vector_plate' });
    event.remove({ id: 'darkutils:crafting/vector_plate_fast' });
    event.remove({ id: 'darkutils:crafting/vector_plate_extreme' });
    event.remove({ id: 'darkutils:crafting/damage_plate' });
    event.remove({ id: 'darkutils:crafting/damage_plate_player_from_player' });
    event.remove({ id: 'darkutils:crafting/damage_plate_player_from_phantom' });
    event.remove({ id: 'darkutils:crafting/flame_plate' });
    event.remove({ id: 'darkutils:crafting/slowness_plate' });
    event.remove({ id: 'darkutils:crafting/fatigue_plate' });
    event.remove({ id: 'darkutils:crafting/darkness_plate' });
    event.remove({ id: 'darkutils:crafting/hunger_plate' });
    event.remove({ id: 'darkutils:crafting/weakness_plate' });
    event.remove({ id: 'darkutils:crafting/poison_plate' });
    event.remove({ id: 'darkutils:crafting/wither_plate' });
    event.remove({ id: 'darkutils:crafting/alert_plate' });
    event.remove({ id: 'darkutils:crafting/levitation_plate' });
    event.remove({ id: 'darkutils:crafting/misfortune_plate' });
    event.remove({ id: 'darkutils:crafting/slowfall_plate' });
    event.remove({ id: 'darkutils:crafting/ominous_plate' });
    event.remove({ id: 'darkutils:crafting/frost_plate' });
    event.remove({ id: 'darkutils:crafting/damage_plate_maim' });
    event.remove({ id: 'darkutils:crafting/charm_warding' });
    event.remove({ id: 'darkutils:crafting/charm_portal_crystal' });
    event.remove({ id: 'darkutils:crafting/charm_portal_eye' });
    event.remove({ id: 'darkutils:crafting/charm_sleep' });

    let t = null;
    // Dark Utilities Vector Plate Base
    t = Item.of('darkutils:blank_plate');
    event.recipes.create.sequenced_assembly([
        t,
    ], Item.of('forbidden_arcanus:polished_darkstone_slab'), [
        event.recipes.create.cutting(t, [t]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:ingots/iron')]),
        event.recipes.create.pressing(t, t),
        event.recipes.create.deploying(t, [t, Ingredient.of('#create:sandpaper')])
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/blank_plate');

    // Dark Utilities Vector Plate
    // t = Item.of('darkutils:blank_plate'); // reuse the blank plate from above
    event.recipes.create.sequenced_assembly([
        Item.of('darkutils:vector_plate'),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('createdieselgenerators:plant_oil').withAmount(25)]),
        event.recipes.create.filling(t, [t, Fluid.of('create:potion', { Potion: 'minecraft:swiftness' }).withAmount(50)]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:slime_ball')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:lime_dye')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/vector_plate');

    // Dark Utilities Vector Plate Fast
    t = Item.of('darkutils:vector_plate');
    event.recipes.create.sequenced_assembly([
        Item.of('darkutils:vector_plate_fast'),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('createdieselgenerators:plant_oil').withAmount(50)]),
        event.recipes.create.filling(t, [t, Fluid.of('create:potion', { Potion: 'minecraft:swiftness' }).withAmount(100)]),
        event.recipes.create.deploying(t, [t, Item.of('reliquary:slime_pearl')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:yellow_dye')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/vector_plate_fast');


    // Dark Utilities Vector Plate Extreme
    t = Item.of('darkutils:vector_plate_fast');
    event.recipes.create.sequenced_assembly([
        Item.of('darkutils:vector_plate_extreme'),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('createdieselgenerators:plant_oil').withAmount(100)]),
        event.recipes.create.filling(t, [t, Fluid.of('create:potion', { Potion: 'minecraft:swiftness' }).withAmount(200)]),
        event.recipes.create.deploying(t, [t, Item.of('botania:red_string')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:red_dye')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/vector_plate_extreme');

    // Dark Utilities Vector Plate Extreme
    t = Item.of('darkutils:vector_plate_extreme');
    event.recipes.create.sequenced_assembly([
        Item.of('darkutils:vector_plate_ultra'),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('createdieselgenerators:plant_oil').withAmount(200)]),
        event.recipes.create.filling(t, [t, Fluid.of('create:potion', { Potion: 'minecraft:swiftness' }).withAmount(250)]),
        event.recipes.create.filling(t, [t, Fluid.of('create:potion', { Potion: 'ars_elemental:shock_potion' }).withAmount(125)]),
        event.recipes.create.deploying(t, [t, Item.of('kubejs:sourcegem_fragments')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:light_blue_dye')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/vector_plate_ultra');

    // Dark Utilities Damage Plate
    t = Item.of('darkutils:blank_plate');
    event.recipes.create.sequenced_assembly([
        Item.of('darkutils:damage_plate', 3),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('create:potion', { Potion: 'minecraft:harming' }).withAmount(250)]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:diamond_sword')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:diamond_axe')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:crimson_fungus')]),
        event.recipes.create.deploying(t, [t, Item.of('minecraft:red_dye')]),
        event.recipes.create.pressing(t, t),
        event.recipes.create.cutting(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/damage_plate');

    // Dark Utilities Flame Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:blaze_powder'), Item.of('minecraft:magma_cream'), Item.of('minecraft:blaze_powder')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:flame_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/fire_damage_plate');

    // Dark Utilities Slowness Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:soul_sand'), Item.of('minecraft:honey_bottle'), Item.of('minecraft:soul_sand')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:slowness_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/slowness_plate');

    // Dark Utilities Fatigue Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:prismarine_shard'), Item.of('minecraft:prismarine_crystals'), Item.of('minecraft:prismarine_shard')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:fatigue_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/fatigue_plate');

    // Dark Utilities Darkness Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:ink_sac'), Item.of('minecraft:phantom_membrane'), Item.of('minecraft:ink_sac')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:darkness_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/darkness_plate');

    // Dark Utilities Hunger Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:rotten_flesh'), Item.of('minecraft:nether_wart'), Item.of('minecraft:rotten_flesh')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:hunger_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/hunger_plate');

    // Dark Utilities Weakness Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:brown_mushroom'), Item.of('minecraft:fermented_spider_eye'), Item.of('minecraft:brown_mushroom')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:weakness_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/weakness_plate');

    // Dark Utilities Poison Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:poisonous_potato'), Item.of('minecraft:spider_eye'), Item.of('minecraft:pufferfish')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:poison_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/poison_plate');

    // Dark Utilities Wither Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:flint'), Item.of('minecraft:wither_rose'), Item.of('minecraft:flint')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:wither_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/wither_plate');

    // Dark Utilities Alert Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:glowstone_dust'), Item.of('minecraft:glow_ink_sac'), Item.of('minecraft:glowstone_dust')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:alert_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/alert_plate');

    // Dark Utilities Levitation Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:feather'), Item.of('minecraft:popped_chorus_fruit'), Item.of('minecraft:feather')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:levitation_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/levitation_plate');

    // Dark Utilities Misfortune Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:phantom_membrane'), Ingredient.of('#forge:ingots/gold'), Item.of('minecraft:phantom_membrane')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:misfortune_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/misfortune_plate');

    // Dark Utilities Slowfall Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:feather'), Item.of('minecraft:phantom_membrane'), Item.of('minecraft:feather')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:slowfall_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/slowfall_plate');

    // Dark Utilities Ominous Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:nether_wart'), Item.of('minecraft:totem_of_undying'), Item.of('minecraft:nether_wart')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:omen_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/ominous_plate');

    // Dark Utilities Frost Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:snowball'), Item.of('minecraft:powder_snow_bucket'), Item.of('minecraft:snowball')],
        [Item.of('darkutils:damage_plate')],
        Item.of('darkutils:frost_plate', 2),
        1000
    ).id('kubejs:ars_enchantment/frost_plate');

    // Dark Utilities Maim Plate
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('minecraft:shroomlight'), Item.of('minecraft:iron_sword'), Item.of('minecraft:shroomlight')],
        [Item.of('darkutils:poison_plate')],
        Item.of('darkutils:damage_plate_maim', 2),
        1000
    ).id('kubejs:ars_enchantment/damage_plate_maim');

    // Dark Utilities Portal Charm
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            Item.of('minecraft:string'),
            Item.of('minecraft:string'),
            Item.of('minecraft:crying_obsidian'),
            Item.of('minecraft:crying_obsidian'),
            Item.of('minecraft:end_crystal'),
            Item.of('minecraft:crying_obsidian'),
            Item.of('minecraft:crying_obsidian'),
            Item.of('minecraft:string')
        ],
        [Item.of('ars_nouveau:dull_trinket')],
        Item.of('darkutils:charm_portal'),
        5000
    ).id('kubejs:ars_enchantment/charm_portal');

    // Dark Utilities Sleep Charm
    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            Item.of('minecraft:white_bed'),
            Item.of('createaddition:gold_wire'),
            Item.of('minecraft:yellow_bed'),
            Item.of('createaddition:gold_wire'),
            Item.of('minecraft:red_bed'),
            Item.of('createaddition:gold_wire'),
            Item.of('minecraft:black_bed'),
            Item.of('createaddition:gold_wire')
        ],
        [Item.of('ars_nouveau:dull_trinket')],
        Item.of('darkutils:charm_sleep'),
        5000
    ).id('kubejs:ars_enchantment/charm_sleep');
});
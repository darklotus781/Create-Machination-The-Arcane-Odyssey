ServerEvents.tags('item', event => {
    event.get('forge:dusts/ender')
        .add('ae2:ender_dust');
    event.get('ars_nouveau:golem/shard')
        .add('minecraft:amethyst_shard')
        .add('ae2:certus_quartz_crystal');
    event.get('forge:dusts')
        .add('alltheores:netherite_dust');
    event.get('forge:dusts/netherite')
        .add('alltheores:netherite_dust');
    event.get('forge:menril_logs')
        .add('integrateddynamics:menril_log_filled')
        .add('integrateddynamics:menril_log');

    event.get('minecraft:logs_that_burn')
        .add('integrateddynamics:menril_log_stripped');

    event.get('sophisticatedstorage:chests')
        .add('sophisticatedstorage:chest');

    event.get('sophisticatedstorage:barrels')
        .add('sophisticatedstorage:barrel');

    event.get('machination:oak_planks')
        .add('minecraft:oak_planks')
        .add('integrateddynamics:menril_planks');

    event.get('chipped:logs')
        .add('#chipped:acacia_log')
        .add('#chipped:birch_log')
        .add('#chipped:dark_oak_log')
        .add('#chipped:jungle_log')
        .add('#chipped:mangrove_log')
        .add('#chipped:oak_log')
        .add('#chipped:spruce_log')
        .add('#chipped:crimson_stem')
        .add('#chipped:warped_stem')
        .add('#chipped:cherry_log');

    event.get('supplementaries:hourglass_dusts').add(/allthemodium\:.*_dust/);

    event.get('chipped:stripped')
        .add('#chipped:stripped_acacia_log')
        .add('#chipped:stripped_birch_log')
        .add('#chipped:stripped_dark_oak_log')
        .add('#chipped:stripped_jungle_log')
        .add('#chipped:stripped_mangrove_log')
        .add('#chipped:stripped_oak_log')
        .add('#chipped:stripped_spruce_log')
        .add('#chipped:stripped_crimson_stem')
        .add('#chipped:stripped_warped_stem')
        .add('#chipped:stripped_cherry_log');

    event.get('forge:lumber')
        .add('#minecraft:logs')
        .add('#chipped:logs')
        .add('#integrateddynamics:menril_logs');

    event.get('forge:lumber/stripped')
        .add('#forge:stripped/logs')
        .add('#forge:stripped/wood')
        .add('#chipped:stripped')
        .add('integrateddynamics:menril_log_stripped');

    event.get('forge:lumber/all')
        .add('#forge:lumber')
        .add('forge:lumber/stripped');


    // Tools
    event.add('forge:tools/resonators', 'kubejs:resonator');
    event.get('forge:tools/saws').add('kubejs:stone_saw').add('kubejs:iron_saw').add('kubejs:diamond_saw');
    event.get('forge:tools/screwdrivers').add('kubejs:screwdriver').add('framedblocks:framed_screwdriver');
    event.get('forge:tools/super_glues').add('create:super_glue');
    event.get('forge:tools/wrench').add('create:wrench');
    event.get('forge:tools/soldering_irons').add('kubejs:soldering_iron');

    let vial = ['anthracene', 'incomplete_anthraquinone', 'anthraquinone', 'empty_vial']
    vial.forEach(I => {
        event.add('create:upright_on_belt', 'kubejs:' + I);
    });
    event.get('create:upright_on_belt')
        .add('forbidden_arcanus:pixie_utrem_jar')
        .add('forbidden_arcanus:corrupted_pixie_utrem_jar')
        .add('forbidden_arcanus:utrem_jar')
        .add('forbidden_arcanus:soul')
        .add('forbidden_arcanus:dark_soul')
        .add('forbidden_arcanus:aureal_bottle')
        .add('forbidden_arcanus:corrupted_pixie')
        .add('forbidden_arcanus:pixie')
        .add('tiab:time_in_a_bottle')
        .add('forbidden_arcanus:arcane_crystal_obelisk');

    event.get('create:recipe_nuggets')
        .add('#forge:nuggets/iron')
        .add('#forge:nuggets/zinc');

    event.get('create:kinetic_mechanisms')
        .add('kubejs:wooden_mechanism')
        .add('kubejs:kinetic_mechanism');

    event.get('forge:vines')
        .add('minecraft:weeping_vines')
        .add('minecraft:twisting_vine')
        .add('minecraft:vine')
        .add('#chipped:vine');

    global.colors.forEach(element => {
        event.get('forge:glazed_terracotta')
            .add(`minecraft:${element}_glazed_terracotta`)
    });

    //Trading Cards
    global.trades.forEach(element => {
        event.get('forge:trade_cards')
            .add(`kubejs:trade_card_${element}`)
    });

    global.professions.forEach(element => {
        event.get('forge:profession_cards')
            .add(`kubejs:profession_card_${element}`)
    });

    event.get('thermal:crafting/dies')
        .add('#forge:trade_cards')
        .add('#forge:profession_cards');

    event.get('forge:buckets/lava').add('minecraft:lava_bucket');
    event.get('forge:buckets/biodiesel').add('pneumaticcraft:bio_diesel_bucket');
    event.get('forge:buckets/crude_oil').add('pneumaticcraft:oil_bucket');
    event.get('forge:buckets/diesel').add('pneumaticcraft:diesel_bucket');
    event.get('forge:buckets/ethanol').add('pneumaticcraft:ethanol_bucket');
    event.get('forge:buckets/gasoline').add('pneumaticcraft:gasoline_bucket');
    event.get('forge:buckets/heavy_oil').add('thermal:heavy_oil_bucket');
    event.get('forge:buckets/kerosene').add('pneumaticcraft:kerosene_bucket');
    event.get('forge:buckets/light_oil').add('thermal:light_oil_bucket');
    event.get('forge:buckets/lpg').add('pneumaticcraft:lpg_bucket');
    event.get('forge:buckets/plantoil').add('thermal:tree_oil_bucket').add('pneumaticcraft:vegetable_oil_bucket');
    event.get('forge:buckets/refined_fuel').add('thermal:refined_fuel_bucket');
    event.get('forge:buckets/refined_oil').add('kubejs:refined_oil_bucket');

    event.get('supplementaries:cookies').add('createsweetsandtreets:sugar_cookie').add('createsweetsandtreets:chocolate_cookie');
});


ServerEvents.tags('block', event => {
    event.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported');
    event.get('forge:relocation_not_supported')
        .add('minecraft:beehive')
        .add('minecraft:bee_nest')
        .add(/integrateddynamics:.+/)
        .add('@waystones')
        .add(/createresourcegeodes:.+_catalyst/);

    event.get('ars_nouveau:golem/budding')
        .add('minecraft:budding_amethyst')
        .add('ae2:damaged_budding_quartz')
        .add('ae2:chipped_budding_quartz')
        .add('ae2:flawed_budding_quartz')
        .add('ae2:flawless_budding_quartz');

    event.get('ars_nouveau:golem/cluster')
        .add('minecraft:amethyst_cluster')
        .add('ae2:quartz_cluster');
});


ServerEvents.tags('fluid', event => {
    event.get('create:bottomless/allow')
        .add('#forge:crude_oil')
        .add('#forge:lava')
        .add('minecraft:water');

    event.removeAllTagsFrom([
        'createdieselgenerators:plant_oil',
        'createdieselgenerators:crude_oil',
        'createdieselgenerators:biodiesel',
        'createdieselgenerators:diesel',
        'createdieselgenerators:gasoline',
        'createdieselgenerators:ethanol'
    ]);

    // Remove Tags
    event.removeAll('forge:biodiesel');
    event.removeAll('forge:biofuel');
    event.removeAll('forge:crude_oil');
    event.removeAll('forge:diesel');
    event.removeAll('forge:ethanol');
    event.removeAll('forge:fuel');
    event.removeAll('forge:gasoline');
    event.removeAll('forge:heavy_oil');
    event.removeAll('forge:kerosene');
    event.removeAll('forge:light_oil');
    event.removeAll('forge:lpg');
    event.removeAll('forge:plantoil');
    event.removeAll('forge:refined_fuel');
    event.removeAll('forge:refined_oil');

    // Reset Tags
    event.get('forge:lava').add('minecraft:lava');
    event.get('forge:biodiesel').add('pneumaticcraft:bio_diesel');
    // event.get('forge:biofuel').add('');
    event.get('forge:crude_oil').add('pneumaticcraft:oil');
    event.get('forge:diesel').add('pneumaticcraft:diesel');
    event.get('forge:ethanol').add('pneumaticcraft:ethanol');
    // event.get('forge:fuel').add('');
    event.get('forge:gasoline').add('pneumaticcraft:gasoline');
    event.get('forge:heavy_oil').add('thermal:heavy_oil');
    event.get('forge:kerosene').add('pneumaticcraft:kerosene');
    event.get('forge:light_oil').add('thermal:light_oil');
    event.get('forge:lpg').add('pneumaticcraft:lpg');
    event.get('forge:plantoil').add('thermal:tree_oil').add('pneumaticcraft:vegetable_oil');
    event.get('forge:refined_fuel').add('thermal:refined_fuel');
    event.get('forge:refined_oil').add('kubejs:refined_oil');
});

ServerEvents.tags('entity_type', event => {
    event.get('kubejs:mob_blacklist')
        .add('allthemodium:piglich')
        .add('artifacts:mimic')
        .add('aether:valkyrie')
        .add('aether:valkyrie_queen')
        .add('aether:mimic')
        .add('aether:sun_spirit')
        .add('aether:slider')
        .add('minecraft:iron_golem')
        .add('minecraft:wither')
        .add('minecraft:ender_dragon');

    event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist');
    event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist');
    event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist');
    event.add('ars_nouveau:drygmy_blacklist', '#kubejs:mob_blacklist');
});
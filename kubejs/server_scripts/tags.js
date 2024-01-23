ServerEvents.tags('item', event => {
    event.add('forge:dusts/ender', 'ae2:ender_dust');
    event.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal']);
    event.add('forge:dusts', 'alltheores:netherite_dust');
    event.add('forge:dusts/netherite', 'alltheores:netherite_dust');
    event.add('forge:menril_logs', 'integrateddynamics:menril_log_filled');
    event.add('forge:menril_logs', 'integrateddynamics:menril_log');

    event.add('chipped:logs', ['#chipped:acacia_log', '#chipped:birch_log', '#chipped:dark_oak_log', '#chipped:jungle_log', '#chipped:mangrove_log', '#chipped:oak_log', '#chipped:spruce_log', '#chipped:crimson_stem', '#chipped:warped_stem', '#chipped:cherry_log']);
    event.add('chipped:stripped', ['#chipped:stripped_acacia_log', '#chipped:stripped_birch_log', '#chipped:stripped_dark_oak_log', '#chipped:stripped_jungle_log', '#chipped:stripped_mangrove_log', '#chipped:stripped_oak_log', '#chipped:stripped_spruce_log', '#chipped:stripped_crimson_stem', '#chipped:stripped_warped_stem', '#chipped:stripped_cherry_log']);
    event.add('forge:lumber', ['#minecraft:logs', '#chipped:logs', '#integrateddynamics:menril_logs']);
    event.add('forge:lumber/stripped', ['#forge:stripped/logs', '#forge:stripped/wood', '#chipped:stripped', 'integrateddynamics:menril_log_stripped']);
    event.add('forge:lumber/all', ['#forge:lumber', 'forge:lumber/stripped']);


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
    event.add('create:upright_on_belt', 'forbidden_arcanus:pixie_utrem_jar');
    event.add('create:upright_on_belt', 'forbidden_arcanus:corrupted_pixie_utrem_jar');
    event.add('create:upright_on_belt', 'forbidden_arcanus:utrem_jar');
    event.add('create:upright_on_belt', 'forbidden_arcanus:soul');
    event.add('create:upright_on_belt', 'forbidden_arcanus:dark_soul');
    event.add('create:upright_on_belt', 'forbidden_arcanus:aureal_bottle');
    event.add('create:upright_on_belt', 'forbidden_arcanus:corrupted_pixie');
    event.add('create:upright_on_belt', 'forbidden_arcanus:pixie');
    event.add('create:upright_on_belt', 'tiab:time_in_a_bottle');
    event.add('create:upright_on_belt', 'forbidden_arcanus:arcane_crystal_obelisk');
    event.add('create:recipe_nuggets', ['#forge:nuggets/iron', '#forge:nuggets/zinc']);
    event.add('create:kinetic_mechanisms', 'kubejs:wooden_mechanism');
    event.add('create:kinetic_mechanisms', 'kubejs:kinetic_mechanism');

    event.add('forge:vines', [
        'minecraft:weeping_vines',
        'minecraft:twisting_vine',
        'minecraft:vine',
        '#chipped:vine'
    ]);

    global.colors.forEach(element => {
        event.get('forge:glazed_terracotta').add(`minecraft:${element}_glazed_terracotta`)
    });

    //Trading Cards
    global.trades.forEach(element => {
        event.get('forge:trade_cards').add(`kubejs:trade_card_${element}`)
    });

    global.professions.forEach(element => {
        event.get('forge:profession_cards').add(`kubejs:profession_card_${element}`)
    });
    event.add('thermal:crafting/dies', ['#forge:trade_cards', '#forge:profession_cards']);

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
});


ServerEvents.tags('block', event => {
    event.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported');
    event.add('forge:relocation_not_supported', ['minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/, '@waystones', /createresourcegeodes:.+_catalyst/]);

    event.add('ars_nouveau:golem/budding', [
        'minecraft:budding_amethyst',
        'ae2:damaged_budding_quartz',
        'ae2:chipped_budding_quartz',
        'ae2:flawed_budding_quartz',
        'ae2:flawless_budding_quartz'
    ]);
    event.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster']);
    event.add('forge:needs_allthemodium_tool', '#waystones:waystones');
    event.add('minecraft:mineable/pickaxe', '#waystones:waystones');
});


ServerEvents.tags('fluid', event => {
    event.add('create:bottomless/allow', 'pneumaticcraft:oil');
    event.add('create:bottomless/allow', 'minecraft:lava');
    event.add('create:bottomless/allow', 'minecraft:water');

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
    event.add('kubejs:mob_blacklist', ['allthemodium:piglich', 'artifacts:mimic', 'minecraft:iron_golem', 'minecraft:wither']);
    event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist');
    event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist');
    event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist');
    event.add('ars_nouveau:drygmy_blacklist', ['#kubejs:mob_blacklist']);
});
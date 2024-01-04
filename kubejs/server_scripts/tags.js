ServerEvents.tags('item', event => {
    event.add('forge:dusts/ender', 'ae2:ender_dust');
    event.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal']);
    event.add('forge:dusts', 'alltheores:netherite_dust');
    event.add('forge:dusts/netherite', 'alltheores:netherite_dust');
    event.add('forge:menril_logs', 'integrateddynamics:menril_log_filled');
    event.add('forge:menril_logs', 'integrateddynamics:menril_log');

    event.add('chipped:logs', ['#chipped:acacia_log', '#chipped:birch_log', '#chipped:dark_oak_log', '#chipped:jungle_log', '#chipped:mangrove_log', '#chipped:oak_log', '#chipped:spruce_log', '#chipped:crimson_stem', '#chipped:warped_stem', '#chipped:cherry_log']);
    event.add('chipped:stripped', ['#chipped:stripped_acacia_log', '#chipped:stripped_birch_log', '#chipped:stripped_dark_oak_log', '#chipped:stripped_jungle_log', '#chipped:stripped_mangrove_log', '#chipped:stripped_oak_log', '#chipped:stripped_spruce_log', '#chipped:stripped_crimson_stem', '#chipped:stripped_warped_stem', '#chipped:stripped_cherry_log']);
    event.add('forge:lumber/all', ['#minecraft:logs', '#chipped:logs', '#chipped:stripped', '#integrateddynamics:menril_logs']);
    event.add('forge:lumber/stripped', ['#forge:stripped/logs', '#forge:stripped/wood', '#chipped:stripped', 'integrateddynamics:menril_log_stripped']);
    


    // Tools
    event.add('forge:tools/resonators', 'kubejs:resonator');
    event.get('forge:tools/saws').add('kubejs:stone_saw').add('kubejs:iron_saw').add('kubejs:diamond_saw');
    event.get('forge:tools/screwdrivers').add('kubejs:screwdriver').add('framedblocks:framed_screwdriver');
    event.get('forge:tools/super_glues').add('create:super_glue');
    event.get('forge:tools/wrench').add('create:wrench');
    event.get('forge:tools/soldering_irons').add('kubejs:soldering_iron');

    let vial = ['anthracene', 'incomplete_anthraquinone','anthraquinone','empty_vial']
    vial.forEach(I => {
        event.add('create:upright_on_belt', 'kubejs:' + I)
    });
    event.add('create:upright_on_belt', 'forbidden_arcanus:pixie_utrem_jar')
    event.add('create:upright_on_belt', 'forbidden_arcanus:corrupted_pixie_utrem_jar')
    event.add('create:upright_on_belt', 'forbidden_arcanus:utrem_jar')
    event.add('create:upright_on_belt', 'forbidden_arcanus:soul')
    event.add('create:upright_on_belt', 'forbidden_arcanus:dark_soul')
    event.add('create:upright_on_belt', 'forbidden_arcanus:aureal_bottle')
    event.add('create:upright_on_belt', 'forbidden_arcanus:corrupted_pixie')
    event.add('create:upright_on_belt', 'forbidden_arcanus:pixie')
    event.add('create:upright_on_belt', 'tiab:time_in_a_bottle')
    event.add('create:upright_on_belt', 'forbidden_arcanus:arcane_crystal_obelisk')
    event.add('create:recipenuggets','minecraft:iron_nugget')
    event.add('create:recipenuggets','create:zinc_nugget')
    event.add('create:kinetic_mechanisms','kubejs:wooden_mechanism')
    event.add('create:kinetic_mechanisms','kubejs:kinetic_mechanism')
})


ServerEvents.tags('block', event => {
    event.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported')
    event.add('forge:relocation_not_supported', ['minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/, '@waystones'])
    
    event.add('ars_nouveau:golem/budding', [
        'minecraft:budding_amethyst',
        'ae2:damaged_budding_quartz',
        'ae2:chipped_budding_quartz',
        'ae2:flawed_budding_quartz',
        'ae2:flawless_budding_quartz'
    ])
    event.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster'])
})


ServerEvents.tags('fluid', event => {
    event.remove('minecraft:water',[
      'createaddition:flowing_seed_oil','createaddition:seed_oil'
    ])

    event.add('create:bottomless/allow','pneumaticcraft:oil')
    event.add('create:bottomless/allow','minecraft:lava')
    event.add('create:bottomless/allow','minecraft:water')
})

ServerEvents.tags('entity_type', event => {
    event.add('kubejs:mob_blacklist', ['allthemodium:piglich', 'artifacts:mimic', 'minecraft:iron_golem','minecraft:wither'])
    event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
    event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
    event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
    event.add('ars_nouveau:drygmy_blacklist', ['#kubejs:mob_blacklist'])
})
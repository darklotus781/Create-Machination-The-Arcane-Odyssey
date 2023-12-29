ServerEvents.tags('item', event => {
    event.add('forge:dusts/ender', 'ae2:ender_dust')
    event.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])
    event.add('forge:dusts', 'alltheores:netherite_dust')
    event.add('forge:dusts/netherite', 'alltheores:netherite_dust')

    event.add('forge:menril_logs', 'integrateddynamics:menril_log_filled')
    event.add('forge:menril_logs', 'integrateddynamics:menril_log')
    event.add('forge:saws', 'kubejs:saw')
    event.add('forge:screwdrivers', 'kubejs:screwdriver')
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
})

ServerEvents.tags('entity_type', event => {
    event.add('kubejs:mob_blacklist', ['allthemodium:piglich', 'artifacts:mimic', 'minecraft:iron_golem','minecraft:wither'])
    event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
    event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
    event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
    event.add('ars_nouveau:drygmy_blacklist', ['#kubejs:mob_blacklist'])
})
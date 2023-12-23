ServerEvents.recipes(event => {
    event.remove({output: 'easy_villagers:trader'})
    event.remove({output: 'easy_villagers:auto_trader'}) // Disabled, too OP
    event.remove({output: 'easy_villagers:farmer'}) // Disabled, too OP
    event.remove({output: 'easy_villagers:breeder'})
    event.remove({output: 'easy_villagers:converter'})
    event.remove({output: 'easy_villagers:iron_farm'}) // Disabled, too OP
    event.remove({output: 'easy_villagers:incubator'}) // Disabled, just deal with the babies!

    event.shaped('easy_villagers:trader', [
        'PPP',
        'PNP',
        'CRC'
    ], {
        C: 'forbidden_arcanus:arcane_crystal_block',
        P: 'forbidden_arcanus:dark_runic_glass_pane',
        N: 'minecraft:netherite_ingot',
        R: 'kubejs:runic_tablet'
    })

    event.shaped('easy_villagers:converter', [
        'PPP',
        'PZP',
        'CRC'
    ], {
        C: 'forbidden_arcanus:arcane_crystal_block',
        P: 'forbidden_arcanus:dark_runic_glass_pane',
        Z: 'minecraft:zombie_head',
        R: 'kubejs:runic_tablet'
    })

    event.shaped('easy_villagers:breeder', [
        'PPP',
        'PBP',
        'CRC'
    ], {
        C: 'forbidden_arcanus:arcane_crystal_block',
        P: 'forbidden_arcanus:dark_runic_glass_pane',
        B: 'ars_nouveau:orange_sbed',
        R: 'kubejs:runic_tablet'
    })
})
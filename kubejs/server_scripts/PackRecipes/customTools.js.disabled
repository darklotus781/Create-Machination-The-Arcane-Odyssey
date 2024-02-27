ServerEvents.recipes(event => {

    for (const mat of global.materials) {
        event.shaped(`kubejs:${mat}_axe`, ['aa ', 'ab ', ' b '], {
            a: `#forge:ingots/${mat}`,
            b: 'minecraft:stick'
        })
        event.shaped(`kubejs:${mat}_pickaxe`, ['aaa', ' b ', ' b '], {
            a: `#forge:ingots/${mat}`,
            b: 'minecraft:stick'
        })
        event.shaped(`kubejs:${mat}_hoe`, ['aa ', ' b ', ' b '], {
            a: `#forge:ingots/${mat}`,
            b: 'minecraft:stick'
        })
        event.shaped(`kubejs:${mat}_shovel`, [' a ', ' b ', ' b '], {
            a: `#forge:ingots/${mat}`,
            b: 'minecraft:stick'
        })
        event.shaped(`kubejs:${mat}_sword`, [' a ', ' a ', ' b '], {
            a: `#forge:ingots/${mat}`,
            b: 'minecraft:stick'
        })
    }
});
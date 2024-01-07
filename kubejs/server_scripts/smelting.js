ServerEvents.recipes(event => {
    event.remove({id: 'thermal:smelting/slag_from_smelting'})

    event.smelting(Item.of("minecraft:andesite").withChance(0.2), "minecraft:gravel")
});
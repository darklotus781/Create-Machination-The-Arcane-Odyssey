ServerEvents.recipes(event => {
    event.remove({id: 'thermal:smelting/slag_from_smelting'});

    event.smelting(Item.of('minecraft:andesite'), 'minecraft:gravel');
});
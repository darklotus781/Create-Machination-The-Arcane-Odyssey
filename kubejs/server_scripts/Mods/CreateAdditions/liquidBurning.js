//priority:0
ServerEvents.tags('fluid', event => {
    event.add('forge:lava', 'minecraft:lava');
});

ServerEvents.recipes(event => {
    event.remove(/createaddition:liquid_burning*/);

    // Liquid Burning Lava
    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluidTag: 'forge:lava',
            amount: 1000 // 1 bucket
        },
        burnTime: 1200, // 1 minute
        conditions: [
            {
                fluidTag: "forge:lava",
                type: "createaddition:has_fluid_tag"
            }
        ]
    }).id('createaddition:liquid_burning/lava');

    // Liquid Burning Refined Fuel
    event.custom({
        type: "createaddition:liquid_burning",
        input: {
            fluidTag: "forge:refined_fuel",
            amount: 1000
        },
        burnTime: 12000, // 10 minutes
        superheated: true,
        conditions: [
            {
                fluidTag: "forge:refined_fuel",
                type: "createaddition:has_fluid_tag"
            }
        ]
    }).id('createaddition:liquid_burning/compat/thermal/refined_fuel');

    // Liquid Burning Diesel
    event.custom({
        type: "createaddition:liquid_burning",
        input: {
            fluidTag: "forge:diesel",
            amount: 1000
        },
        burnTime: 6000, // 5 minutes
        conditions: [
            {
                fluidTag: "forge:diesel",
                type: "createaddition:has_fluid_tag"
            }
        ]
    }).id('createaddition:liquid_burning/diesel');

    // Liquid Burning Gasoline
    event.custom({
        type: "createaddition:liquid_burning",
        input: {
            fluidTag: "forge:gasoline",
            amount: 1000
        },
        burnTime: 3600, // 3 minutes
        superheated: true,
        conditions: [
            {
                fluidTag: "forge:gasoline",
                type: "createaddition:has_fluid_tag"
            }
        ]
    }).id('createaddition:liquid_burning/gasoline');

    // Liquid Burning Kerosene
    event.custom({
        type: "createaddition:liquid_burning",
        input: {
            fluidTag: "forge:kerosene",
            amount: 1000
        },
        burnTime: 12000, // 10 minutes
        conditions: [
            {
                fluidTag: "forge:kerosene",
                type: "createaddition:has_fluid_tag"
            }
        ]
    }).id('createaddition:liquid_burning/kerosene');

    // Liquid Burning LPG
    event.custom({
        type: "createaddition:liquid_burning",
        input: {
            fluidTag: "forge:lpg",
            amount: 1000
        },
        burnTime: 6000,
        superheated: true,
        conditions: [
            {
                fluidTag: "forge:lpg",
                type: "createaddition:has_fluid_tag"
            }
        ]
    }).id('createaddition:liquid_burning/lpg');
});
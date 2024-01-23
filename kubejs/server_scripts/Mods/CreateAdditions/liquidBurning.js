//priority:0
ServerEvents.recipes(event => {
    event.remove(/createaddition:liquid_burning*/);

    // Liquid Burning Lava
    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluidTag: 'forge:lava',
            amount: 1000 // 1 bucket
        },
        burnTime: minutes(1), // 1 minute
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
        burnTime: minutes(10), // 10 minutes
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
        burnTime: minutes(5), // 5 minutes
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
        burnTime: minutes(3), // 3 minutes
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
        burnTime: minutes(10), // 10 minutes
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
        burnTime: minutes(5),
        superheated: true,
        conditions: [
            {
                fluidTag: "forge:lpg",
                type: "createaddition:has_fluid_tag"
            }
        ]
    }).id('createaddition:liquid_burning/lpg');
});

function minutes(minutes) {
    return 20 * 60 * minutes;
}
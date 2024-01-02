ServerEvents.tags('fluid', (event) => {
    event.removeAllTagsFrom([
        'createdieselgenerators:plant_oil',
        'createdieselgenerators:bio_diesel',
        'createdieselgenerators:ethanol'
    ]);

    event.removeAll('forge:plantoil');
    event.removeAll('forge:ethanol');
    event.removeAll('forge:biodiesel');
    event.removeAll('forge:fuel');

    event.remove('forge:crude_oil', 'thermal:crude_oil', 'pneumaticcraft:oil');

    event.add('forge:lava', 'minecraft:lava');
    event.add('forge:diesel', 'creativegenerators:diesel');
    event.add('forge:diesel', 'creativegenerators:flowing_diesel');
    event.add('forge:gasoline', 'createdieselgenerators:gasoline');
    event.add('forge:gasoline', 'createdieselgenerators:flowing_gasoline');
    event.add('forge:kerosene', 'kubejs:kerosene');
    event.add('forge:kerosene', 'kubejs:flowing_kerosene');
    event.add('forge:lpg', 'kubejs:lpg');
    event.add('forge:lpg', 'kubejs:flowing_lpg');
    event.add('forge:heavy_oil', ['thermal:heavy_oil', 'thermal:heavy_oil_flowing']);
    event.add('forge:light_oil', ['thermal:light_oil', 'thermal:light_oil_flowing']);
    event.add('forge:refined_fuel', ['thermal:refined_fuel', 'thermal:refined_fuel_flowing']);
    event.add('forge:refined_oil', ['kubejs:refined_oil', 'kubejs:refined_oil_flowing']);
});

ServerEvents.recipes(event => {
    // tougher recipes
});
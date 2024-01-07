ServerEvents.recipes(event => {
    event.remove({id: 'thermal:machines/refinery/refinery_crude_oil'});
    event.remove({id: 'thermal:machines/refinery/refinery_light_oil'});
    event.remove({id: 'thermal:machines/refinery/refinery_heavy_oil'});

    // Custom Thermal Refinery Recipes
    event.custom({
        type: 'thermal:refinery',
        ingredient: Fluid.of('thermal:light_oil').withAmount(100).toJson(),
        result: [
            Fluid.of('thermal:refined_fuel').withAmount(100).toJson(),
            Item.of('thermal:sulfur_dust').toJson()
        ],
        energy: 5000
    }).id('thermal:machines/refinery/refinery_light_oil');

    event.custom({
        type: 'thermal:refinery',
        ingredient: Fluid.of('thermal:heavy_oil').withAmount(100).toJson(),
        result: [
            Fluid.of('thermal:refined_fuel').withAmount(75).toJson(),
            Item.of('thermal:tar').toJson()
        ],
        energy: 5000
    }).id('thermal:machines/refinery/refinery_heavy_oil');
});
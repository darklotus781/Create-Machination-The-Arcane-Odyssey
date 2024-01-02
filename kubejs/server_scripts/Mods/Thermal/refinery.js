ServerEvents.recipes(event => {
    event.remove({id: 'thermal:machines/refinery/refinery_crude_oil'});
    event.remove({id: 'thermal:machines/refinery/refinery_light_oil'});
    event.remove({id: 'thermal:machines/refinery/refinery_heavy_oil'});

    // Custom Thermal Refinery Recipes
    event.custom({
        type: 'thermal:refinery',
        ingredient: {fluid: 'thermal:light_oil', amount: 100},
        result: [
            {fluid: 'thermal:refined_fuel', amount: 100},
            {item: 'thermal:sulfur_dust', amount: 1}
        ],
        energy: 5000
    }).id('thermal:machines/refinery/refinery_light_oil');

    event.custom({
        type: 'thermal:refinery',
        ingredient: {fluid: 'thermal:heavy_oil', amount: 100},
        result: [
            {fluid: 'thermal:refined_fuel', amount: 75},
            {item: 'thermal:tar', amount: 1}
        ],
        energy: 5000
    }).id('thermal:machines/refinery/refinery_heavy_oil');
});
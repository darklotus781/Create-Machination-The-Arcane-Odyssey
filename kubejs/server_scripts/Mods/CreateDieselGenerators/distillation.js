ServerEvents.tags('fluid', event => {
    //
});

ServerEvents.recipes(event => {

    event.remove({id: 'createdieselgenerators:distillation/crude_oil'});
    // Refined Oil
    event.custom({
        type: 'createdieselgenerators:distillation',
        ingredients: [
            Fluid.of('kubejs:refined_oil').withAmount(10).toJson()
        ],
        processingTime: 20,
        results: [
            Fluid.of('createdieselgenerators:diesel').withAmount(4).toJson(),
            Fluid.of('kubejs:kerosene').withAmount(3).toJson(),
            Fluid.of('createdieselgenerators:gasoline').withAmount(3).toJson(),
            Fluid.of('kubejs:lpg').withAmount(2).toJson()
        ],
        heatRequirement: 'superheated'
    }).id('createdieselgenerators:distillation/refined_oil');

    // Crude Oil
    event.custom({
        type: 'createdieselgenerators:distillation',
        ingredients: [
            Fluid.of('createdieselgenerators:crude_oil').withAmount(125).toJson()
        ],
        processingTime: 30,
        results: [
            Fluid.of('thermal:heavy_oil').withAmount(10).toJson(),
            Fluid.of('thermal:light_oil').withAmount(15).toJson(),
            Fluid.of('kubejs:refined_oil').withAmount(100).toJson()
        ],
        heatRequirement: 'superheated'
    }).id('createdieselgenerators:distillation/crude_oil');
});
ServerEvents.recipes(event => {

    event.remove({id: 'createdieselgenerators:distillation/crude_oil'});
    // Refined Oil
    event.custom({
        type: 'createdieselgenerators:distillation',
        ingredients: [
            Fluid.of('kubejs:refined_oil').withAmount(100).toJson()
        ],
        processingTime: 20,
        results: [
            Fluid.of('pneumaticcraft:diesel').withAmount(10).toJson(),
            Fluid.of('pneumaticcraft:kerosene').withAmount(30).toJson(),
            Fluid.of('pneumaticcraft:gasoline').withAmount(30).toJson(),
            Fluid.of('pneumaticcraft:lpg').withAmount(20).toJson()
        ],
        heatRequirement: 'superheated'
    }).id('createdieselgenerators:distillation/refined_oil');

    // Crude Oil
    event.custom({
        type: 'createdieselgenerators:distillation',
        ingredients: [
            Fluid.of('pneumaticcraft:oil').withAmount(125).toJson()
        ],
        processingTime: 30,
        results: [
            Fluid.of('thermal:heavy_oil').withAmount(10).toJson(),
            Fluid.of('thermal:light_oil').withAmount(15).toJson(),
            Fluid.of('kubejs:refined_oil').withAmount(100).toJson()
        ],
        heatRequirement: 'heated'
    }).id('createdieselgenerators:distillation/crude_oil');
});
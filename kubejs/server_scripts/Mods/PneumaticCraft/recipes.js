//priority: 0
ServerEvents.recipes(event => {
    event.remove({id: 'pneumaticcraft:compressed_iron_block_from_ingot'});
    event.remove({id: 'pneumaticcraft:refinery/oil_2'});
    event.remove({id: 'pneumaticcraft:refinery/oil_3'});
    event.remove({id: 'pneumaticcraft:refinery/oil_4'});
    event.remove({id: 'pneumaticcraft:thermo_plant/lubricant_from_biodiesel'});
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel'});
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_lpg'});
    event.remove({id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_crops'});
    event.remove({id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_seeds'});
    event.remove({id: 'pneumaticcraft:heat_frame_cooling/plastic'});
    event.remove({id: 'pneumaticcraft:pcb'});

    event.shapeless(Item.of('pneumaticcraft:compressed_iron_block'), Item.of('pneumaticcraft:ingot_iron_compressed', 9));

    event.custom({
        type: "pneumaticcraft:refinery",
        input: {
            type: "pneumaticcraft:fluid",
            tag: "forge:crude_oil",
            amount: 125
        },
        results: [
            {
                fluid: "thermal:heavy_oil",
                amount: 10
            },
            {
                fluid: "thermal:light_oil",
                amount: 15
            },
            {
                fluid: "kubejs:refined_oil",
                amount: 100
            }
        ]
    }).id('kubejs:pneumaticcraft/refinery/oil_3');

    event.custom({
        type: "pneumaticcraft:refinery",
        input: {
            type: "pneumaticcraft:fluid",
            tag: "forge:refined_oil",
            amount: 10
        },
        results: [
            {
                fluid: "pneumaticcraft:diesel",
                amount: 4
            },
            {
                fluid: "pneumaticcraft:kerosene",
                amount: 3
            },
            {
                fluid: "pneumaticcraft:gasoline",
                amount: 3
            },
            {
                fluid: "pneumaticcraft:lpg",
                amount: 2
            }
        ]
    }).id('kubejs:pneumaticcraft/refinery/refined_oil_4');


    event.custom({
        type: 'createdieselgenerators:basin_fermenting',
        ingredients: [
            Fluid.water().withAmount(250).toJson(),
            Ingredient.of('#forge:crops').toJson()
        ],
        processingTime: 200,
        results: [Fluid.of('pneumaticcraft:vegetable_oil').withAmount(100).toJson()]
    }).id('kubejs:fermenting/vegetable_oil_from_crops');

    // event.custom({
    //     type: "pneumaticcraft:refinery",
    //     input: {
    //         type: "pneumaticcraft:fluid",
    //         tag: "forge:refined_oil",
    //         amount: 10
    //     },
    //     results: [
    //         {
    //             fluid: "pneumaticcraft:diesel",
    //             amount: 4
    //         },
    //         {
    //             fluid: "pneumaticcraft:kerosene",
    //             amount: 3
    //         },
    //         {
    //             fluid: "pneumaticcraft:lpg",
    //             amount: 2
    //         }
    //     ]
    // })
    // event.custom({
    //     type: "pneumaticcraft:refinery",
    //     input: {
    //         type: "pneumaticcraft:fluid",
    //         tag: "forge:refined_oil",
    //         amount: 10
    //     },
    //     results: [
    //         {
    //             fluid: "pneumaticcraft:diesel",
    //             amount: 4
    //         },
    //         {
    //             fluid: "pneumaticcraft:lpg",
    //             amount: 2
    //         }
    //     ]
    // })
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        fluid_input: {
            type: "pneumaticcraft:fluid",
            tag: "forge:heavy_oil",
            amount: 100
        },
        temperature: {
            min_temp: 373
        },
        fluid_output: {
            fluid: "thermal:refined_fuel",
            amount: 50
        },
        item_output: {
            item: "thermal:tar"
        },
        pressure: 3

    });
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        item_input: {
            item: "minecraft:coal"
        },
        fluid_output: {
            fluid: "thermal:creosote",
            amount: 200
        },
        item_output: {
            item: "thermal:coal_coke"
        },
        temperature: {
            min_temp: 573
        },
        pressure: 4.0,
        speed: 0.25,
        air_use_multiplier: 5.0,
        exothermic: false
    });
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        fluid_input: {
            type: "pneumaticcraft:fluid",
            tag: "forge:light_oil",
            amount: 100
        },
        temperature: {
            min_temp: 373
        },
        fluid_output: {
            fluid: "thermal:refined_fuel",
            amount: 75
        },
        item_output: {
            item: "thermal:sulfur_dust"
        },
        pressure: 3
    });
    // event.custom({
    //     type: "pneumaticcraft:fluid_mixer",
    //     input1: {
    //         type: "pneumaticcraft:fluid",
    //         fluid: "tconstruct:molten_iron",
    //         amount: 650
    //     },
    //     input2: {
    //         type: "pneumaticcraft:fluid",
    //         fluid: "tconstruct:molten_nickel",
    //         amount: 288
    //     },
    //     fluid_output: {
    //         fluid: "kubejs:invar_slurry",
    //         amount: 576
    //     },
    //     pressure: 3.0,
    //     time: 300
    // })
    // event.custom({
    //     type: "pneumaticcraft:thermo_plant",
    //     fluid_input: {
    //         type: "pneumaticcraft:fluid",
    //         fluid: "kubejs:invar_slurry",
    //         amount: 144
    //     },
    //     temperature: {
    //         max_temp: 273
    //     },
    //     item_output: {
    //         item: "thermal:invar_ingot"
    //     },
    //     pressure: 4
    //
    // })
    //
    // event.custom({
    //     type: "pneumaticcraft:assembly_drill",
    //     input: {
    //         item: "kubejs:untested_pcb"
    //     },
    //     result: {
    //         item: "kubejs:electricaly_tested",
    //         count: 1
    //     },
    //     program: "drill"
    // })
    // event.custom({
    //     type: "pneumaticcraft:assembly_laser",
    //     input: {
    //         item: "kubejs:electricaly_tested"
    //     },
    //     result: {
    //         item: "kubejs:mystery_pcb",
    //         count: 1
    //     },
    //     program: "laser"
    // })
    // event.custom({
    //     type: "pneumaticcraft:thermo_plant",
    //     fluid_input: {
    //         type: "pneumaticcraft:fluid",
    //         fluid: "thermal:sap",
    //         amount: 1000
    //     },
    //     temperature: {
    //         min_temp: 373
    //     },
    //     fluid_output: {
    //         fluid: "thermal:syrup",
    //         amount: 220
    //     },
    //     pressure: 3
    //
    // })
    // event.custom({
    //     type: "pneumaticcraft:thermo_plant",
    //     fluid_input: {
    //         type: "pneumaticcraft:fluid",
    //         fluid: "thermal:resin",
    //         amount: 200
    //     },
    //     temperature: {
    //         min_temp: 373
    //     },
    //     fluid_output: {
    //         fluid: "thermal:tree_oil",
    //         amount: 80
    //     },
    //     item_output: {
    //         item: "thermal:rosin"
    //     },
    //     pressure: 3
    //
    // })
    // event.custom({
    //     type: "pneumaticcraft:fluid_mixer",
    //     fluid_output: {
    //         amount: 50,
    //         fluid: "pneumaticcraft:biodiesel"
    //     },
    //     input1: {
    //         type: "pneumaticcraft:fluid",
    //         amount: 25,
    //         tag: "forge:plantoil"
    //     },
    //     input2: {
    //         type: "pneumaticcraft:fluid",
    //         amount: 25,
    //         fluid: "createaddition:bioethanol"
    //     },
    //     item_output: {
    //         item: "pneumaticcraft:glycerol"
    //     },
    //     pressure: 2.0,
    //     time: 300
    // })
});


// {
//   type: "pneumaticcraft:heat_properties",
//   "block": "minecraft:packed_ice",
//   temperature: 253, // Temp in Kelvin
//   "thermalResistance": 250, // Higher the number, slower heat gain or loss
//   "heatCapacity": 7500, // how much heat can be gained or loss before transformation
//   "transformHot": {
//     "block": "minecraft:ice"
//   },
//   "transformCold": {
//     "block": "minecraft:blue_ice"
//   }
// }
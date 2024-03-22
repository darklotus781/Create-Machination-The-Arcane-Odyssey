// ServerEvents.recipes(event => {
//     function machinerator(machine, mechanism, casing) {
//         event.shaped('kubejs:' + machine + '_machine', [
//             'S S',
//             ' C ',
//             'S S'
//         ], {
//             C: casing,
//             S: mechanism
//         }).id('kubejs:' + machine + '_machine_from_' + casing.split(':')[1]);
//     }

//     machinerator('radiant', 'kubejs:radiant_mechanism', 'thermal:machine_frame');
//     machinerator('cyber', 'kubejs:cyber_mechanism', 'kubejs:gold_casing');
//     machinerator('plastic', 'kubejs:plastic_mechanism', 'kubejs:zinc_casing');
//     machinerator('temporal', 'kubejs:temporal_mechanism', 'kubejs:enderium_casing');
//     // machinerator('supercritical', 'kubejs:supercritical_mechanism', 'kubejs:supercritical_casing');
//     machinerator('sturdy', 'kubejs:sturdy_mechanism', 'create:railway_casing');
//     machinerator('brass', 'create:precision_mechanism', 'create:brass_casing');
//     machinerator('copper', 'kubejs:sealed_mechanism', 'create:copper_casing');
//     machinerator('andesite', '#forge:mechanisms/tier/basic', 'create:andesite_casing');
//     machinerator('power', 'kubejs:power_mechanism', 'create:content_observer');
//     machinerator('zinc', 'kubejs:scorch_mechanism', 'kubejs:zinc_casing');
// });
// priority: -100
ServerEvents.recipes(event => {
    
    // event.remove({output: /waystones\:.*/})
    event.remove({output: /waystones\:.*waystone/});
    event.remove({output: 'waystones:warp_plate'}); // Warp Plates are OP and can transfer mobs and items
    event.remove({output: 'waystones:portstone'});
    event.remove({output: 'waystones:warp_stone'});
    event.remove({output: 'waystones:warp_dust'});
    event.remove({output: 'waystones:sharestone'});
    event.remove({output: /waystone\:.*scroll/});

    // Kubejs Warp Seeds
    // let t = Item.of('kubejs:warp_fragments');
    // event.recipes.create.sequenced_assembly([
    //     Item.of('kubejs:warp_fragments'),
    // ], Item.of('ars_nouveau:source_gem'), [
    //     event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/knives')]),
    //     event.recipes.create.filling(t, [t, Fluid.of('integrateddynamics:liquid_chorus').withAmount(250)]),
    //     event.recipes.create.deploying(t, [t, Ingredient.of('#forge:nuggets/terrasteel')]),
    //     event.recipes.create.filling(t, [t, Fluid.of('thermal:ender').withAmount(125)]),
    //     event.recipes.create.deploying(t, [t, Item.of('botania:dragonstone')]),
    //     event.recipes.create.pressing(t, t)
    // ]).transitionalItem(t).loops(1).id('kubejs:assembly/warp_fragments');

    // Warp Stone
    let t = Item.of('waystones:warp_stone');
    event.recipes.create.sequenced_assembly([
        Item.of('waystones:warp_stone'),
    ], Item.of('ars_nouveau:source_gem'), [
        event.recipes.create.filling(t, [t, Fluid.of('integrateddynamics:liquid_chorus').withAmount(250)]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:nuggets/terrasteel')]),
        event.recipes.create.filling(t, [t, Fluid.of('thermal:ender').withAmount(125)]),
        event.recipes.create.deploying(t, [t, Item.of('botania:dragonstone')]),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:temporal_fluid').withAmount(125)]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/warp_stone');

    // mix forbidden_arcanus:ferrognetic_mixture and create:chromatic_compound
    // produce temporal_fluid
    // spout fluid on forbidden_arcanus:purifying_soap

    event.recipes.create.crushing([Item.of('kubejs:warp_fragments', 3), Item.of('kubejs:warp_fragments').withChance(.55), Item.of('kubejs:warp_fragments').withChance(.15)], Ingredient.of('#waystones:waystones'));

    //Waystones
    // event.shaped(Item.of('waystones:waystone'), [
    //         'SRS',
    //         ' W ',
    //         'LCL',
    //     ], {
    //         S: 'ars_nouveau:stable_warp_scroll',
    //         W: 'waystones:warp_stone',
    //         R: 'botania:rune_envy',
    //         C: 'minecraft:chiseled_stone_bricks',
    //         L: 'minecraft:lodestone'
    //     }
    // );

    event.stonecutting('waystones:waystone', [Ingredient.of('#waystones:waystones')]);
    event.stonecutting('waystones:sandy_waystone', [Ingredient.of('#waystones:waystones')]);
    event.stonecutting('waystones:mossy_waystone', [Ingredient.of('#waystones:waystones')]);
});


// ServerEvents.lowPriorityData(event => {
//     event.addJson('forbidden_arcanus:forbidden_arcanus/enhancer/definition/third_eye', {
//         "description": {
//             "hephaestus_forge": "See through dimensions with Arcane Energy."
//         },
//         "effects": [
//             {
//                 "type": "forbidden_arcanus:multiply_required_essence",
//                 "conditions": [],
//                 "essence_type": "aureal",
//                 "multiplier": 0.0
//             },
//             {
//                 "type": "forbidden_arcanus:multiply_required_essence",
//                 "conditions": [],
//                 "essence_type": "souls",
//                 "multiplier": 0.0
//             },
//             {
//                 "type": "forbidden_arcanus:multiply_required_essence",
//                 "conditions": [],
//                 "essence_type": "blood",
//                 "multiplier": 0.0
//             },
//             {
//                 "type": "forbidden_arcanus:multiply_required_essence",
//                 "conditions": [],
//                 "essence_type": "experience",
//                 "multiplier": 0.0
//             }
//         ],
//         "item": "botania:third_eye"
//     });
// });
//
// ServerEvents.lowPriorityData(event => {
//     event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/warp_stone', {
//         "additional_requirements": {
//             "enhancers": [
//                 "forbidden_arcanus:third_eye"
//             ],
//             "forge_tier": 5
//         },
//         "essences": {
//             "aureal": 12000,
//             "blood": 25000,
//             "experience": 5000,
//             "souls": 7500
//         },
//         "inputs": [
//             {
//                 "amount": 1,
//                 "ingredient": {
//                     "item": "forbidden_arcanus:ferrognetic_mixture"
//                 }
//             },
//             {
//                 "amount": 1,
//                 "ingredient": {
//                     "item": "minecraft:purple_dye"
//                 }
//             },
//             {
//                 "amount": 1,
//                 "ingredient": {
//                     "item": "forbidden_arcanus:ferrognetic_mixture"
//                 }
//             },
//             {
//                 "amount": 1,
//                 "ingredient": {
//                     "item": "minecraft:purple_dye"
//                 }
//             },
//             {
//                 "amount": 1,
//                 "ingredient": {
//                     "item": "forbidden_arcanus:ferrognetic_mixture"
//                 }
//             },
//             {
//                 "amount": 1,
//                 "ingredient": {
//                     "item": "minecraft:purple_dye"
//                 }
//             },
//             {
//                 "amount": 1,
//                 "ingredient": {
//                     "item": "forbidden_arcanus:ferrognetic_mixture"
//                 }
//             },
//             {
//                 "amount": 1,
//                 "ingredient": {
//                     "item": "minecraft:purple_dye"
//                 }
//             }
//         ],
//         "main_ingredient": {
//             "item": "botania:gaia_ingot"
//         },
//         "result": {
//             "type": "forbidden_arcanus:create_item",
//             "result_item": {
//                 "Count": 1,
//                 "id": "waystones:warp_stone"
//             }
//         }
//     });
// })
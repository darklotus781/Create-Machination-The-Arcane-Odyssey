// priority: -100
ServerEvents.recipes(event => {
    event.remove({output: /waystones\:.*/})

    // Kubejs Warp Seeds
    // Can be acquired by crushing a waystone or here:
// botania:dragonstone
// botania:terrasteel_nugget
// thermal:ender
// seeds?
    let t = Item.of('kubejs:warp_fragments');
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:warp_fragments'),
    ], Item.of('ars_nouveau:source_gem'), [
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:tools/knives')]),
        event.recipes.create.filling(t, [t, Fluid.of('integrateddynamics:liquid_chorus').withAmount(250)]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:nuggets/terrasteel')]),
        event.recipes.create.filling(t, [t, Fluid.of('thermal:ender').withAmount(125)]),
        event.recipes.create.deploying(t, [t, Item.of('botania:dragonstone')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(2).id('kubejs:assembly/warp_fragments');

    // event.recipes.create.mechanical_crafting(Item.of('kubejs:radiant_coil', 4), [
    //     'WRWRW',
    //     'R   R',
    //     'W   W',
    //     'R   R',
    //     'WRWRW'
    // ], {
    //     R: Item.of('kubejs:enriched_rubber'),
    //     W: Item.of('kubejs:warp_fragments')
    // }).id('kubejs:crafter/warp_stone');

    // waystone:warp_stone
    // waystone:portstone
    // waystone:waystone | mossy_waystone | sandy_waystone
    // waystone:warp_dust
    // waystone:warp_plate
});
// LootJS.modifiers(event => {
//     event.addBlockLootModifier(/waystones\:.*waystone/)
//         .removeLoot(/waystones\:.*waystone/)
//         .matchMainHand(Item.of('minecraft:netherite_pickaxe').weakNBT())
//         .addLoot(Item.of('kubejs:warp_fragments', 2));
// });

// Waystones are craftable at a later point in the pack
// Waystones can be broken with a Waystone Removal tool
// Warp Seeds are a sequenced assembly recipe

//

// Warp stone becomes a Haephestus Forge recipe, Tier 5
// botania:ender_air_bottle
// botania:gaia_ingot - activator item
// botania:third_eye
// forbidden_arcanus:stellarite_piece
// ars_elemental:necrotic_focus //top tier, not impossible
// forbidden_arcanus:dark_matter
// forbidden_arcanus:golden_dragon_scale.

ServerEvents.lowPriorityData(event => {
    event.addJson('forbidden_arcanus:forbidden_arcanus/enhancer/definition/third_eye', {
        "description": {
            "hephaestus_forge": "See through dimensions with Arcane Energy."
        },
        "effects": [
            {
                "type": "forbidden_arcanus:multiply_required_essence",
                "conditions": [],
                "essence_type": "aureal",
                "multiplier": 0.0
            },
            {
                "type": "forbidden_arcanus:multiply_required_essence",
                "conditions": [],
                "essence_type": "souls",
                "multiplier": 0.0
            },
            {
                "type": "forbidden_arcanus:multiply_required_essence",
                "conditions": [],
                "essence_type": "blood",
                "multiplier": 0.0
            },
            {
                "type": "forbidden_arcanus:multiply_required_essence",
                "conditions": [],
                "essence_type": "experience",
                "multiplier": 0.0
            }
        ],
        "item": "botania:third_eye"
    });
});

ServerEvents.lowPriorityData(event => {
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/warp_stone', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:third_eye"
            ],
            "forge_tier": 5
        },
        "essences": {
            "aureal": 12000,
            "blood": 25000,
            "experience": 5000,
            "souls": 7500
        },
        "inputs": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "forbidden_arcanus:ferrognetic_mixture"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:purple_dye"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "forbidden_arcanus:ferrognetic_mixture"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:purple_dye"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "forbidden_arcanus:ferrognetic_mixture"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:purple_dye"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "forbidden_arcanus:ferrognetic_mixture"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:purple_dye"
                }
            }
        ],
        "main_ingredient": {
            "item": "botania:gaia_ingot"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "waystones:warp_stone"
            }
        }
    });
})
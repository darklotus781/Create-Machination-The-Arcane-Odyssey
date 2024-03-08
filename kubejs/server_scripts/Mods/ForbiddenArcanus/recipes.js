BlockEvents.rightClicked('minecraft:soul_sand', event => {
    if (event.item.id == 'forbidden_arcanus:soul_extractor') {
        event.block.popItemFromFace('forbidden_arcanus:soul', event.getFacing())
        event.block.set('forbidden_arcanus:soulless_sand')
        event.player.damageHeldItem("MAIN_HAND", 1)
    }
});

// global.ticks = 0;
// LevelEvents.tick(event => { // Every 1.5 seconds, if a wraith is on soulless sand in the overworld, convert it to soul sand
//     if (event.level != event.server.getOverworld().getLevel()) return;
//     // if (event.tick % 20 !== 0) return;
//     global.ticks++
//     if (global.ticks == 30) {
//         global.ticks = 0
//         event.level.getEntities().filterSelector('@e[type=quark:wraith]').forEach(entity => {
//             if (entity.block.id == 'forbidden_arcanus:soulless_sand') {
//                 entity.block.set('minecraft:soul_sand')
//                 event.server.runCommandSilent(`playsound minecraft:block.soul_sand.hit block @e[type=player] ${entity.block.x} ${entity.block.y} ${entity.block.z}`)
//             }
//         })
//     }
// });

ServerEvents.blockLootTables(event => {
    event.addSimpleBlock('forbidden_arcanus:pixie_utrem_jar', 'forbidden_arcanus:pixie_utrem_jar');
    event.addSimpleBlock('forbidden_arcanus:corrupted_pixie_utrem_jar', 'forbidden_arcanus:corrupted_pixie_utrem_jar');
});

ServerEvents.recipes(event => {
    event.remove({id: 'create:haunting/soul_sand'});
    event.remove({id: 'create:splashing/soul_sand'});

    event.remove({id: 'forbidden_arcanus:aureal_bottle'})
    event.remove({id: 'forbidden_arcanus:golden_orchid_seeds'});
    event.remove({id: 'forbidden_arcanus:dark_matter'});
    event.remove({id: 'forbidden_arcanus:corrupti_dust'});
    event.remove({id: 'forbidden_arcanus:dark_nether_star'});
    event.remove({id: 'forbidden_arcanus:corrupted_pixie'});
    event.remove({id: 'forbidden_arcanus:blasting/arcane_crystal_dust_from_blasting'});
    event.remove({id: 'forbidden_arcanus:smelting/arcane_crystal_dust_from_smelting'});
    event.remove({id: 'forbidden_arcanus:aureal_bottle'});
    event.remove({id: 'forbidden_arcanus:deorum_ingot'});
    event.remove({id: 'forbidden_arcanus:mundabitur_dust'});

    event.smelting('forbidden_arcanus:arcane_crystal_dust', '#forbidden_arcanus:arcane_crystal_ores')

    event.recipes.create.haunting(Item.of('forbidden_arcanus:dark_nether_star'), Item.of('minecraft:nether_star')).id('forbidden_arcanus:dark_nether_star');
    event.recipes.create.mixing(Item.of('forbidden_arcanus:mundabitur_dust'), [Item.of('forbidden_arcanus:arcane_crystal_dust'), Item.of('quark:soul_bead')]);
    event.recipes.create.mixing(Ingredient.of('#forge:ingots/deorum'), [Ingredient.of('#forge:nuggets/gold', 9), Item.of('forbidden_arcanus:mundabitur_dust')]);
    event.recipes.create.haunting(Item.of('forbidden_arcanus:soulless_sand'), Ingredient.of('#forge:sand')).id('kubejs:haunting_soulless_sand');
    event.recipes.create.emptying([Fluid.of('kubejs:aureal_essence').withAmount(723), Item.of('forbidden_arcanus:utrem_jar')], Item.of('forbidden_arcanus:pixie_utrem_jar'))
    event.recipes.create.emptying([Fluid.of('kubejs:aureal_essence').withAmount(333), Item.of('kubejs:empty_vial')], Item.of('forbidden_arcanus:aureal_bottle'))
    event.recipes.create.crushing(Item.of('forbidden_arcanus:arcane_crystal_dust_speck', 50), Item.of('forbidden_arcanus:arcane_crystal_obelisk'));
    event.recipes.create.haunting(Item.of('forbidden_arcanus:darkstone'), Item.of('minecraft:blackstone'));
    event.recipes.create.haunting(Item.of('forbidden_arcanus:corrupt_soul'), Item.of('forbidden_arcanus:soul'));
    event.recipes.create.deploying(Item.of('forbidden_arcanus:corrupted_pixie'), [Item.of('forbidden_arcanus:corrupt_soul'), Item.of('forbidden_arcanus:arcane_crystal_dust')]);
    event.recipes.create.filling(Item.of('forbidden_arcanus:aureal_bottle'), [Item.of('kubejs:empty_vial'), Fluid.of('kubejs:aureal_essence').withAmount(333)]);
    event.recipes.create.mixing(Item.of('forbidden_arcanus:arcane_gold_ingot'), [Ingredient.of('#forge:nuggets/gold', 9), Item.of('forbidden_arcanus:mundabitur_dust')]);
    event.recipes.create.splashing(Item.of('forbidden_arcanus:pixie_utrem_jar'), Item.of('forbidden_arcanus:corrupted_pixie_utrem_jar'));
    event.recipes.create.filling(Item.of('minecraft:soul_sand'), [Item.of('forbidden_arcanus:soulless_sand'), Fluid.of('kubejs:aureal_essence').withAmount(50)]);

    // Input, reagent, output, source
    event.recipes.ars_nouveau.enchanting_apparatus(
        [Item.of('forbidden_arcanus:arcane_crystal'), Item.of('kubejs:sourcegem_fragments'), Ingredient.of('#forge:nuggets/deorum'), Ingredient.of('#forge:nuggets/deorum')],
        [Item.of('forbidden_arcanus:aureal_bottle')],
        Item.of('tiab:time_in_a_bottle'),
        2000
    );

    event.custom({
        type: 'pneumaticcraft:explosion_crafting',
        input: [Item.of('forbidden_arcanus:dark_rune').toJson()],
        loss_rate: 30,
        results: [Item.of('forbidden_arcanus:corrupti_dust').toJson()]
    }).id('forbidden_arcanus:corrupti_dust');

    event.custom({
        type: 'pneumaticcraft:explosion_crafting',
        input: [Item.of('ae2:matter_ball').toJson()],
        loss_rate: 20,
        results: [Item.of('forbidden_arcanus:dark_matter').toJson()]
    }).id('forbidden_arcanus:dark_matter');

    let t = Item.of('forbidden_arcanus:arcane_crystal_dust_speck');
    event.recipes.create.sequenced_assembly([
        Item.of('forbidden_arcanus:arcane_crystal'),
    ], t, [
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:aureal_essence').withAmount(16)]),
        event.recipes.create.pressing(t, t),
        event.recipes.create.filling(t, [t, Fluid.of('kubejs:aureal_essence').withAmount(16)]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(2).id('forbidden_arcanus:arcane_crystal');
});

ServerEvents.lowPriorityData(event => {
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/eternal_stella', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 20,
            "blood": 0,
            "experience": 0,
            "souls": 0
        },
        "inputs": [
            {
                "amount": 5,
                "ingredient": {
                    "item": "forbidden_arcanus:xpetrified_orb"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "forbidden_arcanus:stellarite_piece"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:netherite_ingot"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "forbidden_arcanus:eternal_stella"
            }
        }
    });
});
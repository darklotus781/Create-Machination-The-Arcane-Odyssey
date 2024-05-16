ServerEvents.recipes(event => {
    event.remove({id: 'minecraft:ender_eye'});
    event.replaceInput({input: 'minecraft:ender_eye'}, 'minecraft:ender_eye', 'kubejs:scryers_eye');

    event.shapeless(Item.of('kubejs:scryers_eye'), [Item.of('minecraft:blaze_powder'), Item.of('minecraft:ender_pearl')]).id('kubejs:scryers_eye_manual_only');

    event.recipes.create.mixing(Fluid.of('kubejs:molten_copper').withAmount(1000), [Ingredient.of('#forge:ingots/copper', 8)]).heated().id('kubejs:molten_copper_from_ingots');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_iron').withAmount(1000), [Ingredient.of('#forge:ingots/iron', 8)]).heated().id('kubejs:molten_iron_from_ingots');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold').withAmount(1000), [Ingredient.of('#forge:ingots/gold', 8)]).heated().id('kubejs:molten_gold_from_ingots');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_lead').withAmount(1000), [Ingredient.of('#forge:ingots/lead', 8)]).heated().id('kubejs:molten_lead_from_ingots');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_diamond').withAmount(1000), [Ingredient.of('#forge:gems/diamond', 8)]).superheated().id('kubejs:molten_diamond_from_gems');

    //Alchemical Conversion via Super Heated mixing
    event.recipes.create.mixing(Fluid.of('kubejs:molten_copper').withAmount(250), [Ingredient.of('#forge:ingots/iron', 2), Fluid.of('kubejs:molten_copper').withAmount(125), Fluid.of('kubejs:source').withAmount(25)]).superheated().id('kubejs:alchemy/copper');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold').withAmount(250), [Ingredient.of('#forge:ingots/iron', 2), Fluid.of('kubejs:molten_gold').withAmount(125), Fluid.of('kubejs:source').withAmount(25)]).superheated().id('kubejs:alchemy/gold');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_lead').withAmount(250), [Ingredient.of('#forge:ingots/iron', 2), Fluid.of('kubejs:molten_lead').withAmount(125), Fluid.of('kubejs:source').withAmount(25)]).superheated().id('kubejs:alchemy/lead');
    event.recipes.create.mixing(Fluid.of('kubejs:molten_diamond').withAmount(250), [Ingredient.of('#forge:gems/emerald'), Fluid.of('kubejs:molten_diamond').withAmount(125), Fluid.of('kubejs:source').withAmount(25)]).superheated().id('kubejs:alchemy/diamond');

    // Barrel from Blanks / Slabs in Mixer
    event.recipes.create.mixing([Item.of('minecraft:barrel')], [Ingredient.of('#minecraft:planks', 6), Ingredient.of('#minecraft:slabs', 2)]).id('kubejs:basin/barrel');

    // Liquefied Souls from Soul Beads
    event.recipes.create.mixing(Fluid.of('kubejs:liquid_souls').withAmount(125), [Item.of('quark:soul_bead', 2)]).heated().id('kubejs:soul_liquefication_1');
    event.recipes.create.mixing(Fluid.of('kubejs:liquid_souls').withAmount(125), [Item.of('forbidden_arcanus:soul', 2)]).heated().id('kubejs:soul_liquefication_2');
    event.recipes.create.mixing(Fluid.of('kubejs:liquid_souls').withAmount(125), [Item.of('forbidden_arcanus:corrupt_soul')]).heated().id('kubejs:soul_liquefication_3');
    event.recipes.create.mixing(Fluid.of('kubejs:liquid_souls').withAmount(250), [Item.of('forbidden_arcanus:enchanted_soul')]).heated().id('kubejs:soul_liquefication_4');
    event.recipes.create.mixing(Fluid.of('kubejs:temporal_fluid').withAmount(1000), [Item.of('forbidden_arcanus:ferrognetic_mixture'), Item.of('create:chromatic_compound'), Item.of('forbidden_arcanus:purifying_soap')]).heated().id('kubejs:temporal_fluid');

    // Renewable Runes
    // Crush a rune get 4x rune dust
    event.recipes.create.crushing(Item.of('kubejs:rune_dust', 4), Item.of('forbidden_arcanus:rune'));
    // compact rune dust and flint over heat to get a new rune
    event.recipes.create.compacting([Item.of('forbidden_arcanus:rune')], [Item.of('kubejs:rune_dust', 2), Item.of('minecraft:flint')]).heatRequirement('heated').id('kubejs:compacting/rune');


    // Eye of Ender via Occultism Ritual
    event.recipes.occultism.ritual(
        Item.of('minecraft:ender_eye', 2),
        [
            '#forge:ender_pearls',
            '#forge:gems/quartz',
            '#forge:ender_pearls',
            'minecraft:blaze_rod'
        ],
        'kubejs:runic_tablet',
        'occultism:craft_djinni'
    ).dummy('kubejs:ritual_dummy/ender_eye').sacrifice({
        tag: 'forge:enderman',
        display_name: 'Enderman'
    }).id('kubejs:/ritual/eye_of_ender');

    event.custom({
        type: 'lychee:item_inside',
        item_in: {
            item: 'minecraft:nether_star'
        },
        block_in: {
            blocks: ['minecraft:air']
        },
        contextual: {
            type: 'location',
            predicate: {
                dimension: "overworld",
                position: {
                    y: {
                        min: 318,
                        max: 319
                    }
                }
            }
        },
        post: [
            {
                type: 'set_item',
                item: 'forbidden_arcanus:stellarite_piece',
            },
            {
                type: 'place',
                block: '*'
            }
        ]
    }).id('stellarite_piece_from_nether_star');
});


// TODO:
// Renewable Lapis Recipe
// deploy ars_nouveau:experience_gem on ae2:certus_quartz
// spout kubejs:chromatic_solution
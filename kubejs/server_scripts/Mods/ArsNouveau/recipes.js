//priority: 0

ServerEvents.recipes(event => {
    event.remove({id: 'ars_nouveau:magebloom_fiber'});
    event.remove({output: 'ars_nouveau:source_gem'});
    event.remove({id: 'ars_nouveau:magebloom_crop'});
    event.remove({id: 'ars_nouveau:imbuement_amethyst_block'});
    event.remove({id: 'ars_nouveau:novice_spell_book'});
    event.remove({id: 'ars_nouveau:apprentice_spell_book'});
    event.remove({id: 'ars_nouveau:archmage_spell_book'});
    event.remove({output: 'ars_nouveau:creative_spell_book'});

    event.shapeless(Item.of('ars_nouveau:source_gem', 4), [Item.of('ars_nouveau:source_gem_block')]);
    event.shapeless(Item.of('ars_nouveau:spell_parchment'), [Item.of('ars_nouveau:magebloom_fiber', 4)]);
    event.shapeless(Item.of('ars_nouveau:novice_spell_book'), [Item.of('minecraft:book'), Item.of('kubejs:sourcegem_fragments')]);
    event.shapeless(Item.of('ars_nouveau:apprentice_spell_book'), [Item.of('ars_nouveau:novice_spell_book'), Item.of('tiab:time_in_a_bottle')]);
    event.shapeless(Item.of('ars_nouveau:archmage_spell_book'), [Item.of('ars_nouveau:apprentice_spell_book'), Item.of('minecraft:nether_star'), Item.of('forbidden_arcanus:eternal_stella'), Item.of('ars_nouveau:wilden_tribute')]);

    event.custom(cuttingRecipe(Item.of('ars_nouveau:magebloom').toJson(), Ingredient.of('#forge:tools/knives').toJson(), [
        Item.of('ars_nouveau:magebloom_fiber', 2).toJson(),
    ])).id('kubejs:cutting/magebloom_fiber');
});

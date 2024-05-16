ServerEvents.recipes(event => {
    // event.remove({ output: /railways\:track_quark_.*/});
    event.remove({ output: 'railways:track_monorail' });

    // Monorail
    let t = Item.of('railways:track_incomplete_monorail');
    event.recipes.create.sequenced_assembly([
        Item.of('railways:track_monorail', 16)
    ], Item.of('create:metal_girder'), [
        event.recipes.create.deploying(t, [t, Item.of('create:metal_bracket')]),
        event.recipes.create.deploying(t, [t, Ingredient.of('#forge:plates/iron')]),
        event.recipes.create.pressing(t, t)
    ]).transitionalItem(t).loops(1).id('kubejs:assembly/railways_track_monorail');


    // traintracks
    event.forEachRecipe({ id: /^railways\:sequenced_assembly\/track_.*/ }, (recipe) => {
        let resultId = recipe.originalRecipeResult.id;
        // if (resultId.includes('quark')) return;
        // if (resultId == ('railways:track_quark_ancient' || 'railways:track_quark_ancient_narrow' || 'railways:track_quark_ancient_wide')) return;
        // if (resultId == ('railways:track_quark_azalea' || 'railways:track_quark_azalea_narrow' || 'railways:track_quark_azalea_wide')) return;
        // if (resultId == ('railways:track_quark_blossom' || 'railways:track_quark_blossom_narrow' || 'railways:track_quark_blossom_wide')) return;

        if (resultId != 'railways:track_coupler' &&
            resultId != 'railways:track_switch_andesite' &&
            resultId != 'railways:track_switch_brass' &&
            resultId != 'railways:track_monorail') {

            let nuggets = '#create:recipe_nuggets';
            let count = 16;
            let wood = resultId.replace('railways:track_', '').replace('_wide', '').replace('_narrow', '');
            let woodId = wood.replace('byg_', 'byg:').replace('biomesoplenty_', 'biomesoplenty:').replace('white_mangrove', 'mangrove').replace('quark_', 'quark:');
            let t = null;

            // console.log({nuggets: nuggets, count: count, wood: wood, woodId: woodId});

            if (!woodId.includes(':')) {
                woodId = 'minecraft:' + woodId;
            }

            if (woodId.includes('quark')) {
                woodId = woodId + '_planks';
            }

            if (wood == 'ender') {
                woodId = 'minecraft:end_stone_brick';
                nuggets = 'forbidden_arcanus:ender_pearl_fragment';
            }
            if (wood == 'blackstone' || wood == 'crimson' || wood == 'warped') {
                nuggets = '#forge:nuggets/gold';
            }

            let slabs = woodId + '_slab';

            if (wood == 'create_andesite') {
                slabs = '#create:sleepers';
            }

            if (wood == 'tieless') {
                slabs = 'minecraft:glass_pane';
            }

            if (wood == 'bamboo') {
                slabs = 'minecraft:bamboo';
            }

            if (wood == 'stripped_bamboo') {
                slabs = 'minecraft:bamboo_slab';
            }

            if (wood =='phantom') {
                slabs = 'minecraft:phantom_membrane';
            }

            // if (wood == 'bamboo')
            // console.log({nuggets: nuggets, count: count, wood: wood, woodId: woodId, slabs: slabs});

            // Remove original recipe
            event.remove({ output: resultId });

            if (resultId.includes('_narrow')) {

                // Wide rail in, cut, deployer nugget, press = 2 out
                let wideRail = resultId.replace('_narrow', '_wide');
                t = Item.of('railways:track_incomplete_' + wood + '_narrow');
                event.recipes.create.sequenced_assembly([
                    Item.of(resultId, 2)
                ], Ingredient.of(wideRail), [
                    event.recipes.create.cutting(t, t),
                    event.recipes.create.deploying(t, [t, Ingredient.of(nuggets)]),
                    event.recipes.create.pressing(t, t)
                ]).transitionalItem(t).loops(1).id('kubejs:assembly/' + resultId.replace(':', '_'));

            } else if (resultId.includes('_wide')) {

                // Normal rail in, cut, deploy slab, press = 1 out
                let normalRail = (wood == 'create_andesite') ? 'create:track' : resultId.replace('_wide', '');
                t = Item.of('railways:track_incomplete_' + wood + '_wide');
                event.recipes.create.sequenced_assembly([
                    Item.of(resultId)
                ], Ingredient.of(normalRail), [
                    event.recipes.create.cutting(t, [t]),
                    event.recipes.create.deploying(t, [t, Ingredient.of(slabs)]),
                    event.recipes.create.pressing(t, t)
                ]).transitionalItem(t).loops(1).id('kubejs:assembly/' + resultId.replace(':', '_'));

            } else { // Normal
                console.log
                // slab in, double deployer nuggets, press = 16 out
                t = Item.of('railways:track_incomplete_' + wood);
                event.recipes.create.sequenced_assembly([
                    Item.of(resultId, count)
                ], Ingredient.of(slabs), [
                    event.recipes.create.deploying(t, [t, Ingredient.of(nuggets)]),
                    event.recipes.create.deploying(t, [t, Ingredient.of(nuggets)]),
                    event.recipes.create.pressing(t, t)
                ]).transitionalItem(t).loops(1).id('kubejs:assembly/' + resultId.replace(':', '_'));
            }
        }
    });
});
ServerEvents.recipes(event => {
    event.remove({id: 'minecraft:ender_eye'});
    event.replaceInput(
        {input: 'minecraft:ender_eye'},
        'minecraft:ender_eye',
        'reliquary:eye_of_the_storm'
    );

    event.shapeless(Item.of('minecraft:ender_eye'), [Item.of('minecraft:blaze_rod'), Item.of('minecraft:ender_pearl')]).stage('end_access').id('kubejs:ender_eye_manual_only');

    // let t = Item.of('minecraft:lapis_lazuli');
    // event.recipes.create.sequenced_assembly([
    //     Item.of('minecraft:lapis_lazuli'),
    // ], Item.of('minecraft:blue_dye'), [
    //     event.recipes.create.filling(t, [t, Fluid.of('create_enchantment_industry:experience').withAmount(10)]),
    //     event.recipes.create.pressing(t, [t])
    // ]).transitionalItem(t).loops(1).id('kubejs:renewable_lapis_lazuli');
});

// Fluid.of('create_enchantment_industry:experience').withAmount(3);



ItemEvents.rightClicked('minecraft:ender_eye', cancelEnderEye);

function cancelEnderEye(event) {
    if (event.player.stages.has('end_access')) return
    event.player.tell(Text.gold("The item vibrates in your hand but doesn't seem to do anything."));
    event.cancel();
}


// TODO:
// Renewable Lapis Recipe
// deploy ars_nouveau:experience_gem on ae2:certus_quartz
// spout kubejs:chromatic_solution
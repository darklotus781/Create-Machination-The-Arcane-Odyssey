ServerEvents.recipes(event => {
    event.remove({output: 'createaddition:electric_motor'});
    event.remove({output: 'createaddition:alternator'});
    event.remove({output: 'createaddition:bioethanol_bucket'});
    event.remove({output: 'createaddition:seed_oil_bucket'});
    event.remove({input: 'createaddition:bioethanol_bucket'});
    event.remove({input: 'createaddition:seed_oil_bucket'});
    event.remove({id: 'createaddition:mixing/bioethanol'});
    event.remove({id: 'createaddition:compacting/seed_oil'});
    event.replaceInput({id: 'createaddition:crafting/modular_accumulator'}, 'createaddition:capacitor', 'kubejs:electrolytic_capacitor');
    event.replaceInput({mod: 'createaddition'}, 'createaddition:capacitor', 'kubejs:ceramic_capacitor');
    event.replaceInput({mod: 'createaddition'}, 'createaddition:zinc_sheet', '#forge:plates/zinc');
    event.replaceInput({mod: 'createaddition'}, 'createaddition:electrum_sheet', '#forge:plates/electrum');
    event.replaceInput({mod: 'createaddition'}, 'createaddition:electrum_ingot', '#forge:ingots/electrum');
    event.replaceInput({mod: 'createaddition'}, 'createaddition:diamond_grit', '#forge:dusts/diamond');
    event.replaceInput({mod: 'createaddition'}, 'createaddition:brass_rod', '#forge:rods/brass');
    event.replaceInput({mod: 'createaddition'}, 'createaddition:electrum_rod', '#forge:rods/electrum');
    event.replaceInput({mod: 'createaddition'}, 'createaddition:gold_rod', '#forge:rods/gold');
    event.replaceInput({mod: 'createaddition'}, 'createaddition:iron_rod', '#forge:rods/iron');
    event.replaceInput({mod: 'createaddition'}, 'createaddition:copper_rod', '#forge:rods/copper');

    // Electric Motor
    event.recipes.create.mechanical_crafting(Item.of('createaddition:electric_motor'), [
        ' BIB ',
        'BSPSB',
        ' BSB '
    ], {
        S: Item.of('createaddition:copper_spool'),
        B: Ingredient.of('#forge:plates/brass'),
        P: Item.of('kubejs:power_mechanism'),
        I: Ingredient.of('#forge:rods/iron')
    }).id('kubejs:creatadditions_electric_motor');

    // Alternator
    event.recipes.create.mechanical_crafting(Item.of('createaddition:alternator'), [
        ' BIB ',
        'BSPSB',
        ' BSB '
    ], {
        S: Item.of('createaddition:copper_spool'),
        B: Item.of('kubejs:carbon_sheet'),
        P: Item.of('kubejs:power_mechanism'),
        I: Ingredient.of('#forge:rods/iron')
    }).id('kubejs:creatadditions_alternator');
});
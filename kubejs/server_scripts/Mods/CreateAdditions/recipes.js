ServerEvents.recipes(event => {
    event.remove({output: 'createaddition:electric_motor'});
    event.remove({output: 'createaddition:alternator'});
    event.replaceInput({id: 'createaddition:crafting/modular_accumulator'}, 'createaddition:capacitor', 'kubejs:electrolytic_capacitor');
    event.replaceInput({input: 'createaddition:capacitor'}, 'createaddition:capacitor', 'kubejs:ceramic_capacitor');

    // Electric Motor
    event.recipes.create.mechanical_crafting(Item.of('createaddition:electric_motor'), [
        ' BIB ',
        'BSPSB',
        ' BSB '
    ], {
        S: Item.of('createaddition:copper_spool'),
        B: Item.of('create:brass_sheet'),
        P: Item.of('kubejs:power_machine'),
        I: Item.of('createaddition:iron_rod')
    }).id('kubejs:creatadditions_electric_motor');

    // Alternator
    event.recipes.create.mechanical_crafting(Item.of('createaddition:alternator'), [
        ' BIB ',
        'BSPSB',
        ' BSB '
    ], {
        S: Item.of('createaddition:copper_spool'),
        B: Item.of('kubejs:carbon_sheet'),
        P: Item.of('kubejs:power_machine'),
        I: Item.of('createaddition:iron_rod')
    }).id('kubejs:creatadditions_alternator');
});
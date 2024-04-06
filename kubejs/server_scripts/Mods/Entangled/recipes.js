ServerEvents.recipes(event => {
    event.remove({ id: 'entangled:block'});
    event.remove({ id: 'entangled:item'});

    event.shaped(Item.of('entangled:block'), [
        'CCC',
        'CTC',
        'CCC',
    ], {C: Item.of('create:chromatic_compound'), T: Item.of('botania:terrasteel_ingot')})
        .id('kubejs:entangled_block');

     event.shaped(Item.of('entangled:item'), [
          ' PD',
          ' LP',
          'L  ',
     ], {P: Item.of('forbidden_arcanus:eternal_stella'), D: Item.of('botania:dragonstone'), L: Item.of('botania:dreamwood_wand')})
         .id('kubejs:entangled_item');
});
//priority: 0

ServerEvents.recipes(event => {
    event.remove({ id: 'cookingforblockheads:sink' });

    event.shaped(Item.of('cookingforblockheads:sink'), ['KKK','ECE','UAU'], {A: Item.of('thermal:device_water_gen'), C: Item.of('reliquary:emperor_chalice'), E: Item.of('forbidden_arcanus:edelwood_water_bucket').weakNBT(), U: Item.of('ars_elemental:everfull_urn'),K: Item.of('cookingforblockheads:counter')}).id('kubejs:sink');
});
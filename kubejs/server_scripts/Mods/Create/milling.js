ServerEvents.recipes(event => {
    // Create Milling
    event.remove({id: 'create:milling/andesite'});
    event.remove({id: 'create:milling/gravel'});
    event.remove({id: 'create:compat/ae2/milling/certus_quartz'});

    event.recipes.create.milling(Item.of('kubejs:rune_dust', 4), Item.of('forbidden_arcanus:rune'));
    event.recipes.create.milling(Item.of('kubejs:powdered_flint'), Item.of('minecraft:flint'));
    event.recipes.create.milling(Item.of('minecraft:gravel'), Item.of('minecraft:mossy_cobblestone'));
    event.recipes.create.cutting(Item.of('ae2:certus_quartz_dust'), Item.of('ae2:certus_quartz_crystal'));
    event.recipes.create.milling(Item.of('minecraft:sand').withChance(0.33), Item.of('minecraft:gravel'));
    event.recipes.create.milling([Item.of('create:powdered_obsidian'), Item.of('create:powdered_obsidian').withChance(0.50)], Item.of('minecraft:obsidian')).processingTime(200);
    event.recipes.create.milling(Item.of('thermal:blizz_powder', 3), Item.of('thermal:blizz_rod'));
    event.recipes.create.milling(Item.of('thermal:basalz_powder', 3), Item.of('thermal:basalz_rod'));
    event.recipes.create.milling(Item.of('thermal:blitz_powder', 3), Item.of('thermal:blitz_rod'));
    event.recipes.create.milling(Item.of('kubejs:andesite_dust'), Item.of('minecraft:andesite')).id('kubejs:milling/andesite_dust_from_andesite');

    // Ceramic Powder
    event.recipes.create.milling(Item.of('kubejs:ceramic_powder'), Item.of('minecraft:brick')).processingTime(50);


});
ServerEvents.recipes(event => {
    event.remove({ id: 'immersive_aircraft:airship' });
    event.remove({ id: 'immersive_aircraft:cargo_airship' });
    event.remove({ id: 'immersive_aircraft:biplane' });
    event.remove({ id: 'immersive_aircraft:quadrocopter' });
    event.remove({ id: 'immersive_aircraft:rotary_cannon' });
    event.remove({ id: 'immersive_aircraft:heavy_crossbow' });
    event.remove({ id: 'immersive_aircraft:telescope' });
    event.remove({ id: 'immersive_aircraft:bomb_bay' });
    event.remove({ id: 'immersive_aircraft:propeller' });
    event.remove({ id: 'immersive_aircraft:sail' });
    event.remove({ id: 'immersive_aircraft:gyrodyne' });

    event.replaceInput({ mod: 'immersive_aircraft' }, Item.of('minecraft:iron_ingot'), Ingredient.of('#forge:plates/iron'));
    event.replaceInput({ mod: 'immersive_aircraft' }, Item.of('minecraft:copper_ingot'), Ingredient.of('#forge:plates/copper'));
    event.replaceInput({ mod: 'immersive_aircraft' }, Item.of('minecraft:coal'), Item.of('thermal:cured_rubber'));
    event.replaceInput({ mod: 'immersive_aircraft' }, Ingredient.of('#minecraft:logs'), Ingredient.of('#botania:livingwood_logs'));
    event.replaceInput({ mod: 'immersive_aircraft' }, Item.of('minecraft:cobblestone'), Item.of('botania:livingrock'));
    event.replaceInput({ id: 'immersive_aircraft:hull_reinforcement' }, Ingredient.of('#forge:plates/iron'), Item.of('create:sturdy_sheet'));


    event.shaped(Item.of('immersive_aircraft:propeller'), ['II ', 'IPI', ' II'], { I: Ingredient.of('#forge:plates/iron'), P: Item.of('create:propeller') }).id('kubejs:immersive_aircraft/propeller');
    event.shaped(Item.of('immersive_aircraft:telescope'), [' C ', 'CTC', ' C '], { C: Ingredient.of('#forge:plates/copper'), T: Item.of('minecraft:spyglass') }).id('kubejs:immersive_aircraft/telescope');
    event.shaped(Item.of('immersive_aircraft:bomb_bay'), ['SSS', 'STS', 'SSS'], { S: Item.of('create:sturdy_sheet'), T: Item.of('minecraft:tnt') }).id('kubejs:immersive_aircraft/bomb_bay');
    event.shaped(Item.of('immersive_aircraft:sail'), ['WWW', 'WSW', 'WWW'], { S: Item.of('create:sail_frame'), W: Item.of('create:white_sail') }).id('kubejs:immersive_aircraft/sail');
    event.shaped(Item.of('immersive_aircraft:gyrodyne'), ['PIP', 'HIH', 'SBS'], {I: Item.of('create:shaft'), H: Item.of('immersive_aircraft:hull'), S: Item.of('immersive_aircraft:sail'), P: Item.of('immersive_aircraft:propeller'), B: Ingredient.of('#minecraft:boats') }).id('kubejs:immersive_aircraft/gyrodyne');
});
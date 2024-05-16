ServerEvents.recipes(event => {
    event.remove({ id: 'botania:red_string_alt' });

    event.remove({ id: 'botania:flighttiara_0' })
    event.shaped('botania:flight_tiara', [
        'LLL',
        'ERE',
        'FAF'
    ], {
        L: 'botania:life_essence',
        E: 'botania:elementium_ingot',
        R: 'minecraft:elytra',
        F: 'minecraft:feather',
        A: 'botania:ender_air_bottle'
    });

    // result, ingredient, mana, catalyst under the pool
    // event.recipes.botania.mana_infusion("minecraft:acacia_boat", "minecraft:acacia_door", 500, "minecraft:acacia_log")

    event.recipes.botania.orechid('alltheores:lead_ore', 'minecraft:stone', 6500);
    event.recipes.botania.orechid('alltheores:deepslate_lead_ore', 'minecraft:deepslate', 70);
    event.recipes.botania.orechid_ignem('alltheores:nether_lead_ore', 'minecraft:netherrack', 10000);
    event.recipes.botania.orechid('alltheores:nickel_ore', 'minecraft:stone', 6400);
    event.recipes.botania.orechid('alltheores:deepslate_nickel_ore', 'minecraft:deepslate', 69);
    event.recipes.botania.orechid_ignem('alltheores:nether_nickel_ore', 'minecraft:netherrack', 9990);
    event.recipes.botania.orechid('alltheores:silver_ore', 'minecraft:stone', 6300);
    event.recipes.botania.orechid('alltheores:deepslate_silver_ore', 'minecraft:deepslate', 68);
    event.recipes.botania.orechid_ignem('alltheores:nether_silver_ore', 'minecraft:netherrack', 9980);
    event.recipes.botania.orechid('alltheores:tin_ore', 'minecraft:stone', 6200);
    event.recipes.botania.orechid('alltheores:deepslate_tin_ore', 'minecraft:deepslate', 67);
    event.recipes.botania.orechid_ignem('alltheores:nether_tin_ore', 'minecraft:netherrack', 9970);
    event.recipes.botania.orechid('alltheores:zinc_ore', 'minecraft:stone', 6100);
    event.recipes.botania.orechid('alltheores:deepslate_zinc_ore', 'minecraft:deepslate', 66);
    event.recipes.botania.orechid_ignem('alltheores:nether_zinc_ore', 'minecraft:netherrack', 9960);
});
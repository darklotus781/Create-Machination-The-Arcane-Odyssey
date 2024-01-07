ServerEvents.recipes(event => {
    event.remove({id: /thermal:devices\/rock_gen\/rock_gen*/});
    let thermalRockGen = (output, adjacent, below) => {
        event.custom({
            type: 'thermal:rock_gen',
            adjacent: adjacent,
            below: below,
            result: {item: output}
        });
    };

    let blockGenerators = [
        // Output, Adjacent, Below (optional)
        ['minecraft:granite', 'minecraft:water', 'minecraft:polished_granite'],
        ['minecraft:andesite', 'minecraft:water', 'minecraft:polished_andesite'],
        ['minecraft:diorite', 'minecraft:water', 'minecraft:quartz_block'],
        ['minecraft:tuff', 'minecraft:water', 'minecraft:chiseled_stone_bricks'],
        ['minecraft:blackstone', 'minecraft:blue_ice', 'minecraft:chiseled_polished_blackstone'],
        ['minecraft:red_sandstone', 'kubejs:dye_slurry_red', 'minecraft:chiseled_red_sandstone'],
        ['minecraft:sandstone', 'minecraft:water', 'minecraft:chiseled_sandstone'],
        ['minecraft:deepslate', 'minecraft:packed_ice', 'minecraft:chiseled_deepslate'],
        ['minecraft:cobbled_deepslate', 'minecraft:water', 'minecraft:cobbled_deepslate'],
        ['minecraft:stone', 'minecraft:packed_ice', 'minecraft:stone_bricks'],
        ['minecraft:cobblestone', 'minecraft:water', 'minecraft:stone'],
        ['create:limestone', 'create:honey', 'create:limestone'],
        ['create:scoria', 'kubejs:dirty_chroma_slurry', 'create:scoria'],
        ['create:scorchia', 'kubejs:dye_slurry_blue', 'create:scorchia'],
        ['minecraft:basalt', 'minecraft:blue_ice', 'minecraft:soul_soil'],
        ['forbidden_arcanus:darkstone', 'kubejs:aureal_essence', 'forbidden_arcanus:chiseled_arcane_polished_darkstone'],
        ['minecraft:end_stone', 'thermal:ender_fluid', 'minecraft:shulker_box'],
    ];
    blockGenerators.forEach(i => {
        // Output, Adjacent, Below (optional)
        thermalRockGen(i[0], i[1], i[2]);
    });
});
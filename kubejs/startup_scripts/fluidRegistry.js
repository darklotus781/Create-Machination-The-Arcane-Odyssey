StartupEvents.registry('fluid', event => {
    event.create('sky_slurry')
        .thickTexture(0x000033)
        .bucketColor(0x000033)
        .stillTexture('kubejs:block/fluid/still')
        .flowingTexture('kubejs:block/fluid/flowing')
        .displayName('Stabilized Sky Slurry')

    event.create('chromatic_solution')
        .displayName('Chromatic Solution')
        .stillTexture('kubejs:block/fluid/chromatic_fluid_still')
        .flowingTexture('kubejs:block/fluid/chromatic_fluid_flow')
        .luminosity(8);

    event.create('ethylene')
        .displayName('Polyethylene Slurry')
        .thickTexture('#CCCCCC')
        .thinTexture('#CCCCCC');

    event.create('molten_glass')
        .displayName('Molten Glass')
        .stillTexture('kubejs:block/fluid/molten_glass_still')
        .flowingTexture('kubejs:block/fluid/molten_glass_flow')
        .bucketColor('#849b9b');

    event.create('soldermask')
        .thickTexture(0x9e9cb7)
        .thinTexture(0x9e9cb7)
        .displayName('Liquid Solder');

    event.create('temporal_fluid')
        .thickTexture(0x9F2B68)
        .bucketColor(0x9F2B68)
        .displayName('Temporal Fluid')

    event.create('chromatic_waste')
        .thinTexture(0x3A4100)
        .bucketColor(0x3A4100)
        .displayName('Chromatic Waste');

    event.create('invar_slurry')
        .thickTexture(invar)
        .bucketColor(invar)
        .displayName('Invar Slurry');

    event.create('dye_slurry_green')
        .thinTexture(0x03732F)
        .bucketColor(0x03732F)
        .displayName('Green Chromatic Slurry');

    event.create('dye_slurry_blue')
        .thinTexture(0x033f73)
        .bucketColor(0x033f73)
        .displayName('Blue Chromatic Slurry');

    event.create('dye_slurry_red')
        .thinTexture(0x730303)
        .bucketColor(0x730303)
        .displayName('Red Chromatic Slurry');

    event.create('dye_slurry_purple')
        .thinTexture(0x7F00FF)
        .bucketColor(0x7F00FF)
        .displayName('Purple Chromatic Slurry');

    event.create('dye_slurry_magenta')
        .thinTexture(0x9F2B68)
        .bucketColor(0x9F2B68)
        .displayName('Magenta Chromatic Slurry');

    event.create('dye_slurry_pink')
        .thinTexture(0xFF748C)
        .bucketColor(0xFF748C)
        .displayName('Pink Chromatic Slurry');

    event.create('dirty_chroma_slurry')
        .thinTexture(0x4f390c)
        .bucketColor(0x4f390c)
        .displayName('Dirty Chroma Slurry');

    event.create('aureal_essence')
        .thinTexture(0xFFFFFF)
        .bucketColor(0xFFFFFF)
        .displayName('Aureal Essence');

    event.create('refined_oil')
        .thinTexture(0x131313)
        .bucketColor(0x131313)
        .displayName('Refined Oil');

    event.create('quantum_fluid')
        .thinTexture(0x365cff)
        .stillTexture('kubejs:block/fluid/molten_glass_still')
        .flowingTexture('kubejs:block/fluid/molten_glass_flowing')
        .luminosity(8);

    event.create('sulfuric_acid')
        .thinTexture(0xc1b851)
        .bucketColor(0xc1b851)
        .displayName('Sulfuric Acid');

    event.create('dirt_water')
        .thinTexture(0xc18551)
        .bucketColor(0xc18551)
        .displayName('Dirty Water');

    function SourceFluids(Name, id, bucket) {
        event.create(id)
            .displayName(Name)
            .stillTexture('kubejs:block/' + id + "_still")
            .flowingTexture('kubejs:block/' + id + '_flow')
    }

    const Source = [
        ['Sourceberry Juice', 'sourceberry_juice'],
        ['Magebloom Juice', 'magebloom_juice'],
        ['Impure Source', 'impure_source'],
        ['Source', 'source']
    ]

    Source.forEach(element => {
        SourceFluids(element[0], element[1])
    });

    // function juice(id, color) {
    //     event.create(id + "_juice")
    //         .thinTexture(color)
    //         .stillTexture('kubejs:block/fluid/still')
    //         .flowingTexture('kubejs:block/fluid/flowing')
    //         .luminosity(8)
    // }
    //
    // juice("vexing", 0x9F2B68)
    // juice("cascading", 0x000099)
    // juice("flourishing", 0x009933)
    // juice("blazing", 0x800020)
    // juice("flashing", 0xFFBF00)

    event.create('liquid_souls')
        .stillTexture('kubejs:block/fluid/liquid_souls')
        .displayName('Liquefied Souls');
});
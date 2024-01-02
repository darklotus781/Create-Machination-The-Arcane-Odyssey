StartupEvents.registry('fluid', event => {
    event.create('sky_solution')
        .thickTexture(0x000033)
        .bucketColor(0x000033)
        .displayName('Volatile Sky Solution')

    event.create('molten_diamond')
        .thickTexture(0x2edaff)
        .bucketColor(0x2edaff)
        .stillTexture('tconstruct:block/fluid/molten/still')
        .flowingTexture('tconstruct:block/fluid/molten/flowing')
        .displayName('Molten Diamond')

    event.create('molten_gold')
        .thickTexture(0xFFD700)
        .bucketColor(0xFFD700)
        .stillTexture('tconstruct:block/fluid/molten/still')
        .flowingTexture('tconstruct:block/fluid/molten/flowing')
        .displayName('Molten Gold')

    event.create('molten_iron')
        .thickTexture(0xA19D94)
        .bucketColor(0xA19D94)
        .stillTexture('tconstruct:block/fluid/molten/still')
        .flowingTexture('tconstruct:block/fluid/molten/flowing')
        .displayName('Molten Iron')

    event.create('chromatic_solution')
        .displayName('Chromatic Solution')
        .stillTexture('kubejs:block/fluid/chromatic_fluid_still')
        .flowingTexture('kubejs:block/fluid/chromatic_fluid_flow')
        .bucketColor('#84416E');

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

    event.create('superheated_anthracene')
        .thickTexture(0xFFFFF)
        .bucketColor(0xFFFFF)
        .displayName('Superheated Anthracene')

    event.create('dichromic_acid')
        .thinTexture(0x800020)
        .bucketColor(0x800020)
        .displayName('Dichromic Acid')

    event.create('chromatic_waste')
        .thinTexture(0x3A4100)
        .bucketColor(0x3A4100)
        .displayName('Chromatic Waste')

    event.create('invar_slurry')
        .thickTexture(0x333300)
        .bucketColor(0x333300)
        .displayName('Invar Slurry')

    event.create('liquid_anthraquinone')
        .thinTexture(0x9F2B68)
        .bucketColor(0x9F2B68)
        .displayName('Anthraquinone')

    event.create('dye_slurry_green')
        .thinTexture(0x03732F)
        .bucketColor(0x03732F)
        .displayName('Green Chromatic Slurry')

    event.create('dye_slurry_blue')
        .thinTexture(0x033f73)
        .bucketColor(0x033f73)
        .displayName('Blue Chromatic Slurry')

    event.create('dye_slurry_red')
        .thinTexture(0x730303)
        .bucketColor(0x730303)
        .displayName('Red Chromatic Slurry')

    event.create('dirty_chroma_slurry')
        .thinTexture(0x4f390c)
        .bucketColor(0x4f390c)
        .displayName('Dirty Chroma Slurry')

    event.create('aureal_essence')
        .thinTexture(0xFFFFFF)
        .bucketColor(0xFFFFFF)
        .displayName('Aureal Essence')

    event.create('lpg')
        .thinTexture(0xe8d36e)
        .bucketColor(0xe8d36e)
        .displayName('Liquid Propane Gas');

    event.create('kerosene')
        .thinTexture(0x6aedf3)
        .bucketColor(0x6aedf3)
        .displayName('Kerosene');

    event.create('refined_oil')
        .thinTexture(0x131313)
        .bucketColor(0x131313)
        .displayName('Refined Oil');

    event.create('plastic')
        .thinTexture(0xd8d8d5)
        .bucketColor(0xd8d8d5)
        .displayName('Molten Plastic');

    event.create('sulfuric_acid')
        .thinTexture(0xc1b851)
        .bucketColor(0xc1b851)
        .displayName('Sulfuric Acid')

    event.create('dirt_water')
        .thinTexture(0xc18551)
        .bucketColor(0xc18551)
        .displayName('Dirty Water')

    function SourceFluids(Name, id, bucket) {
        event.create(id)
            .displayName(Name)
            .stillTexture('kubejs:block/' + id + "_still")
            .flowingTexture('kubejs:block/' + id + '_flow')
    }

    const Source = [
        ['Sourceberry Juice', 'sourceberry_juice'],
        ['Magebloom Juice', 'magebloom_juice'],
        ['Magebloom Sourceberry Smoothie', 'mageberry_smoothie'],
        ['Impure Source', 'impure_source'],
        ['Source', 'source']
    ]

    Source.forEach(element => {
        SourceFluids(element[0], element[1])
    });

    function juice(id, color) {
        event.create(id + "_juice")
            .thinTexture(color)
            .stillTexture('tconstruct:block/fluid/molten/still')
            .flowingTexture('tconstruct:block/fluid/molten/flowing')
            .luminosity(8)
    }

    juice("vexing", 0x9F2B68)
    juice("cascading", 0x000099)
    juice("flourishing", 0x009933)
    juice("blazing", 0x800020)
    juice("flashing", 0xFFBF00)

    event.create('liquid_resent')
        .stillTexture('kubejs:block/liquid_resent')
        .displayName('Liquidified Resent')
});
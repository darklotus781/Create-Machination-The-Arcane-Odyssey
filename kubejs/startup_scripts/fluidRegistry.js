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

    event.create('superheated_anthracene')
        .thickTexture(0xFFFFF)
        .bucketColor(0xFFFFF)
        .displayName('Superheated Anthracene')

    event.create('refined_oil') //for pneumaticraft fuels
        .thinTexture(0x090909)
        .bucketColor(0x090909)
        .displayName('Refined Oil')

    event.create('dichromic_acid')
        .thinTexture(0x800020)
        .bucketColor(0x800020)
        .displayName('Dichromic Acid')

    event.create('chromatic_waste')
        .thinTexture(0x3A4100)
        .bucketColor(0x3A4100)
        .displayName('Chromatic Waste')

    event.create('sulfuric_acid')
        .thinTexture(0x0AFFFFFF)
        .bucketColor(0x0AFFFFFF)
        .displayName('Sulfuric Acid')

    event.create('invar_slurry')
        .thickTexture(0x333300)
        .bucketColor(0x333300)
        .displayName('Invar Slurry')

    event.create('liquid_anthraquinone')
        .thinTexture(0x9F2B68)
        .bucketColor(0x9F2B68)
        .displayName('Anthraquinone')

    event.create('green_anthraquinone')
        .thinTexture(0x03732F)
        .bucketColor(0x03732F)
        .displayName('Liquid Green Dye')

    // event.create('portal_actuation_fluid')
    //     .thinTexture(0x03732F)
    //     .bucketColor(0x03732F)
    //     .displayName('Portal Actuation Fluid')
    //
    // event.create('god_actuation_fluid')
    //     .thinTexture(0x0AFFFFFF)
    //     .bucketColor(0x0AFFFFFF)
    //     .displayName('God Actuation Fluid')

    event.create('aureal_essence')
        .thinTexture(0xFFFFFF)
        .bucketColor(0xFFFFFF)
        .displayName('Aureal Essence')

    event.create('liquid_egg')
        .thinTexture(0xF0E5C2)
        .bucketColor(0xF0E5C2)

    event.create('liquid_omlett')
        .thinTexture(0xDAD37F)
        .bucketColor(0xDAD37F)


    function SourceFluids(Name, id, bucket) {
        event.create(id)
            .displayName(Name)
            .stillTexture('kubejs:block/' + id + "_still")
            .flowingTexture('kubejs:block/' + id + '_flow')
    }

    const Source = [
        ['Sourceberry Juice', 'sourceberry_juice'],
        ['Magebloom Juice', 'magebloom_juice'],
        ['Magebloom Sourceberry Smoothie', 'magebloom_sourceberry_smoothie'],
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
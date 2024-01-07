let trees = [
    {
        trunk: 'integrateddynamics:menril_log',
        leaf: 'integrateddynamics:menril_leaves',
        sap: 'integrateddynamics:menril_resin',
        rate: 50
    },
    {
        trunk: 'forbidden_arcanus:aurum_log',
        leaf: 'forbidden_arcanus:aurum_leaves',
        sap: 'thermal:resin',
        rate: 60
    },
    {
        trunk: 'ars_nouveau:red_archwood_log',
        leaf: 'ars_nouveau:red_archwood_leaves',
        sap: 'kubejs:blazing_juice',
        rate: 25
    },
    {
        trunk: 'ars_nouveau:green_archwood_log',
        leaf: 'ars_nouveau:green_archwood_leaves',
        sap: 'kubejs:flourishing_juice',
        rate: 25
    },
    {
        trunk: 'ars_nouveau:purple_archwood_log',
        leaf: 'ars_nouveau:purple_archwood_leaves',
        sap: 'kubejs:vexing_juice',
        rate: 25
    },
    {
        trunk: 'ars_nouveau:blue_archwood_log',
        leaf: 'ars_nouveau:blue_archwood_leaves',
        sap: 'kubejs:cascading_juice',
        rate: 25
    },
    {
        trunk: 'ars_elemental:yellow_archwood_log',
        leaf: 'ars_elemental:yellow_archwood_leaves',
        sap: 'kubejs:flashing_juice',
        rate: 25
    },
    {
        trunk: 'minecraft:jungle_log',
        leaf: 'minecraft:jungle_leaves',
        sap: 'thermal:resin',
        rate: 25
    },
    {
        trunk: 'minecraft:spruce_log',
        leaf: 'minecraft:spruce_leaves',
        sap: 'thermal:resin',
        rate: 50
    },
    {
        trunk: 'minecraft:dark_oak_log',
        leaf: 'minecraft:dark_oak_leaves',
        sap: 'thermal:resin',
        rate: 25
    },
    {
        trunk: 'minecraft:oak_log',
        leaf: 'minecraft:oak_leaves',
        sap: 'thermal:resin',
        rate: 10
    },
    {
        trunk: 'minecraft:birch_log',
        leaf: 'minecraft:birch_leaves',
        sap: 'thermal:resin',
        rate: 5
    },
    {
        trunk: 'minecraft:cherry_log',
        leaf: 'minecraft:cherry_leaves',
        sap: 'thermal:resin',
        rate: 25
    }
];

ServerEvents.recipes(event => {
    event.remove({id: 'thermal:devices/tree_extractor/tree_extractor_jungle'});
    event.remove({id: 'thermal:devices/tree_extractor/tree_extractor_spruce'});
    event.remove({id: 'thermal:devices/tree_extractor/tree_extractor_dark_oak'});
    event.remove({id: 'thermal:devices/tree_extractor/tree_extractor_oak'});
    event.remove({id: 'thermal:devices/tree_extractor/tree_extractor_birch'});
    event.remove({id: 'thermal:devices/tree_extractor/tree_extractor_cherry'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_mahogany'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_maple'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_magic'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_orange_autumn'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_redwood'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_willow'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_origin'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_pink_cherry'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_palm'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_yellow_autumn'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_rainbow_birch'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_umbran'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_white_cherry'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_flowering_oak'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_jacaranda'});
    event.remove({id: 'thermal:compat/biomesoplenty/tree_extractor_bop_fir'});

    trees.forEach((tree) => {
        event.recipes.thermal.tree_extractor(Fluid.of(tree.sap).withAmount(tree.rate).toJson(), Block.getBlock(tree.trunk), Block.getBlock(tree.leaf))
            .id('kubejs:tree_extractor_' + tree.trunk.toString().replace(':', '_'));
    });
});

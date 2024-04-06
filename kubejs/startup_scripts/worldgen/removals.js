//priority:0
WorldgenEvents.remove(event => {
    // event.printFeatures("underground_ores");

    event.removeOres(props => {
        props.worldgenLayer = 'underground_ores';
        props.blocks = [
            'create:zinc_ore',
            'create:deepslate_zinc_ore',
            'alltheores:osmium_ore',
            'alltheores:deepslate_osmium_ore',
            'alltheores:other_osmium_ore',
            'alltheores:nether_osmium_ore',
            'alltheores:end_osmium_ore',
            'alltheores:aluminum_ore',
            'alltheores:deepslate_aluminum_ore',
            'alltheores:other_aluminum_ore',
            'alltheores:nether_aluminum_ore',
            'alltheores:end_aluminum_ore',
            'alltheores:platinum_ore',
            'alltheores:deepslate_platinum_ore',
            'alltheores:other_platinum_ore',
            'alltheores:nether_platinum_ore',
            'alltheores:end_platinum_ore',
            'alltheores:uranium_ore',
            'alltheores:deepslate_uranium_ore',
            'alltheores:other_uranium_ore',
            'alltheores:nether_uranium_ore',
            'alltheores:end_uranium_ore',
            'alltheores:iridium_ore',
            'alltheores:deepslate_iridium_ore',
            'alltheores:other_iridium_ore',
            'alltheores:nether_iridium_ore',
            'alltheores:end_iridium_ore',
            'alltheores:ruby_ore',
            'alltheores:deepslate_ruby_ore',
            'alltheores:other_ruby_ore',
            'alltheores:nether_ruby_ore',
            'alltheores:end_ruby_ore',
            'alltheores:peridot_ore',
            'alltheores:deepslate_peridot_ore',
            'alltheores:other_peridot_ore',
            'alltheores:nether_peridot_ore',
            'alltheores:end_peridot_ore',
            'alltheores:sapphire_ore',
            'alltheores:deepslate_sapphire_ore',
            'alltheores:other_sapphire_ore',
            'alltheores:nether_sapphire_ore',
            'alltheores:end_sapphire_ore'
        ];
    });

    event.removeFeatureById('vegetal_decoration', ['forbidden_arcanus:yellow_orchid']);
});
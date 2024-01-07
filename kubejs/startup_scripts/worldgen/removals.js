//priority:0
WorldgenEvents.remove(event => {
    // event.printFeatures("underground_ores");

    event.removeOres(props => {
        props.worldgenLayer = 'underground_ores';
        props.blocks = [
            "create:zinc_ore",
            "create:deepslate_zinc_ore",
        ];
    });

    event.removeFeatureById("vegetal_decoration", ["forbidden_arcanus:yellow_orchid"]);
})
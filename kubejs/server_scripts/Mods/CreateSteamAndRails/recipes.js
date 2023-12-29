ServerEvents.recipes(event => {
    event.remove({output: "railways:track_monorail"})

    // Monorail
    let c = "railways:track_incomplete_monorail"
    event.recipes.createSequencedAssembly([
        '16x railways:track_monorail'
    ], "create:metal_girder", [
        event.recipes.createDeploying(c, [c, "create:metal_bracket"]),
        event.recipes.createDeploying(c, [c, "create:iron_sheet"]),
        event.recipes.createPressing(c, c)
    ]).transitionalItem(c).loops(1)
})
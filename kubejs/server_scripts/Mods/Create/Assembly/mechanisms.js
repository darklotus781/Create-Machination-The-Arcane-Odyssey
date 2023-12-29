ServerEvents.recipes(event => {
    let t;

    // Kinetic Mechanism
    t = "kubejs:incomplete_kinetic_mechanism";
    event.recipes.create.sequenced_assembly([
        "kubejs:kinetic_mechanism",
    ], "integrateddynamics:menril_slab", [
        event.recipes.create.deploying(t, [t, "create:andesite_alloy"]),
        event.recipes.create.deploying(t, [t, "create:andesite_alloy"]),
        event.recipes.create.deploying(t, [t, "#forge:saws"])
    ]).transitionalItem(t).loops(1)

    // Precision Mechanism
    t = "create:incomplete_precision_mechanism"
    event.recipes.create.sequenced_assembly([
        "create:precision_mechanism",
    ], "kubejs:kinetic_mechanism", [
        event.recipes.create.deploying(t, [t, "create:electron_tube"]),
        event.recipes.create.deploying(t, [t, "create:electron_tube"]),
        event.recipes.create.deploying(t, [t, "#forge:screwdrivers"])
    ]).transitionalItem(t).loops(1)

    event.recipes.create.sequenced_assembly([
        "create:precision_mechanism",
    ], "kubejs:kinetic_mechanism", [
        event.recipes.create.deploying(t, [t, "integrateddynamics:variable"]),
        event.recipes.create.deploying(t, [t, "create:electron_tube"]),
        event.recipes.create.deploying(t, [t, "#forge:screwdrivers"])
    ]).transitionalItem(t).loops(1)
    t = "kubejs:incomplete_integrational_mechanism"
    event.recipes.create.sequenced_assembly([
        "kubejs:integrational_mechanism",
    ], "create:precision_mechanism", [
        event.recipes.create.deploying(t, [t, "ars_nouveau:source_gem"]),
        event.recipes.create.deploying(t, [t, "kubejs:sourcegem_fragments"]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1)

    t = "kubejs:incomplete_plastic_mechanism"
    event.recipes.create.sequenced_assembly([
        "kubejs:plastic_mechanism",
    ], "kubejs:radiant_mechanism", [
        event.recipes.create.deploying(t, [t, "pneumaticcraft:plastic"]),
        event.recipes.create.filling(t, [t, Fluid.of("pneumaticcraft:plastic",250)]),
        event.recipes.create.pressing(t, [t])
    ]).transitionalItem(t).loops(1)

    t = "kubejs:incomplete_radiant_mechanism"
    event.recipes.create.sequenced_assembly([
        "kubejs:radiant_mechanism",
    ], "create:precision_mechanism", [
        event.recipes.create.deploying(t, [t, "kubejs:radiant_coil"]),
        event.recipes.create.deploying(t, [t, "kubejs:radiant_coil"]),
        event.recipes.create.deploying(t, [t, "#forge:resonators"])
    ]).transitionalItem(t).loops(1)

})
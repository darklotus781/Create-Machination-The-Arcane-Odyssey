const fluid_properties = {
    copper: { color: copper },
    iron: { color: iron },
    gold: { color: gold },
    diamond: { color: diamond },
    tin: { color: tin },
    silver: { color: silver },
    lead: { color: lead },
    nickel: { color: nickel },
    steel: { color: steel },
    aluminum: { color: aluminum },
    electrum: { color: electrum },
    constantan: { color: constantan },
    osmium: { color: osmium },
    bronze: { color: bronze },
    uranium: { color: uranium },
    zinc: { color: zinc },
    brass: { color: brass },
    enderium: { color: enderium },
    lumium: { color: lumium },
    invar: { color: invar },
    signalum: { color: signalum },
    uranium: { color: uranium }
}

global.fluid_mats = [
    "copper",
    "iron",
    "gold",
    "diamond",
    // "tin",
    // "silver",
    "lead",
    // "nickel",
    // "steel",
    // "aluminum",
    // "electrum",
    // "constantan",
    // "osmium",
    // "bronze",
    // "zinc",
    // "brass",
    // "enderium",
    // "lumium",
    // "invar",
    // "signalum",
    // "uranium"
]

StartupEvents.registry("fluid", event =>{
    for (const mat of global.fluid_mats) {
        event
            .create(`molten_${mat}`)
            .thickTexture(fluid_properties[mat].color)
            .bucketColor(fluid_properties[mat].color)
    }
})
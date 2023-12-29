StartupEvents.registry("block", event => {
    let layer = "cutout"
    event.create('andesite_machine').displayName('Andesite Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('brass_machine').displayName('Brass Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('sealed_machine').displayName('Sealed Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('integrational_machine').displayName('Integrational Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('sturdy_machine').displayName('Sturdy Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('radiant_machine').displayName('Radiant Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('plastic_machine').displayName('Plastic Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('time_machine').displayName('Time Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
    event.create('supercritical_machine').displayName('Supercritical Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)

    event.create('gold_casing')
    event.create('zinc_casing')
    event.create('enderium_casing')
    event.create('supercritical_casing')
})
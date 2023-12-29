//priority: 0

ServerEvents.recipes(event => {
    event.remove({id: 'create:crafting/materials/rose_quartz'})
    event.remove({id: 'create:crushing/diorite'})
    event.remove({id: 'create:compat/ae2/milling/certus_quartz'})
    event.remove({id: 'create:crushing/diorite_recycling'})
    event.remove({id: "create:compacting/andesite_from_flint"})
    event.remove({id: "create:milling/gravel"})
    event.remove({id: "create:filling/redstone"})
    event.remove({id: 'create:sequenced_assembly/track'})
    event.remove({id: 'create:crafting/materials/electron_tube'})
    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
    event.remove({id: /create:crushing\/update_one\/scrap_*/})

    // Blaze Burner from Empty Blaze Burner + Runic Tablet
    event.shapeless('create:blaze_burner',['create:empty_blaze_burner','kubejs:runic_tablet'])

    event.replaceInput({id: "create:crafting/kinetics/elevator_pulley"},'minecraft:dried_kelp_block','thermal:cured_rubber_block')
    event.replaceInput({id: "create:crafting/kinetics/train_door"},"create:brass_sheet","create:sturdy_sheet")
    event.replaceInput({id: "create:crafting/kinetics/train_trapdoor"},"create:brass_sheet","create:sturdy_sheet")

    event.replaceInput({id:'create:mechanical_crafting/wand_of_symmetry'},'minecraft:ender_pearl',"create:refined_radiance")
    event.replaceInput({id:'create:mechanical_crafting/wand_of_symmetry'},'create:precision_mechanism',"kubejs:radiant_mechanism")
})
//priority: 0

ServerEvents.recipes(event => {
    event.remove({id: 'pneumaticcraft:compressed_iron_block_from_ingot'})
    event.shapeless(Item.of('pneumaticcraft:compressed_iron_block'), Item.of('pneumaticcraft:ingot_iron_compressed', 9))
})
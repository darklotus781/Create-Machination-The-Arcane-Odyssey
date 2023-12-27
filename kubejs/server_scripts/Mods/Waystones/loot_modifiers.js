// priority: 0

LootJS.modifiers(event => {
    event.addBlockLootModifier(/waystones\:.*waystone/)
        .removeLoot(/waystones\:.*waystone/)
        .addLoot(Item.of("kubejs:warp_fragments", 2))
})

BlockEvents.rightClicked(event => {
    const { player, hand, item, block } = event;
    const { x, y, z } = block.getPos();

    let egg = item.id;
    let mobMap = {
        "kubejs:cow_spawn_egg": "minecraft:cow",
        "kubejs:chicken_spawn_egg": "minecraft:chicken",
        "kubejs:cat_spawn_egg": "minecraft:cat",
        "kubejs:wolf_spawn_egg": "minecraft:wolf",
        "kubejs:sheep_spawn_egg": "minecraft:sheep",
        "kubejs:pig_spawn_egg": "minecraft:pig",
        "kubejs:villager_spawn_egg": "minecraft:villager",
        "kubejs:rabbit_spawn_egg": "minecraft:rabbit"
    };

    if (hand != 'MAIN_HAND') return;

    if (mobMap.hasOwnProperty(egg)) {
        if (!player.isCreative()) {
            item.count--;
        }
        player.server.runCommand(`/summon ${mobMap[egg]} ${x} ${y+1} ${z}`);
    }
});
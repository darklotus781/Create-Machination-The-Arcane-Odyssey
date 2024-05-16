// https://discord.com/channels/303440391124942858/1216964089411145770

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// function checkBiome(entity, biome_list){
//     let fl = false
//     biome_list.forEach(biome=>{
//         if(entity.level.getBiome(entity.blockPosition()).toString().includes(biome)){
//             fl = true
//         }
//     })
//     return fl
// }

EntityEvents.spawned(event => {
    let entity = event.entity;
    if (event.level.getLunarContext() === null) return;
    const event_string = event.level.getLunarContext().getLunarForecast().getCurrentEventRaw().key().location().toString();
    // console.log(event_string)
    // console.log(entity.type)
    // console.log(getRandomInt(2))
    if (entity.type === "minecraft:skeleton" && (event_string === "enhancedcelestials:blood_moon" || event_string === "enhancedcelestials:super_blood_moon")) {
        if (getRandomInt(2) == 0) {
            event.server.runCommandSilent(`execute in ${entity.level.dimension} positioned ${entity.x} ${entity.y} ${entity.z} run summon minecraft:illusioner`);
        }

        if (getRandomInt(3) == 0) {
            event.server.runCommandSilent(`execute in ${entity.level.dimension} positioned ${entity.x} ${entity.y} ${entity.z} run summon illagerinvasion:firecaller`);
        }

        if (getRandomInt(5) == 0) {
            event.server.runCommandSilent(`execute in ${entity.level.dimension} positioned ${entity.x} ${entity.y} ${entity.z} run summon illagerinvasion:inquisitor`);
        }

        if (getRandomInt(7) == 0) {
            event.server.runCommandSilent(`execute in ${entity.level.dimension} positioned ${entity.x} ${entity.y} ${entity.z} run summon illagerinvasion:necromancer`);
        }

        if (getRandomInt(9) == 0) {
            event.server.runCommandSilent(`execute in ${entity.level.dimension} positioned ${entity.x} ${entity.y} ${entity.z} run summon illagerinvasion:sorcerer`);
        }
    }
})
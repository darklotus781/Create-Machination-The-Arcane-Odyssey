/*
// https://discord.com/channels/303440391124942858/1210103289564241940

// BlockEvents.rightClicked('kubejs:pizza_pie', eatBlock);
// BlockEvents.rightClicked('kubejs:pizza_pie_slice1', eatBlock);
// BlockEvents.rightClicked('kubejs:pizza_pie_slice2', eatBlock);
// BlockEvents.rightClicked('kubejs:pizza_pie_slice3', eatBlock);
//
// function eatBlock(event) {
//     const {block, hand, item, player} = event;
//
//     let edibleBlocks = {
//         'kubejs:pizza_pie': 'kubejs:pizza_pie_slice1',
//         'kubejs:pizza_pie_slice1': 'kubejs:pizza_pie_slice2',
//         'kubejs:pizza_pie_slice2': 'kubejs:pizza_pie_slice3',
//         'kubejs:pizza_pie_slice3': 'minecraft:air'
//     };
//
//     if (player.isCrouching()) return
//     if (hand === 'OFF_HAND') return
//     if (!item.isEmpty()) {
//         player.tell("Your hand isn't empty!")
//         event.cancel(); // cancels placement of blocks or using items on the edible block
//     }
//
//     player.swing()
//
//     if (player.getFoodLevel() < 20 || player.isCreative()) {
//         block.set(edibleBlocks[block])
//         player.setFoodLevel(player.getFoodLevel() + 7)
//         player.setSaturation(player.getSaturation() + 7)
//     }
// }
*/

/*
// https://discord.com/channels/303440391124942858/1210632740416782368

// const dimensionList = ['minecraft:overworld', 'minecraft:the_nether'];

// ItemEvents.rightClicked(event => {
//     if (!event.item.id.includes('exchangers:')) return
//     let dimension = String(event.level.dimension);
//     if (dimensionList.includes(dimension)) {
//         event.player.tell("You can't use this here!");
//         event.cancel()
//     }
// })
*/

/*
https://discord.com/channels/303440391124942858/1210635631458525194

// ItemEvents.rightClicked("minecraft:diamond_hoe", e => {
//     let damage = 10
//     let distance = 10
//     let user = e.player
//     let target = user.rayTrace(distance,true).entity
//     sonicBoom(damage, user, target)
// })
//
// function sonicBoom(damageAmount, user, target) {
//     if(target) {
//         let userPosition = user.getEyePosition()
//         let targetDistance = target.getEyePosition().subtract(userPosition)
//         let targetDistanceNormalized = targetDistance.normalize()
//         for(let i = 1; i < Math.floor(targetDistance.length()) + 2; ++i) {
//             let particlePoint = userPosition.add(targetDistanceNormalized.scale(i))
//             user.level.sendParticles("minecraft:sonic_boom",particlePoint.x(),particlePoint.y(),particlePoint.z(),1,0,0,0,0)
//         }
//         Utils.server.scheduleInTicks(10, callback => {
//             let knockbackResist = 1.0 - target.getAttributeValue("minecraft:generic.knockback_resistance")
//             target.attack(user.level.damageSources().sonicBoom(target),damageAmount)
//             target.addMotion(targetDistanceNormalized.x() * (2.5 * knockbackResist), targetDistanceNormalized.y() * (0.5 * knockbackResist), targetDistanceNormalized.z() * (2.5 * knockbackResist))
//             target.hurtMarked()
//         })
//     }
// }
*/

// // Register default servertimer
// ServerEvents.loaded(event => {
//     const { server, server: { persistentData } } = event;
//     let sData = persistentData;
//     sData.servertimer = 0;
// })

// // Tick Event every 1 minute (configurable)
// ServerEvents.tick(event => {
//     const { server, server: { persistentData } } = event;
//     let sData = persistentData;
//     //sets the tick timer
//     sData.servertimer = (++sData.servertimer) % (20 * 60 * 1); // 1 minutes
//     if (sData.servertimer != 0) return;
//     //code that runs here will run every 1 minute
//     console.log('1 minute');
// });

// ServerEvents.tick((event) => {
//     let pData = event.server.persistentData
//     if (pData.cycle == 0) {
//         pData.c_bregen = pData.bregen
//     }
//     for (let i = Math.ceil(len(pData.c_bregen) / 200 * cycle);
//         i < len(pData.c_bregen) / 200 * (cycle + 1); i++
//     ) {
//         // process element by using pData.c_bregen[i] and removing the time and pos object in pData.bregen and NOT in pData.c_bregen
//         console.log('Working...');
//     }

//     pData.cycle += 1
//     if (pData.cycle >= 200) {
//         pData.cycle = 0 // initialize the pData.cycle as 0 in postinit event or something like that if it doesn't exist already
//     }
// })
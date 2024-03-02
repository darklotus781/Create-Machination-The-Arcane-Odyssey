//priority: 0

EntityEvents.death("player", (event) => {
    const { player } = event;

    player.block.popItem(Item.playerHead(player.username));
});

PlayerEvents.loggedIn(event => {
    let player = event.getEntity();

    if (player.getLevel().getDimension() != 'minecraft:overworld') {
        console.log('Skipping Login Events, player is not in the overworld!');
        return;
    }

    player.getServer().scheduleInTicks(300, () => {

        if (player.persistentData.machinationData == null || player.persistentData.machinationData == {}) {

            console.info("Detected Null or Undefined Machination Data for " + player.username);

            player.persistentData.put("machinationData", NBT.toTagCompound({}));
            /** @type {Internal.CompoundTag} */
            let machinationData = player.persistentData.machinationData // now it recognizes
            machinationData.putBoolean("hasCat", false);
            machinationData.putBoolean("hasAlexBook", false);
            machinationData.putBoolean("hasGoldenChute", false);

            console.info("Generated machinationData for " + player.username + " for the first time.");
        }

        if (playerlevel.dimension == 'aether:the_aether' && false == player.persistentData.machinationData.hasGoldenChute) {
            console.log('Giving Golden Parachute to ' + player.username);
            player.give(Item.of('aether:golden_parachute'));
            player.statusMessage = Text.of("Take this parachute, it could save your life!");
            player.persistentData.machinationData.hasGoldenChute = true;
        }

        if (player.level.dimension == 'minecraft:overworld' && false == player.persistentData.machinationData.hasCat) {
            console.log('Summoning Knuckle for ' + player.username);
            player.level.runCommandSilent('/summon cat ~ ~1 ~ {variant:red,CustomName:"\\"Knuckle\\"",Owner:' + player.username + '}');
            player.persistentData.machinationData.hasCat = true;
        }

        if (player.level.dimension == 'minecraft:the_nether' && false == player.persistentData.machinationData.hasAlexBook) {
            console.log('Giving Alex\'s Mobs Book to ' + player.username);
            player.give(Item.of('alexsmobs:animal_dictionary'));
            player.persistentData.machinationData.hasAlexBook = true;
        }
    })
});

ItemEvents.foodEaten(event => {
    let { player, item: { id } } = event;

    if (id == 'kubejs:magical_rock_candy') {
        if (player.level.dimension != 'aether:the_aether') {
            player.addItemCooldown(id, 20 * 60 * 5); // 5 Minutes
            player.tell(Text.red('It turned into a rock and you choked.'));
            if ((player.abilities.mayfly || player.abilities.flying) && (! player.creative || !player.spectator)) {
                player.tell(Text.gold("Ohh no, you can't fly anymore!"));
                player.potionEffects.add('minecraft:slow_falling', 20 * 60 * 0.5);
            }
            
            event.server.schedule(2*1000, () => {
                player.removeEffect('ars_nouveau:flight');
                player.potionEffects.add('minecraft:slowness', 20 * 60 * 0.5, 4);
                player.potionEffects.add('minecraft:hunger', 20 * 60 * 1, 2);
            });
        } else {
            player.statusMessage = Text.green('You feel light on your feet!');
            player.addItemCooldown(id, 20 * 60 * 1.25); // 1.25 Minutes
        }
    }
});

// PlayerEvents.tick(event => {
//     const { player, player: { age, nbt } } = event;

//     // Fires event once a second
//     if (age % 20 !== 0) return;
//     if (player.creative || player.spectator) return; // Don't process if player is in creative or spectator

//     let curios = nbt.ForgeCaps['curios:inventory'];
//     let curiosCheck = curios.toString().includes('artifacts:bunny_hoppers');

//     if (player.abilities.mayfly) {
//         if (player.level.dimension != 'aether:the_aether') {
//             if (curiosCheck) {
//                 player.tell(Text.yellow('Your bunny hoppers begin to squeak, flight is not allowed in this realm!'));
//                 player.server.runCommandSilent(`fly ${player.username}`);
//             }
//         } else { // Player is in the Aether and Can Fly
//             if (! curiosCheck) { // If the bunny hoppers are not equiped, remove flight.
//                 player.server.runCommandSilent(`fly ${player.username}`);
//             }
//         }
//     }

//     if (!player.abilities.mayfly && player.level.dimension == 'aether:the_aether') {
//         if (curiosCheck) {
//             player.tell(Text.green('Your bunny hoppers begin to squeak, flight is allowed in this realm!'));
//             player.server.runCommandSilent(`fly ${player.username}`);
//         }
//     }
// });

global.dimChangeEvent = event => {
    if (!event.getEntity().player) return;

    try {
        let player = event.getEntity();
        let targetDimension = event.dimension.location();
        let server = player.server;

        if (targetDimension == 'minecraft:the_nether') {
            if (!player.stages.has('nether_access')) {
                player.statusMessage = Text.of("The portal doesn't seem to work...");
                server.schedule(2 * 1000, () => player.statusMessage = Text.of("You have not unlocked the ability to use this portal, please refer to the questbook!"));
                event.setCanceled(true);
            }
        }
        if (targetDimension == 'minecraft:overworld') {
            if (!player.stages.has('overworld_access')) {
                player.statusMessage = Text.of("The portal doesn't seem to work...");
                server.schedule(2 * 1000, () => player.statusMessage = Text.of("You have not unlocked the ability to use this portal, please refer to the questbook!"));
                event.setCanceled(true);
            }
        }
        if (targetDimension == 'minecraft:the_end') {
            if (!player.stages.has('end_access')) {
                player.statusMessage = Text.of("The portal doesn't seem to work...");
                server.schedule(2 * 1000, () => player.statusMessage = Text.of("You have not unlocked the ability to use this portal, please refer to the questbook!"));
                event.setCanceled(true);
            }
        }
        if (targetDimension == 'allthemodium:mining') {
            if (!player.stages.has('mining_access')) {
                player.statusMessage = Text.of("The teleporter doesn't seem to work...");
                server.schedule(2 * 1000, () => player.statusMessage = Text.of("You have not unlocked the ability to use this device, please refer to the questbook!"));
                event.setCanceled(true);
            }
        }
        if (targetDimension == 'allthemodium:the_other') {
            if (!player.stages.has('other_access')) {
                player.statusMessage = Text.of("The teleporter doesn't seem to work...");
                server.schedule(2 * 1000, () => player.statusMessage = Text.of("You have not unlocked the ability to use this device, please refer to the questbook!"));
                event.setCanceled(true);
            }
        }
    } catch (e) {
        console.log(e)
    }
}

// ServerEvents.commandRegistry(e => {
//     const { commands: Commands, arguments: Arguments } = e

//     e.register(Commands.literal('fly')
//         .requires(s => s.hasPermission(2))
//         .executes(c => fly(c.source.player))
//         .then(Commands.argument('target', Arguments.PLAYER.create(e))
//             .executes(c => fly(Arguments.PLAYER.getResult(c, 'target')))
//         )
//     )

//     let fly = (player) => {
//         // console.log(player)
//         if (player.abilities.mayfly) {
//             player.abilities.mayfly = false
//             player.abilities.flying = false
//             player.displayClientMessage(Component.gold('Flying: ').append(Component.red('disabled')), true)
//         } else {
//             player.abilities.mayfly = true
//             if (!player.onGround) player.abilities.flying = true
//             player.displayClientMessage(Component.gold('Flying: ').append(Component.green('enabled')), true)
//         }

//         player.onUpdateAbilities()
//         return 1
//     }
// })


// /** @arg {Internal.CurioChangeEvent} e */
// global.curioChangeEvent = e => {
//     let player = e.entity
//     let server = player.server
//     let curioEquiped = e.to
//     let curioRemoved = e.from

//     if (curioRemoved == "artifacts:bunny_hoppers") {
//         if (player.abilities.mayfly) {
//             server.runCommandSilent(`fly ${player.username}`)
//         }
//     }
//     if (curioEquiped == "artifacts:bunny_hoppers") {
//         if (!player.abilities.mayfly) {
//             server.runCommandSilent(`fly ${player.username}`)
//         }
//     }
// }
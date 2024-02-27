//priority: 0

EntityEvents.death("player", (event) => {
    const { player } = event;

    player.block.popItem(Item.playerHead(player.username));
});

// PlayerEvents.chat(event => {
//     if (event.message.toLowerCase().includes('hi!')) {
//         event.getServer().scheduleInTicks(6, ctx => {
//             event.player.tell(Text.blue('Welcome!'))
//         })
//     }
// })

// console.info('Hello, World! (Loaded server scripts)')

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

        if (player.getLevel().getDimension() == 'aether:the_aether' && false == player.persistentData.machinationData.hasGoldenChute) {
            console.log('Giving Golden Parachute to ' + player.username);
            player.give(Item.of('aether:golden_parachute'));
            player.statusMessage = Text.of("Take this parachute, it could save your life!");
            player.persistentData.machinationData.hasGoldenChute = true;
        }

        if (player.getLevel().getDimension() == 'minecraft:overworld' && false == player.persistentData.machinationData.hasCat) {
            console.log('Summoning Knuckle for ' + player.username);
            player.getLevel().runCommandSilent('/summon cat ~ ~1 ~ {variant:red,CustomName:"\\"Knuckle\\"",Owner:' + player.username + '}');
            player.persistentData.machinationData.hasCat = true;
        }

        if (player.getLevel().getDimension() == 'minecraft:the_nether' && false == player.persistentData.machinationData.hasAlexBook) {
            console.log('Giving Alex\'s Mobs Book to ' + player.username);
            player.give(Item.of('alexsmobs:animal_dictionary'));
            player.persistentData.machinationData.hasAlexBook = true;
        }
    })
});

global.dimChangeEvent = event => {
    if (!event.getEntity().player) return;

    try {
        let player = event.getEntity();
        let targetDimension = event.dimension.location();
        let server = player.getServer();

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

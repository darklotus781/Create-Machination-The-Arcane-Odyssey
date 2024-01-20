//priority: 0

PlayerEvents.loggedIn(event => {

    if (event.entity.getLevel().getDimension() != 'minecraft:overworld')
    {
        console.log('Skipping Login Events, player is not in the overworld!');
        return;
    }

    event.getEntity().getServer().scheduleInTicks(2000, () => {

        if (event.getEntity().persistentData.machinationData == null || event.getEntity().persistentData.machinationData == {}) {

            console.info("Detected Null or Undefined Machination Data for " + event.getEntity().username);

            event.getEntity().persistentData.put("machinationData", NBT.toTagCompound({}));
            /** @type {Internal.CompoundTag} */
            let machinationData = event.getEntity().persistentData.machinationData // now it recognizes
            machinationData.putBoolean("hasCat", false);

            console.info("Generated machinationData for " + event.getEntity().username + " for the first time.");
        }

        if (false == event.getEntity().persistentData.machinationData.hasCat) {
            console.log('Summoning Knuckle for ' + event.getEntity().username);
            event.getEntity().getLevel().runCommandSilent('/summon cat ~ ~1 ~ {variant:red,CustomName:"\\"Knuckle\\"",Owner:' + event.getEntity().username + '}');
            event.getEntity().persistentData.machinationData.hasCat = true;
        }
    })
})

global.dimChangeEvent = event => {
    try {
        let player = event.getEntity();
        let targetDimension = event.getDimension().toString();
        let server = event.getEntity().getServer();

        if (targetDimension == 'ResourceKey[minecraft:dimension / minecraft:the_nether]') {
            if (!event.getEntity().stages.has('nether_access')) {
                player.statusMessage = Text.of("The portal doesn't seem to work...");
                server.schedule(2*1000, ()=> player.statusMessage = Text.of("You have not unlocked the ability to use this portal, please refer to the questbook!"));
                return event.setCanceled(true);
            } else {
                event.setCanceled(false);
            }
        }
        if (targetDimension == 'ResourceKey[minecraft:dimension / minecraft:overworld]') {
            if (!event.getEntity().stages.has('overworld_access')) {
                player.statusMessage = Text.of("The portal doesn't seem to work...");
                server.schedule(2*1000, ()=> player.statusMessage = Text.of("You have not unlocked the ability to use this portal, please refer to the questbook!"));
                return event.setCanceled(true);
            } else {
                event.setCanceled(false);
            }
        }
        if (targetDimension == 'ResourceKey[minecraft:dimension / minecraft:the_end]') {
            if (!event.getEntity().stages.has('end_access')) {
                player.statusMessage = Text.of("The portal doesn't seem to work...");
                server.schedule(2 * 1000, () => player.statusMessage = Text.of("You have not unlocked the ability to use this portal, please refer to the questbook!"));
                return event.setCanceled(true);
            } else {
                event.setCanceled(false);
            }
        }
        if (targetDimension == 'ResourceKey[minecraft:dimension / allthemodium:mining]') {
            if (!event.getEntity().stages.has('mining_access')) {
                player.statusMessage = Text.of("The teleporter doesn't seem to work...");
                server.schedule(2 * 1000, () => player.statusMessage = Text.of("You have not unlocked the ability to use this device, please refer to the questbook!"));
                return event.setCanceled(true);
            } else {
                event.setCanceled(false);
            }
        }
        if (targetDimension == 'ResourceKey[minecraft:dimension / allthemodium:the_other]') {
            if (!event.getEntity().stages.has('other_access')) {
                player.statusMessage = Text.of("The teleporter doesn't seem to work...");
                server.schedule(2 * 1000, () => player.statusMessage = Text.of("You have not unlocked the ability to use this device, please refer to the questbook!"));
                return event.setCanceled(true);
            } else {
                event.setCanceled(false);
            }
        }
    } catch (e) {
        console.log(e)
    }
}



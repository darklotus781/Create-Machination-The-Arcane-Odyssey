Platform.mods.kubejs.name = 'Machination';
Platform.mods.lychee.name = 'Machination Tweaks';

ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", (event) => {
    global.dimChangeEvent(event);
});

ForgeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent", event => {
    let {level, pos} = event;
    event.setCanceled(true);
    let server = level.server;
    let player = level.getNearestPlayer(pos.x, pos.y, pos.z, 10, null);
    if (!player) return;
    player.statusMessage = Text.of("The portal doesn't seem to want to light...");
    server.schedule(2*1000, ()=> player.statusMessage = Text.of("You need the \"Nether Portal Frame\" Item to spawn a Nether Portal!"));
});

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerRespawnEvent', (event) => {
    global.PlayerRespawnEvent(event);
});

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerSetSpawnEvent', (event) => {
    global.PlayerSetSpawnEvent(event);
});

// ForgeEvents.onEvent("top.theillusivec4.curios.api.event.CurioChangeEvent", (event) => {
//     global.curioChangeEvent(event)
// });
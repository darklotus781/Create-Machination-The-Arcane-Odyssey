ForgeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent", e => {
    let {level, pos} = e
    e.setCanceled(true)
    let server = level.server
    let player = level.getNearestPlayer(pos.x, pos.y, pos.z, 10, null)
    if (!player) return
    player.statusMessage = Text.of("The portal doesn't seem to want to light...")
    server.schedule(2*1000, ()=> player.statusMessage = Text.of("You need the \"Nether Portal Frame\" Item to spawn a Nether Portal!"))
})

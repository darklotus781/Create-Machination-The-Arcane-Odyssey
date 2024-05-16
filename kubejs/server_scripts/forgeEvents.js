global.PlayerRespawnEvent = (event) => {
    const player = event.entity;
    const server = player.server;

    const data = server.getPersistentData();

    const id = player.getGameProfile().getId();
    const playerData = data.players[id];

    if (playerData) {
        if (playerData.spawnPoint) {
            const spawnPoint = playerData.spawnPoint;
            const level = server.getLevel(spawnPoint.dimension);
            const block = level.getBlock(spawnPoint.x, spawnPoint.y, spawnPoint.z);
            if (block.getId() === 'minecraft:respawn_anchor') {
                const charges = block.properties.charges;
                if (parseInt(charges) > 0) {
                    return undefined;
                }
            } else if (block.getId() === 'enigmaticlegacy:end_anchor') {
                const charges = block.properties.charges;
                if (parseInt(charges) > 0) {
                    return undefined;
                }
            } else {
                if (`${block.getId()}`.match(/minecraft:.*_bed/)) {
                    return undefined;
                }
                
                if (block.getId() === 'aether:skyroot_bed') {
                    return undefined;
                }
            }
        }
    }

    if (data.aetherSpawn) {
        const { x, y, z } = data.aetherSpawn;
        player.teleportTo('aether:the_aether', x, y, z, 0, 0)
    }

};

global.PlayerSetSpawnEvent = (event) => {
    const player = event.entity;
    const server = player.server;

    const id = player.getGameProfile().getId();

    const spawn = event.getNewSpawn();
    server.persistentData.players[id] = {
        loaded: true,
        spawnPoint: {
            dimension: `${player.level.dimension}`,
            x: spawn.x,
            y: spawn.y,
            z: spawn.z
        }
    };
};
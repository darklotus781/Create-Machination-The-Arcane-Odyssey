const Constants = {
    AirBlocks: ['minecraft:air', 'minecraft:cave_air', 'minecraft:void_air', 'aether:cold_aercloud', 'aether:blue_aercloud', 'aether:golden_aercloud'],
    CoordinateRange: {
        x: [-500, 500],
        y: [48, 128],
        z: [-500, 500]
    }
}

const randomNumber = (min, max) => {
    return Utils.random.nextInt(min, max + 1);
}

const randomCoordinates = () => {
    const range = Constants.CoordinateRange;
    return {
        x: randomNumber(range.x[0], range.x[1]),
        y: randomNumber(range.y[0], range.y[1]),
        z: randomNumber(range.z[0], range.z[1])
    }
}

const generateAetherSpawn = (level) => {

    let tries = 0;
    const verifyCoordinates = (coordinates) => {
        tries++;
        const block = level.getBlock(coordinates.x, coordinates.y, coordinates.z);
        if (!Constants.AirBlocks.includes(block.id)) {
            return coordinates; // Found solid block-- use this to build up to surface.
        }
        return verifyCoordinates(randomCoordinates());
    };

    const coordinates = verifyCoordinates(randomCoordinates());

    const verifyLanding = (coordinates) => {
        const block = level.getBlock(coordinates.x, coordinates.y, coordinates.z);
        if (Constants.AirBlocks.includes(block.id)) {
            const canSeeSky = level.canSeeSky(block.getPos());
            if (canSeeSky) {
                return coordinates;
            } else {
                return verifyLanding(verifyCoordinates(randomCoordinates()));
            }
        } else {
            return verifyLanding({ x: coordinates.x, y: coordinates.y + 1, z: coordinates.z })
        }
    };

    const landingCoordinates = verifyLanding({ x: coordinates.x, y: coordinates.y + 1, z: coordinates.z });
    return landingCoordinates;

};

PlayerEvents.loggedIn((event) => {

    let player = event.player;
    let server = event.server;

    let serverData = server.getPersistentData();

    if (!serverData.players) server.persistentData.players = {};

    const level = event.server.getLevel('aether:the_aether');
    if (!serverData.aetherSpawn) {
        const coordinates = generateAetherSpawn(level);
        server.persistentData.aetherSpawn = {
            x: coordinates.x,
            y: coordinates.y,
            z: coordinates.z
        };
    }

    const id = player.getGameProfile().getId();
    if (!serverData.players.contains(id)) {
        // New user to the server.

        let { x, y, z } = server.getPersistentData().aetherSpawn;
        player.teleportTo('aether:the_aether', x, y, z, 0, 0);

        server.persistentData.players.put(id, { loaded: true })
    }

});
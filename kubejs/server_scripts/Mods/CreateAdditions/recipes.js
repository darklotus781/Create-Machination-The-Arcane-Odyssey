//priority: 0

ServerEvents.recipes(event => {
    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:kerosene",
            "amount": 1000
        },
        "burnTime": 15000,
        "superheated": true,
        "conditions": [
            {
                "fluidTag": "forge:kerosene",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })
    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluidTag": "forge:lpg",
            "amount": 1000
        },
        "burnTime": 15000,
        "superheated": true,
        "conditions": [
            {
                "fluidTag": "forge:lpg",
                "type": "createaddition:has_fluid_tag"
            }
        ]
    })
})
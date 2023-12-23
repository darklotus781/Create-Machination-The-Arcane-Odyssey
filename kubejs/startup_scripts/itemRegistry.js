ItemEvents.toolTierRegistry(event => {
    event.add('tool', tier => {
        tier.uses = 250
        tier.repairIngredient = '#forge:ingots/iron'
    })

    event.add('lootbag', tier =>{
        tier.enchantmentValue = 15
        tier.speed = 0.0
        //tier.uses = -1  //makes them not work in the enchanting table
        tier.attackDamageBonus = 0
    })
});

StartupEvents.registry('item', event => {

    let mechanism = (name, rarity, add_glow) => {
        let id = name.toLowerCase()
        event.create(id + '_mechanism')
            .texture("kubejs:item/" + id + "_mechanism")
            .displayName(name + ' Mechanism')
            .rarity(rarity ? rarity : RARITY_COMMON)
            .glow(add_glow ? add_glow : false);
    }

    let incomplete_mechanism = (name, rarity, add_glow) => {
        let id = name.toLowerCase()

        event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly')
            .texture("kubejs:item/incomplete_" + id + "_mechanism")
            .displayName('Incomplete ' + name + ' Mechanism')
            .rarity(rarity ? rarity : RARITY_COMMON)
            .glow(add_glow ? add_glow : false)
    }

    let lootbag = (name, display, rarity, add_glow) => {
        let id = name.toLowerCase()
        event.create('lootbag_' + id, "pickaxe")
            .texture("kubejs:item/lootbag_" + id)
            .displayName(display)
            .rarity(rarity ? rarity : RARITY_COMMON)
            .unstackable()
            .glow(add_glow ? add_glow : false)
            .tier('lootbag')
    }

    mechanism('Kinetic')
    incomplete_mechanism('Kinetic')
    mechanism('Sealed')
    incomplete_mechanism('Sealed')
    mechanism('Sturdy')
    incomplete_mechanism('Sturdy')
    mechanism('Plastic', RARITY_UNCOMMON)
    incomplete_mechanism('Plastic')
    mechanism('Integrational', RARITY_UNCOMMON)
    incomplete_mechanism('Integrational')
    mechanism('Time', RARITY_RARE)
    mechanism('Supercritical', RARITY_RARE)
    mechanism('Quantum', RARITY_EPIC, true);
    incomplete_mechanism('Quantum');
    mechanism('Radiant', RARITY_RARE, true)
    incomplete_mechanism('Radiant')
    event.create('makeshift_kinetic_mechanism').tooltip("The Mechanism isn't sturdy enough to support further tiers of mechanisms.")

    lootbag('create_andesite', 'Engineer\'s Basic Toolkit', RARITY_UNCOMMON);
    lootbag('create_brass', 'Engineer\'s Brass Toolkit', RARITY_RARE);
    lootbag('create_radiant', 'Engineer\'s Radiant Toolkit', RARITY_RARE, true);
    lootbag('plastic', 'Engineer\'s Plastic Toolkit', RARITY_EPIC);
    lootbag('integrational', 'Engineer\'s Integrational Toolkit', RARITY_EPIC, true);
    lootbag('magic_1', 'Sorcerer\'s Satchel', RARITY_UNCOMMON);
    lootbag('magic_2', 'Wizard\'s Rucksack', RARITY_RARE);
    lootbag('magic_3', 'Mage\'s Pack', RARITY_EPIC);
    lootbag('poggers', 'Reward of Patience', RARITY_EPIC);

    event.create('cm-tao:leather_pocket').texture("kubejs:item/leather_pocket").displayName('Leather Pocket');

    event.create('runic_tablet').displayName("Runic Tablet").tooltip("What mysteries may this behold?")
    event.create('warp_fragments').rarity(RARITY_RARE).glow(true)
    event.create('nether_star_dust').texture("kubejs:item/nether_star_crushed").displayName('Nether Star Dust').rarity(RARITY_UNCOMMON)
    event.create('nether_star_plate').texture("kubejs:item/nether_star_plate").displayName('Nether Star Plate').rarity(RARITY_RARE).glow(true)


});
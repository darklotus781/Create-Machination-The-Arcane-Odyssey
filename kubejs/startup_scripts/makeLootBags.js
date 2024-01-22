global.pouch_name = ['Arcane Bag', 'Andesite Bag', 'Brass Bag', 'Radiant Bag', 'Dynamic Bag', 'Food Bag', 'Farm Bag']     // Bag name
global.pouch_color = ['purple', 'brown', 'yellow', 'white', 'black', 'light_blue', 'lime']                                // Bag color
global.rarity = ['common', 'rare', 'epic']                                                                                // All rarity for bags
global.bag_name = ['arcane', 'andesite', 'brass', 'radiant', 'dynamic', 'food', 'farm']                                   // bag type

//Color for description in bags
global.rarity_color = {
    'common': 'white',
    'rare': 'aqua',
    'epic': 'lightPurple',
}

//Texture for bags
global.pouch_color_map = {
    'red': 'kubejs:item/lootbags/tool_pouch_red',
    'orange': 'kubejs:item/lootbags/tool_pouch_orange',
    'yellow': 'kubejs:item/lootbags/tool_pouch_yellow',
    'green': 'kubejs:item/lootbags/tool_pouch_green',
    'light_blue': 'kubejs:item/lootbags/tool_pouch_light_blue',
    'blue': 'kubejs:item/lootbags/tool_pouch_blue',
    'purple': 'kubejs:item/lootbags/tool_pouch_purple',
    'black': 'kubejs:item/lootbags/tool_pouch_black',
    'white': 'kubejs:item/lootbags/tool_pouch_white',
    'brown': 'kubejs:item/lootbags/tool_pouch_brown',
    'cyan': 'kubejs:item/lootbags/tool_pouch_cyan',
    'gray': 'kubejs:item/lootbags/tool_pouch_gray',
    'light_gray': 'kubejs:item/lootbags/tool_pouch_light_gray',
    'lime': 'kubejs:item/lootbags/tool_pouch_lime',
    'magenta': 'kubejs:item/lootbags/tool_pouch_magenta',
    'pink': 'kubejs:item/lootbags/tool_pouch_pink',
}

StartupEvents.registry('item', e => {
    function make_bag(bagName, displayName, texture, rarity, glow){
            e.create(bagName)
            .displayName(displayName)
            .texture(texture)
            .rarity(rarity)
            .glow(glow)
        }   
          
    for (let i = 0; i < global.pouch_name.length; i++) {
        make_bag(`${global.bag_name[i]}_bag_common`, global.pouch_name[i] + ' Common', global.pouch_color_map[global.pouch_color[i]], global.rarity[0], false)
        make_bag(`${global.bag_name[i]}_bag_rare`, global.pouch_name[i] + ' Rare', global.pouch_color_map[global.pouch_color[i]], global.rarity[1], false)
        make_bag(`${global.bag_name[i]}_bag_epic`, global.pouch_name[i] + ' Epic', global.pouch_color_map[global.pouch_color[i]], global.rarity[2], true)
    }
})
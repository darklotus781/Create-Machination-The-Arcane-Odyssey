//priority: 0
JEIEvents.hideItems(event => {
    event.hide(Item.of('alltheores:copper_ore_hammer').weakNBT());
    event.hide(Item.of('alltheores:iron_ore_hammer').weakNBT());
    event.hide(Item.of('alltheores:bronze_ore_hammer').weakNBT());
    event.hide(Item.of('alltheores:invar_ore_hammer').weakNBT());
    event.hide(Item.of('alltheores:platinum_ore_hammer').weakNBT());
});
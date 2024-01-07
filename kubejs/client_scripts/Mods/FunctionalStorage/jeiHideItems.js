//priority: 0
JEIEvents.hideItems(event => {
    event.hide('functionalstorage:ender_drawer'); // Ender Drawer is very cheaty...
    event.hide(/^functionalstorage:fluid/); // Fluid Drawers are also cheatey, use fluid cells and tanks
});
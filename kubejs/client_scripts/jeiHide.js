JEIEvents.hideItems(event => {
    event.hide(/kubejs\:incomplete_*/); // Hide Incomplete Items
    event.hide('kubejs:invar_compound');
    event.hide(/kubejs\:.*_bag_.*/); // Hide Lootbags
    event.hide(/^((?!kubejs).)*\:*(spawn_egg|se)/); // Hide all spawn eggs except custom
});
JEIEvents.hideItems(event => {
    event.hide(/kubejs\:incomplete_*/); // Hide Incomplete Items
    event.hide('kubejs:invar_compound');
    // Hide Lootbags
    event.hide(/kubejs\:arcane_bag_*/);
    event.hide(/kubejs\:andesite_bag_*/);
    event.hide(/kubejs\:brass_bag_*/);
    event.hide(/kubejs\:dynamic_bag_*/);
    event.hide(/kubejs\:farm_bag_*/);
    event.hide(/kubejs\:food_bag_*/);
    event.hide(/kubejs\:radiant_bag_*/);
});
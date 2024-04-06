//priority: 0
JEIEvents.hideItems(event => {
    event.hide(/allthemodium\:dirty_(allthemodium|vibranium|unobtainium)_dust/);
    event.hide(/allthemodium\:unobtainium_allthemodium_alloy_.*/);
    event.hide(/allthemodium\:vibranium_allthemodium_alloy_.*/);
    event.hide(/allthemodium\:unobtainium_vibranium_alloy_.*/);
    event.hide(/allthemodium\:alloy_(sword|axe|pick|shovel|paxel)/);
    event.hide(/allthemodium\:(allthemodium|vibranium|unobtainium)_(clump|crystal|dust|gear|paxel|shard)/);
});

JEIEvents.hideFluids(event => {
    event.hide('allthemodium:soul_lava');
    event.hide(/allthemodium\:molten_(allthemodium|vibranium|unobtainium)/);
});
//priority: 0
JEIEvents.hideItems(event => {
    event.hide(/waystones\:.*sharestone/);
    event.hide(/waystone\:.*scroll/);
    event.hide('waystones:warp_scroll');
    event.hide('waystones:return_scroll');
    event.hide('waystones:bound_scroll');
    event.hide('waystones:portstone');
    event.hide('waystones:warp_dust');
});
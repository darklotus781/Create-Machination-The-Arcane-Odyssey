//priority: 0
JEIEvents.hideItems(event => {
    event.hide(/waystones\:.*sharestone/)
    event.hide(/waystone\:.*scroll/)
    event.hide("waystones:warp_plate")
})
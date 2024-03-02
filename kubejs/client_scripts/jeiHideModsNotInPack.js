// Hide items not in the pack for a reason.
JEIEvents.hideItems(event => {
    event.hide(/enderchests\:*/);
    event.hide(/enderstorage\:*/);
    event.hide(/endertanks\:*/);
});
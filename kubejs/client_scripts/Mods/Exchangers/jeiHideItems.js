//priority: 0
JEIEvents.hideItems(event => {
    event.hide(/exchangers\:special.*/);
    event.hide(/exchangers\:thermal.*/);
    event.hide('exchangers:tuberous_exchanger');
    event.hide('exchangers:bee_exchanger');
    event.hide('exchangers:creative_exchanger');
    event.hide('exchangers:leadstone_exchanger');
    event.hide('exchangers:hardened_exchanger');
    event.hide('exchangers:reinforced_exchanger');
    event.hide('exchangers:signalum_exchanger');
    event.hide('exchangers:resonant_exchanger');
});

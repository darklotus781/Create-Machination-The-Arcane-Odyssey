//priority: 0
JEIEvents.hideItems(event => {
    event.hide('sophisticatedstorage:pump_upgrade');
    event.hide('sophisticatedstorage:advanced_pump_upgrade');
    event.hide('sophisticatedstorage:xp_pump_upgrade');
    event.hide(/sophisticatedstorage\:tier_upgrade_(copper|iron|gold|diamond)_barrel.*/);
});
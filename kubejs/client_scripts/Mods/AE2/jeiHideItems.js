//priority: 0
JEIEvents.hideItems(event => {
    event.hide(Item.of('ae2:facade').weakNBT()); // Handled via config, added here Just in case...
    event.hide(Item.of('ae2:silicon_press'));
    event.hide(Item.of('ae2:calculation_processor_press'));
    event.hide(Item.of('ae2:engineering_processor_press'));
    event.hide(Item.of('ae2:logic_processor_press'));
    event.hide(Item.of('ae2:charger'));
    event.hide(Item.of('ae2:inscriber'));
    event.hide(Item.of('ae2:not_so_mysterious_cube'));
});
//priority: 0
JEIEvents.hideItems(event => {
    event.hide('ae2:facade'); // Handled via config, added here Just in case...
    event.hide('ae2:silicon_press');
    event.hide('ae2:calculation_processor_press');
    event.hide('ae2:engineering_processor_press');
    event.hide('ae2:logic_processor_press');
    event.hide('ae2:charger');
    event.hide('ae2:inscriber');
    event.hide('ae2:not_so_mysterious_cube');
});
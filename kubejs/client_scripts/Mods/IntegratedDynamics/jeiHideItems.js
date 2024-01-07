//priority: 0
JEIEvents.hideItems(event => {
    event.hide('integrateddynamics:logic_director');
    event.hide(/integrateddynamics\:part.*porter_world/);
    event.hide(/integratedtunnels\:part.*porter_world/);
    event.hide('integratedtunnels:part_player_simulator');
    event.hide('integrateddynamics:part_connector_omni_directional');
    event.hide('integratedterminals:terminal_storage_portable');
    event.hide('integratedcrafting:part_interface_crafting');
    event.hide('integratedcrafting:part_crafting_writer');
    event.hide('integrateddynamics:coal_generator');
});
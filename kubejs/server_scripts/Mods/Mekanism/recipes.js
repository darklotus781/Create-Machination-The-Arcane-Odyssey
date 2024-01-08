ServerEvents.recipes(event => {
    event.remove({id: 'createaddition:compat/mekanism/rose_quartz_metallurgic_infusing'});
    event.remove({id: 'createaddition:compat/mekanism/rose_quartz_enriching'});
    event.remove({id: 'createaddition:compat/mekanism/rose_quartz_metallurgic_infusing'});

    event.remove({id: 'mekanism:cardboard_box'}); // Will add a recipe for this later!
});
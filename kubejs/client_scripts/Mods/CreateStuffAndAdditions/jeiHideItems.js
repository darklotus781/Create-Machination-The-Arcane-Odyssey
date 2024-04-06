JEIEvents.hideItems(event => {
    event.hide('create_sa:copper_magnet');
    event.hide('create_sa:block_picker');
    event.hide('create_sa:flamethrower');
    event.hide('create_sa:brass_drone_item');
    event.hide('create_sa:drone_controller');
    event.hide('create_sa:zinc_handle');
    event.hide('create_sa:vault_component');
    event.hide('create_sa:brass_cube');
    event.hide('create_sa:andesite_jetpack_chestplate');
    event.hide('create_sa:copper_jetpack_chestplate');
    event.hide('create_sa:heat_engine');
    event.hide('create_sa:hydraulic_engine');
    event.hide(/create_sa\:.*_exoskeleton_chestplate/);
    event.hide(/create_sa\:slime.*/);
    event.hide(/create_sa\:.*experience.*/);
    event.hide(/create_sa\:.*blazing.*/);
    event.hide(/create_sa\:.*rose_quartz.*/);
    event.hide(/create_sa\:.*brass_(helmet|chestplate|leggings|boots|pickaxe|axe|shovel|hoe|sword).*/);
    event.hide(/create_sa\:.*copper_(helmet|chestplate|leggings|boots|pickaxe|axe|shovel|hoe|sword).*/);
    event.hide(/create_sa\:.*zinc_(helmet|chestplate|leggings|boots|pickaxe|axe|shovel|hoe|sword).*/);
    // event.hide('minecraft:enchanted_book').enchant('create_sa:gravity_gun', 1));  // Would love to hide these books!
    // event.hide('minecraft:enchanted_book').enchant('create_sa:hellfire', 1));  // Would love to hide these books!
});
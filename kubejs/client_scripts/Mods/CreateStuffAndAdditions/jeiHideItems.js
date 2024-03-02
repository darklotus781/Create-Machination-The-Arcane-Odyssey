JEIEvents.hideItems(event => {
    event.hide(Item.of('create_sa:copper_magnet'));
    event.hide(Item.of('create_sa:block_picker'));
    event.hide(Item.of('create_sa:flamethrower'));
    event.hide(Item.of('create_sa:brass_drone_item'));
    event.hide(Item.of('create_sa:drone_controller'));
    event.hide(Item.of('create_sa:zinc_handle'));
    event.hide(Item.of('create_sa:vault_component'));
    event.hide(Item.of('create_sa:brass_cube'));
    event.hide(Item.of('create_sa:andesite_jetpack_chestplate'));
    event.hide(Item.of('create_sa:copper_jetpack_chestplate'));
    event.hide(Item.of('create_sa:heat_engine'));
    event.hide(Item.of('create_sa:hydraulic_engine'));
    event.hide(/create_sa\:.*_exoskeleton_chestplate/);
    event.hide(/create_sa\:slime.*/);
    event.hide(/create_sa\:.*experience.*/);
    event.hide(/create_sa\:.*blazing.*/);
    event.hide(/create_sa\:.*rose_quartz.*/);
    event.hide(/create_sa\:.*brass_(helmet|chestplate|leggings|boots|pickaxe|axe|shovel|hoe|sword).*/);
    event.hide(/create_sa\:.*copper_(helmet|chestplate|leggings|boots|pickaxe|axe|shovel|hoe|sword).*/);
    event.hide(/create_sa\:.*zinc_(helmet|chestplate|leggings|boots|pickaxe|axe|shovel|hoe|sword).*/);
    // event.hide(Item.of('minecraft:enchanted_book').enchant('create_sa:gravity_gun', 1));  // Would love to hide these books!
    // event.hide(Item.of('minecraft:enchanted_book').enchant('create_sa:hellfire', 1));  // Would love to hide these books!
});
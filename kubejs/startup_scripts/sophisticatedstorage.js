const $ShapedRecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapedRecipeSchema')
StartupEvents.recipeSchemaRegistry(event => {
    event.register('sophisticatedstorage:storage_tier_upgrade', $ShapedRecipeSchema.SCHEMA);
    event.register('sophisticatedcore:upgrade_next_tier', $ShapedRecipeSchema.SCHEMA);
})
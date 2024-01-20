ServerEvents.recipes(event => {
    // These recipes are broken and cause errors in the logs, just removed them to avoid confusion.
    event.remove({id: 'create:cutting/compat/biomesoplenty/cherry_log'});
    event.remove({id: 'create:cutting/compat/biomesoplenty/stripped_cherry_wood'});
    event.remove({id: 'thermal:compat/biomesoplenty/insolator_bop_pink_cherry_sapling'});
    event.remove({id: 'create:cutting/compat/forbidden_arcanus/stripped_mysterywood'});
    event.remove({id: 'thermal:compat/biomesoplenty/insolator_bop_white_cherry_sapling'});
    event.remove({id: 'create:cutting/compat/forbidden_arcanus/cherrywood'});
    event.remove({id: 'create:cutting/compat/forbidden_arcanus/stripped_cherrywood_log'});
    event.remove({id: 'create:cutting/compat/forbidden_arcanus/stripped_cherrywood'});
    event.remove({id: 'create:cutting/compat/forbidden_arcanus/mysterywood_log'});
    event.remove({id: 'railways:sequenced_assembly/track_biomesoplenty_cherry_wide'});
    event.remove({id: 'create:cutting/compat/biomesoplenty/cherry_wood'});
    event.remove({id: 'create_confectionery:black_chocolate_recipe_6'});
    event.remove({id: 'create_confectionery:ruby_chocolate_recipe_6'});
    event.remove({id: 'create:cutting/compat/forbidden_arcanus/cherrywood_log'});
    event.remove({id: 'create_confectionery:white_chocolate_recipe_6'});
    event.remove({id: 'create:cutting/compat/biomesoplenty/stripped_cherry_log'});
    event.remove({id: 'create_confectionery:chocolate_recipe_6'});
    event.remove({id: 'create:cutting/compat/forbidden_arcanus/mysterywood'});
    event.remove({id: 'create:cutting/compat/forbidden_arcanus/stripped_mysterywood_log'});
    event.remove({id: 'create:filling/chocolate_bagutte'});
});

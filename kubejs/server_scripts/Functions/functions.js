function fallback_id(recipe, id_prefix) {
    if (recipe.getId().includes(':kjs_')) {
        recipe.serializeJson(); // without this the hashes *will* collide
        recipe.id(id_prefix + 'md5_' + recipe.getUniqueId());
    }
}

function getSingularityWithFrequency(result) {
    let frequency = new Date().getTime() * 100 + Math.floor(Math.random()) % 100;

    return result.withNBT('{freq:' + frequency + 'L}');
}

function trading(event) {
    let trade = (card_id, ingredient, output) => {
        event.custom({
            type: 'thermal:press',
            ingredients: [
                ingredient,
                Item.of(card_id).toJson(),
            ],
            result: [
                output
            ],
            energy: 1000
        });
    }

    global.trades.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade('kubejs:trade_card_' + element, transaction.in, transaction.out)
            })
    });

    global.professions.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade('kubejs:profession_card_' + element, transaction.in, transaction.out)
            })
    });
}

function cuttingRecipe(ingredient, tool, result) {
    return {
        type: 'sliceanddice:cutting',
        ingredients: [ingredient],
        tool: tool,
        results: result
    };
}
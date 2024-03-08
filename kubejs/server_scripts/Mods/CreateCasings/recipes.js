ServerEvents.recipes(event => {
    event.remove({output: /createcasing\:(brass|copper|railway|creative|industrial\_iron)\_(mixer|press|depot)/});

    ['brass', 'copper', 'railway', 'creative', 'industrial_iron'].forEach(material => {
        ['mixer', 'press', 'depot'].forEach(item => {
            let ingredient_item = item;
            let casing = 'create:' + material + '_casing';
            if (material == 'industrial_iron') casing = 'create:' + material + '_block';
            if (material == 'creative') casing = 'createcasing:' + material + '_casing';
            if (item == 'press') ingredient_item = 'mechanical_press';
            if (item == 'mixer') ingredient_item = 'mechanical_mixer';
            event.shapeless(Item.of('createcasing:' + material + '_' + item), [Item.of('create:' + ingredient_item), Item.of(casing)]).id('kubejs:createcasing' + material + '_' + item);
        });
    });
});
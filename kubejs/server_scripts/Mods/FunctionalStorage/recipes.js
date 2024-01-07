//priority: 0

ServerEvents.recipes(event => {
    event.remove({id: 'functionalstorage:ender_drawer'});
    event.remove({output: /^functionalstorage\:fluid_/});
});
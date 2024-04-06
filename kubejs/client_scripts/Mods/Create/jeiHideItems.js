//priority: 0
JEIEvents.hideItems(event => {
    event.hide('create:precision_mechanism');
    event.hide(/create\:crushed_raw_(aluminum|osmium|platinum|uranium)/);
});
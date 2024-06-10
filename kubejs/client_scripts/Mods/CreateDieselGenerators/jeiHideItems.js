//priority: 0
JEIEvents.hideItems(event => {
    event.hide('createdieselgenerators:plant_oil_bucket');
    event.hide('createdieselgenerators:crude_oil_bucket');
    event.hide('createdieselgenerators:biodiesel_bucket');
    event.hide('createdieselgenerators:diesel_bucket');
    event.hide('createdieselgenerators:gasoline_bucket');
    event.hide('createdieselgenerators:ethanol_bucket');
});

JEIEvents.addItems(event => {
    event.add('createdieselgenerators:pumpjack_hole'); // seems to be missing...
});
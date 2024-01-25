//priority: 0
ServerEvents.recipes(event => {
    event.remove({id: 'createdieselgenerators:mixing/biodiesel'});
    event.remove({output: 'createdieselgenerators:crude_oil_bucket'});
    event.remove({output: 'createdieselgenerators:biodiesel_bucket'});
    event.remove({output: 'createdieselgenerators:diesel_bucket'});
    event.remove({output: 'createdieselgenerators:gasoline_bucket'});
    event.remove({output: 'createdieselgenerators:plant_oil_bucket'});
    event.remove({output: 'createdieselgenerators:ethanol_bucket'});
    event.remove({input: 'createdieselgenerators:crude_oil_bucket'});
    event.remove({input: 'createdieselgenerators:biodiesel_bucket'});
    event.remove({input: 'createdieselgenerators:diesel_bucket'});
    event.remove({input: 'createdieselgenerators:gasoline_bucket'});
    event.remove({input: 'createdieselgenerators:plant_oil_bucket'});
    event.remove({input: 'createdieselgenerators:ethanol_bucket'});

    event.replaceInput({id: 'createdieselgenerators:crafting/asphalt_block'}, 'createdieselgenerators:crude_oil_bucket', '#forge:buckets/crude_oil');
    event.replaceInput({id: 'createdieselgenerators:mixing/asphalt_block'}, 'createdieselgenerators:crude_oil', '#forge:crude_oil');
});

// {
//   "type": "createdieselgenerators:basin_fermenting",
//   "ingredients": [
//     {
//       "item": "create:wheat_flour"
//     },
//     {
//       "fluid": "minecraft:water",
//       "amount": 100
//     }
//   ],
//   "processingTime": 200,
//   "results": [
//     {
//       "item": "create:dough"
//     },
//     {
//       "item": "create:wheat_flour",
//       "chance": 0.1
//     }
//   ]
// }

// {
//   "type": "createdieselgenerators:basin_fermenting",
//   "ingredients": [
//     {
//       "tag": "forge:fermentable"
//     },
//     {
//       "item": "minecraft:bone_meal"
//     }
//   ],
//   "processingTime": 400,
//   "results": [
//     {
//       "fluid": "createdieselgenerators:ethanol",
//       "amount": 200
//     }
//   ]
// }
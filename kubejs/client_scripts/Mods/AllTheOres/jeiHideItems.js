//priority: 0
JEIEvents.hideItems(event => {
    event.hide(/alltheores\:.*_ore_hammer/);
    event.hide('alltheores:peridot');
    event.hide('alltheores:ruby');
    event.hide('alltheores:sapphire');
    event.hide(/alltheores\:raw_(aluminum|iridium|osmium|platinum|uranium)/);
    event.hide(/alltheores\:(aluminum|iridium|osmium|platinum|uranium)_rod/);
    event.hide(/alltheores\:(aluminum|iridium|osmium|platinum|uranium)_gear/);
    event.hide(/alltheores\:(aluminum|iridium|osmium|platinum|uranium)_plate/);
    event.hide(/alltheores\:(aluminum|iridium|osmium|platinum|uranium)_ingot/);
    event.hide(/alltheores\:(aluminum|iridium|osmium|peridot|platinum|ruby|sapphire|uranium)_dust/);
    event.hide(/alltheores\:(aluminum|iridium|osmium|platinum|uranium)_nugget/);
    event.hide(/alltheores\:(aluminum|iridium|osmium|peridot|platinum|ruby|sapphire|uranium)_block/);
    event.hide(/alltheores\:raw_(aluminum|iridium|osmium|platinum|uranium)_block/);
    event.hide(/alltheores\:(aluminum|iridium|osmium|peridot|platinum|ruby|sapphire|uranium)_ore/);
    event.hide(/alltheores\:(deepslate|other|nether|end)_(aluminum|iridium|osmium|peridot|platinum|ruby|sapphire|uranium)_ore/);
});
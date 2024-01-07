// ClientEvents.lang('en_us', (event) => {
//     event.add("sophisticatedbackpacks:backpack", "Traveler's Backpack");
//     event.add("sophisticatedbackpacks:iron_backpack", "Engineer's Backpack");
//     event.add("sophisticatedbackpacks:gold_backpack", "Sorcerer's Backpack");
//     event.add("sophisticatedbackpacks:diamond_backpack", "Mage's Backpack");
//     event.add("sophisticatedbackpacks:netherite_backpack", "ArchMage's Backpack");
// });

// const $ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Modifier');
// const $TooltipModifier = Java.loadClass('com.simibubi.create.foundation.item.TooltipModifier');
// const $Palette = Java.loadClass('com.simibubi.create.foundation.item.TooltipHelper$Palette');
//
// ClientEvents.lang("en_us", (event) => {
//     event.addAll(
//         new CreateTooltip("sophisticatedbackpacks:backpack") // works with modded items!
//             .addSummary("Test _summary_.")
//             .addConditions(["When this", "And When this"])
//             .addBehaviours(["Then this item does _this_.", "You can add as many _behaviours_ as you like"])
//             .addControls(["This is the control1", "This is the control2"])
//             .addActions(["This is the _action1_", "This is the _action2_"])
//             .setPalette($Palette.YELLOW) // optional, default is $Palette.STANDARD_CREATE
//             .build()
//     )
// })
//
// function CreateTooltip (itemId) {
//     this.itemId = Item.of(itemId).idLocation
//     this.descriptionId = Item.of(itemId).descriptionId
//     this.summary = ""
//     this.conditions = []
//     this.behaviours = []
//     this.controls = []
//     this.actions = []
//     this.palette = $Palette.STANDARD_CREATE
// }
// CreateTooltip.prototype = {
//     addSummary: function (summary) {
//         this.summary = summary
//         return this
//     },
//     addConditions: function (conditions) {
//         this.conditions = Array.isArray(conditions) ? conditions : [conditions]
//         return this
//     },
//     addBehaviours: function (behaviours) {
//         this.behaviours = Array.isArray(behaviours) ? behaviours : [behaviours]
//         return this
//     },
//     addControls: function (controls) {
//         this.controls = Array.isArray(controls) ? controls : [controls]
//         return this
//     },
//     addActions: function (actions) {
//         this.actions = Array.isArray(actions) ? actions : [actions]
//         return this
//     },
//     setPalette: function (palette) {
//         this.palette = palette
//         return this
//     },
//     build: function () {
//         $TooltipModifier.REGISTRY.registerDeferred(
//             this.itemId, (item) => new $ItemDescription(
//                 item,
//                 this.palette
//             )
//         )
//         let map = Utils.newMap()
//         map.putIfAbsent(this.descriptionId + ".tooltip", this.itemId.path.toUpperCase())
//         if (this.summary != "") {
//             map.putIfAbsent(this.descriptionId + ".tooltip.summary", this.summary)
//         }
//         for (let index = 0; index < this.conditions.length; index++) {
//             map.putIfAbsent(this.descriptionId + ".tooltip.condition" + (index + 1), this.conditions[index])
//         }
//         for (let index = 0; index < this.behaviours.length; index++) {
//             map.putIfAbsent(this.descriptionId + ".tooltip.behaviour" + (index + 1), this.behaviours[index])
//         }
//         for (let index = 0; index < this.controls.length; index++) {
//             map.putIfAbsent(this.descriptionId + ".tooltip.control" + (index + 1), this.controls[index])
//         }
//         for (let index = 0; index < this.actions.length; index++) {
//             map.putIfAbsent(this.descriptionId + ".tooltip.action" + (index + 1), this.actions[index])
//         }
//         return map
//     }
// }
//priority: 100
JEIEvents.addItems(event => {
    event.add(Item.of('ae2:silicon_press'))
    event.add(Item.of('ae2:calculation_processor_press'))
    event.add(Item.of('ae2:engineering_processor_press'))
    event.add(Item.of('ae2:logic_processor_press'))
});

JEIEvents.information(event => {
    event.addItem("ae2:silicon_press", [
        Text.of("The only way to create a Silicon Press in this world, is to use the Create Saw."),
        Text.of("Ignore the next page, Mysterious Cubes do NOT spawn in Meteors here, they undergo a strange conversion to a Catalyst."),
    ]);
    event.addItem("ae2:calculation_processor_press", [
        Text.of("The only way to create a Calculation Processor Press in this world, is to use the Create Saw."),
        Text.of("Ignore the next page, Mysterious Cubes do NOT spawn in Meteors here, they undergo a strange conversion to a Catalyst."),
    ]);
    event.addItem("ae2:engineering_processor_press", [
        Text.of("The only way to create a Engineering Processor Press in this world, is to use the Create Saw."),
        Text.of("Ignore the next page, Mysterious Cubes do NOT spawn in Meteors here, they undergo a strange conversion to a Catalyst."),
    ]);
    event.addItem("ae2:logic_processor_press", [
        Text.of("The only way to create a Logic Processor Press in this world, is to use the Create Saw."),
        Text.of("Ignore the next page, Mysterious Cubes do NOT spawn in Meteors here, they undergo a strange conversion to a Catalyst."),
    ]);
})
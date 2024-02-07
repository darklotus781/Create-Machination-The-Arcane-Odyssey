// https://github.com/KubeJS-Mods/KubeJS-Create/pull/6
CreateEvents.spoutHandler(event => {
    let spoutInteraction = (blockId, suffix, fluidId, fluidAmount, result, requiredAmount) => {
        event.add(blockId + "_spout_interaction" + suffix, blockId, (block, fluid, simulate) => {
            if (!requiredAmount) {
                requiredAmount = fluidAmount;
            }
            if (fluid.id == fluidId && fluid.amount >= requiredAmount) {
                if (!simulate) {
                    if (result) {
                        block.setBlockState(Block.getBlock(result).defaultBlockState(), 2);
                    } else {
                        block.blockState.randomTick(block.level, block.pos, block.level.random)
                    }
                }
                return fluidAmount;
            }
            return 0;
        });
    }

    // When spouting water on the following, it basically just randomly ticks the block.  This is faster than normal game random ticks.
    // Spout water on wheat to grow faster without bone meal or on corundum blocks to grow them faster.

    spoutInteraction("minecraft:wheat", "", "minecraft:water", 100);
    spoutInteraction("quark:blue_corundum", "", "minecraft:water", 100);
    spoutInteraction("quark:black_corundum", "", "minecraft:water", 100);
    spoutInteraction("quark:green_corundum", "", "minecraft:water", 100);
    spoutInteraction("quark:indigo_corundum", "", "minecraft:water", 100);
    spoutInteraction("quark:orange_corundum", "", "minecraft:water", 100);
    spoutInteraction("quark:red_corundum", "", "minecraft:water", 100);
    spoutInteraction("quark:violet_corundum", "", "minecraft:water", 100);
    spoutInteraction("quark:white_corundum", "", "minecraft:water", 100);
    spoutInteraction("quark:yellow_corundum", "", "minecraft:water", 100);

    // Spouting water or lava on the following blocks will cause a conversion
    spoutInteraction("minecraft:cobblestone", "_1", "minecraft:water", 500, "minecraft:mossy_cobblestone");
    spoutInteraction("minecraft:cobblestone", "_2", "minecraft:lava", 150, "minecraft:stone");
});
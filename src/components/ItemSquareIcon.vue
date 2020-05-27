<template>
    <div
        :class="['item-square-icon', `rarity-${rarity}`]"
        :style="{ '--item-icon': `url(${getIcon()})` }"
    />
</template>

<style lang="scss" scoped>
.item-square-icon {

    $icon-size: 15%;

    width: $icon-size;
    height: 0;
    padding-bottom: $icon-size;
    display: inline-block;
    margin: 0.3rem;

    $rarities:  "common",
                "rare",
                "elite",
                "sr",
                "ssr",
                "sr_research",
                "ssr_research";

    @for $i from 1 through length($rarities) {
        $rarity: nth($rarities, $i);

        &.rarity-#{$i} {
            background: var(--item-icon),
                        url("../assets/images/item/bg_#{$rarity}.png");

            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            border: 3px solid transparent;
            border-image-slice: 10%;
            border-image-repeat: round;

            @if $rarity == "common" or
                $rarity == "ssr" or
                $rarity == "sr_research" or
                $rarity == "ssr_research" {
                border-image-source: url("../assets/images/item/frame.png");
            } @else {
                border-image-source: url("../assets/images/item/frame_#{$rarity}.png");
            }
        }
    }

    .item-icon {
        width: 100%;
        padding-bottom: 100%;
        background-size: contain;
        background-position: center;
    }

}
</style>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "item",
            validator: (value) => ["item", "ship", "equip"].indexOf(value) !== -1
        },
        name: {
            type: String,
            required: true
        },
        rarity: {
            type: Number,
            default: 1
        },
        frameType: {
            type: String,
            default: "rarity",
            validator: (value) => ["rarity", "skin", "blueprint", "oath", "note", "gift", "npc"].indexOf(value) !== -1
        }
    },
    methods: {
        getIcon: function() {
            const url = {
                item: "",
                ship: `https://raw.githack.com/AzurAPI/azurapi-js-setup/master/images/skins/${this.name}/thumbnail.png`,
                equip: `https://raw.githack.com/AzurAPI/azurapi-js-setup/master/images/equipments/${this.name.replace(" ", "_")}.png`
            };

            return url[this.type];
        }
    }
};
</script>
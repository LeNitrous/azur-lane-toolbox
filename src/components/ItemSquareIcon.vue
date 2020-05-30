<template>
    <div :class="{ 'item-square-icon': true, [`rarity-${rarity}`]: true, 'research': research }">
        <div
            v-lazy:background-image="image"
            class="item-image"
        />
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.item-square-icon {

    $icon-size: 15%;

    width: $icon-size;
    height: 0;
    position: relative;
    padding-bottom: $icon-size;
    display: inline-block;
    margin: 0.3rem;

    $rarities:  "common",
                "rare",
                "elite",
                "sr",
                "ssr";

    @for $i from 1 through length($rarities) {
        $rarity: nth($rarities, $i);

        &.rarity-#{$i} {
            background: url("../assets/images/item/bg_#{$rarity}.png");

            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            outline: 3px solid nth($rarity-colors, $i);

            @if $rarity == "sr" or $rarity == "ssr" {
                &.research {
                    background: url("../assets/images/item/bg_#{$rarity}_research.png");
                }
            }
        }
    }

    .item-image {
        width: 100%;
        padding-bottom: 100%;
        background-size: cover;
        background-position: center;
        -webkit-box-shadow: inset 0px 0px 15px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: inset 0px 0px 15px -5px rgba(0,0,0,0.75);
        box-shadow: inset 0px 0px 15px -5px rgba(0,0,0,0.75);

        &[lazy=loading] {
            background-size: auto;
            background-repeat: no-repeat;
        }
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
        research: {
            type: Boolean,
            default: false
        }
    },
    data: function() {
        return {
            image: {
                src: this.getIcon(),
                error: require("../assets/images/item/unknown_ship.png"),
                loading: require("../assets/images/loader.gif")
            }
        };
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
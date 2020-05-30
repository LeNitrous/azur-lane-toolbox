<template>
    <div>
        <div 
            v-for="index in 5"
            :key="index"
            class="rarity-checkbox"
        >
            <input
                :id="`rarity-${index}`"
                v-model="selected"
                :value="index"
                type="checkbox"
            >
            <label
                :for="`rarity-${index}`"
                :class="['container', `type-${index}`]"
            />
        </div>
    </div>
</template>

<script>
export default {
    model: {
        prop: "selectedValue",
        event: "change"
    },
    props: {
        selectedValue: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data: function() {
        return {
            selected: []
        };
    },
    watch: {
        selected: function() {
            this.$emit("change", this.selected);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";


.rarity-checkbox {
    display: inline-block;
    width: 7.5%;
    margin-right: 0.5rem;

    input {
        display: none;

        & + label {

            width: 100%;
            padding-bottom: 100%;
            display: inline-block;
            border-radius: 0.25rem;

            @for $i from 1 through length($rarity-colors) {
                &.type-#{$i} {
                    background-color: nth($rarity-colors, $i);
                }
            }
        }

        &:checked + label {
            -webkit-box-shadow: 0px 0px 0px 3px rgba(0,0,0,1);
            -moz-box-shadow: 0px 0px 0px 3px rgba(0,0,0,1);
            box-shadow: 0px 0px 0px 3px rgba(0,0,0,1);
        }
    }
}
</style>
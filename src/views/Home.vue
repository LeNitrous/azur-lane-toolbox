<template>
    <div>
        <section class="hero is-small">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <img src="../assets/images/icon.png">
                    <p class="subtitle">
                        Command Room
                    </p>
                </div>
            </div>
        </section>
        <div class="columns is-centered">
            <div 
                class="column 
                        is-10-widescreen
                        is-8-fullhd"
            >
                <section class="section">
                    <div class="container notice has-text-centered">
                        <b-icon
                            icon="exclamation-triangle"
                            type="is-warning"
                        />
                        <p>Work in Progress!</p>
                    </div>
                    <div class="grid-container">
                        <div
                            v-for="[key, value] in Object.entries(menu)"
                            :key="key"
                            :class="{ 'menu-button': true, disabled: value.disabled, jumbo: key == 'a' || key == 'b', [key]: true, [value.name.toLowerCase()]: true }"
                            :style="{ ...value.styling }"
                        >
                            <div class="inner">
                                <p>{{ value.name }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-reversed-mobile">
                        <div class="column is-three-quarters">
                            <p>created by <a href="https://twitter.com/lenitrous">@LeNitrous</a></p>
                        </div>
                        <div class="column navigation">
                            <b-button
                                class="has-text-right"
                                type="is-primary"
                                icon-right="code"
                                tag="a"
                                href="https://github.com/lenitrous/azur-lane-toolbox/"
                                expanded
                            >
                                View Source
                            </b-button>
                            <b-button
                                class="has-text-right"
                                type="is-info"
                                icon-right="heart"
                                tag="a"
                                href="https://ko-fi.com/W7W71CF9V"
                                expanded
                            >
                                Support
                            </b-button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            menu: {
                "a": {
                    name: "Ships",
                    disabled: true,
                    styling: {
                        backgroundPositionX: "100%"
                    }
                },
                "b": {
                    name: "Equipment",
                    disabled: true,
                    styling: {
                        backgroundPosition: "center"
                    }
                },
                "c": {
                    name: "Meowfficers",
                    disabled: true,
                    styling: {}
                },
                "d": {
                    name: "Campaign",
                    disabled: true,
                    styling: {
                        backgroundPositionX: "4rem",
                        backgroundPositionY: "20%"
                    }
                },
                "e": {
                    name: "Gallery",
                    disabled: true,
                    styling: {
                        backgroundPositionX: "4rem",
                        backgroundPositionY: "20%"
                    }
                },
                "f": {
                    name: "Memories",
                    disabled: true,
                    styling: {
                        backgroundPositionX: "8rem",
                        backgroundPositionY: "20%"
                    }
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.grid-container {
    display: grid;
    margin-bottom: 1em;
    grid-template-columns: 0.7fr 1.3fr;
    grid-template-rows: 2fr repeat(3, 0.7fr);
    gap: 1em 1em;
    grid-template-areas:    "b a"
                            "c a"
                            "d a"
                            "e f";

    .a { grid-area: a; }
    .b { grid-area: b; }
    .c { grid-area: c; }
    .d { grid-area: d; }
    .e { grid-area: e; }
    .f { grid-area: f; }

    .ships { background-image: url("../assets/images/bg_button_ships.png") }
    .equipment { background-image: url("../assets/images/bg_button_equipment.png") }
    .meowfficers { background-image: url("../assets/images/bg_button_meowfficers.png") }
    .campaign { background-image: url("../assets/images/bg_button_campaign.png") }
    .gallery { background-image: url("../assets/images/bg_button_gallery.png") }
    .memories { background-image: url("../assets/images/bg_button_memories.png") }

    .menu-button {
        position: relative;
        padding: 3rem 1rem;
        background-color: rgb(55, 73, 128);
        background-size: cover;
        background-repeat: no-repeat;
        -moz-user-select: none;
        -webkit-user-select: none;
        cursor: pointer;

        .inner {
            display: table;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: linear-gradient(to right, rgb(55, 73, 128) 25%, transparent 75%);
            border-spacing: 1.5rem 0;

            p {
                height: 100%;
                display: table-cell;
                vertical-align: middle;
                font-size: 20px;
            }
        }

        &.jumbo {
            position: relative;

            .inner {
                top: 70%;
                height: 40px;
            }
        }

        &:hover:not(.disabled) {
            outline: rgba(0, 0, 0, 0.3) solid 3px;
        }

        &.disabled {
            filter: grayscale(100%);
            cursor: default;
        }
    }
}

.hero {
    pointer-events: none;
    -moz-user-select: none;
    -webkit-user-select: none;

    img {
        margin-top: 2rem;
    }

    .subtitle {
        font-weight: 300;
    }
}

.notice {
    margin-bottom: 1.5rem;
}

.navigation * {
    margin-bottom: 0.5rem;
}

@media screen and (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
        grid-template-rows: 3fr repeat(5, 1fr);
        gap: 1em 1em;
        grid-template-areas: "a" "b" "c" "d" "e" "f";
    }

    .is-reversed-mobile {
        display: flex;
        flex-direction: column-reverse;
    }

    .menu-button.jumbo.b {
        .inner {
            top: 0;
            height: 100%;
        }
    }
}
</style>
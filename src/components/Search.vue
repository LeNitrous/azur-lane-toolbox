<template>
    <div class="columns is-centered">
        <div 
            class="column
                    is-10-widescreen
                    is-9-fullhd"
        >
            <section class="section">
                <div class="search-header">
                    <p class="title">
                        Search
                    </p>
                    <b-input
                        :value="query"
                        icon-right="search"
                        expanded
                        @input="$emit('update:query', $event)"
                    />
                </div>
                <div class="columns is-reversed-mobile">
                    <div class="column has-text-centered is-two-thirds">
                        <slot name="items" />
                    </div>
                    <div class="column">
                        <p class="subtitle">
                            Filters
                        </p>
                        <slot name="filters" />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-header {
    margin-bottom: 1.5rem;
}
</style>

<script>
import debounce from "lodash-es/debounce";

export default {
    props: {
        query: {
            type: String,
            default: ""
        },
        items: {
            type: Array,
            default: function() {
                return [];
            }
        },
        results: {
            type: Array,
            default: function() {
                return [];
            }
        },
        filters: {
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    watch: {
        query: function() {
            this.getResults();
        },
        items: {
            deep: true,
            handler: function() {
                this.getResults();
            }
        },
        filters: {
            deep: true,
            handler: function() {
                this.getResults();
            }
        }
    },
    methods: {
        getResults: debounce(function() {
            const filters = Object.assign({ name: this.query }, this.filters);
            const filtered = this.items.filter(item => {
                return Object.keys(filters).every(key => {
                    if (typeof filters[key] !== typeof item[key] && !Array.isArray(filters[key]))
                        throw new TypeError(`Type mismatch on key "${key}": expected "${typeof item[key]}" got "${typeof filters[key]}"`);

                    if (typeof filters[key] === "string" && filters[key].length > 0)
                        return item[key].toLowerCase().includes(filters[key].toLowerCase());

                    if (typeof filters[key] === "number" && filters[key] > -1)
                        return item[key] === filters[key];

                    if (Array.isArray(filters[key]) && filters[key].length > 0)
                        return filters[key].indexOf(item[key]) !== -1;

                    return true;
                });
            });

            this.$emit("update:results", filtered);
        }, 200)
    }
};
</script>
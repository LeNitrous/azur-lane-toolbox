<template>
    <search v-bind.sync="search">
        <template slot="items">
            <item-icon
                v-for="ship in search.results"
                :key="ship.id"
                type="ship"
                :name="ship.code"
                :rarity="ship.rarity"
            />
        </template>
        <template slot="filters">
            <p>Type</p>
            <b-dropdown
                v-model.number="search.filters.type"
                expanded
            >
                <button
                    slot="trigger" 
                    class="button is-primary"
                >
                    <span>{{ currentType.name }}</span>
                </button>

                <b-dropdown-item
                    v-for="type in types"
                    :key="type.id"
                    :value="type.id"
                >
                    {{ type.name }}
                </b-dropdown-item>
            </b-dropdown>
            <p>Rarity</p>
            <filter-rarity v-model="search.filters.rarity" />
            <p>Nation</p>
            <b-dropdown
                v-model.number="search.filters.nationality"
                expanded
            >
                <button
                    slot="trigger" 
                    class="button is-primary"
                >
                    <span>{{ currentNation.name }}</span>
                </button>

                <b-dropdown-item
                    v-for="nation in nations"
                    :key="nation.id"
                    :value="nation.id"
                >
                    {{ nation.name }}
                </b-dropdown-item>
            </b-dropdown>
        </template>
    </search>
</template>

<script>
import Search from "@/components/Search.vue";
import ItemIcon from "@/components/ItemSquareIcon.vue";
import FilterRarity from "@/components/FilterRarity.vue";
import { SHIP_HULL_TYPE, COMMONS_NATIONS } from "@/util/constants.js";
import { request } from "@/util/requests.js";

export default {
    components: { ItemIcon, Search, FilterRarity },
    data: function() {
        return {
            search: {
                items: [],
                results: [],
                query: "",
                filters: {
                    nationality: -1,
                    type: -1,
                    rarity: []
                }
            }
        };
    },
    computed: {
        types: function() {
            return [
                { id: -1, name: "All" },
                ...Object.entries(SHIP_HULL_TYPE)
                    .map(([key, value]) => Object.assign({ id: parseInt(key) }, value))
                    .filter(t => ["unused", "enemy"].indexOf(t.type) < 0)
            ];
        },
        nations: function() {
            return [
                { id: -1, name: "All" },
                ...Object.entries(COMMONS_NATIONS)
                    .map(([key, value]) => Object.assign({ id: parseInt(key) }, value))
                    .filter(n => n.name.length > 0)
            ];
        },
        currentType: function() {
            const curType = this.types.find(t => t.id === this.search.filters.type);
            return curType;
        },
        currentNation: function() {
            return this.nations.find(n => n.id === this.search.filters.nationality);
        }
    },
    mounted: async function() {
        const 
            data = await request("/ships", ["id", "group_type"]),
            stats = await request("/ships/stat", ["id", "rarity", "name", "type", "nationality"]),
            group = await request("/ships/group", ["group_type", "code"]),
            priority = (await request("/ships/research", ["id"])).map(e => e.id);

        function getShipCode(code) {
            if (code > 20000)
                return "Plan" + (code - 20000).toString().padStart(3, "0");
            else if (code > 10000)
                return "Collab" + (code - 10000).toString().padStart(3, "0");
            else
                return code.toString().padStart(3, "0");
        }

        this.search.items = group.map(g => {
            let ship = data.filter(e => e.group_type === g.group_type).reverse()[0];
            let { name, rarity, type, nationality } = stats.find(s => s.id === ship.id);
            return {
                id: g.group_type,
                code: getShipCode(g.code),
                rarity: rarity - 1,
                name,
                type,
                nationality,
                isPriority: priority.includes(ship.id)
            };
        });
    }
};
</script>

<style lang="scss" scoped>
button {
    width: 100%;
}
</style>
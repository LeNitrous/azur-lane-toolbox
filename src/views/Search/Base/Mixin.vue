<script>
import BaseSearch from "./Template.vue";

export default {
    components: { BaseSearch },
    data: function() {
        return {
            all: [],
            query: "",
            results: [],
            filters: {}
        };
    },
    methods: {
        doSearch: function() {
            const filterKeys = Object.keys({ name: this.query, ...this.filters });
            this.results = this.all.filter(item => {
                return filterKeys.every(key => {
                    item[key] === this.filters[key];
                });
            });
        }
    }
};
</script>
<template>
    <base-search>
        <template slot="filters">
            <p>Hello World</p>
        </template>
    </base-search>
</template>

<script>
import Base from "./Base/Mixin.vue";
// import { request } from "@/util/requests.js";

export default {
    mixins: [Base],
    mounted: async function() {
        console.log("hello world");
        // this.all = await request("/ships", ["id", "group_type"]);
    }
};
</script>
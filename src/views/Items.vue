<template>
  <div>{{ $route.params.itemname }} {{ $route.params.id }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TheItem",
  data() {
    return {
      // items: {},
    };
  },
  computed: {
    ...mapState(["waffles", "spirals"]),
  },
  // mounted() {
  //   const items = this.$route.params.itemname;
  //   this.items = items;
  // },
};
</script>

<template>
  <div class="py-10 px-4">
   <div class="flex flex-col gap-4">
    <h4 class="text-xl font-bold lg:text-3xl">{{itemName}}</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
       <div
      v-for="spiral in spirals"
      :key="spiral.id"
      class="border border-gray-500 rounded py-3 px-4"
    >
      <h4 class="text-xl font-semibold">
        <router-link :to="`items/spirals/${spiral.id}`">{{
          spiral.name
        }}</router-link>
      </h4>
      <p class="font-medium py-2">Rs. {{ spiral.price }}</p>
    </div>
    </div>
   </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import list from "@/mixin";

export default {
  name: "PotatoSpiral",
  mixins: [list],
  data() {
    return {};
  },
  computed: {
    ...mapState(["spirals"]),
  },
};
</script>

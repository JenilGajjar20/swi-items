<template>
  <div class="py-10 px-4">
    <div class="flex flex-col gap-4">
      <h4 class="text-xl font-bold lg:text-3xl">{{ itemName }}</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="pancake in pancakes"
          :key="pancake.id"
          class="border border-gray-500 rounded py-3 px-4"
        >
          <h4 class="text-xl font-semibold">
            <router-link :to="`items/pancakes/${pancake.id}`">{{
              pancake.name
            }}</router-link>
          </h4>
          <p class="font-medium py-2">Rs. {{ pancake.price }}</p>
          <p class="text-sm text-gray-500">{{ pancake.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import list from "@/mixin";

export default {
  name: "ThePancake",
  mixins: [list],
  computed: {
    ...mapState(["pancakes"]),
  },
};
</script>

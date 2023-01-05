<template>
  <div class="py-10 px-4">
    <div class="flex flex-col gap-4">
      <h4 class="text-xl font-bold lg:text-3xl">{{ itemName }}</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="waffle in waffles"
          :key="waffle.id"
          class="border border-gray-500 rounded py-3 px-4"
        >
          <h4 class="text-xl font-semibold">
            <router-link :to="`items/waffles/${waffle.id}`">{{
              waffle.name
            }}</router-link>
          </h4>
          <p class="font-medium py-2">Rs. {{ waffle.price }}</p>
          <p class="text-sm text-gray-500">{{ waffle.description }}</p>
          <!-- <div class="flex items-center space-x-2 py-1">
        <div
          v-for="(top, index) in waffle.toppings"
          :key="index"
          class="bg-blue-800 rounded-full py-1 px-3 text-white"
        >
          <p class="text-xs">{{ top ? top : "-" }}</p>
        </div>
      </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import list from "@/mixin";

export default {
  name: "TheWaffle",
  mixins: [list],
  data() {
    return {};
  },
  computed: {
    ...mapState(["waffles"]),
  },
};
</script>

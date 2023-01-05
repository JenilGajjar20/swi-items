<template>
  <div class="flex md:justify-center py-10 px-4">
    <div class="border border-gray-500 rounded py-3 px-4">
      <div class="flex flex-col sm:items-center sm:flex-row sm:space-x-2">
        <h4 class="text-xl font-semibold">{{ items.name }}</h4>
        <div
          v-for="(itemTop, index) in items.toppings"
          :key="index"
          class="text-xs"
        >
          <p
            class="
              bg-amber-500
              my-1
              py-1
              px-2
              w-fit
              rounded-full
              text-white
              font-medium
              text-center
              whitespace-nowrap
            "
          >
            {{ itemTop }}
          </p>
        </div>
      </div>
      <div class="mt-2">
        <p>{{ items.description }}</p>
      </div>
      <div class="mt-2 font-semibold">
        <p>Rs. {{ items.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TheItem",
  data() {
    return {
      items: {},
    };
  },
  computed: {
    ...mapState(["waffles", "spirals", "pancakes", "fries"]),
  },
  mounted() {
    const items = this[this.$route.params.itemname][this.$route.params.id];
    this.items = items;
  },
};
</script>

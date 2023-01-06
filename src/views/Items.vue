<template>
  <div class="items">
    <div class="item">
      <div class="item-content">
        <h4 class="item-content__name">{{ items.name }}</h4>
        <div
          v-for="(itemTop, index) in items.toppings"
          :key="index"
          class="item-content--badge"
        >
          <p>
            {{ itemTop }}
          </p>
        </div>
      </div>
      <div class="item-description">
        <p>{{ items.description }}</p>
      </div>
      <div class="item-price">
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

<style lang="scss">
.items {
  @apply flex md:justify-center py-10 px-4;
}

.item {
  @apply border border-gray-500 rounded py-3 px-4;
  &-content {
    @apply flex flex-col sm:items-center sm:flex-row sm:space-x-2;
    &__name {
      @apply text-xl font-semibold;
    }
    &--badge {
      @apply text-xs;
      p {
        @apply bg-amber-500 my-1 py-1 px-2 w-fit rounded-full text-white font-medium text-center whitespace-nowrap;
      }
    }
  }
  &-description,
  &-price {
    @apply mt-2;
  }
  &-price {
    @apply font-semibold;
  }
}
</style>
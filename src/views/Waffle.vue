<template>
  <div class="waffles">
    <div class="waffles-detail">
      <h4 class="waffles-detail__heading">
        {{ itemName }}
      </h4>
      <div class="waffles--content">
        <div v-for="waffle in waffles" :key="waffle.id" class="waffle">
          <h4 class="waffle--title">
            <router-link :to="`items/waffles/${waffle.id}`">{{
              waffle.name
            }}</router-link>
          </h4>
          <p class="waffle--price">Rs. {{ waffle.price }}</p>
          <p class="waffle--description">
            {{ waffle.description }}
          </p>
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

<style lang="scss">
.waffles {
  @apply py-10 px-4;
  &-detail {
    @apply flex flex-col gap-4;
    &__heading {
      @apply text-xl font-bold lg:text-3xl;
    }
  }
  &--content {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4;
  }
}

.waffle {
  @apply border border-gray-500 rounded py-3 px-4;
  &--title {
    @apply text-xl font-semibold;
  }
  &--price {
    @apply font-medium py-2;
  }
  &--description {
    @apply text-sm text-gray-500;
  }
}
</style>
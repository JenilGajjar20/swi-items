<template>
  <div class="fries">
    <div class="fries-detail">
      <h4 class="fries-detail__heading">
        {{ itemName }}
      </h4>
      <div class="fries--content">
        <div v-for="fry in fries" :key="fry.id" class="fry">
          <h4 class="fry--title">
            <router-link :to="`items/fries/${fry.id}`">{{
              fry.name
            }}</router-link>
          </h4>
          <p class="fry--price">Rs. {{ fry.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import list from "@/mixin";

export default {
  name: "FrenchFries",
  mixins: [list],
  computed: {
    ...mapState(["fries"]),
  },
};
</script>

<style lang="scss">
.fries {
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

.fry {
  @apply border border-gray-500 rounded py-3 px-4;
  &--title {
    @apply text-xl font-semibold;
  }
  &--price {
    @apply font-medium py-2;
  }
}
</style>
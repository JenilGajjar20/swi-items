<template>
  <div class="spirals">
    <div class="spirals-detail">
      <h4 class="spirals-detail__heading">
        {{ itemName }}
      </h4>
      <div class="spirals--content">
        <div v-for="spiral in spirals" :key="spiral.id" class="spiral">
          <h4 class="spiral--title">
            <router-link :to="`items/spirals/${spiral.id}`">{{
              spiral.name
            }}</router-link>
          </h4>
          <p class="spiral--price">Rs. {{ spiral.price }}</p>
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

<style lang="scss">
.spirals {
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

.spiral {
  @apply border border-gray-500 rounded py-3 px-4;
  &--title {
    @apply text-xl font-semibold;
  }
  &--price {
    @apply font-medium py-2;
  }
}
</style>
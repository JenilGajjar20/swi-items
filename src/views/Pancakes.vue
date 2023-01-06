<template>
  <div class="pancakes">
    <div class="pancakes-detail">
      <h4 class="pancakes-detail__heading">
        {{ itemName }}
      </h4>
      <div class="pancakes--content">
        <div v-for="pancake in pancakes" :key="pancake.id" class="pancake">
          <h4 class="pancake--title">
            <router-link :to="`items/pancakes/${pancake.id}`">{{
              pancake.name
            }}</router-link>
          </h4>
          <p class="pancake--price">Rs. {{ pancake.price }}</p>
          <p class="pancake--description">
            {{ pancake.description }}
          </p>
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

<style lang="scss">
.pancakes {
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

.pancake {
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
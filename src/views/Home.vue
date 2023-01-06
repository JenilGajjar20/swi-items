<template>
  <div class="py-10 px-4">
    <div class="flex flex-col items-center space-y-6">
      <button @click="toggleForm" class="item-btn">Add New Item</button>
      <form v-if="showItemForm" class="item-form">
        <div>
          <input type="text" placeholder="Enter Item Name" required />
        </div>
        <div>
          <select :options="['waffles', 'spirals', 'pancakes', 'fries']">
            <!-- <option value=""></option> -->
          </select>
        </div>
        <div class="md:col-span-2">
          <input type="text" placeholder="Enter Item Name" required />
        </div>
        <div class="md:col-span-2">
          <textarea cols="30" rows="3" placeholder="Enter Item Description" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHome",
  data() {
    return {
      showItemForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.showItemForm = !this.showItemForm;
    },
  },
};
</script>

<style lang="scss">
.item {
  &-btn {
    @apply bg-blue-500 py-2 px-4 rounded text-white font-medium hover:bg-blue-700;
  }
  &-form {
    @apply gap-4 border border-gray-600 rounded-md p-10 grid grid-cols-1 md:grid-cols-2;
    input,
    select,
    textarea {
      @apply py-2 px-4 border border-gray-300 rounded-md w-full;
    }
  }
}
</style>
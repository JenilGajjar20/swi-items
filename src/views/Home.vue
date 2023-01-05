<template>
  <div class="py-10 px-4">
    <div class="flex flex-col items-center">
      <h4 class="text-xl font-bold md:text-3xl">StickWithIt Items:</h4>
      <ul class="py-8">
        <li class="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <router-link to="/waffle">Waffles</router-link>
          <router-link to="/spirals">Potato Spirals</router-link>
          <router-link to="/pancakes">Pancakes</router-link>
          <router-link to="/fries">French Fries</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHome",
};
</script>

<style scoped>
a {
  @apply border border-gray-400 rounded py-2 px-4 font-medium md:text-lg;
}

a:hover {
  @apply bg-gray-400 text-white;
}
</style>
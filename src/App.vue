<template>
  <div class="">
    <div class="border-b border-gray-500">
      <div class="py-4 flex items-center justify-evenly">
        <router-link to="/">Home</router-link>
        <router-link to="/waffle">Waffle</router-link>
        <router-link to="/spirals">Spirals</router-link>
        <router-link to="/pancakes">Pancakes</router-link>
        <router-link to="/fries">Fries</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
a {
  @apply py-1 px-3 font-medium;
}
a:hover {
  @apply bg-gray-100 rounded-full;
}
</style>
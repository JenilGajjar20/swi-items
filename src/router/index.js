import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Waffle from "../views/Waffle.vue";
import Spirals from "../views/Spirals.vue";
import Pancakes from "../views/Pancakes.vue";
import Fries from "../views/Fries.vue";
import Items from "../views/Items.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/waffle",
      name: "waffle",
      component: Waffle,
    },
    {
      path: "/spirals",
      name: "spirals",
      component: Spirals,
    },
    {
      path: "/pancakes",
      name: "pancakes",
      component: Pancakes,
    },
    {
      path: "/fries",
      name: "fries",
      component: Fries,
    },
    {
      path: "/items/:itemname/:id",
      name: "items",
      component: Items,
    },
  ],
});

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import College from "../views/College.vue";
import Enter from "../views/Enter.vue";
import Explain from "../views/Explain.vue";
import Info from "../views/Info.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Enter",
    component: Enter
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/college/:id",
    name: "College",
    component: College
  },
  {
    path: "/explain/:place",
    name: "Explain",
    component: Explain
  },
  {
    path: "/info/:id",
    name: "Info",
    component: Info
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

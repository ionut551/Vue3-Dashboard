import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "../views/HelloWorld.vue"
import Dashboard from "../views/Dashboard.vue"
import Tables from "../views/Tables.vue"
import Profile from "../views/Profile.vue"

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/helloWorld",
  },
  {
    path: "/helloWorld",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;

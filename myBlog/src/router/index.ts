import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("@/views/HomePage/index.vue"),
    },
    {
      path: "/Article",
      name: "article",
      component: () => import("@/views/Article/index.vue"),
    },
    {
      path: "/About",
      name: "about",
      component: () => import("@/views/About/index.vue"),
    },
    {
      path: "/Projects",
      name: "projects",
      component: () => import("@/views/Projects/index.vue"),
    },
    {
      path: "/Utils",
      name: "utils",
      component: () => import("@/views/Utils/index.vue"),
    },
  ],
});

export default router;

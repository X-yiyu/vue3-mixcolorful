import { createRouter, createWebHistory } from "vue-router";
import Test from "@/components/Test.vue";
const routerHistory = createWebHistory();
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Test
    }
  ]
});

export default router;

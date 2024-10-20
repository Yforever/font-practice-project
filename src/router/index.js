import { createRouter, createWebHashHistory } from "vue-router";
import Index from "~/pages/index.vue";
import Login from "~/pages/login.vue";
import NotFound from "~/pages/404.vue";

// 规则对象
const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/login",
    component: Login,
  },
  // 将匹配所有内容并将其放在 `route.params.pathMatch` 下
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

// 创建router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 导出router对象
export default router;

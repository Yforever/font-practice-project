import { createRouter, createWebHashHistory } from "vue-router";
import Admin from "~/layout/admin.vue";
import Index from "~/pages/index.vue";
import Login from "~/pages/login.vue";
import NotFound from "~/pages/404.vue";
import GoodList from "~/pages/goods/list.vue";
import CategoryList from "~/pages/category/list.vue";

// 规则对象
const routes = [
  {
    path: "/",
    component: Admin,
    // 子路由
    children: [
      {
        path: "/",
        component: Index,
        meta: {
          title: "后台首页",
        },
      },
      {
        path: "/goods/list",
        component: GoodList,
        meta: {
          title: "商品管理",
        },
      },
      {
        path: "/category/list",
        component: CategoryList,
        meta: {
          title: "分类列表",
        },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "登录页",
    },
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

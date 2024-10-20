import router from "~/router";
import { getToken } from "~/composables/auth";
import { toast, showFullLoading, hideFullLoading } from "~/composables/util";
import store from "./store";

// 全局前置守卫
router.beforeEach(
  /**async */ (to, from, next) => {
    // 显示Loading效果
    showFullLoading();
    const token = getToken();
    // 没有登录，强制跳转回登录页面
    if (!token && to.path != "/login") {
      toast("未登录提示", "请先登录", "error");
      return next({ path: "/login" });
    }
    // 防止重复登录
    if (token && to.path == "/login") {
      toast("重复登录提示", "请勿重复登录");
      return next({ path: from.path ? from.path : "/" });
    }

    // 如果用户登录了，自动获取用户信息，并存储在vuex当中
    if (token) {
      // 没有完善接口暂时注释
      // await store.dispatch("getInfo");
    }

    // 设置页面标题
    let title = (to.meta.title ? to.meta.title : "") + "---XXX商城后台";
    document.title = title;

    next();
  }
);

// 全局后置守卫
router.afterEach((to, from) => {
  hideFullLoading();
});

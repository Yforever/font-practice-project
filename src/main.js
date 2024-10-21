import { createApp } from "vue";
import App from "./App.vue";
// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import store from "./store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app.use(store);
// 挂载router
app.use(router);
// 挂载ElementPlus
app.use(ElementPlus);

// 加载顺序-引入windiCSS样式文件
import "virtual:windi.css";
import "./permission";
import "nprogress/nprogress.css";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");

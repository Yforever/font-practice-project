<template>
  <div>
    后台首页

    <el-button type="primary" @click="handleLogout">退出登录</el-button>
  </div>
</template>

<script setup>
import { showModal, toast } from "~/composables/util";
import { logout } from "~/api/manager";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

function handleLogout() {
  showModal("是否要退出登录？").then((res) => {
    console.log("退出登录成功");
    logout().finally(() => {
      store.dispatch("logout");
      // 跳转登录页
      router.push("/login");
      // 提示退出登录页成功
      toast("退出登录提示", "退出登录页成功");
    });
  });
}
</script>

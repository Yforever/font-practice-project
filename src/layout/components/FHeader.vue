<template>
  <div class="f-header">
    <span class="logo">
      <el-icon class="mr-2"><eleme-filled /></el-icon>
      XXXX后台管理系统
    </span>
    <el-icon class="icon-btn" @click="$store.commit('handleAsideWidth')"
      ><fold v-if="$store.state.asideWidth == '250px'" />
      <Expand v-else />
    </el-icon>
    <el-tooltip effect="dark" content="刷新" placement="bottom">
      <el-icon class="icon-btn" @click="handleRefresh"><refresh /></el-icon>
    </el-tooltip>
    <div class="ml-auto flex items-center">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <el-icon class="icon-btn" @click="toggle">
          <full-screen v-if="!isFullscreen" />
          <aim v-else />
        </el-icon>
      </el-tooltip>
      <el-dropdown class="dropdown" @command="handleCommand">
        <span class="flex items-center text-light-50">
          <el-avatar class="mr-2" :size="25" :src="$store.state.user.avatar" />
          {{ $store.state.user.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

  <!-- <el-drawer
    v-model="showDrawer"
    title="修改密码"
    size="35%"
    :close-on-click-modal="false"
  >
    <el-form
      ref="formRef"
      :rules="rules"
      :model="form"
      label-width="80px"
      size="small"
    >
      <el-form-item prop="oldPassword" label="旧密码">
        <el-input v-model="form.oldPassword" placeholder="请输入旧密码">
        </el-input>
      </el-form-item>
      <el-form-item prop="password" label="新密码">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入新密码"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="reportPassword" label="确认密码">
        <el-input
          type="password"
          v-model="form.reportPassword"
          placeholder="确认密码"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          color="#626aef"
          type="primary"
          @click="onSubmit"
          :loading="loading"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </el-drawer> -->

  <form-drawer
    ref="formDrawerRef"
    title="修改密码"
    destoryOnClass
    @submit="onSubmit"
  >
    <el-form
      ref="formRef"
      :rules="rules"
      :model="form"
      label-width="80px"
      size="small"
    >
      <el-form-item prop="oldPassword" label="旧密码">
        <el-input v-model="form.oldPassword" placeholder="请输入旧密码">
        </el-input>
      </el-form-item>
      <el-form-item prop="password" label="新密码">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入新密码"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="reportPassword" label="确认密码">
        <el-input
          type="password"
          v-model="form.reportPassword"
          placeholder="确认密码"
          show-password
        >
        </el-input>
      </el-form-item>
    </el-form>
  </form-drawer>
</template>

<script setup>
import FormDrawer from "~/components/FormDrawer.vue";
import {
  Fold,
  Refresh,
  FullScreen,
  ElemeFilled,
  ArrowDown,
  Aim,
  Expand,
} from "@element-plus/icons-vue";
import { showModal, toast } from "~/composables/util";
import { logout } from "~/api/manager";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useFullscreen } from "@vueuse/core";
import { useRepassword, useLogout } from "~/composables/useManager";
// 全屏对象
const { isFullscreen, toggle } = useFullscreen();
const { formDrawerRef, form, rules, onSubmit, openRePasswordForm } =
  useRepassword();
const { handleLogout } = useLogout();
const router = useRouter();
const store = useStore();
// const showDrawer = ref(false);
// const loading = ref(false);

const handleCommand = (c) => {
  switch (c) {
    case "logout":
      handleLogout();
      break;
    case "rePassword":
      //   showDrawer.value = true;
      openRePasswordForm();
      break;
  }
};

// 刷新
const handleRefresh = () => location.reload();
</script>

<style>
.f-header {
  @apply flex items-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0;
  height: 64px;
}
.logo {
  width: 250px;
  @apply flex justify-center items-center text-xl font-thin;
}
.icon-btn {
  @apply flex justify-center items-center;
  width: 42px;
  height: 64px;
  cursor: pointer;
}
.icon-btn:hover {
  @apply bg-indigo-600;
}
.f-header .dropdown {
  height: 64px;
  cursor: pointer;
  @apply flex justify-center items-center mx-5;
}
</style>

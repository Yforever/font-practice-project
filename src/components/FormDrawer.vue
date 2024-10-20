<template>
  <el-drawer
    v-model="showDrawer"
    :title="title"
    :size="size"
    :close-on-click-modal="false"
    :destory-on-close="destoryOnClose"
  >
    <div class="formDrawer">
      <div class="body">
        <slot></slot>
      </div>
      <div class="actions">
        <el-button type="primary" @click="submit" :loading="loading">{{
          comfirmText
        }}</el-button>
        <el-button type="default" @click="close">取消</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { ref } from "vue";

const showDrawer = ref(false);
const props = defineProps({
  title: String,
  size: {
    tyle: String,
    default: "35%",
  },
  destoryOnClose: {
    type: Boolean,
    default: false,
  },
  comfirmText: {
    tyle: String,
    default: "提交",
  },
});

const loading = ref(false);
const showLoading = () => (loading.value = true);
const hideLoading = () => (loading.value = false);
const open = () => (showDrawer.value = true);
const close = () => (showDrawer.value = false);

const emit = defineEmits(["submit"]);
const submit = () => emit("submit");
// 向父组件暴漏以下方法
defineExpose({
  open,
  close,
  showLoading,
  hideLoading,
});
</script>

<style>
.formDrawer {
  width: 100%;
  height: 100%;
  position: relative;
  @apply flex flex-col;
}
.formDrawer .body {
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow-y: auto;
}
.formDrawer .actions {
  height: 50px;
  @apply mt-auto flex items-center;
}
</style>

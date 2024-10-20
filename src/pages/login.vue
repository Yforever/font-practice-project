<template>
  <el-row class="min-h-screen bg-indigo-500">
    <el-col :lg="16" :md="12" class="flex items-center justify-center">
      <div>
        <div class="font-bold text-5xl text-light-50 mb-4">欢迎光临</div>
        <div class="text-gray-200 text-sm">
          欢迎演示内容测试测试测试测试~~~~~~~~~~~~~~~~~~
        </div>
      </div>
    </el-col>
    <el-col
      :lg="8"
      :md="12"
      class="bg-light-50 flex items-center justify-center flex-col"
    >
      <h2 class="font-bold text-3xl text-gray-800">欢迎登录</h2>
      <div
        class="flex items-center justify-center my-5 text-gray-300 space-x-2"
      >
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form
        ref="formRef"
        :rules="rules"
        :model="form"
        label-width="auto"
        class="w-[250px]"
      >
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
            show-password
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            round
            color="#626aef"
            class="w-[250px]"
            type="primary"
            @click="onSubmit"
            :loading="loading"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { toast } from "~/composables/util";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { setToken } from "~/composables/auth";

const store = useStore();
const router = useRouter();
// do not use same name with ref
const form = reactive({
  name: "",
  username: "",
  password: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const rules = {
  username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
  password: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
};
const formRef = ref(null);
const loading = ref(false);
const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }
    // 测试代码，没有登录限制
    setToken("123");

    // 没有完善接口，暂时不调用接口
    // loading.value = true;
    // store
    //   .dispatch("login", form)
    //   .then((res) => {
    //     toast("登录提示", "登录成功");
    //     router.push("/");
    //   })
    //   .finally(() => {
    //     loading.value = false;
    //   });

    // login(form.username, form.password)
    //   .then((res) => {
    //     // 提示成功
    //     toast("登录成功");
    //     // 存储token
    //     setToken("admin-token", "xxxxx");
    //     // 跳转到后台首页
    //     router.push("/");
    //   })
    //   .finally(() => {
    //     loading.value = false;
    //   });
  });
};

// 监听回车事件
function onKeyUp(e) {
  if (e.key == "Enter") onSubmit();
}
// 添加键盘监听
onMounted(() => {
  document.addEventListener("keyup", onKeyUp);
});
// 移除键盘监听
onBeforeUnmount(() => {
  document.removeEventListener("keyup", onKeyUp);
});
</script>

<style></style>

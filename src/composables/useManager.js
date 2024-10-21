import { ref, reactive } from "vue";
import { logout, changePassword } from "~/api/manager";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { showModal, toast } from "~/composables/util";

export function useRepassword() {
  const router = useRouter();
  const store = useStore();

  const form = reactive({
    oldPassword: "",
    reportPassword: "",
    password: "",
  });
  const formDrawerRef = ref(null);

  const rules = {
    oldPassword: [
      { required: true, message: "旧密码不能为空", trigger: "blur" },
    ],
    reportPassword: [
      { required: true, message: "重新确认新密码", trigger: "blur" },
    ],
    password: [{ required: true, message: "新密码不能为空", trigger: "blur" }],
  };
  const formRef = ref(null);
  const onSubmit = () => {
    formRef.value.validate((valid) => {
      if (!valid) {
        return false;
      }
      // 实现loading效果，通过组件之间
      // formDrawerRef.value.showLoading()
      toast("修改密码提示", "修改密码成功，请重新登录");
      store.dispath("logout");
      router.path("/login");
    });
  };
  const openRePasswordForm = () => formDrawerRef.value.open();

  return {
    formDrawerRef,
    form,
    rules,
    onSubmit,
    openRePasswordForm,
  };
}

export function useLogout() {
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

  return {
    handleLogout,
  };
}

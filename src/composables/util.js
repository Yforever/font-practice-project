import { ElNotification, ElMessageBox } from "element-plus";
import nprogress from "nprogress";

// 消息提示
export function toast(
  title,
  message,
  type = "success",
  dangerouslyUseHTMLString = false
) {
  ElNotification({
    title,
    message,
    type,
    dangerouslyUseHTMLString,
    duration: 3000,
  });
}

// 消息弹出框
export function showModal(content = "提示内容", type = "warning", title = "") {
  return ElMessageBox.confirm(content, title, {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type,
  });
}

// 显示全屏loading
export function showFullLoading() {
  nprogress.start();
}
// 隐藏全屏loading
export function hideFullLoading() {
  nprogress.done();
}

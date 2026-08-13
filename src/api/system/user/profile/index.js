/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：个人中心页面
 * 功能：个人中心相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getUserProfile() {
  return requestClient.get(
    "/system/user/profile/get"
  );
}
function updateUserProfile(data) {
  return requestClient.put("/system/user/profile/update", data);
}
function updateUserPassword(data) {
  return requestClient.put("/system/user/profile/update-password", data);
}
export {
  getUserProfile,
  updateUserPassword,
  updateUserProfile
};

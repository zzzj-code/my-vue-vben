/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：登录日志页面
 * 功能：登录日志相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getLoginLogPage(params) {
  return requestClient.get(
    "/system/login-log/page",
    { params }
  );
}
function exportLoginLog(params) {
  return requestClient.download("/system/login-log/export-excel", { params });
}
export {
  exportLoginLog,
  getLoginLogPage
};

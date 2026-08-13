/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：短信日志页面
 * 功能：短信日志相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getSmsLogPage(params) {
  return requestClient.get(
    "/system/sms-log/page",
    { params }
  );
}
function exportSmsLog(params) {
  return requestClient.download("/system/sms-log/export-excel", { params });
}
export {
  exportSmsLog,
  getSmsLogPage
};

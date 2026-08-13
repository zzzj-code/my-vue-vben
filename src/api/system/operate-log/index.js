/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：操作日志页面
 * 功能：操作日志相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getOperateLogPage(params) {
  return requestClient.get(
    "/system/operate-log/page",
    { params }
  );
}
function exportOperateLog(params) {
  return requestClient.download("/system/operate-log/export-excel", { params });
}
export {
  exportOperateLog,
  getOperateLogPage
};

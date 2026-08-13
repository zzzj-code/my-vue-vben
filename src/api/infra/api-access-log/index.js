/**
 * ============================================================
 * 模块：基础设施模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/infra
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getApiAccessLogPage(params) {
  return requestClient.get(
    "/infra/api-access-log/page",
    { params }
  );
}
function exportApiAccessLog(params) {
  return requestClient.download("/infra/api-access-log/export-excel", {
    params
  });
}
export {
  exportApiAccessLog,
  getApiAccessLogPage
};

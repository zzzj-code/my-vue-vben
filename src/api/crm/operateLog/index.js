/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：操作日志页面
 * 功能：操作日志相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getOperateLogPage(params) {
  return requestClient.get(
    "/crm/operate-log/page",
    { params }
  );
}
export {
  getOperateLogPage
};

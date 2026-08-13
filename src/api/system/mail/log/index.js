/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：邮件日志页面
 * 功能：邮件日志相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getMailLogPage(params) {
  return requestClient.get(
    "/system/mail-log/page",
    { params }
  );
}
export {
  getMailLogPage
};

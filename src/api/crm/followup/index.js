/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：跟进记录页面
 * 功能：跟进记录相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getFollowUpRecordPage(params) {
  return requestClient.get(
    "/crm/follow-up-record/page",
    { params }
  );
}
function createFollowUpRecord(data) {
  return requestClient.post("/crm/follow-up-record/create", data);
}
function deleteFollowUpRecord(id) {
  return requestClient.delete(`/crm/follow-up-record/delete?id=${id}`);
}
export {
  createFollowUpRecord,
  deleteFollowUpRecord,
  getFollowUpRecordPage
};

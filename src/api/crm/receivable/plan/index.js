/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：回款计划页面
 * 功能：回款计划相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getReceivablePlanPage(params) {
  return requestClient.get(
    "/crm/receivable-plan/page",
    { params }
  );
}
function getReceivablePlanPageByCustomer(params) {
  return requestClient.get(
    "/crm/receivable-plan/page-by-customer",
    { params }
  );
}
function getReceivablePlan(id) {
  return requestClient.get(
    "/crm/receivable-plan/get",
    { params: { id } }
  );
}
function getReceivablePlanSimpleList(customerId, contractId) {
  return requestClient.get(
    "/crm/receivable-plan/simple-list",
    {
      params: { customerId, contractId }
    }
  );
}
function createReceivablePlan(data) {
  return requestClient.post("/crm/receivable-plan/create", data);
}
function updateReceivablePlan(data) {
  return requestClient.put("/crm/receivable-plan/update", data);
}
function deleteReceivablePlan(id) {
  return requestClient.delete("/crm/receivable-plan/delete", {
    params: { id }
  });
}
function exportReceivablePlan(params) {
  return requestClient.download("/crm/receivable-plan/export-excel", {
    params
  });
}
function getReceivablePlanRemindCount() {
  return requestClient.get("/crm/receivable-plan/remind-count");
}
export {
  createReceivablePlan,
  deleteReceivablePlan,
  exportReceivablePlan,
  getReceivablePlan,
  getReceivablePlanPage,
  getReceivablePlanPageByCustomer,
  getReceivablePlanRemindCount,
  getReceivablePlanSimpleList,
  updateReceivablePlan
};

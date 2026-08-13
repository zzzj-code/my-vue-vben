/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：客户限制配置页面
 * 功能：客户限制配置相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
var LimitConfType = /* @__PURE__ */ ((LimitConfType2) => {
  LimitConfType2[LimitConfType2["CUSTOMER_LOCK_LIMIT"] = 2] = "CUSTOMER_LOCK_LIMIT";
  LimitConfType2[LimitConfType2["CUSTOMER_QUANTITY_LIMIT"] = 1] = "CUSTOMER_QUANTITY_LIMIT";
  return LimitConfType2;
})(LimitConfType || {});
function getCustomerLimitConfigPage(params) {
  return requestClient.get("/crm/customer-limit-config/page", { params });
}
function getCustomerLimitConfig(id) {
  return requestClient.get(
    `/crm/customer-limit-config/get?id=${id}`
  );
}
function createCustomerLimitConfig(data) {
  return requestClient.post("/crm/customer-limit-config/create", data);
}
function updateCustomerLimitConfig(data) {
  return requestClient.put("/crm/customer-limit-config/update", data);
}
function deleteCustomerLimitConfig(id) {
  return requestClient.delete(`/crm/customer-limit-config/delete?id=${id}`);
}
export {
  LimitConfType,
  createCustomerLimitConfig,
  deleteCustomerLimitConfig,
  getCustomerLimitConfig,
  getCustomerLimitConfigPage,
  updateCustomerLimitConfig
};

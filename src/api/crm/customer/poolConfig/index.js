/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：客户公海配置页面
 * 功能：客户公海配置相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getCustomerPoolConfig() {
  return requestClient.get(
    "/crm/customer-pool-config/get"
  );
}
function saveCustomerPoolConfig(data) {
  return requestClient.put("/crm/customer-pool-config/save", data);
}
export {
  getCustomerPoolConfig,
  saveCustomerPoolConfig
};

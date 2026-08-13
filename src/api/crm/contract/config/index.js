/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：合同配置页面
 * 功能：合同配置相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getContractConfig() {
  return requestClient.get(
    "/crm/contract-config/get"
  );
}
function saveContractConfig(data) {
  return requestClient.put("/crm/contract-config/save", data);
}
export {
  getContractConfig,
  saveContractConfig
};

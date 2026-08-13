/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：业绩统计页面
 * 功能：业绩统计相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getContractPricePerformance(params) {
  return requestClient.get(
    "/crm/statistics-performance/get-contract-price-performance",
    { params }
  );
}
function getReceivablePricePerformance(params) {
  return requestClient.get(
    "/crm/statistics-performance/get-receivable-price-performance",
    { params }
  );
}
function getContractCountPerformance(params) {
  return requestClient.get(
    "/crm/statistics-performance/get-contract-count-performance",
    { params }
  );
}
export {
  getContractCountPerformance,
  getContractPricePerformance,
  getReceivablePricePerformance
};

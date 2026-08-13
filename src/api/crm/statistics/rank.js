/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：排行榜页面
 * 功能：排行榜相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getDatas(activeTabName, params) {
  switch (activeTabName) {
    case "contactCountRank": {
      return getContactsCountRank(params);
    }
    case "contractCountRank": {
      return getContractCountRank(params);
    }
    case "contractPriceRank": {
      return getContractPriceRank(params);
    }
    case "customerCountRank": {
      return getCustomerCountRank(params);
    }
    case "followCountRank": {
      return getFollowCountRank(params);
    }
    case "followCustomerCountRank": {
      return getFollowCustomerCountRank(params);
    }
    case "productSalesRank": {
      return getProductSalesRank(params);
    }
    case "receivablePriceRank": {
      return getReceivablePriceRank(params);
    }
    default: {
      return [];
    }
  }
}
function getContractPriceRank(params) {
  return requestClient.get(
    "/crm/statistics-rank/get-contract-price-rank",
    { params }
  );
}
function getReceivablePriceRank(params) {
  return requestClient.get(
    "/crm/statistics-rank/get-receivable-price-rank",
    { params }
  );
}
function getContractCountRank(params) {
  return requestClient.get(
    "/crm/statistics-rank/get-contract-count-rank",
    { params }
  );
}
function getProductSalesRank(params) {
  return requestClient.get(
    "/crm/statistics-rank/get-product-sales-rank",
    { params }
  );
}
function getCustomerCountRank(params) {
  return requestClient.get(
    "/crm/statistics-rank/get-customer-count-rank",
    { params }
  );
}
function getContactsCountRank(params) {
  return requestClient.get(
    "/crm/statistics-rank/get-contacts-count-rank",
    { params }
  );
}
function getFollowCountRank(params) {
  return requestClient.get(
    "/crm/statistics-rank/get-follow-count-rank",
    { params }
  );
}
function getFollowCustomerCountRank(params) {
  return requestClient.get(
    "/crm/statistics-rank/get-follow-customer-count-rank",
    { params }
  );
}
export {
  getContactsCountRank,
  getContractCountRank,
  getContractPriceRank,
  getCustomerCountRank,
  getDatas,
  getFollowCountRank,
  getFollowCustomerCountRank,
  getProductSalesRank,
  getReceivablePriceRank
};

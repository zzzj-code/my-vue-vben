import { requestClient } from "#/api/request";
function getDatas(activeTabName, params) {
  switch (activeTabName) {
    case "conversionStat": {
      return getContractSummary(params);
    }
    case "customerSummary": {
      return getCustomerSummaryByUser(params);
    }
    case "dealCycleByArea": {
      return getCustomerDealCycleByArea(params);
    }
    case "dealCycleByProduct": {
      return getCustomerDealCycleByProduct(params);
    }
    case "dealCycleByUser": {
      return getCustomerDealCycleByUser(params);
    }
    case "followUpSummary": {
      return getFollowUpSummaryByUser(params);
    }
    case "followUpType": {
      return getFollowUpSummaryByType(params);
    }
    case "poolSummary": {
      return getPoolSummaryByUser(params);
    }
    default: {
      return [];
    }
  }
}
function getChartDatas(activeTabName, params) {
  switch (activeTabName) {
    case "conversionStat": {
      return getCustomerSummaryByDate(params);
    }
    case "customerSummary": {
      return getCustomerSummaryByDate(params);
    }
    case "dealCycleByArea": {
      return getCustomerDealCycleByArea(params);
    }
    case "dealCycleByProduct": {
      return getCustomerDealCycleByProduct(params);
    }
    case "dealCycleByUser": {
      return getCustomerDealCycleByUser(params);
    }
    case "followUpSummary": {
      return getFollowUpSummaryByDate(params);
    }
    case "followUpType": {
      return getFollowUpSummaryByType(params);
    }
    case "poolSummary": {
      return getPoolSummaryByDate(params);
    }
    default: {
      return [];
    }
  }
}
function getCustomerSummaryByDate(params) {
  return requestClient.get("/crm/statistics-customer/get-customer-summary-by-date", { params });
}
function getCustomerSummaryByUser(params) {
  return requestClient.get("/crm/statistics-customer/get-customer-summary-by-user", { params });
}
function getFollowUpSummaryByDate(params) {
  return requestClient.get("/crm/statistics-customer/get-follow-up-summary-by-date", { params });
}
function getFollowUpSummaryByUser(params) {
  return requestClient.get("/crm/statistics-customer/get-follow-up-summary-by-user", { params });
}
function getFollowUpSummaryByType(params) {
  return requestClient.get("/crm/statistics-customer/get-follow-up-summary-by-type", { params });
}
function getContractSummary(params) {
  return requestClient.get("/crm/statistics-customer/get-contract-summary", { params });
}
function getPoolSummaryByDate(params) {
  return requestClient.get(
    "/crm/statistics-customer/get-pool-summary-by-date",
    { params }
  );
}
function getPoolSummaryByUser(params) {
  return requestClient.get(
    "/crm/statistics-customer/get-pool-summary-by-user",
    { params }
  );
}
function getCustomerDealCycleByDate(params) {
  return requestClient.get("/crm/statistics-customer/get-customer-deal-cycle-by-date", { params });
}
function getCustomerDealCycleByUser(params) {
  return requestClient.get("/crm/statistics-customer/get-customer-deal-cycle-by-user", { params });
}
function getCustomerDealCycleByArea(params) {
  return requestClient.get("/crm/statistics-customer/get-customer-deal-cycle-by-area", { params });
}
function getCustomerDealCycleByProduct(params) {
  return requestClient.get("/crm/statistics-customer/get-customer-deal-cycle-by-product", { params });
}
export {
  getChartDatas,
  getContractSummary,
  getCustomerDealCycleByArea,
  getCustomerDealCycleByDate,
  getCustomerDealCycleByProduct,
  getCustomerDealCycleByUser,
  getCustomerSummaryByDate,
  getCustomerSummaryByUser,
  getDatas,
  getFollowUpSummaryByDate,
  getFollowUpSummaryByType,
  getFollowUpSummaryByUser,
  getPoolSummaryByDate,
  getPoolSummaryByUser
};

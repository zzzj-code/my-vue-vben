import { requestClient } from "#/api/request";
function getDatas(activeTabName, params) {
  switch (activeTabName) {
    case "businessInversionRateSummary": {
      return getBusinessPageByDate(params);
    }
    case "businessSummary": {
      return getBusinessPageByDate(params);
    }
    case "funnel": {
      return getBusinessSummaryByEndStatus(params);
    }
    default: {
      return [];
    }
  }
}
function getChartDatas(activeTabName, params) {
  switch (activeTabName) {
    case "businessInversionRateSummary": {
      return getBusinessInversionRateSummaryByDate(params);
    }
    case "businessSummary": {
      return getBusinessSummaryByDate(params);
    }
    case "funnel": {
      return getFunnelSummary(params);
    }
    default: {
      return [];
    }
  }
}
function getFunnelSummary(params) {
  return requestClient.get(
    "/crm/statistics-funnel/get-funnel-summary",
    { params }
  );
}
function getBusinessSummaryByEndStatus(params) {
  return requestClient.get(
    "/crm/statistics-funnel/get-business-summary-by-end-status",
    { params }
  );
}
function getBusinessSummaryByDate(params) {
  return requestClient.get("/crm/statistics-funnel/get-business-summary-by-date", { params });
}
function getBusinessInversionRateSummaryByDate(params) {
  return requestClient.get("/crm/statistics-funnel/get-business-inversion-rate-summary-by-date", {
    params
  });
}
function getBusinessPageByDate(params) {
  return requestClient.get(
    "/crm/statistics-funnel/get-business-page-by-date",
    { params }
  );
}
export {
  getBusinessInversionRateSummaryByDate,
  getBusinessPageByDate,
  getBusinessSummaryByDate,
  getBusinessSummaryByEndStatus,
  getChartDatas,
  getDatas,
  getFunnelSummary
};

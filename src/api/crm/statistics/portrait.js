import { requestClient } from "#/api/request";
function getDatas(activeTabName, params) {
  switch (activeTabName) {
    case "area": {
      return getCustomerArea(params);
    }
    case "industry": {
      return getCustomerIndustry(params);
    }
    case "level": {
      return getCustomerLevel(params);
    }
    case "source": {
      return getCustomerSource(params);
    }
    default: {
      return [];
    }
  }
}
function getCustomerIndustry(params) {
  return requestClient.get(
    "/crm/statistics-portrait/get-customer-industry-summary",
    { params }
  );
}
function getCustomerSource(params) {
  return requestClient.get(
    "/crm/statistics-portrait/get-customer-source-summary",
    { params }
  );
}
function getCustomerLevel(params) {
  return requestClient.get(
    "/crm/statistics-portrait/get-customer-level-summary",
    { params }
  );
}
function getCustomerArea(params) {
  return requestClient.get(
    "/crm/statistics-portrait/get-customer-area-summary",
    { params }
  );
}
export {
  getCustomerArea,
  getCustomerIndustry,
  getCustomerLevel,
  getCustomerSource,
  getDatas
};

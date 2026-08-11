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

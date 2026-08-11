import { requestClient } from "#/api/request";
function getSaleReturnPage(params) {
  return requestClient.get(
    "/erp/sale-return/page",
    {
      params
    }
  );
}
function getSaleReturn(id) {
  return requestClient.get(
    `/erp/sale-return/get?id=${id}`
  );
}
function createSaleReturn(data) {
  return requestClient.post("/erp/sale-return/create", data);
}
function updateSaleReturn(data) {
  return requestClient.put("/erp/sale-return/update", data);
}
function updateSaleReturnStatus(id, status) {
  return requestClient.put("/erp/sale-return/update-status", null, {
    params: { id, status }
  });
}
function deleteSaleReturn(ids) {
  return requestClient.delete("/erp/sale-return/delete", {
    params: {
      ids: ids.join(",")
    }
  });
}
function exportSaleReturn(params) {
  return requestClient.download("/erp/sale-return/export-excel", {
    params
  });
}
export {
  createSaleReturn,
  deleteSaleReturn,
  exportSaleReturn,
  getSaleReturn,
  getSaleReturnPage,
  updateSaleReturn,
  updateSaleReturnStatus
};

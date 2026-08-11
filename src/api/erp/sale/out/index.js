import { requestClient } from "#/api/request";
function getSaleOutPage(params) {
  return requestClient.get(
    "/erp/sale-out/page",
    {
      params
    }
  );
}
function getSaleOut(id) {
  return requestClient.get(`/erp/sale-out/get?id=${id}`);
}
function createSaleOut(data) {
  return requestClient.post("/erp/sale-out/create", data);
}
function updateSaleOut(data) {
  return requestClient.put("/erp/sale-out/update", data);
}
function updateSaleOutStatus(id, status) {
  return requestClient.put("/erp/sale-out/update-status", null, {
    params: { id, status }
  });
}
function deleteSaleOut(ids) {
  return requestClient.delete("/erp/sale-out/delete", {
    params: {
      ids: ids.join(",")
    }
  });
}
function exportSaleOut(params) {
  return requestClient.download("/erp/sale-out/export-excel", {
    params
  });
}
export {
  createSaleOut,
  deleteSaleOut,
  exportSaleOut,
  getSaleOut,
  getSaleOutPage,
  updateSaleOut,
  updateSaleOutStatus
};

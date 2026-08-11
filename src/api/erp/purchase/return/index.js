import { requestClient } from "#/api/request";
function getPurchaseReturnPage(params) {
  return requestClient.get(
    "/erp/purchase-return/page",
    {
      params
    }
  );
}
function getPurchaseReturn(id) {
  return requestClient.get(
    `/erp/purchase-return/get?id=${id}`
  );
}
function createPurchaseReturn(data) {
  return requestClient.post("/erp/purchase-return/create", data);
}
function updatePurchaseReturn(data) {
  return requestClient.put("/erp/purchase-return/update", data);
}
function updatePurchaseReturnStatus(id, status) {
  return requestClient.put("/erp/purchase-return/update-status", null, {
    params: { id, status }
  });
}
function deletePurchaseReturn(ids) {
  return requestClient.delete("/erp/purchase-return/delete", {
    params: {
      ids: ids.join(",")
    }
  });
}
function exportPurchaseReturn(params) {
  return requestClient.download("/erp/purchase-return/export-excel", {
    params
  });
}
export {
  createPurchaseReturn,
  deletePurchaseReturn,
  exportPurchaseReturn,
  getPurchaseReturn,
  getPurchaseReturnPage,
  updatePurchaseReturn,
  updatePurchaseReturnStatus
};

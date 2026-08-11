import { requestClient } from "#/api/request";
function getPurchaseOrderPage(params) {
  return requestClient.get("/wms/purchase-order/page", { params });
}
function getPurchaseOrder(id) {
  return requestClient.get(`/wms/purchase-order/get?id=${id}`);
}
function createPurchaseOrder(data) {
  return requestClient.post("/wms/purchase-order/create", data);
}
function submitPurchaseOrder(data) {
  return requestClient.post("/wms/purchase-order/submit", data);
}
function updatePurchaseOrder(data) {
  return requestClient.put("/wms/purchase-order/update", data);
}
function deletePurchaseOrder(id) {
  return requestClient.delete(`/wms/purchase-order/delete?id=${id}`);
}
function deletePurchaseOrderListByIds(ids) {
  return requestClient.delete(`/wms/purchase-order/delete-list?ids=${ids.join(",")}`);
}
function exportPurchaseOrder(params) {
  return requestClient.download("/wms/purchase-order/export-excel", params);
}
function getPurchaseOrderDetailListByPurchaseOrderId(purchaseOrderId) {
  return requestClient.get(`/wms/purchase-order/purchase-order-detail/list-by-purchase-order-id?purchaseOrderId=${purchaseOrderId}`);
}
export {
  createPurchaseOrder,
  deletePurchaseOrder,
  deletePurchaseOrderListByIds,
  exportPurchaseOrder,
  getPurchaseOrder,
  getPurchaseOrderDetailListByPurchaseOrderId,
  getPurchaseOrderPage,
  submitPurchaseOrder,
  updatePurchaseOrder
};

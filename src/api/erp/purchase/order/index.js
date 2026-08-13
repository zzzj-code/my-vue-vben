/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getPurchaseOrderPage(params) {
  return requestClient.get(
    "/erp/purchase-order/page",
    { params }
  );
}
function getPurchaseOrder(id) {
  return requestClient.get(
    `/erp/purchase-order/get?id=${id}`
  );
}
function createPurchaseOrder(data) {
  return requestClient.post("/erp/purchase-order/create", data);
}
function updatePurchaseOrder(data) {
  return requestClient.put("/erp/purchase-order/update", data);
}
function updatePurchaseOrderStatus(id, status) {
  return requestClient.put("/erp/purchase-order/update-status", null, {
    params: { id, status }
  });
}
function deletePurchaseOrder(ids) {
  return requestClient.delete("/erp/purchase-order/delete", {
    params: { ids: ids.join(",") }
  });
}
function exportPurchaseOrder(params) {
  return requestClient.download("/erp/purchase-order/export-excel", { params });
}
export {
  createPurchaseOrder,
  deletePurchaseOrder,
  exportPurchaseOrder,
  getPurchaseOrder,
  getPurchaseOrderPage,
  updatePurchaseOrder,
  updatePurchaseOrderStatus
};

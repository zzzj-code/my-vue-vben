/**
 * ============================================================
 * 模块：WMS仓储模块
 * 页面：采购入库页面
 * 功能：采购入库相关接口
 * 接口前缀：/admin-api/wms
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getPurchaseInWarehousingPage(params) {
  return requestClient.get("/wms/purchase-in-warehousing/page", { params });
}
function getPurchaseInWarehousing(id) {
  return requestClient.get(`/wms/purchase-in-warehousing/get?id=${id}`);
}
function createPurchaseInWarehousing(data) {
  return requestClient.post("/wms/purchase-in-warehousing/create", data);
}
function updatePurchaseInWarehousing(data) {
  return requestClient.put("/wms/purchase-in-warehousing/update", data);
}
function deletePurchaseInWarehousing(id) {
  return requestClient.delete(`/wms/purchase-in-warehousing/delete?id=${id}`);
}
function deletePurchaseInWarehousingListByIds(ids) {
  return requestClient.delete(`/wms/purchase-in-warehousing/delete-list?ids=${ids.join(",")}`);
}
function exportPurchaseInWarehousing(params) {
  return requestClient.download("/wms/purchase-in-warehousing/export-excel", params);
}
function getGoodsWarehousingDetailListByPurchaseOrderId(purchaseOrderId) {
  return requestClient.get(`/wms/purchase-in-warehousing/goods-warehousing-detail/list-by-purchase-order-id?purchaseOrderId=${purchaseOrderId}`);
}
export {
  createPurchaseInWarehousing,
  deletePurchaseInWarehousing,
  deletePurchaseInWarehousingListByIds,
  exportPurchaseInWarehousing,
  getGoodsWarehousingDetailListByPurchaseOrderId,
  getPurchaseInWarehousing,
  getPurchaseInWarehousingPage,
  updatePurchaseInWarehousing
};

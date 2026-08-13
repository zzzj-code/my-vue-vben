/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getPurchaseInPage(params) {
  return requestClient.get(
    "/erp/purchase-in/page",
    {
      params
    }
  );
}
function getPurchaseIn(id) {
  return requestClient.get(
    `/erp/purchase-in/get?id=${id}`
  );
}
function createPurchaseIn(data) {
  return requestClient.post("/erp/purchase-in/create", data);
}
function updatePurchaseIn(data) {
  return requestClient.put("/erp/purchase-in/update", data);
}
function updatePurchaseInStatus(id, status) {
  return requestClient.put("/erp/purchase-in/update-status", null, {
    params: {
      id,
      status
    }
  });
}
function deletePurchaseIn(ids) {
  return requestClient.delete("/erp/purchase-in/delete", {
    params: {
      ids: ids.join(",")
    }
  });
}
function exportPurchaseIn(params) {
  return requestClient.download("/erp/purchase-in/export-excel", {
    params
  });
}
export {
  createPurchaseIn,
  deletePurchaseIn,
  exportPurchaseIn,
  getPurchaseIn,
  getPurchaseInPage,
  updatePurchaseIn,
  updatePurchaseInStatus
};

/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getStockOutPage(params) {
  return requestClient.get(
    "/erp/stock-out/page",
    {
      params
    }
  );
}
function getStockOut(id) {
  return requestClient.get(
    `/erp/stock-out/get?id=${id}`
  );
}
function createStockOut(data) {
  return requestClient.post("/erp/stock-out/create", data);
}
function updateStockOut(data) {
  return requestClient.put("/erp/stock-out/update", data);
}
function updateStockOutStatus(id, status) {
  return requestClient.put("/erp/stock-out/update-status", null, {
    params: { id, status }
  });
}
function deleteStockOut(ids) {
  return requestClient.delete("/erp/stock-out/delete", {
    params: {
      ids: ids.join(",")
    }
  });
}
function exportStockOut(params) {
  return requestClient.download("/erp/stock-out/export-excel", {
    params
  });
}
export {
  createStockOut,
  deleteStockOut,
  exportStockOut,
  getStockOut,
  getStockOutPage,
  updateStockOut,
  updateStockOutStatus
};

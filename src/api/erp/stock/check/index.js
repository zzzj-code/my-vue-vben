/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getStockCheckPage(params) {
  return requestClient.get(
    "/erp/stock-check/page",
    {
      params
    }
  );
}
function getStockCheck(id) {
  return requestClient.get(
    `/erp/stock-check/get?id=${id}`
  );
}
function createStockCheck(data) {
  return requestClient.post("/erp/stock-check/create", data);
}
function updateStockCheck(data) {
  return requestClient.put("/erp/stock-check/update", data);
}
function updateStockCheckStatus(id, status) {
  return requestClient.put("/erp/stock-check/update-status", null, {
    params: { id, status }
  });
}
function deleteStockCheck(ids) {
  return requestClient.delete("/erp/stock-check/delete", {
    params: {
      ids: ids.join(",")
    }
  });
}
function exportStockCheck(params) {
  return requestClient.download("/erp/stock-check/export-excel", {
    params
  });
}
export {
  createStockCheck,
  deleteStockCheck,
  exportStockCheck,
  getStockCheck,
  getStockCheckPage,
  updateStockCheck,
  updateStockCheckStatus
};

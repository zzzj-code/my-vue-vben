/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getStockMovePage(params) {
  return requestClient.get(
    "/erp/stock-move/page",
    {
      params
    }
  );
}
function getStockMove(id) {
  return requestClient.get(
    `/erp/stock-move/get?id=${id}`
  );
}
function createStockMove(data) {
  return requestClient.post("/erp/stock-move/create", data);
}
function updateStockMove(data) {
  return requestClient.put("/erp/stock-move/update", data);
}
function updateStockMoveStatus(id, status) {
  return requestClient.put("/erp/stock-move/update-status", null, {
    params: { id, status }
  });
}
function deleteStockMove(ids) {
  return requestClient.delete("/erp/stock-move/delete", {
    params: {
      ids: ids.join(",")
    }
  });
}
function exportStockMove(params) {
  return requestClient.download("/erp/stock-move/export-excel", { params });
}
export {
  createStockMove,
  deleteStockMove,
  exportStockMove,
  getStockMove,
  getStockMovePage,
  updateStockMove,
  updateStockMoveStatus
};

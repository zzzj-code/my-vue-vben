import { requestClient } from "#/api/request";
function getStockInPage(params) {
  return requestClient.get(
    "/erp/stock-in/page",
    {
      params
    }
  );
}
function getStockIn(id) {
  return requestClient.get(`/erp/stock-in/get?id=${id}`);
}
function createStockIn(data) {
  return requestClient.post("/erp/stock-in/create", data);
}
function updateStockIn(data) {
  return requestClient.put("/erp/stock-in/update", data);
}
function updateStockInStatus(id, status) {
  return requestClient.put("/erp/stock-in/update-status", null, {
    params: { id, status }
  });
}
function deleteStockIn(ids) {
  return requestClient.delete("/erp/stock-in/delete", {
    params: {
      ids: ids.join(",")
    }
  });
}
function exportStockIn(params) {
  return requestClient.download("/erp/stock-in/export-excel", {
    params
  });
}
export {
  createStockIn,
  deleteStockIn,
  exportStockIn,
  getStockIn,
  getStockInPage,
  updateStockIn,
  updateStockInStatus
};

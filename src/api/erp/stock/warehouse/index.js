/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getWarehousePage(params) {
  return requestClient.get(
    "/erp/warehouse/page",
    { params }
  );
}
function getWarehouseSimpleList() {
  return requestClient.get(
    "/erp/warehouse/simple-list"
  );
}
function getWarehouse(id) {
  return requestClient.get(
    `/erp/warehouse/get?id=${id}`
  );
}
function createWarehouse(data) {
  return requestClient.post("/erp/warehouse/create", data);
}
function updateWarehouse(data) {
  return requestClient.put("/erp/warehouse/update", data);
}
function updateWarehouseDefaultStatus(id, defaultStatus) {
  return requestClient.put("/erp/warehouse/update-default-status", null, {
    params: { id, defaultStatus }
  });
}
function deleteWarehouse(id) {
  return requestClient.delete(`/erp/warehouse/delete?id=${id}`);
}
function exportWarehouse(params) {
  return requestClient.download("/erp/warehouse/export-excel", { params });
}
export {
  createWarehouse,
  deleteWarehouse,
  exportWarehouse,
  getWarehouse,
  getWarehousePage,
  getWarehouseSimpleList,
  updateWarehouse,
  updateWarehouseDefaultStatus
};

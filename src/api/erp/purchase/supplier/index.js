/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getSupplierPage(params) {
  return requestClient.get(
    "/erp/supplier/page",
    { params }
  );
}
function getSupplierSimpleList() {
  return requestClient.get(
    "/erp/supplier/simple-list"
  );
}
function getSupplier(id) {
  return requestClient.get(
    `/erp/supplier/get?id=${id}`
  );
}
function createSupplier(data) {
  return requestClient.post("/erp/supplier/create", data);
}
function updateSupplier(data) {
  return requestClient.put("/erp/supplier/update", data);
}
function deleteSupplier(id) {
  return requestClient.delete(`/erp/supplier/delete?id=${id}`);
}
function exportSupplier(params) {
  return requestClient.download("/erp/supplier/export-excel", { params });
}
export {
  createSupplier,
  deleteSupplier,
  exportSupplier,
  getSupplier,
  getSupplierPage,
  getSupplierSimpleList,
  updateSupplier
};

/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getProductUnitPage(params) {
  return requestClient.get(
    "/erp/product-unit/page",
    { params }
  );
}
function getProductUnitSimpleList() {
  return requestClient.get(
    "/erp/product-unit/simple-list"
  );
}
function getProductUnit(id) {
  return requestClient.get(
    `/erp/product-unit/get?id=${id}`
  );
}
function createProductUnit(data) {
  return requestClient.post("/erp/product-unit/create", data);
}
function updateProductUnit(data) {
  return requestClient.put("/erp/product-unit/update", data);
}
function deleteProductUnit(id) {
  return requestClient.delete(`/erp/product-unit/delete?id=${id}`);
}
function exportProductUnit(params) {
  return requestClient.download("/erp/product-unit/export-excel", { params });
}
export {
  createProductUnit,
  deleteProductUnit,
  exportProductUnit,
  getProductUnit,
  getProductUnitPage,
  getProductUnitSimpleList,
  updateProductUnit
};

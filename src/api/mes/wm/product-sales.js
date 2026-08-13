/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：产品销售页面 (src/views/pages/mes/wm/product-sales.vue)
 * 功能：产品销售的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/product-sales
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取产品销售分页列表
function getProductSalesPage(params) {
  return requestClient.get("/mes/wm/product-sales/page", { params });
}

// 获取产品销售详情
function getProductSales(id) {
  return requestClient.get(`/mes/wm/product-sales/get?id=${id}`);
}

// 新增产品销售
function createProductSales(data) {
  return requestClient.post("/mes/wm/product-sales/create", data);
}

// 修改产品销售
function updateProductSales(data) {
  return requestClient.put("/mes/wm/product-sales/update", data);
}

// 删除产品销售
function deleteProductSales(id) {
  return requestClient.delete(`/mes/wm/product-sales/delete?id=${id}`);
}

// 批量删除产品销售
function deleteProductSalesListByIds(ids) {
  return requestClient.delete(`/mes/wm/product-sales/delete-list?ids=${ids.join(",")}`);
}

// 导出产品销售
function exportProductSales(params) {
  return requestClient.download("/mes/wm/product-sales/export-excel", params);
}

export {
  createProductSales,
  deleteProductSales,
  deleteProductSalesListByIds,
  exportProductSales,
  getProductSales,
  getProductSalesPage,
  updateProductSales,
};

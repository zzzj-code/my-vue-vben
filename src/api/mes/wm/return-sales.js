/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：销售退货页面 (src/views/pages/mes/wm/return-sales.vue)
 * 功能：销售退货的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/return-sales
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取销售退货分页列表
function getReturnSalesPage(params) {
  return requestClient.get("/mes/wm/return-sales/page", { params });
}

// 获取销售退货详情
function getReturnSales(id) {
  return requestClient.get(`/mes/wm/return-sales/get?id=${id}`);
}

// 新增销售退货
function createReturnSales(data) {
  return requestClient.post("/mes/wm/return-sales/create", data);
}

// 修改销售退货
function updateReturnSales(data) {
  return requestClient.put("/mes/wm/return-sales/update", data);
}

// 删除销售退货
function deleteReturnSales(id) {
  return requestClient.delete(`/mes/wm/return-sales/delete?id=${id}`);
}

// 批量删除销售退货
function deleteReturnSalesListByIds(ids) {
  return requestClient.delete(`/mes/wm/return-sales/delete-list?ids=${ids.join(",")}`);
}

// 导出销售退货
function exportReturnSales(params) {
  return requestClient.download("/mes/wm/return-sales/export-excel", params);
}

export {
  createReturnSales,
  deleteReturnSales,
  deleteReturnSalesListByIds,
  exportReturnSales,
  getReturnSales,
  getReturnSalesPage,
  updateReturnSales,
};

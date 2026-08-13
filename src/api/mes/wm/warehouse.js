/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：仓库管理页面 (src/views/pages/mes/wm/warehouse.vue)
 * 功能：仓库管理的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/warehouse
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取仓库管理分页列表
function getWarehousePage(params) {
  return requestClient.get("/mes/wm/warehouse/page", { params });
}

// 获取仓库管理详情
function getWarehouse(id) {
  return requestClient.get(`/mes/wm/warehouse/get?id=${id}`);
}

// 新增仓库管理
function createWarehouse(data) {
  return requestClient.post("/mes/wm/warehouse/create", data);
}

// 修改仓库管理
function updateWarehouse(data) {
  return requestClient.put("/mes/wm/warehouse/update", data);
}

// 删除仓库管理
function deleteWarehouse(id) {
  return requestClient.delete(`/mes/wm/warehouse/delete?id=${id}`);
}

// 批量删除仓库管理
function deleteWarehouseListByIds(ids) {
  return requestClient.delete(`/mes/wm/warehouse/delete-list?ids=${ids.join(",")}`);
}

// 导出仓库管理
function exportWarehouse(params) {
  return requestClient.download("/mes/wm/warehouse/export-excel", params);
}

export {
  createWarehouse,
  deleteWarehouse,
  deleteWarehouseListByIds,
  exportWarehouse,
  getWarehouse,
  getWarehousePage,
  updateWarehouse,
};

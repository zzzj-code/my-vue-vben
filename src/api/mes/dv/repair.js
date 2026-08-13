/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：维修工单页面 (src/views/pages/mes/dv/repair.vue)
 * 功能：维修工单的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/dv/repair
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取维修工单分页列表
function getRepairPage(params) {
  return requestClient.get("/mes/dv/repair/page", { params });
}

// 获取维修工单详情
function getRepair(id) {
  return requestClient.get(`/mes/dv/repair/get?id=${id}`);
}

// 新增维修工单
function createRepair(data) {
  return requestClient.post("/mes/dv/repair/create", data);
}

// 修改维修工单
function updateRepair(data) {
  return requestClient.put("/mes/dv/repair/update", data);
}

// 删除维修工单
function deleteRepair(id) {
  return requestClient.delete(`/mes/dv/repair/delete?id=${id}`);
}

// 批量删除维修工单
function deleteRepairListByIds(ids) {
  return requestClient.delete(`/mes/dv/repair/delete-list?ids=${ids.join(",")}`);
}

// 导出维修工单
function exportRepair(params) {
  return requestClient.download("/mes/dv/repair/export-excel", params);
}

export {
  createRepair,
  deleteRepair,
  deleteRepairListByIds,
  exportRepair,
  getRepair,
  getRepairPage,
  updateRepair,
};

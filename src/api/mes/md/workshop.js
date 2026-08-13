/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：车间管理页面 (src/views/pages/mes/md/workshop.vue)
 * 功能：车间管理的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/md/workshop
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取车间管理分页列表
function getWorkshopPage(params) {
  return requestClient.get("/mes/md/workshop/page", { params });
}

// 获取车间管理详情
function getWorkshop(id) {
  return requestClient.get(`/mes/md/workshop/get?id=${id}`);
}

// 新增车间管理
function createWorkshop(data) {
  return requestClient.post("/mes/md/workshop/create", data);
}

// 修改车间管理
function updateWorkshop(data) {
  return requestClient.put("/mes/md/workshop/update", data);
}

// 删除车间管理
function deleteWorkshop(id) {
  return requestClient.delete(`/mes/md/workshop/delete?id=${id}`);
}

// 批量删除车间管理
function deleteWorkshopListByIds(ids) {
  return requestClient.delete(`/mes/md/workshop/delete-list?ids=${ids.join(",")}`);
}

// 导出车间管理
function exportWorkshop(params) {
  return requestClient.download("/mes/md/workshop/export-excel", params);
}

export {
  createWorkshop,
  deleteWorkshop,
  deleteWorkshopListByIds,
  exportWorkshop,
  getWorkshop,
  getWorkshopPage,
  updateWorkshop,
};

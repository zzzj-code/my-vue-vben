/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：工位管理页面 (src/views/pages/mes/md/workstation.vue)
 * 功能：工位管理的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/md/workstation
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取工位管理分页列表
function getWorkstationPage(params) {
  return requestClient.get("/mes/md/workstation/page", { params });
}

// 获取工位管理详情
function getWorkstation(id) {
  return requestClient.get(`/mes/md/workstation/get?id=${id}`);
}

// 新增工位管理
function createWorkstation(data) {
  return requestClient.post("/mes/md/workstation/create", data);
}

// 修改工位管理
function updateWorkstation(data) {
  return requestClient.put("/mes/md/workstation/update", data);
}

// 删除工位管理
function deleteWorkstation(id) {
  return requestClient.delete(`/mes/md/workstation/delete?id=${id}`);
}

// 批量删除工位管理
function deleteWorkstationListByIds(ids) {
  return requestClient.delete(`/mes/md/workstation/delete-list?ids=${ids.join(",")}`);
}

// 导出工位管理
function exportWorkstation(params) {
  return requestClient.download("/mes/md/workstation/export-excel", params);
}

export {
  createWorkstation,
  deleteWorkstation,
  deleteWorkstationListByIds,
  exportWorkstation,
  getWorkstation,
  getWorkstationPage,
  updateWorkstation,
};

/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：缺陷管理页面 (src/views/pages/mes/qc/defect.vue)
 * 功能：缺陷管理的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/qc/defect
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取缺陷管理分页列表
function getDefectPage(params) {
  return requestClient.get("/mes/qc/defect/page", { params });
}

// 获取缺陷管理详情
function getDefect(id) {
  return requestClient.get(`/mes/qc/defect/get?id=${id}`);
}

// 新增缺陷管理
function createDefect(data) {
  return requestClient.post("/mes/qc/defect/create", data);
}

// 修改缺陷管理
function updateDefect(data) {
  return requestClient.put("/mes/qc/defect/update", data);
}

// 删除缺陷管理
function deleteDefect(id) {
  return requestClient.delete(`/mes/qc/defect/delete?id=${id}`);
}

// 批量删除缺陷管理
function deleteDefectListByIds(ids) {
  return requestClient.delete(`/mes/qc/defect/delete-list?ids=${ids.join(",")}`);
}

// 导出缺陷管理
function exportDefect(params) {
  return requestClient.download("/mes/qc/defect/export-excel", params);
}

export {
  createDefect,
  deleteDefect,
  deleteDefectListByIds,
  exportDefect,
  getDefect,
  getDefectPage,
  updateDefect,
};

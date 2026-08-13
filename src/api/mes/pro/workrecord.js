/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：生产记录页面 (src/views/pages/mes/pro/workrecord.vue)
 * 功能：生产记录的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/work-record
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取生产记录分页列表
function getWorkrecordPage(params) {
  return requestClient.get("/mes/work-record/page", { params });
}

// 获取生产记录详情
function getWorkrecord(id) {
  return requestClient.get(`/mes/work-record/get?id=${id}`);
}

// 新增生产记录
function createWorkrecord(data) {
  return requestClient.post("/mes/work-record/create", data);
}

// 修改生产记录
function updateWorkrecord(data) {
  return requestClient.put("/mes/work-record/update", data);
}

// 删除生产记录
function deleteWorkrecord(id) {
  return requestClient.delete(`/mes/work-record/delete?id=${id}`);
}

// 批量删除生产记录
function deleteWorkrecordListByIds(ids) {
  return requestClient.delete(`/mes/work-record/delete-list?ids=${ids.join(",")}`);
}

// 导出生产记录
function exportWorkrecord(params) {
  return requestClient.download("/mes/work-record/export-excel", params);
}

export {
  createWorkrecord,
  deleteWorkrecord,
  deleteWorkrecordListByIds,
  exportWorkrecord,
  getWorkrecord,
  getWorkrecordPage,
  updateWorkrecord,
};

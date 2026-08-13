/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：设备科目页面 (src/views/pages/mes/dv/subject.vue)
 * 功能：设备科目的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/dv/subject
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取设备科目分页列表
function getSubjectPage(params) {
  return requestClient.get("/mes/dv/subject/page", { params });
}

// 获取设备科目详情
function getSubject(id) {
  return requestClient.get(`/mes/dv/subject/get?id=${id}`);
}

// 新增设备科目
function createSubject(data) {
  return requestClient.post("/mes/dv/subject/create", data);
}

// 修改设备科目
function updateSubject(data) {
  return requestClient.put("/mes/dv/subject/update", data);
}

// 删除设备科目
function deleteSubject(id) {
  return requestClient.delete(`/mes/dv/subject/delete?id=${id}`);
}

// 批量删除设备科目
function deleteSubjectListByIds(ids) {
  return requestClient.delete(`/mes/dv/subject/delete-list?ids=${ids.join(",")}`);
}

// 导出设备科目
function exportSubject(params) {
  return requestClient.download("/mes/dv/subject/export-excel", params);
}

export {
  createSubject,
  deleteSubject,
  deleteSubjectListByIds,
  exportSubject,
  getSubject,
  getSubjectPage,
  updateSubject,
};

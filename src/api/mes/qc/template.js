/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：检验模板页面 (src/views/pages/mes/qc/template.vue)
 * 功能：检验模板的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/qc/template
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取检验模板分页列表
function getTemplatePage(params) {
  return requestClient.get("/mes/qc/template/page", { params });
}

// 获取检验模板详情
function getTemplate(id) {
  return requestClient.get(`/mes/qc/template/get?id=${id}`);
}

// 新增检验模板
function createTemplate(data) {
  return requestClient.post("/mes/qc/template/create", data);
}

// 修改检验模板
function updateTemplate(data) {
  return requestClient.put("/mes/qc/template/update", data);
}

// 删除检验模板
function deleteTemplate(id) {
  return requestClient.delete(`/mes/qc/template/delete?id=${id}`);
}

// 批量删除检验模板
function deleteTemplateListByIds(ids) {
  return requestClient.delete(`/mes/qc/template/delete-list?ids=${ids.join(",")}`);
}

// 导出检验模板
function exportTemplate(params) {
  return requestClient.download("/mes/qc/template/export-excel", params);
}

export {
  createTemplate,
  deleteTemplate,
  deleteTemplateListByIds,
  exportTemplate,
  getTemplate,
  getTemplatePage,
  updateTemplate,
};

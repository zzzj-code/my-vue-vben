/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：来料检验页面 (src/views/pages/mes/qc/iqc.vue)
 * 功能：来料检验的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/qc/iqc
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取来料检验分页列表
function getIqcPage(params) {
  return requestClient.get("/mes/qc/iqc/page", { params });
}

// 获取来料检验详情
function getIqc(id) {
  return requestClient.get(`/mes/qc/iqc/get?id=${id}`);
}

// 新增来料检验
function createIqc(data) {
  return requestClient.post("/mes/qc/iqc/create", data);
}

// 修改来料检验
function updateIqc(data) {
  return requestClient.put("/mes/qc/iqc/update", data);
}

// 删除来料检验
function deleteIqc(id) {
  return requestClient.delete(`/mes/qc/iqc/delete?id=${id}`);
}

// 批量删除来料检验
function deleteIqcListByIds(ids) {
  return requestClient.delete(`/mes/qc/iqc/delete-list?ids=${ids.join(",")}`);
}

// 导出来料检验
function exportIqc(params) {
  return requestClient.download("/mes/qc/iqc/export-excel", params);
}

export {
  createIqc,
  deleteIqc,
  deleteIqcListByIds,
  exportIqc,
  getIqc,
  getIqcPage,
  updateIqc,
};

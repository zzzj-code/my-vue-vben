/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：过程检验页面 (src/views/pages/mes/qc/ipqc.vue)
 * 功能：过程检验的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/qc/ipqc
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取过程检验分页列表
function getIpqcPage(params) {
  return requestClient.get("/mes/qc/ipqc/page", { params });
}

// 获取过程检验详情
function getIpqc(id) {
  return requestClient.get(`/mes/qc/ipqc/get?id=${id}`);
}

// 新增过程检验
function createIpqc(data) {
  return requestClient.post("/mes/qc/ipqc/create", data);
}

// 修改过程检验
function updateIpqc(data) {
  return requestClient.put("/mes/qc/ipqc/update", data);
}

// 删除过程检验
function deleteIpqc(id) {
  return requestClient.delete(`/mes/qc/ipqc/delete?id=${id}`);
}

// 批量删除过程检验
function deleteIpqcListByIds(ids) {
  return requestClient.delete(`/mes/qc/ipqc/delete-list?ids=${ids.join(",")}`);
}

// 导出过程检验
function exportIpqc(params) {
  return requestClient.download("/mes/qc/ipqc/export-excel", params);
}

export {
  createIpqc,
  deleteIpqc,
  deleteIpqcListByIds,
  exportIpqc,
  getIpqc,
  getIpqcPage,
  updateIpqc,
};

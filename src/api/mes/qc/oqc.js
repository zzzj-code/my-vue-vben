/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：出货检验页面 (src/views/pages/mes/qc/oqc.vue)
 * 功能：出货检验的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/qc/oqc
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取出货检验分页列表
function getOqcPage(params) {
  return requestClient.get("/mes/qc/oqc/page", { params });
}

// 获取出货检验详情
function getOqc(id) {
  return requestClient.get(`/mes/qc/oqc/get?id=${id}`);
}

// 新增出货检验
function createOqc(data) {
  return requestClient.post("/mes/qc/oqc/create", data);
}

// 修改出货检验
function updateOqc(data) {
  return requestClient.put("/mes/qc/oqc/update", data);
}

// 删除出货检验
function deleteOqc(id) {
  return requestClient.delete(`/mes/qc/oqc/delete?id=${id}`);
}

// 批量删除出货检验
function deleteOqcListByIds(ids) {
  return requestClient.delete(`/mes/qc/oqc/delete-list?ids=${ids.join(",")}`);
}

// 导出出货检验
function exportOqc(params) {
  return requestClient.download("/mes/qc/oqc/export-excel", params);
}

export {
  createOqc,
  deleteOqc,
  deleteOqcListByIds,
  exportOqc,
  getOqc,
  getOqcPage,
  updateOqc,
};

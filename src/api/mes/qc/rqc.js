/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：退货检验页面 (src/views/pages/mes/qc/rqc.vue)
 * 功能：退货检验的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/qc/rqc
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取退货检验分页列表
function getRqcPage(params) {
  return requestClient.get("/mes/qc/rqc/page", { params });
}

// 获取退货检验详情
function getRqc(id) {
  return requestClient.get(`/mes/qc/rqc/get?id=${id}`);
}

// 新增退货检验
function createRqc(data) {
  return requestClient.post("/mes/qc/rqc/create", data);
}

// 修改退货检验
function updateRqc(data) {
  return requestClient.put("/mes/qc/rqc/update", data);
}

// 删除退货检验
function deleteRqc(id) {
  return requestClient.delete(`/mes/qc/rqc/delete?id=${id}`);
}

// 批量删除退货检验
function deleteRqcListByIds(ids) {
  return requestClient.delete(`/mes/qc/rqc/delete-list?ids=${ids.join(",")}`);
}

// 导出退货检验
function exportRqc(params) {
  return requestClient.download("/mes/qc/rqc/export-excel", params);
}

export {
  createRqc,
  deleteRqc,
  deleteRqcListByIds,
  exportRqc,
  getRqc,
  getRqcPage,
  updateRqc,
};

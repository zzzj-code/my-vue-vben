/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：点检计划页面 (src/views/pages/mes/dv/checkplan.vue)
 * 功能：点检计划的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/check-plan
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取点检计划分页列表
function getCheckplanPage(params) {
  return requestClient.get("/mes/check-plan/page", { params });
}

// 获取点检计划详情
function getCheckplan(id) {
  return requestClient.get(`/mes/check-plan/get?id=${id}`);
}

// 新增点检计划
function createCheckplan(data) {
  return requestClient.post("/mes/check-plan/create", data);
}

// 修改点检计划
function updateCheckplan(data) {
  return requestClient.put("/mes/check-plan/update", data);
}

// 删除点检计划
function deleteCheckplan(id) {
  return requestClient.delete(`/mes/check-plan/delete?id=${id}`);
}

// 批量删除点检计划
function deleteCheckplanListByIds(ids) {
  return requestClient.delete(`/mes/check-plan/delete-list?ids=${ids.join(",")}`);
}

// 导出点检计划
function exportCheckplan(params) {
  return requestClient.download("/mes/check-plan/export-excel", params);
}

export {
  createCheckplan,
  deleteCheckplan,
  deleteCheckplanListByIds,
  exportCheckplan,
  getCheckplan,
  getCheckplanPage,
  updateCheckplan,
};

/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：盘点计划页面 (src/views/pages/mes/wm/stock-taking/plan.vue)
 * 功能：盘点计划的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/stock-taking/plan
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取盘点计划分页列表
function getPlanPage(params) {
  return requestClient.get("/mes/stock-taking/plan/page", { params });
}

// 获取盘点计划详情
function getPlan(id) {
  return requestClient.get(`/mes/stock-taking/plan/get?id=${id}`);
}

// 新增盘点计划
function createPlan(data) {
  return requestClient.post("/mes/stock-taking/plan/create", data);
}

// 修改盘点计划
function updatePlan(data) {
  return requestClient.put("/mes/stock-taking/plan/update", data);
}

// 删除盘点计划
function deletePlan(id) {
  return requestClient.delete(`/mes/stock-taking/plan/delete?id=${id}`);
}

// 批量删除盘点计划
function deletePlanListByIds(ids) {
  return requestClient.delete(`/mes/stock-taking/plan/delete-list?ids=${ids.join(",")}`);
}

// 导出盘点计划
function exportPlan(params) {
  return requestClient.download("/mes/stock-taking/plan/export-excel", params);
}

export {
  createPlan,
  deletePlan,
  deletePlanListByIds,
  exportPlan,
  getPlan,
  getPlanPage,
  updatePlan,
};

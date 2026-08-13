/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：排班计划页面 (src/views/pages/mes/cal/plan.vue)
 * 功能：排班计划的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/cal/plan
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取排班计划分页列表
function getPlanPage(params) {
  return requestClient.get("/mes/cal/plan/page", { params });
}

// 获取排班计划详情
function getPlan(id) {
  return requestClient.get(`/mes/cal/plan/get?id=${id}`);
}

// 新增排班计划
function createPlan(data) {
  return requestClient.post("/mes/cal/plan/create", data);
}

// 修改排班计划
function updatePlan(data) {
  return requestClient.put("/mes/cal/plan/update", data);
}

// 删除排班计划
function deletePlan(id) {
  return requestClient.delete(`/mes/cal/plan/delete?id=${id}`);
}

// 批量删除排班计划
function deletePlanListByIds(ids) {
  return requestClient.delete(`/mes/cal/plan/delete-list?ids=${ids.join(",")}`);
}

// 导出排班计划
function exportPlan(params) {
  return requestClient.download("/mes/cal/plan/export-excel", params);
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

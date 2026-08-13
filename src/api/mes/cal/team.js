/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：班组设置页面 (src/views/pages/mes/cal/team.vue)
 * 功能：班组设置的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/cal/team
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取班组设置分页列表
function getTeamPage(params) {
  return requestClient.get("/mes/cal/team/page", { params });
}

// 获取班组设置详情
function getTeam(id) {
  return requestClient.get(`/mes/cal/team/get?id=${id}`);
}

// 新增班组设置
function createTeam(data) {
  return requestClient.post("/mes/cal/team/create", data);
}

// 修改班组设置
function updateTeam(data) {
  return requestClient.put("/mes/cal/team/update", data);
}

// 删除班组设置
function deleteTeam(id) {
  return requestClient.delete(`/mes/cal/team/delete?id=${id}`);
}

// 批量删除班组设置
function deleteTeamListByIds(ids) {
  return requestClient.delete(`/mes/cal/team/delete-list?ids=${ids.join(",")}`);
}

// 导出班组设置
function exportTeam(params) {
  return requestClient.download("/mes/cal/team/export-excel", params);
}

export {
  createTeam,
  deleteTeam,
  deleteTeamListByIds,
  exportTeam,
  getTeam,
  getTeamPage,
  updateTeam,
};

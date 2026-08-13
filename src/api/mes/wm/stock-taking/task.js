/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：盘点任务页面 (src/views/pages/mes/wm/stock-taking/task.vue)
 * 功能：盘点任务的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/stock-taking/task
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取盘点任务分页列表
function getTaskPage(params) {
  return requestClient.get("/mes/stock-taking/task/page", { params });
}

// 获取盘点任务详情
function getTask(id) {
  return requestClient.get(`/mes/stock-taking/task/get?id=${id}`);
}

// 新增盘点任务
function createTask(data) {
  return requestClient.post("/mes/stock-taking/task/create", data);
}

// 修改盘点任务
function updateTask(data) {
  return requestClient.put("/mes/stock-taking/task/update", data);
}

// 删除盘点任务
function deleteTask(id) {
  return requestClient.delete(`/mes/stock-taking/task/delete?id=${id}`);
}

// 批量删除盘点任务
function deleteTaskListByIds(ids) {
  return requestClient.delete(`/mes/stock-taking/task/delete-list?ids=${ids.join(",")}`);
}

// 导出盘点任务
function exportTask(params) {
  return requestClient.download("/mes/stock-taking/task/export-excel", params);
}

export {
  createTask,
  deleteTask,
  deleteTaskListByIds,
  exportTask,
  getTask,
  getTaskPage,
  updateTask,
};

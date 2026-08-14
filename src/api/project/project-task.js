/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目任务列表页面
 * 功能：项目任务相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询项目任务列表
 * @param {Object} params - 查询参数
 */
function getProjectTaskPage(params) {
  return requestClient.get("/project/task/page", { params });
}

/**
 * 获取项目任务详情
 * @param {Number} id - 任务ID
 */
function getProjectTask(id) {
  return requestClient.get(`/project/task/get?id=${id}`);
}

/**
 * 新增项目任务
 * @param {Object} data - 任务数据
 */
function createProjectTask(data) {
  return requestClient.post("/project/task/create", data);
}

/**
 * 更新项目任务
 * @param {Object} data - 任务数据
 */
function updateProjectTask(data) {
  return requestClient.put("/project/task/update", data);
}

/**
 * 删除项目任务
 * @param {Number} id - 任务ID
 */
function deleteProjectTask(id) {
  return requestClient.delete(`/project/task/delete?id=${id}`);
}

export {
  createProjectTask,
  deleteProjectTask,
  getProjectTask,
  getProjectTaskPage,
  updateProjectTask
};

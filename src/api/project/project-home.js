/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目首页页面
 * 功能：项目首页统计相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 获取项目首页统计概览
 */
function getProjectHomeSummary() {
  return requestClient.get("/project/home/summary");
}

/**
 * 获取我的待办任务列表
 * @param {Object} params - 查询参数
 */
function getMyTodoTaskList(params) {
  return requestClient.get("/project/task/my-page", { params });
}

/**
 * 获取我负责的项目列表
 * @param {Object} params - 查询参数
 */
function getMyProjectList(params) {
  return requestClient.get("/project/ledger/page", { params });
}

/**
 * 获取最近动态列表
 * @param {Object} params - 查询参数
 */
function getMyRecentList(params) {
  return requestClient.get("/project/activity/my-recent", { params });
}

export {
  getMyProjectList,
  getMyRecentList,
  getMyTodoTaskList,
  getProjectHomeSummary
};

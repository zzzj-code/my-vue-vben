/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目统计页面
 * 功能：项目统计相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 获取项目统计概览
 */
function getProjectStatsSummary() {
  return requestClient.get("/project/stats/summary");
}

/**
 * 获取项目状态统计分析
 * @param {Object} params - 查询参数
 */
function getProjectStatusAnalyse(params) {
  return requestClient.get("/project/stats/status-analyse", { params });
}

/**
 * 获取项目进度统计分析
 * @param {Object} params - 查询参数
 */
function getProjectProgressAnalyse(params) {
  return requestClient.get("/project/stats/progress-analyse", { params });
}

export {
  getProjectProgressAnalyse,
  getProjectStatsSummary,
  getProjectStatusAnalyse
};

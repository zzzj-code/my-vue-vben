/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：统计页面
 * 功能：IM统计相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 获取IM统计概览
 */
function getImStatisticsSummary() {
  return requestClient.get("/im/statistics/summary");
}

/**
 * 获取消息统计分析
 * @param {Object} params - 查询参数
 */
function getMessageStatisticsAnalyse(params) {
  return requestClient.get("/im/statistics/message-analyse", { params });
}

/**
 * 获取用户统计分析
 * @param {Object} params - 查询参数
 */
function getUserStatisticsAnalyse(params) {
  return requestClient.get("/im/statistics/user-analyse", { params });
}

export {
  getImStatisticsSummary,
  getMessageStatisticsAnalyse,
  getUserStatisticsAnalyse
};

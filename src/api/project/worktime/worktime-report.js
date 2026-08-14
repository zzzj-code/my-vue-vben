/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：工时报表页面
 * 功能：工时报表相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 获取工时报表统计
 * @param {Object} params - 查询参数
 */
function getWorktimeReportSummary(params) {
  return requestClient.get("/project/worktime-report/summary", { params });
}

/**
 * 分页查询工时报表明细
 * @param {Object} params - 查询参数
 */
function getWorktimeReportPage(params) {
  return requestClient.get("/project/worktime-report/page", { params });
}

/**
 * 导出工时报表
 * @param {Object} params - 查询参数
 */
function exportWorktimeReport(params) {
  return requestClient.download("/project/worktime-report/export-excel", params);
}

export {
  exportWorktimeReport,
  getWorktimeReportPage,
  getWorktimeReportSummary
};

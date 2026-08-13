/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：日历设置页面 (src/views/pages/mes/cal/calendar.vue)
 * 功能：日历设置的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/cal/calendar
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取日历设置分页列表
function getCalendarPage(params) {
  return requestClient.get("/mes/cal/calendar/page", { params });
}

// 获取日历设置详情
function getCalendar(id) {
  return requestClient.get(`/mes/cal/calendar/get?id=${id}`);
}

// 新增日历设置
function createCalendar(data) {
  return requestClient.post("/mes/cal/calendar/create", data);
}

// 修改日历设置
function updateCalendar(data) {
  return requestClient.put("/mes/cal/calendar/update", data);
}

// 删除日历设置
function deleteCalendar(id) {
  return requestClient.delete(`/mes/cal/calendar/delete?id=${id}`);
}

// 批量删除日历设置
function deleteCalendarListByIds(ids) {
  return requestClient.delete(`/mes/cal/calendar/delete-list?ids=${ids.join(",")}`);
}

// 导出日历设置
function exportCalendar(params) {
  return requestClient.download("/mes/cal/calendar/export-excel", params);
}

export {
  createCalendar,
  deleteCalendar,
  deleteCalendarListByIds,
  exportCalendar,
  getCalendar,
  getCalendarPage,
  updateCalendar,
};

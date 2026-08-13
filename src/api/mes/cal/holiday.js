/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：节假日设置页面 (src/views/pages/mes/cal/holiday.vue)
 * 功能：节假日设置的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/cal/holiday
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取节假日设置分页列表
function getHolidayPage(params) {
  return requestClient.get("/mes/cal/holiday/page", { params });
}

// 获取节假日设置详情
function getHoliday(id) {
  return requestClient.get(`/mes/cal/holiday/get?id=${id}`);
}

// 新增节假日设置
function createHoliday(data) {
  return requestClient.post("/mes/cal/holiday/create", data);
}

// 修改节假日设置
function updateHoliday(data) {
  return requestClient.put("/mes/cal/holiday/update", data);
}

// 删除节假日设置
function deleteHoliday(id) {
  return requestClient.delete(`/mes/cal/holiday/delete?id=${id}`);
}

// 批量删除节假日设置
function deleteHolidayListByIds(ids) {
  return requestClient.delete(`/mes/cal/holiday/delete-list?ids=${ids.join(",")}`);
}

// 导出节假日设置
function exportHoliday(params) {
  return requestClient.download("/mes/cal/holiday/export-excel", params);
}

export {
  createHoliday,
  deleteHoliday,
  deleteHolidayListByIds,
  exportHoliday,
  getHoliday,
  getHolidayPage,
  updateHoliday,
};

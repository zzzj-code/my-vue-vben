/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：定时任务页面
 * 功能：定时任务相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getSchedulePage(params) {
  return requestClient.get(
    "/system/schedule/page",
    { params }
  );
}
function getSchedule(id) {
  return requestClient.get(
    `/system/schedule/get?id=${id}`
  );
}
function createSchedule(data) {
  return requestClient.post("/system/schedule/create", data);
}
function updateSchedule(data) {
  return requestClient.put("/system/schedule/update", data);
}
function deleteSchedule(id) {
  return requestClient.delete(`/system/schedule/delete?id=${id}`);
}
function getScheduleListByDate(params) {
  return requestClient.get(
    "/system/schedule/list-by-date",
    { params }
  );
}
function getScheduleDates(startDate, endDate) {
  return requestClient.get("/system/schedule/dates", {
    params: { startDate, endDate }
  });
}
function getMySchedulePage(params) {
  return requestClient.get(
    "/system/schedule/my-page",
    { params }
  );
}
function pushSchedule(data) {
  return requestClient.post("/system/schedule/push", data);
}
export {
  createSchedule,
  deleteSchedule,
  getMySchedulePage,
  getSchedule,
  getScheduleDates,
  getScheduleListByDate,
  getSchedulePage,
  pushSchedule,
  updateSchedule
};

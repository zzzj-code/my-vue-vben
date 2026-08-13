/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：通知公告页面
 * 功能：通知公告相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getNoticePage(params) {
  return requestClient.get(
    "/system/notice/page",
    { params }
  );
}
function getNotice(id) {
  return requestClient.get(
    `/system/notice/get?id=${id}`
  );
}
function createNotice(data) {
  return requestClient.post("/system/notice/create", data);
}
function updateNotice(data) {
  return requestClient.put("/system/notice/update", data);
}
function deleteNotice(id) {
  return requestClient.delete(`/system/notice/delete?id=${id}`);
}
function deleteNoticeList(ids) {
  return requestClient.delete(
    `/system/notice/delete-list?ids=${ids.join(",")}`
  );
}
function pushNotice(id) {
  return requestClient.post(`/system/notice/push?id=${id}`);
}
function markNoticeAsRead(id) {
  return requestClient.post(`/system/notice/mark-read?id=${id}`);
}
export {
  createNotice,
  deleteNotice,
  deleteNoticeList,
  getNotice,
  getNoticePage,
  markNoticeAsRead,
  pushNotice,
  updateNotice
};

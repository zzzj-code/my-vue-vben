/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：站内信消息页面
 * 功能：站内信消息相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getNotifyMessagePage(params) {
  return requestClient.get(
    "/system/notify-message/page",
    { params }
  );
}
function getMyNotifyMessagePage(params) {
  return requestClient.get(
    "/system/notify-message/my-page",
    { params }
  );
}
function updateNotifyMessageRead(ids) {
  return requestClient.put(
    "/system/notify-message/update-read",
    {},
    {
      params: { ids }
    }
  );
}
function updateAllNotifyMessageRead() {
  return requestClient.put("/system/notify-message/update-all-read");
}
function getUnreadNotifyMessageList() {
  return requestClient.get(
    "/system/notify-message/get-unread-list"
  );
}
function getUnreadNotifyMessageCount() {
  return requestClient.get("/system/notify-message/get-unread-count");
}
export {
  getMyNotifyMessagePage,
  getNotifyMessagePage,
  getUnreadNotifyMessageCount,
  getUnreadNotifyMessageList,
  updateAllNotifyMessageRead,
  updateNotifyMessageRead
};

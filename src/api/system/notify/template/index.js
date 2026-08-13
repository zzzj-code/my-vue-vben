/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：站内信模板配置
 * 功能：站内信模板配置相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getNotifyTemplatePage(params) {
  return requestClient.get(
    "/system/notify-template/page",
    { params }
  );
}
function getNotifyTemplate(id) {
  return requestClient.get(
    `/system/notify-template/get?id=${id}`
  );
}
function createNotifyTemplate(data) {
  return requestClient.post("/system/notify-template/create", data);
}
function updateNotifyTemplate(data) {
  return requestClient.put("/system/notify-template/update", data);
}
function deleteNotifyTemplate(id) {
  return requestClient.delete(`/system/notify-template/delete?id=${id}`);
}
function deleteNotifyTemplateList(ids) {
  return requestClient.delete(
    `/system/notify-template/delete-list?ids=${ids.join(",")}`
  );
}
function exportNotifyTemplate(params) {
  return requestClient.download("/system/notify-template/export-excel", {
    params
  });
}
function sendNotify(data) {
  return requestClient.post("/system/notify-template/send-notify", data);
}
export {
  createNotifyTemplate,
  deleteNotifyTemplate,
  deleteNotifyTemplateList,
  exportNotifyTemplate,
  getNotifyTemplate,
  getNotifyTemplatePage,
  sendNotify,
  updateNotifyTemplate
};

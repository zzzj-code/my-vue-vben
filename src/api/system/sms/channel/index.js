/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：短信渠道配置
 * 功能：短信渠道配置相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getSmsChannelPage(params) {
  return requestClient.get(
    "/system/sms-channel/page",
    { params }
  );
}
function getSimpleSmsChannelList() {
  return requestClient.get(
    "/system/sms-channel/simple-list"
  );
}
function getSmsChannel(id) {
  return requestClient.get(
    `/system/sms-channel/get?id=${id}`
  );
}
function createSmsChannel(data) {
  return requestClient.post("/system/sms-channel/create", data);
}
function updateSmsChannel(data) {
  return requestClient.put("/system/sms-channel/update", data);
}
function deleteSmsChannel(id) {
  return requestClient.delete(`/system/sms-channel/delete?id=${id}`);
}
function deleteSmsChannelList(ids) {
  return requestClient.delete(
    `/system/sms-channel/delete-list?ids=${ids.join(",")}`
  );
}
function exportSmsChannel(params) {
  return requestClient.download("/system/sms-channel/export-excel", { params });
}
export {
  createSmsChannel,
  deleteSmsChannel,
  deleteSmsChannelList,
  exportSmsChannel,
  getSimpleSmsChannelList,
  getSmsChannel,
  getSmsChannelPage,
  updateSmsChannel
};

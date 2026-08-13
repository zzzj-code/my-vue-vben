/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：短信模板配置
 * 功能：短信模板配置相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getSmsTemplatePage(params) {
  return requestClient.get(
    "/system/sms-template/page",
    { params }
  );
}
function getSmsTemplate(id) {
  return requestClient.get(
    `/system/sms-template/get?id=${id}`
  );
}
function createSmsTemplate(data) {
  return requestClient.post("/system/sms-template/create", data);
}
function updateSmsTemplate(data) {
  return requestClient.put("/system/sms-template/update", data);
}
function deleteSmsTemplate(id) {
  return requestClient.delete(`/system/sms-template/delete?id=${id}`);
}
function deleteSmsTemplateList(ids) {
  return requestClient.delete(
    `/system/sms-template/delete-list?ids=${ids.join(",")}`
  );
}
function exportSmsTemplate(params) {
  return requestClient.download("/system/sms-template/export-excel", {
    params
  });
}
function sendSms(data) {
  return requestClient.post("/system/sms-template/send-sms", data);
}
export {
  createSmsTemplate,
  deleteSmsTemplate,
  deleteSmsTemplateList,
  exportSmsTemplate,
  getSmsTemplate,
  getSmsTemplatePage,
  sendSms,
  updateSmsTemplate
};

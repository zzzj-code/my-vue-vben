import { requestClient } from "#/api/request";
function getMailTemplatePage(params) {
  return requestClient.get(
    "/system/mail-template/page",
    { params }
  );
}
function getMailTemplate(id) {
  return requestClient.get(
    `/system/mail-template/get?id=${id}`
  );
}
function createMailTemplate(data) {
  return requestClient.post("/system/mail-template/create", data);
}
function updateMailTemplate(data) {
  return requestClient.put("/system/mail-template/update", data);
}
function deleteMailTemplate(id) {
  return requestClient.delete(`/system/mail-template/delete?id=${id}`);
}
function deleteMailTemplateList(ids) {
  return requestClient.delete(
    `/system/mail-template/delete-list?ids=${ids.join(",")}`
  );
}
function sendMail(data) {
  return requestClient.post("/system/mail-template/send-mail", data);
}
export {
  createMailTemplate,
  deleteMailTemplate,
  deleteMailTemplateList,
  getMailTemplate,
  getMailTemplatePage,
  sendMail,
  updateMailTemplate
};

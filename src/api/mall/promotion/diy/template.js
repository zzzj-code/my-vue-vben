import { requestClient } from "#/api/request";
function getDiyTemplatePage(params) {
  return requestClient.get(
    "/promotion/diy-template/page",
    { params }
  );
}
function getDiyTemplate(id) {
  return requestClient.get(
    `/promotion/diy-template/get?id=${id}`
  );
}
function createDiyTemplate(data) {
  return requestClient.post("/promotion/diy-template/create", data);
}
function updateDiyTemplate(data) {
  return requestClient.put("/promotion/diy-template/update", data);
}
function deleteDiyTemplate(id) {
  return requestClient.delete(`/promotion/diy-template/delete?id=${id}`);
}
function useDiyTemplate(id) {
  return requestClient.put(`/promotion/diy-template/use?id=${id}`);
}
function getDiyTemplateProperty(id) {
  return requestClient.get(
    `/promotion/diy-template/get-property?id=${id}`
  );
}
function updateDiyTemplateProperty(data) {
  return requestClient.put("/promotion/diy-template/update-property", data);
}
export {
  createDiyTemplate,
  deleteDiyTemplate,
  getDiyTemplate,
  getDiyTemplatePage,
  getDiyTemplateProperty,
  updateDiyTemplate,
  updateDiyTemplateProperty,
  useDiyTemplate
};

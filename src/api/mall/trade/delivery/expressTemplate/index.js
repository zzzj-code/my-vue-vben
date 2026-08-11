import { requestClient } from "#/api/request";
function getDeliveryExpressTemplatePage(params) {
  return requestClient.get("/trade/delivery/express-template/page", { params });
}
function getDeliveryExpressTemplate(id) {
  return requestClient.get(
    `/trade/delivery/express-template/get?id=${id}`
  );
}
function getSimpleTemplateList() {
  return requestClient.get("/trade/delivery/express-template/list-all-simple");
}
function createDeliveryExpressTemplate(data) {
  return requestClient.post("/trade/delivery/express-template/create", data);
}
function updateDeliveryExpressTemplate(data) {
  return requestClient.put("/trade/delivery/express-template/update", data);
}
function deleteDeliveryExpressTemplate(id) {
  return requestClient.delete(
    `/trade/delivery/express-template/delete?id=${id}`
  );
}
export {
  createDeliveryExpressTemplate,
  deleteDeliveryExpressTemplate,
  getDeliveryExpressTemplate,
  getDeliveryExpressTemplatePage,
  getSimpleTemplateList,
  updateDeliveryExpressTemplate
};

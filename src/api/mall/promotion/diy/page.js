import { requestClient } from "#/api/request";
function getDiyPagePage(params) {
  return requestClient.get(
    "/promotion/diy-page/page",
    { params }
  );
}
function getDiyPage(id) {
  return requestClient.get(
    `/promotion/diy-page/get?id=${id}`
  );
}
function createDiyPage(data) {
  return requestClient.post("/promotion/diy-page/create", data);
}
function updateDiyPage(data) {
  return requestClient.put("/promotion/diy-page/update", data);
}
function deleteDiyPage(id) {
  return requestClient.delete(`/promotion/diy-page/delete?id=${id}`);
}
function getDiyPageProperty(id) {
  return requestClient.get(`/promotion/diy-page/get-property?id=${id}`);
}
function updateDiyPageProperty(data) {
  return requestClient.put("/promotion/diy-page/update-property", data);
}
export {
  createDiyPage,
  deleteDiyPage,
  getDiyPage,
  getDiyPagePage,
  getDiyPageProperty,
  updateDiyPage,
  updateDiyPageProperty
};

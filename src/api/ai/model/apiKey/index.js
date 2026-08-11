import { requestClient } from "#/api/request";
function getApiKeyPage(params) {
  return requestClient.get(
    "/ai/api-key/page",
    { params }
  );
}
function getApiKeySimpleList() {
  return requestClient.get(
    "/ai/api-key/simple-list"
  );
}
function getApiKey(id) {
  return requestClient.get(`/ai/api-key/get?id=${id}`);
}
function createApiKey(data) {
  return requestClient.post("/ai/api-key/create", data);
}
function updateApiKey(data) {
  return requestClient.put("/ai/api-key/update", data);
}
function deleteApiKey(id) {
  return requestClient.delete(`/ai/api-key/delete?id=${id}`);
}
export {
  createApiKey,
  deleteApiKey,
  getApiKey,
  getApiKeyPage,
  getApiKeySimpleList,
  updateApiKey
};

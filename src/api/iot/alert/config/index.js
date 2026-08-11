import { requestClient } from "#/api/request";
function getAlertConfigPage(params) {
  return requestClient.get(
    "/iot/alert-config/page",
    { params }
  );
}
function getAlertConfig(id) {
  return requestClient.get(
    `/iot/alert-config/get?id=${id}`
  );
}
function getAlertConfigList() {
  return requestClient.get(
    "/iot/alert-config/list"
  );
}
function createAlertConfig(data) {
  return requestClient.post("/iot/alert-config/create", data);
}
function updateAlertConfig(data) {
  return requestClient.put("/iot/alert-config/update", data);
}
function deleteAlertConfig(id) {
  return requestClient.delete(`/iot/alert-config/delete?id=${id}`);
}
function deleteAlertConfigList(ids) {
  return requestClient.delete("/iot/alert-config/delete-list", {
    params: { ids: ids.join(",") }
  });
}
function toggleAlertConfig(id, enabled) {
  return requestClient.put(`/iot/alert-config/toggle`, {
    id,
    enabled
  });
}
function getSimpleAlertConfigList() {
  return requestClient.get(
    "/iot/alert-config/simple-list"
  );
}
export {
  createAlertConfig,
  deleteAlertConfig,
  deleteAlertConfigList,
  getAlertConfig,
  getAlertConfigList,
  getAlertConfigPage,
  getSimpleAlertConfigList,
  toggleAlertConfig,
  updateAlertConfig
};

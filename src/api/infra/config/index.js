import { requestClient } from "#/api/request";
function getConfigPage(params) {
  return requestClient.get(
    "/infra/config/page",
    {
      params
    }
  );
}
function getConfig(id) {
  return requestClient.get(`/infra/config/get?id=${id}`);
}
function getConfigKey(configKey) {
  return requestClient.get(
    `/infra/config/get-value-by-key?key=${configKey}`
  );
}
function createConfig(data) {
  return requestClient.post("/infra/config/create", data);
}
function updateConfig(data) {
  return requestClient.put("/infra/config/update", data);
}
function deleteConfig(id) {
  return requestClient.delete(`/infra/config/delete?id=${id}`);
}
function deleteConfigList(ids) {
  return requestClient.delete(`/infra/config/delete-list?ids=${ids.join(",")}`);
}
function exportConfig(params) {
  return requestClient.download("/infra/config/export-excel", {
    params
  });
}
export {
  createConfig,
  deleteConfig,
  deleteConfigList,
  exportConfig,
  getConfig,
  getConfigKey,
  getConfigPage,
  updateConfig
};

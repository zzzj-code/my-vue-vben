import { requestClient } from "#/api/request";
function getDataSourceConfigList() {
  return requestClient.get(
    "/infra/data-source-config/list"
  );
}
function getDataSourceConfig(id) {
  return requestClient.get(
    `/infra/data-source-config/get?id=${id}`
  );
}
function createDataSourceConfig(data) {
  return requestClient.post("/infra/data-source-config/create", data);
}
function updateDataSourceConfig(data) {
  return requestClient.put("/infra/data-source-config/update", data);
}
function deleteDataSourceConfig(id) {
  return requestClient.delete(`/infra/data-source-config/delete?id=${id}`);
}
function deleteDataSourceConfigList(ids) {
  return requestClient.delete(
    `/infra/data-source-config/delete-list?ids=${ids.join(",")}`
  );
}
export {
  createDataSourceConfig,
  deleteDataSourceConfig,
  deleteDataSourceConfigList,
  getDataSourceConfig,
  getDataSourceConfigList,
  updateDataSourceConfig
};

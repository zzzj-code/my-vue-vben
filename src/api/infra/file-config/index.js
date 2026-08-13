/**
 * ============================================================
 * 模块：基础设施模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/infra
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getFileConfigPage(params) {
  return requestClient.get(
    "/infra/file-config/page",
    {
      params
    }
  );
}
function getFileConfig(id) {
  return requestClient.get(
    `/infra/file-config/get?id=${id}`
  );
}
function updateFileConfigMaster(id) {
  return requestClient.put(`/infra/file-config/update-master?id=${id}`);
}
function createFileConfig(data) {
  return requestClient.post("/infra/file-config/create", data);
}
function updateFileConfig(data) {
  return requestClient.put("/infra/file-config/update", data);
}
function deleteFileConfig(id) {
  return requestClient.delete(`/infra/file-config/delete?id=${id}`);
}
function deleteFileConfigList(ids) {
  return requestClient.delete(
    `/infra/file-config/delete-list?ids=${ids.join(",")}`
  );
}
function testFileConfig(id) {
  return requestClient.get(`/infra/file-config/test?id=${id}`);
}
export {
  createFileConfig,
  deleteFileConfig,
  deleteFileConfigList,
  getFileConfig,
  getFileConfigPage,
  testFileConfig,
  updateFileConfig,
  updateFileConfigMaster
};

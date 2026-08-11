import { requestClient } from "#/api/request";
function getDeviceGroupPage(params) {
  return requestClient.get(
    "/iot/device-group/page",
    { params }
  );
}
function getDeviceGroup(id) {
  return requestClient.get(
    `/iot/device-group/get?id=${id}`
  );
}
function createDeviceGroup(data) {
  return requestClient.post("/iot/device-group/create", data);
}
function updateDeviceGroup(data) {
  return requestClient.put("/iot/device-group/update", data);
}
function deleteDeviceGroup(id) {
  return requestClient.delete(`/iot/device-group/delete?id=${id}`);
}
function getSimpleDeviceGroupList() {
  return requestClient.get(
    "/iot/device-group/simple-list"
  );
}
export {
  createDeviceGroup,
  deleteDeviceGroup,
  getDeviceGroup,
  getDeviceGroupPage,
  getSimpleDeviceGroupList,
  updateDeviceGroup
};

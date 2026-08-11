import { requestClient } from "#/api/request";
function getOtaFirmwarePage(params) {
  return requestClient.get(
    "/iot/ota/firmware/page",
    { params }
  );
}
function getOtaFirmware(id) {
  return requestClient.get(
    `/iot/ota/firmware/get?id=${id}`
  );
}
function createOtaFirmware(data) {
  return requestClient.post("/iot/ota/firmware/create", data);
}
function updateOtaFirmware(data) {
  return requestClient.put("/iot/ota/firmware/update", data);
}
function deleteOtaFirmware(id) {
  return requestClient.delete(`/iot/ota/firmware/delete?id=${id}`);
}
function deleteOtaFirmwareList(ids) {
  return requestClient.delete("/iot/ota/firmware/delete-list", {
    params: { ids: ids.join(",") }
  });
}
function updateOtaFirmwareStatus(id, status) {
  return requestClient.put(`/iot/ota/firmware/update-status`, {
    id,
    status
  });
}
function getOtaFirmwareListByProductId(productId) {
  return requestClient.get(
    "/iot/ota/firmware/list-by-product-id",
    { params: { productId } }
  );
}
export {
  createOtaFirmware,
  deleteOtaFirmware,
  deleteOtaFirmwareList,
  getOtaFirmware,
  getOtaFirmwareListByProductId,
  getOtaFirmwarePage,
  updateOtaFirmware,
  updateOtaFirmwareStatus
};

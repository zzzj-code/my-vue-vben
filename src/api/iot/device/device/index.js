/**
 * ============================================================
 * 模块：IoT物联网模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/iot
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getDevicePage(params) {
  return requestClient.get(
    "/iot/device/page",
    { params }
  );
}
function getDevice(id) {
  return requestClient.get(`/iot/device/get?id=${id}`);
}
function createDevice(data) {
  return requestClient.post("/iot/device/create", data);
}
function updateDevice(data) {
  return requestClient.put("/iot/device/update", data);
}
function updateDeviceGroup(data) {
  return requestClient.put("/iot/device/update-group", data);
}
function deleteDevice(id) {
  return requestClient.delete(`/iot/device/delete?id=${id}`);
}
function deleteDeviceList(ids) {
  return requestClient.delete("/iot/device/delete-list", {
    params: { ids: ids.join(",") }
  });
}
function exportDeviceExcel(params) {
  return requestClient.download("/iot/device/export-excel", { params });
}
function getDeviceCount(productId) {
  return requestClient.get(`/iot/device/count?productId=${productId}`);
}
function getSimpleDeviceList(deviceType, productId) {
  return requestClient.get("/iot/device/simple-list", {
    params: { deviceType, productId }
  });
}
function getDeviceListByProductId(productId) {
  return requestClient.get("/iot/device/simple-list", {
    params: { productId }
  });
}
function getDeviceLocationList() {
  return requestClient.get("/iot/device/location-list");
}
function importDeviceTemplate() {
  return requestClient.download("/iot/device/get-import-template");
}
function importDevice(file, updateSupport) {
  return requestClient.upload(
    "/iot/device/import",
    {
      file,
      updateSupport
    }
  );
}
function getLatestDeviceProperties(params) {
  return requestClient.get(
    "/iot/device/property/get-latest",
    { params }
  );
}
function getHistoryDevicePropertyList(params) {
  return requestClient.get(
    "/iot/device/property/history-list",
    { params }
  );
}
function getDeviceAuthInfo(id) {
  return requestClient.get(
    "/iot/device/get-auth-info",
    { params: { id } }
  );
}
function getDeviceMessagePage(params) {
  return requestClient.get("/iot/device/message/page", {
    params
  });
}
function getDeviceMessagePairPage(params) {
  return requestClient.get("/iot/device/message/pair-page", {
    params
  });
}
function sendDeviceMessage(params) {
  return requestClient.post("/iot/device/message/send", params);
}
function bindDeviceGateway(gatewayId, subIds) {
  return requestClient.put("/iot/device/bind-gateway", {
    gatewayId,
    subIds
  });
}
function unbindDeviceGateway(gatewayId, subIds) {
  return requestClient.put("/iot/device/unbind-gateway", {
    gatewayId,
    subIds
  });
}
function getSubDeviceList(gatewayId) {
  return requestClient.get(
    "/iot/device/sub-device-list",
    { params: { gatewayId } }
  );
}
function getUnboundSubDevicePage(params) {
  return requestClient.get(
    "/iot/device/unbound-sub-device-page",
    { params }
  );
}
export {
  bindDeviceGateway,
  createDevice,
  deleteDevice,
  deleteDeviceList,
  exportDeviceExcel,
  getDevice,
  getDeviceAuthInfo,
  getDeviceCount,
  getDeviceListByProductId,
  getDeviceLocationList,
  getDeviceMessagePage,
  getDeviceMessagePairPage,
  getDevicePage,
  getHistoryDevicePropertyList,
  getLatestDeviceProperties,
  getSimpleDeviceList,
  getSubDeviceList,
  getUnboundSubDevicePage,
  importDevice,
  importDeviceTemplate,
  sendDeviceMessage,
  unbindDeviceGateway,
  updateDevice,
  updateDeviceGroup
};

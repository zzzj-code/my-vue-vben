/**
 * ============================================================
 * 模块：IoT物联网模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/iot
 * ============================================================
 */
import { requestClient } from "#/api/request";
var ProtocolTypeEnum = /* @__PURE__ */ ((ProtocolTypeEnum2) => {
  ProtocolTypeEnum2["COAP"] = "coap";
  ProtocolTypeEnum2["EMQX"] = "emqx";
  ProtocolTypeEnum2["HTTP"] = "http";
  ProtocolTypeEnum2["MODBUS_TCP_CLIENT"] = "modbus_tcp_client";
  ProtocolTypeEnum2["MODBUS_TCP_SERVER"] = "modbus_tcp_server";
  ProtocolTypeEnum2["MQTT"] = "mqtt";
  ProtocolTypeEnum2["TCP"] = "tcp";
  ProtocolTypeEnum2["UDP"] = "udp";
  ProtocolTypeEnum2["WEBSOCKET"] = "websocket";
  return ProtocolTypeEnum2;
})(ProtocolTypeEnum || {});
var SerializeTypeEnum = /* @__PURE__ */ ((SerializeTypeEnum2) => {
  SerializeTypeEnum2["BINARY"] = "binary";
  SerializeTypeEnum2["JSON"] = "json";
  return SerializeTypeEnum2;
})(SerializeTypeEnum || {});
function getProductPage(params) {
  return requestClient.get(
    "/iot/product/page",
    { params }
  );
}
function getProduct(id) {
  return requestClient.get(`/iot/product/get?id=${id}`);
}
function createProduct(data) {
  return requestClient.post("/iot/product/create", data);
}
function updateProduct(data) {
  return requestClient.put("/iot/product/update", data);
}
function deleteProduct(id) {
  return requestClient.delete(`/iot/product/delete?id=${id}`);
}
function exportProduct(params) {
  return requestClient.download("/iot/product/export-excel", { params });
}
function updateProductStatus(id, status) {
  return requestClient.put(
    `/iot/product/update-status?id=${id}&status=${status}`
  );
}
function getSimpleProductList(deviceType) {
  return requestClient.get(
    "/iot/product/simple-list",
    {
      params: { deviceType }
    }
  );
}
function getProductByKey(productKey) {
  return requestClient.get("/iot/product/get-by-key", {
    params: { productKey }
  });
}
export {
  ProtocolTypeEnum,
  SerializeTypeEnum,
  createProduct,
  deleteProduct,
  exportProduct,
  getProduct,
  getProductByKey,
  getProductPage,
  getSimpleProductList,
  updateProduct,
  updateProductStatus
};

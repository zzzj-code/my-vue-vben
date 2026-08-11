import { requestClient } from "#/api/request";
var IotDataSinkTypeEnum = /* @__PURE__ */ ((IotDataSinkTypeEnum2) => {
  IotDataSinkTypeEnum2["HTTP"] = "HTTP";
  IotDataSinkTypeEnum2["KAFKA"] = "KAFKA";
  IotDataSinkTypeEnum2["MQTT"] = "MQTT";
  IotDataSinkTypeEnum2["RABBITMQ"] = "RABBITMQ";
  IotDataSinkTypeEnum2["REDIS_STREAM"] = "REDIS_STREAM";
  IotDataSinkTypeEnum2["ROCKETMQ"] = "ROCKETMQ";
  return IotDataSinkTypeEnum2;
})(IotDataSinkTypeEnum || {});
function getDataSinkPage(params) {
  return requestClient.get(
    "/iot/data-sink/page",
    { params }
  );
}
function getDataSink(id) {
  return requestClient.get(`/iot/data-sink/get?id=${id}`);
}
function getDataSinkList() {
  return requestClient.get("/iot/data-sink/list");
}
function getDataSinkSimpleList() {
  return requestClient.get("/iot/data-sink/simple-list");
}
function createDataSink(data) {
  return requestClient.post("/iot/data-sink/create", data);
}
function updateDataSink(data) {
  return requestClient.put("/iot/data-sink/update", data);
}
function deleteDataSink(id) {
  return requestClient.delete(`/iot/data-sink/delete?id=${id}`);
}
function deleteDataSinkList(ids) {
  return requestClient.delete("/iot/data-sink/delete-list", {
    params: { ids: ids.join(",") }
  });
}
function updateDataSinkStatus(id, status) {
  return requestClient.put(`/iot/data-sink/update-status`, {
    id,
    status
  });
}
export {
  IotDataSinkTypeEnum,
  createDataSink,
  deleteDataSink,
  deleteDataSinkList,
  getDataSink,
  getDataSinkList,
  getDataSinkPage,
  getDataSinkSimpleList,
  updateDataSink,
  updateDataSinkStatus
};

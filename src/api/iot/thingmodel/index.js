import { requestClient } from "#/api/request";
function validateBoolName(_rule, value, callback) {
  if (value) {
    callback();
  } else {
    callback(new Error("\u679A\u4E3E\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A"));
  }
}
function getThingModelPage(params) {
  return requestClient.get(
    "/iot/thing-model/page",
    { params }
  );
}
function getThingModel(id) {
  return requestClient.get(
    `/iot/thing-model/get?id=${id}`
  );
}
function getThingModelListByProductId(productId) {
  return requestClient.get(
    "/iot/thing-model/list",
    { params: { productId } }
  );
}
function createThingModel(data) {
  return requestClient.post("/iot/thing-model/create", data);
}
function updateThingModel(data) {
  return requestClient.put("/iot/thing-model/update", data);
}
function deleteThingModel(id) {
  return requestClient.delete(`/iot/thing-model/delete?id=${id}`);
}
function getThingModelTSL(productId) {
  return requestClient.get(
    "/iot/thing-model/get-tsl",
    { params: { productId } }
  );
}
export {
  createThingModel,
  deleteThingModel,
  getThingModel,
  getThingModelListByProductId,
  getThingModelPage,
  getThingModelTSL,
  updateThingModel,
  validateBoolName
};

import { requestClient } from "#/api/request";
function getModbusPointPage(params) {
  return requestClient.get(
    "/iot/device-modbus-point/page",
    { params }
  );
}
function getModbusPoint(id) {
  return requestClient.get(
    `/iot/device-modbus-point/get?id=${id}`
  );
}
function createModbusPoint(data) {
  return requestClient.post("/iot/device-modbus-point/create", data);
}
function updateModbusPoint(data) {
  return requestClient.put("/iot/device-modbus-point/update", data);
}
function deleteModbusPoint(id) {
  return requestClient.delete(`/iot/device-modbus-point/delete?id=${id}`);
}
export {
  createModbusPoint,
  deleteModbusPoint,
  getModbusPoint,
  getModbusPointPage,
  updateModbusPoint
};

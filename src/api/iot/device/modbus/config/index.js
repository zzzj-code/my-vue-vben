import { requestClient } from "#/api/request";
function getModbusConfig(deviceId) {
  return requestClient.get(
    "/iot/device-modbus-config/get",
    { params: { deviceId } }
  );
}
function saveModbusConfig(data) {
  return requestClient.post("/iot/device-modbus-config/save", data);
}
export {
  getModbusConfig,
  saveModbusConfig
};

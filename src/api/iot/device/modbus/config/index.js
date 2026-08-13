/**
 * ============================================================
 * 模块：IoT物联网模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/iot
 * ============================================================
 */
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

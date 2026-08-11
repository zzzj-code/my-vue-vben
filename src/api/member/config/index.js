import { requestClient } from "#/api/request";
function getConfig() {
  return requestClient.get("/member/config/get");
}
function saveConfig(data) {
  return requestClient.put("/member/config/save", data);
}
export {
  getConfig,
  saveConfig
};

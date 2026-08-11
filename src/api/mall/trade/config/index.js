import { requestClient } from "#/api/request";
function getTradeConfig() {
  return requestClient.get("/trade/config/get");
}
function saveTradeConfig(data) {
  return requestClient.put("/trade/config/save", data);
}
export {
  getTradeConfig,
  saveTradeConfig
};

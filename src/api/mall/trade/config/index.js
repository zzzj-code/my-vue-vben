/**
 * ============================================================
 * 模块：商城模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
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

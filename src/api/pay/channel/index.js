/**
 * ============================================================
 * 模块：支付模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/pay
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getChannel(appId, code) {
  return requestClient.get("/pay/channel/get", {
    params: { appId, code }
  });
}
function createChannel(data) {
  return requestClient.post("/pay/channel/create", data);
}
function updateChannel(data) {
  return requestClient.put("/pay/channel/update", data);
}
export {
  createChannel,
  getChannel,
  updateChannel
};

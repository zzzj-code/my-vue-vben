/**
 * ============================================================
 * 模块：商城模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function createBrokerageUser(data) {
  return requestClient.post("/trade/brokerage-user/create", data);
}
function getBrokerageUserPage(params) {
  return requestClient.get(
    "/trade/brokerage-user/page",
    { params }
  );
}
function getBrokerageUser(id) {
  return requestClient.get(
    `/trade/brokerage-user/get?id=${id}`
  );
}
function updateBindUser(data) {
  return requestClient.put("/trade/brokerage-user/update-bind-user", data);
}
function clearBindUser(data) {
  return requestClient.put("/trade/brokerage-user/clear-bind-user", data);
}
function updateBrokerageEnabled(data) {
  return requestClient.put(
    "/trade/brokerage-user/update-brokerage-enable",
    data
  );
}
export {
  clearBindUser,
  createBrokerageUser,
  getBrokerageUser,
  getBrokerageUserPage,
  updateBindUser,
  updateBrokerageEnabled
};

/**
 * ============================================================
 * 模块：支付模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/pay
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getAppPage(params) {
  return requestClient.get("/pay/app/page", {
    params
  });
}
function getApp(id) {
  return requestClient.get(`/pay/app/get?id=${id}`);
}
function createApp(data) {
  return requestClient.post("/pay/app/create", data);
}
function updateApp(data) {
  return requestClient.put("/pay/app/update", data);
}
function updateAppStatus(data) {
  return requestClient.put("/pay/app/update-status", data);
}
function deleteApp(id) {
  return requestClient.delete(`/pay/app/delete?id=${id}`);
}
function getAppList() {
  return requestClient.get("/pay/app/list");
}
export {
  createApp,
  deleteApp,
  getApp,
  getAppList,
  getAppPage,
  updateApp,
  updateAppStatus
};

/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：OAuth2客户端配置
 * 功能：OAuth2客户端配置相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getOAuth2ClientPage(params) {
  return requestClient.get(
    "/system/oauth2-client/page",
    { params }
  );
}
function getOAuth2Client(id) {
  return requestClient.get(
    `/system/oauth2-client/get?id=${id}`
  );
}
function createOAuth2Client(data) {
  return requestClient.post("/system/oauth2-client/create", data);
}
function updateOAuth2Client(data) {
  return requestClient.put("/system/oauth2-client/update", data);
}
function deleteOAuth2Client(id) {
  return requestClient.delete(`/system/oauth2-client/delete?id=${id}`);
}
function deleteOAuth2ClientList(ids) {
  return requestClient.delete(
    `/system/oauth2-client/delete-list?ids=${ids.join(",")}`
  );
}
export {
  createOAuth2Client,
  deleteOAuth2Client,
  deleteOAuth2ClientList,
  getOAuth2Client,
  getOAuth2ClientPage,
  updateOAuth2Client
};

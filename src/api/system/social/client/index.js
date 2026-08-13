/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：社交客户端配置
 * 功能：社交客户端配置相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getSocialClientPage(params) {
  return requestClient.get(
    "/system/social-client/page",
    { params }
  );
}
function getSocialClient(id) {
  return requestClient.get(
    `/system/social-client/get?id=${id}`
  );
}
function createSocialClient(data) {
  return requestClient.post("/system/social-client/create", data);
}
function updateSocialClient(data) {
  return requestClient.put("/system/social-client/update", data);
}
function deleteSocialClient(id) {
  return requestClient.delete(`/system/social-client/delete?id=${id}`);
}
function deleteSocialClientList(ids) {
  return requestClient.delete(
    `/system/social-client/delete-list?ids=${ids.join(",")}`
  );
}
export {
  createSocialClient,
  deleteSocialClient,
  deleteSocialClientList,
  getSocialClient,
  getSocialClientPage,
  updateSocialClient
};

/**
 * ============================================================
 * 模块：公众号模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function updateUser(data) {
  return requestClient.put("/mp/user/update", data);
}
function getUser(id) {
  return requestClient.get("/mp/user/get", {
    params: { id }
  });
}
function getUserPage(params) {
  return requestClient.get("/mp/user/page", {
    params
  });
}
function syncUser(accountId) {
  return requestClient.post("/mp/user/sync", null, {
    params: { accountId }
  });
}
export {
  getUser,
  getUserPage,
  syncUser,
  updateUser
};

/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：OAuth2令牌管理
 * 功能：OAuth2令牌管理相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getOAuth2TokenPage(params) {
  return requestClient.get(
    "/system/oauth2-token/page",
    {
      params
    }
  );
}
function deleteOAuth2Token(accessToken) {
  return requestClient.delete(
    `/system/oauth2-token/delete?accessToken=${accessToken}`
  );
}
export {
  deleteOAuth2Token,
  getOAuth2TokenPage
};

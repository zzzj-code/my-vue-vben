/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：OAuth2开放平台
 * 功能：OAuth2开放平台相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getAuthorize(clientId) {
  return requestClient.get(
    `/system/oauth2/authorize?clientId=${clientId}`
  );
}
function authorize(responseType, clientId, redirectUri, state, autoApprove, checkedScopes, uncheckedScopes) {
  const scopes = {};
  for (const scope of checkedScopes) {
    scopes[scope] = true;
  }
  for (const scope of uncheckedScopes) {
    scopes[scope] = false;
  }
  return requestClient.post("/system/oauth2/authorize", null, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    params: {
      response_type: responseType,
      client_id: clientId,
      redirect_uri: redirectUri,
      state,
      auto_approve: autoApprove,
      scope: JSON.stringify(scopes)
    }
  });
}
export {
  authorize,
  getAuthorize
};

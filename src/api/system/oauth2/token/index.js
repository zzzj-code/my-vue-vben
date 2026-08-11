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

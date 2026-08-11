import { requestClient } from "#/api/request";
function getSocialUserPage(params) {
  return requestClient.get(
    "/system/social-user/page",
    { params }
  );
}
function getSocialUser(id) {
  return requestClient.get(
    `/system/social-user/get?id=${id}`
  );
}
function socialBind(data) {
  return requestClient.post("/system/social-user/bind", data);
}
function socialUnbind(data) {
  return requestClient.delete("/system/social-user/unbind", { data });
}
function getBindSocialUserList() {
  return requestClient.get(
    "/system/social-user/get-bind-list"
  );
}
export {
  getBindSocialUserList,
  getSocialUser,
  getSocialUserPage,
  socialBind,
  socialUnbind
};

import { requestClient } from "#/api/request";
function getSignInConfigList() {
  return requestClient.get(
    "/member/sign-in/config/list"
  );
}
function getSignInConfig(id) {
  return requestClient.get(
    `/member/sign-in/config/get?id=${id}`
  );
}
function createSignInConfig(data) {
  return requestClient.post("/member/sign-in/config/create", data);
}
function updateSignInConfig(data) {
  return requestClient.put("/member/sign-in/config/update", data);
}
function deleteSignInConfig(id) {
  return requestClient.delete(`/member/sign-in/config/delete?id=${id}`);
}
export {
  createSignInConfig,
  deleteSignInConfig,
  getSignInConfig,
  getSignInConfigList,
  updateSignInConfig
};

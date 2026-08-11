import { requestClient } from "#/api/request";
function getUserPage(params) {
  return requestClient.get(
    "/member/user/page",
    {
      params
    }
  );
}
function getUser(id) {
  return requestClient.get(`/member/user/get?id=${id}`);
}
function updateUser(data) {
  return requestClient.put("/member/user/update", data);
}
function updateUserLevel(data) {
  return requestClient.put("/member/user/update-level", data);
}
function updateUserPoint(data) {
  return requestClient.put("/member/user/update-point", data);
}
export {
  getUser,
  getUserPage,
  updateUser,
  updateUserLevel,
  updateUserPoint
};

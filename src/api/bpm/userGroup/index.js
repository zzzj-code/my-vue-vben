import { requestClient } from "#/api/request";
async function getUserGroupPage(params) {
  return requestClient.get(
    "/bpm/user-group/page",
    { params }
  );
}
async function getUserGroup(id) {
  return requestClient.get(
    `/bpm/user-group/get?id=${id}`
  );
}
async function createUserGroup(data) {
  return requestClient.post("/bpm/user-group/create", data);
}
async function updateUserGroup(data) {
  return requestClient.put("/bpm/user-group/update", data);
}
async function deleteUserGroup(id) {
  return requestClient.delete(`/bpm/user-group/delete?id=${id}`);
}
async function getUserGroupSimpleList() {
  return requestClient.get(
    `/bpm/user-group/simple-list`
  );
}
export {
  createUserGroup,
  deleteUserGroup,
  getUserGroup,
  getUserGroupPage,
  getUserGroupSimpleList,
  updateUserGroup
};

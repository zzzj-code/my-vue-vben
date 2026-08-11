import { requestClient } from "#/api/request";
function getMemberTagPage(params) {
  return requestClient.get("/member/tag/page", {
    params
  });
}
function getMemberTag(id) {
  return requestClient.get(`/member/tag/get?id=${id}`);
}
function getSimpleTagList() {
  return requestClient.get("/member/tag/list-all-simple");
}
function createMemberTag(data) {
  return requestClient.post("/member/tag/create", data);
}
function updateMemberTag(data) {
  return requestClient.put("/member/tag/update", data);
}
function deleteMemberTag(id) {
  return requestClient.delete(`/member/tag/delete?id=${id}`);
}
export {
  createMemberTag,
  deleteMemberTag,
  getMemberTag,
  getMemberTagPage,
  getSimpleTagList,
  updateMemberTag
};

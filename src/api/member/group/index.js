/**
 * ============================================================
 * 模块：会员模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/member
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getGroupPage(params) {
  return requestClient.get(
    "/member/group/page",
    {
      params
    }
  );
}
function getGroup(id) {
  return requestClient.get(`/member/group/get?id=${id}`);
}
function createGroup(data) {
  return requestClient.post("/member/group/create", data);
}
function getSimpleGroupList() {
  return requestClient.get(
    "/member/group/list-all-simple"
  );
}
function updateGroup(data) {
  return requestClient.put("/member/group/update", data);
}
function deleteGroup(id) {
  return requestClient.delete(`/member/group/delete?id=${id}`);
}
export {
  createGroup,
  deleteGroup,
  getGroup,
  getGroupPage,
  getSimpleGroupList,
  updateGroup
};

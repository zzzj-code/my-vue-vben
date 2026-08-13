/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：岗位管理页面
 * 功能：岗位管理相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getPostPage(params) {
  return requestClient.get(
    "/system/post/page",
    {
      params
    }
  );
}
function getSimplePostList() {
  return requestClient.get("/system/post/simple-list");
}
function getPost(id) {
  return requestClient.get(`/system/post/get?id=${id}`);
}
function createPost(data) {
  return requestClient.post("/system/post/create", data);
}
function updatePost(data) {
  return requestClient.put("/system/post/update", data);
}
function deletePost(id) {
  return requestClient.delete(`/system/post/delete?id=${id}`);
}
function deletePostList(ids) {
  return requestClient.delete(`/system/post/delete-list?ids=${ids.join(",")}`);
}
function exportPost(params) {
  return requestClient.download("/system/post/export-excel", {
    params
  });
}
export {
  createPost,
  deletePost,
  deletePostList,
  exportPost,
  getPost,
  getPostPage,
  getSimplePostList,
  updatePost
};

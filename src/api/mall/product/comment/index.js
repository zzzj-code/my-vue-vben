import { requestClient } from "#/api/request";
function getCommentPage(params) {
  return requestClient.get(
    "/product/comment/page",
    { params }
  );
}
function getComment(id) {
  return requestClient.get(
    `/product/comment/get?id=${id}`
  );
}
function createComment(data) {
  return requestClient.post("/product/comment/create", data);
}
function updateCommentVisible(data) {
  return requestClient.put("/product/comment/update-visible", data);
}
function replyComment(data) {
  return requestClient.put("/product/comment/reply", data);
}
export {
  createComment,
  getComment,
  getCommentPage,
  replyComment,
  updateCommentVisible
};

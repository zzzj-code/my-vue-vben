import { requestClient } from "#/api/request";
function getArticlePage(params) {
  return requestClient.get(
    "/promotion/article/page",
    { params }
  );
}
function getArticle(id) {
  return requestClient.get(
    `/promotion/article/get?id=${id}`
  );
}
function createArticle(data) {
  return requestClient.post("/promotion/article/create", data);
}
function updateArticle(data) {
  return requestClient.put("/promotion/article/update", data);
}
function deleteArticle(id) {
  return requestClient.delete(`/promotion/article/delete?id=${id}`);
}
export {
  createArticle,
  deleteArticle,
  getArticle,
  getArticlePage,
  updateArticle
};

import { requestClient } from "#/api/request";
function getArticleCategoryPage(params) {
  return requestClient.get(
    "/promotion/article-category/page",
    { params }
  );
}
function getSimpleArticleCategoryList() {
  return requestClient.get(
    "/promotion/article-category/list-all-simple"
  );
}
function getArticleCategory(id) {
  return requestClient.get(
    `/promotion/article-category/get?id=${id}`
  );
}
function createArticleCategory(data) {
  return requestClient.post("/promotion/article-category/create", data);
}
function updateArticleCategory(data) {
  return requestClient.put("/promotion/article-category/update", data);
}
function deleteArticleCategory(id) {
  return requestClient.delete(`/promotion/article-category/delete?id=${id}`);
}
export {
  createArticleCategory,
  deleteArticleCategory,
  getArticleCategory,
  getArticleCategoryPage,
  getSimpleArticleCategoryList,
  updateArticleCategory
};

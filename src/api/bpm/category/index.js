/**
 * ============================================================
 * 模块：BPM审批流模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/bpm
 * ============================================================
 */
import { requestClient } from "#/api/request";
async function getCategoryPage(params) {
  return requestClient.get(
    "/bpm/category/page",
    { params }
  );
}
async function getCategory(id) {
  return requestClient.get(
    `/bpm/category/get?id=${id}`
  );
}
async function createCategory(data) {
  return requestClient.post("/bpm/category/create", data);
}
async function updateCategory(data) {
  return requestClient.put("/bpm/category/update", data);
}
async function deleteCategory(id) {
  return requestClient.delete(`/bpm/category/delete?id=${id}`);
}
async function getCategorySimpleList() {
  return requestClient.get(
    `/bpm/category/simple-list`
  );
}
async function updateCategorySortBatch(ids) {
  const params = ids.join(",");
  return requestClient.put(
    `/bpm/category/update-sort-batch?ids=${params}`
  );
}
export {
  createCategory,
  deleteCategory,
  getCategory,
  getCategoryPage,
  getCategorySimpleList,
  updateCategory,
  updateCategorySortBatch
};

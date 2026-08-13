/**
 * ============================================================
 * 模块：资产管理模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/asset
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getGoodsPage(params) {
  return requestClient.get("/asset/goods/page", { params });
}
function getGoods(id) {
  return requestClient.get(`/asset/goods/get?id=${id}`);
}
function createGoods(data) {
  return requestClient.post("/asset/goods/create", data);
}
function updateGoods(data) {
  return requestClient.put("/asset/goods/update", data);
}
function deleteGoods(id) {
  return requestClient.delete(`/asset/goods/delete?id=${id}`);
}
function deleteGoodsListByIds(ids) {
  return requestClient.delete(`/asset/goods/delete-list?ids=${ids.join(",")}`);
}
function exportGoods(params) {
  return requestClient.download("/asset/goods/export-excel", params);
}
export {
  createGoods,
  deleteGoods,
  deleteGoodsListByIds,
  exportGoods,
  getGoods,
  getGoodsPage,
  updateGoods
};

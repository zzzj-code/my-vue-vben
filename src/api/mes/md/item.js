/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：物料产品页面 (src/views/pages/mes/md/item.vue)
 * 功能：物料产品信息的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/md/item
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取物料产品分页列表
function getItemPage(params) {
  return requestClient.get("/mes/md/item/page", { params });
}

// 获取物料产品详情
function getItem(id) {
  return requestClient.get(`/mes/md/item/get?id=${id}`);
}

// 新增物料产品
function createItem(data) {
  return requestClient.post("/mes/md/item/create", data);
}

// 修改物料产品
function updateItem(data) {
  return requestClient.put("/mes/md/item/update", data);
}

// 删除物料产品
function deleteItem(id) {
  return requestClient.delete(`/mes/md/item/delete?id=${id}`);
}

// 批量删除物料产品
function deleteItemListByIds(ids) {
  return requestClient.delete(`/mes/md/item/delete-list?ids=${ids.join(",")}`);
}

// 导出物料产品
function exportItem(params) {
  return requestClient.download("/mes/md/item/export-excel", params);
}

export {
  createItem,
  deleteItem,
  deleteItemListByIds,
  exportItem,
  getItem,
  getItemPage,
  updateItem,
};

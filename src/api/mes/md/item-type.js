/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：物料分类页面 (src/views/pages/mes/md/item-type.vue)
 * 功能：物料分类的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/md/item-type
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取物料分类分页列表
function getItemTypePage(params) {
  return requestClient.get("/mes/md/item-type/page", { params });
}

// 获取物料分类详情
function getItemType(id) {
  return requestClient.get(`/mes/md/item-type/get?id=${id}`);
}

// 新增物料分类
function createItemType(data) {
  return requestClient.post("/mes/md/item-type/create", data);
}

// 修改物料分类
function updateItemType(data) {
  return requestClient.put("/mes/md/item-type/update", data);
}

// 删除物料分类
function deleteItemType(id) {
  return requestClient.delete(`/mes/md/item-type/delete?id=${id}`);
}

// 批量删除物料分类
function deleteItemTypeListByIds(ids) {
  return requestClient.delete(`/mes/md/item-type/delete-list?ids=${ids.join(",")}`);
}

// 导出物料分类
function exportItemType(params) {
  return requestClient.download("/mes/md/item-type/export-excel", params);
}

export {
  createItemType,
  deleteItemType,
  deleteItemTypeListByIds,
  exportItemType,
  getItemType,
  getItemTypePage,
  updateItemType,
};

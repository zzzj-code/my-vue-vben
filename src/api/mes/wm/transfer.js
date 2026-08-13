/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：库存调拨页面 (src/views/pages/mes/wm/transfer.vue)
 * 功能：库存调拨的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/transfer
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取库存调拨分页列表
function getTransferPage(params) {
  return requestClient.get("/mes/wm/transfer/page", { params });
}

// 获取库存调拨详情
function getTransfer(id) {
  return requestClient.get(`/mes/wm/transfer/get?id=${id}`);
}

// 新增库存调拨
function createTransfer(data) {
  return requestClient.post("/mes/wm/transfer/create", data);
}

// 修改库存调拨
function updateTransfer(data) {
  return requestClient.put("/mes/wm/transfer/update", data);
}

// 删除库存调拨
function deleteTransfer(id) {
  return requestClient.delete(`/mes/wm/transfer/delete?id=${id}`);
}

// 批量删除库存调拨
function deleteTransferListByIds(ids) {
  return requestClient.delete(`/mes/wm/transfer/delete-list?ids=${ids.join(",")}`);
}

// 导出库存调拨
function exportTransfer(params) {
  return requestClient.download("/mes/wm/transfer/export-excel", params);
}

export {
  createTransfer,
  deleteTransfer,
  deleteTransferListByIds,
  exportTransfer,
  getTransfer,
  getTransferPage,
  updateTransfer,
};

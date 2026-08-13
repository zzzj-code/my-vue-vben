/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：发货通知页面 (src/views/pages/mes/wm/sales-notice.vue)
 * 功能：发货通知的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/sales-notice
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取发货通知分页列表
function getSalesNoticePage(params) {
  return requestClient.get("/mes/wm/sales-notice/page", { params });
}

// 获取发货通知详情
function getSalesNotice(id) {
  return requestClient.get(`/mes/wm/sales-notice/get?id=${id}`);
}

// 新增发货通知
function createSalesNotice(data) {
  return requestClient.post("/mes/wm/sales-notice/create", data);
}

// 修改发货通知
function updateSalesNotice(data) {
  return requestClient.put("/mes/wm/sales-notice/update", data);
}

// 删除发货通知
function deleteSalesNotice(id) {
  return requestClient.delete(`/mes/wm/sales-notice/delete?id=${id}`);
}

// 批量删除发货通知
function deleteSalesNoticeListByIds(ids) {
  return requestClient.delete(`/mes/wm/sales-notice/delete-list?ids=${ids.join(",")}`);
}

// 导出发货通知
function exportSalesNotice(params) {
  return requestClient.download("/mes/wm/sales-notice/export-excel", params);
}

export {
  createSalesNotice,
  deleteSalesNotice,
  deleteSalesNoticeListByIds,
  exportSalesNotice,
  getSalesNotice,
  getSalesNoticePage,
  updateSalesNotice,
};

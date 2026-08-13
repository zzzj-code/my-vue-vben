/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：到货通知页面 (src/views/pages/mes/wm/arrival-notice.vue)
 * 功能：到货通知的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/arrival-notice
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取到货通知分页列表
function getArrivalNoticePage(params) {
  return requestClient.get("/mes/wm/arrival-notice/page", { params });
}

// 获取到货通知详情
function getArrivalNotice(id) {
  return requestClient.get(`/mes/wm/arrival-notice/get?id=${id}`);
}

// 新增到货通知
function createArrivalNotice(data) {
  return requestClient.post("/mes/wm/arrival-notice/create", data);
}

// 修改到货通知
function updateArrivalNotice(data) {
  return requestClient.put("/mes/wm/arrival-notice/update", data);
}

// 删除到货通知
function deleteArrivalNotice(id) {
  return requestClient.delete(`/mes/wm/arrival-notice/delete?id=${id}`);
}

// 批量删除到货通知
function deleteArrivalNoticeListByIds(ids) {
  return requestClient.delete(`/mes/wm/arrival-notice/delete-list?ids=${ids.join(",")}`);
}

// 导出到货通知
function exportArrivalNotice(params) {
  return requestClient.download("/mes/wm/arrival-notice/export-excel", params);
}

export {
  createArrivalNotice,
  deleteArrivalNotice,
  deleteArrivalNoticeListByIds,
  exportArrivalNotice,
  getArrivalNotice,
  getArrivalNoticePage,
  updateArrivalNotice,
};

/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：生产看板页面 (src/views/pages/mes/pro/card.vue)
 * 功能：生产看板的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/pro/card
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取生产看板分页列表
function getCardPage(params) {
  return requestClient.get("/mes/pro/card/page", { params });
}

// 获取生产看板详情
function getCard(id) {
  return requestClient.get(`/mes/pro/card/get?id=${id}`);
}

// 新增生产看板
function createCard(data) {
  return requestClient.post("/mes/pro/card/create", data);
}

// 修改生产看板
function updateCard(data) {
  return requestClient.put("/mes/pro/card/update", data);
}

// 删除生产看板
function deleteCard(id) {
  return requestClient.delete(`/mes/pro/card/delete?id=${id}`);
}

// 批量删除生产看板
function deleteCardListByIds(ids) {
  return requestClient.delete(`/mes/pro/card/delete-list?ids=${ids.join(",")}`);
}

// 导出生产看板
function exportCard(params) {
  return requestClient.download("/mes/pro/card/export-excel", params);
}

export {
  createCard,
  deleteCard,
  deleteCardListByIds,
  exportCard,
  getCard,
  getCardPage,
  updateCard,
};

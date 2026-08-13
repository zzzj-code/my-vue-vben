/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：安灯呼叫页面 (src/views/pages/mes/pro/andon.vue)
 * 功能：安灯呼叫的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/pro/andon
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取安灯呼叫分页列表
function getAndonPage(params) {
  return requestClient.get("/mes/pro/andon/page", { params });
}

// 获取安灯呼叫详情
function getAndon(id) {
  return requestClient.get(`/mes/pro/andon/get?id=${id}`);
}

// 新增安灯呼叫
function createAndon(data) {
  return requestClient.post("/mes/pro/andon/create", data);
}

// 修改安灯呼叫
function updateAndon(data) {
  return requestClient.put("/mes/pro/andon/update", data);
}

// 删除安灯呼叫
function deleteAndon(id) {
  return requestClient.delete(`/mes/pro/andon/delete?id=${id}`);
}

// 批量删除安灯呼叫
function deleteAndonListByIds(ids) {
  return requestClient.delete(`/mes/pro/andon/delete-list?ids=${ids.join(",")}`);
}

// 导出安灯呼叫
function exportAndon(params) {
  return requestClient.download("/mes/pro/andon/export-excel", params);
}

export {
  createAndon,
  deleteAndon,
  deleteAndonListByIds,
  exportAndon,
  getAndon,
  getAndonPage,
  updateAndon,
};

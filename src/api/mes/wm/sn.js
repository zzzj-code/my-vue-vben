/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：序列号管理页面 (src/views/pages/mes/wm/sn.vue)
 * 功能：序列号管理的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/sn
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取序列号管理分页列表
function getSnPage(params) {
  return requestClient.get("/mes/wm/sn/page", { params });
}

// 获取序列号管理详情
function getSn(id) {
  return requestClient.get(`/mes/wm/sn/get?id=${id}`);
}

// 新增序列号管理
function createSn(data) {
  return requestClient.post("/mes/wm/sn/create", data);
}

// 修改序列号管理
function updateSn(data) {
  return requestClient.put("/mes/wm/sn/update", data);
}

// 删除序列号管理
function deleteSn(id) {
  return requestClient.delete(`/mes/wm/sn/delete?id=${id}`);
}

// 批量删除序列号管理
function deleteSnListByIds(ids) {
  return requestClient.delete(`/mes/wm/sn/delete-list?ids=${ids.join(",")}`);
}

// 导出序列号管理
function exportSn(params) {
  return requestClient.download("/mes/wm/sn/export-excel", params);
}

export {
  createSn,
  deleteSn,
  deleteSnListByIds,
  exportSn,
  getSn,
  getSnPage,
  updateSn,
};

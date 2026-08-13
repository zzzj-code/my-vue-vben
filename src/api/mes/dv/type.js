/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：设备类型页面 (src/views/pages/mes/dv/type.vue)
 * 功能：设备类型的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/dv/type
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取设备类型分页列表
function getTypePage(params) {
  return requestClient.get("/mes/dv/type/page", { params });
}

// 获取设备类型详情
function getType(id) {
  return requestClient.get(`/mes/dv/type/get?id=${id}`);
}

// 新增设备类型
function createType(data) {
  return requestClient.post("/mes/dv/type/create", data);
}

// 修改设备类型
function updateType(data) {
  return requestClient.put("/mes/dv/type/update", data);
}

// 删除设备类型
function deleteType(id) {
  return requestClient.delete(`/mes/dv/type/delete?id=${id}`);
}

// 批量删除设备类型
function deleteTypeListByIds(ids) {
  return requestClient.delete(`/mes/dv/type/delete-list?ids=${ids.join(",")}`);
}

// 导出设备类型
function exportType(params) {
  return requestClient.download("/mes/dv/type/export-excel", params);
}

export {
  createType,
  deleteType,
  deleteTypeListByIds,
  exportType,
  getType,
  getTypePage,
  updateType,
};

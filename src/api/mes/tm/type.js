/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：工装类型页面 (src/views/pages/mes/tm/type.vue)
 * 功能：工装类型的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/tm/type
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取工装类型分页列表
function getTypePage(params) {
  return requestClient.get("/mes/tm/type/page", { params });
}

// 获取工装类型详情
function getType(id) {
  return requestClient.get(`/mes/tm/type/get?id=${id}`);
}

// 新增工装类型
function createType(data) {
  return requestClient.post("/mes/tm/type/create", data);
}

// 修改工装类型
function updateType(data) {
  return requestClient.put("/mes/tm/type/update", data);
}

// 删除工装类型
function deleteType(id) {
  return requestClient.delete(`/mes/tm/type/delete?id=${id}`);
}

// 批量删除工装类型
function deleteTypeListByIds(ids) {
  return requestClient.delete(`/mes/tm/type/delete-list?ids=${ids.join(",")}`);
}

// 导出工装类型
function exportType(params) {
  return requestClient.download("/mes/tm/type/export-excel", params);
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

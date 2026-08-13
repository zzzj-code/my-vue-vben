/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：设备台账页面 (src/views/pages/mes/dv/machinery.vue)
 * 功能：设备台账的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/dv/machinery
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取设备台账分页列表
function getMachineryPage(params) {
  return requestClient.get("/mes/dv/machinery/page", { params });
}

// 获取设备台账详情
function getMachinery(id) {
  return requestClient.get(`/mes/dv/machinery/get?id=${id}`);
}

// 新增设备台账
function createMachinery(data) {
  return requestClient.post("/mes/dv/machinery/create", data);
}

// 修改设备台账
function updateMachinery(data) {
  return requestClient.put("/mes/dv/machinery/update", data);
}

// 删除设备台账
function deleteMachinery(id) {
  return requestClient.delete(`/mes/dv/machinery/delete?id=${id}`);
}

// 批量删除设备台账
function deleteMachineryListByIds(ids) {
  return requestClient.delete(`/mes/dv/machinery/delete-list?ids=${ids.join(",")}`);
}

// 导出设备台账
function exportMachinery(params) {
  return requestClient.download("/mes/dv/machinery/export-excel", params);
}

export {
  createMachinery,
  deleteMachinery,
  deleteMachineryListByIds,
  exportMachinery,
  getMachinery,
  getMachineryPage,
  updateMachinery,
};

/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：计量单位页面 (src/views/pages/mes/md/unit-measure.vue)
 * 功能：计量单位的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/md/unit-measure
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取计量单位分页列表
function getUnitMeasurePage(params) {
  return requestClient.get("/mes/md/unit-measure/page", { params });
}

// 获取计量单位详情
function getUnitMeasure(id) {
  return requestClient.get(`/mes/md/unit-measure/get?id=${id}`);
}

// 新增计量单位
function createUnitMeasure(data) {
  return requestClient.post("/mes/md/unit-measure/create", data);
}

// 修改计量单位
function updateUnitMeasure(data) {
  return requestClient.put("/mes/md/unit-measure/update", data);
}

// 删除计量单位
function deleteUnitMeasure(id) {
  return requestClient.delete(`/mes/md/unit-measure/delete?id=${id}`);
}

// 批量删除计量单位
function deleteUnitMeasureListByIds(ids) {
  return requestClient.delete(`/mes/md/unit-measure/delete-list?ids=${ids.join(",")}`);
}

// 导出计量单位
function exportUnitMeasure(params) {
  return requestClient.download("/mes/md/unit-measure/export-excel", params);
}

export {
  createUnitMeasure,
  deleteUnitMeasure,
  deleteUnitMeasureListByIds,
  exportUnitMeasure,
  getUnitMeasure,
  getUnitMeasurePage,
  updateUnitMeasure,
};

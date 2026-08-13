/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：物料库存页面 (src/views/pages/mes/wm/material-stock.vue)
 * 功能：物料库存的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/material-stock
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取物料库存分页列表
function getMaterialStockPage(params) {
  return requestClient.get("/mes/wm/material-stock/page", { params });
}

// 获取物料库存详情
function getMaterialStock(id) {
  return requestClient.get(`/mes/wm/material-stock/get?id=${id}`);
}

// 新增物料库存
function createMaterialStock(data) {
  return requestClient.post("/mes/wm/material-stock/create", data);
}

// 修改物料库存
function updateMaterialStock(data) {
  return requestClient.put("/mes/wm/material-stock/update", data);
}

// 删除物料库存
function deleteMaterialStock(id) {
  return requestClient.delete(`/mes/wm/material-stock/delete?id=${id}`);
}

// 批量删除物料库存
function deleteMaterialStockListByIds(ids) {
  return requestClient.delete(`/mes/wm/material-stock/delete-list?ids=${ids.join(",")}`);
}

// 导出物料库存
function exportMaterialStock(params) {
  return requestClient.download("/mes/wm/material-stock/export-excel", params);
}

export {
  createMaterialStock,
  deleteMaterialStock,
  deleteMaterialStockListByIds,
  exportMaterialStock,
  getMaterialStock,
  getMaterialStockPage,
  updateMaterialStock,
};

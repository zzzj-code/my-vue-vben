/**
 * ============================================================
 * 模块：主数据模块(mdm)
 * 页面：物料管理页面
 * 功能：物料相关接口
 * 接口前缀：/admin-api/mdm
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取物料分页列表
function getMaterialPage(params) {
  return requestClient.get("/mdm/material/page", { params });
}

// 获取物料详情
function getMaterial(id) {
  return requestClient.get(`/mdm/material/get?id=${id}`);
}

// 新增物料
function createMaterial(data) {
  return requestClient.post("/mdm/material/create", data);
}

// 修改物料
function updateMaterial(data) {
  return requestClient.put("/mdm/material/update", data);
}

// 删除物料
function deleteMaterial(id) {
  return requestClient.delete(`/mdm/material/delete?id=${id}`);
}

// 批量删除物料
function deleteMaterialList(ids) {
  return requestClient.delete("/mdm/material/delete-list", { data: ids });
}

// 导出物料
function exportMaterial(params) {
  return requestClient.download("/mdm/material/export", params);
}

export {
  getMaterialPage,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  deleteMaterialList,
  exportMaterial,
};

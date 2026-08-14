/**
 * ============================================================
 * 模块：主数据模块(mdm)
 * 页面：物料分类页面
 * 功能：物料分类相关接口
 * 接口前缀：/admin-api/mdm
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取物料分类列表
function getMaterialCategoryList() {
  return requestClient.get("/mdm/material-category/list");
}

// 获取物料分类详情
function getMaterialCategory(id) {
  return requestClient.get(`/mdm/material-category/get?id=${id}`);
}

// 新增物料分类
function createMaterialCategory(data) {
  return requestClient.post("/mdm/material-category/create", data);
}

// 修改物料分类
function updateMaterialCategory(data) {
  return requestClient.put("/mdm/material-category/update", data);
}

// 删除物料分类
function deleteMaterialCategory(id) {
  return requestClient.delete(`/mdm/material-category/delete?id=${id}`);
}

export {
  getMaterialCategoryList,
  getMaterialCategory,
  createMaterialCategory,
  updateMaterialCategory,
  deleteMaterialCategory,
};

/**
 * ============================================================
 * 模块：主数据模块(mdm)
 * 页面：合作伙伴分类页面
 * 功能：合作伙伴分类相关接口
 * 接口前缀：/admin-api/mdm
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取合作伙伴分类列表
function getPartnerCategoryList() {
  return requestClient.get("/mdm/partner-category/list");
}

// 获取合作伙伴分类详情
function getPartnerCategory(id) {
  return requestClient.get(`/mdm/partner-category/get?id=${id}`);
}

// 新增合作伙伴分类
function createPartnerCategory(data) {
  return requestClient.post("/mdm/partner-category/create", data);
}

// 修改合作伙伴分类
function updatePartnerCategory(data) {
  return requestClient.put("/mdm/partner-category/update", data);
}

// 删除合作伙伴分类
function deletePartnerCategory(id) {
  return requestClient.delete(`/mdm/partner-category/delete?id=${id}`);
}

export {
  getPartnerCategoryList,
  getPartnerCategory,
  createPartnerCategory,
  updatePartnerCategory,
  deletePartnerCategory,
};

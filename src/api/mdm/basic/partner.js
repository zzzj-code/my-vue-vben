/**
 * ============================================================
 * 模块：主数据模块(mdm)
 * 页面：合作伙伴管理页面
 * 功能：合作伙伴相关接口
 * 接口前缀：/admin-api/mdm
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取合作伙伴分页列表
function getPartnerPage(params) {
  return requestClient.get("/mdm/partner/page", { params });
}

// 获取合作伙伴详情
function getPartner(id) {
  return requestClient.get(`/mdm/partner/get?id=${id}`);
}

// 新增合作伙伴
function createPartner(data) {
  return requestClient.post("/mdm/partner/create", data);
}

// 修改合作伙伴
function updatePartner(data) {
  return requestClient.put("/mdm/partner/update", data);
}

// 删除合作伙伴
function deletePartner(id) {
  return requestClient.delete(`/mdm/partner/delete?id=${id}`);
}

// 批量删除合作伙伴
function deletePartnerList(ids) {
  return requestClient.delete("/mdm/partner/delete-list", { data: ids });
}

// 导出合作伙伴
function exportPartner(params) {
  return requestClient.download("/mdm/partner/export", params);
}

export {
  getPartnerPage,
  getPartner,
  createPartner,
  updatePartner,
  deletePartner,
  deletePartnerList,
  exportPartner,
};

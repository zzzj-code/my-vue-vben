/**
 * ============================================================
 * 模块：主数据模块(mdm)
 * 页面：计量单位页面
 * 功能：计量单位相关接口
 * 接口前缀：/admin-api/mdm
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取计量单位分页列表
function getUnitPage(params) {
  return requestClient.get("/mdm/unit/page", { params });
}

// 获取计量单位详情
function getUnit(id) {
  return requestClient.get(`/mdm/unit/get?id=${id}`);
}

// 新增计量单位
function createUnit(data) {
  return requestClient.post("/mdm/unit/create", data);
}

// 修改计量单位
function updateUnit(data) {
  return requestClient.put("/mdm/unit/update", data);
}

// 删除计量单位
function deleteUnit(id) {
  return requestClient.delete(`/mdm/unit/delete?id=${id}`);
}

// 批量删除计量单位
function deleteUnitList(ids) {
  return requestClient.delete("/mdm/unit/delete-list", { data: ids });
}

export {
  getUnitPage,
  getUnit,
  createUnit,
  updateUnit,
  deleteUnit,
  deleteUnitList,
};

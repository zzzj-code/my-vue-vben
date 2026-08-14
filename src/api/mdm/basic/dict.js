/**
 * ============================================================
 * 模块：主数据模块(mdm)
 * 页面：数据字典页面
 * 功能：数据字典相关接口（复用system模块的字典接口）
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取字典类型分页列表
function getDictTypePage(params) {
  return requestClient.get("/system/dict-type/page", { params });
}

// 获取字典类型详情
function getDictType(id) {
  return requestClient.get(`/system/dict-type/get?id=${id}`);
}

// 新增字典类型
function createDictType(data) {
  return requestClient.post("/system/dict-type/create", data);
}

// 修改字典类型
function updateDictType(data) {
  return requestClient.put("/system/dict-type/update", data);
}

// 删除字典类型
function deleteDictType(id) {
  return requestClient.delete(`/system/dict-type/delete?id=${id}`);
}

// 获取字典数据分页列表
function getDictDataPage(params) {
  return requestClient.get("/system/dict-data/page", { params });
}

// 获取字典数据详情
function getDictData(id) {
  return requestClient.get(`/system/dict-data/get?id=${id}`);
}

// 新增字典数据
function createDictData(data) {
  return requestClient.post("/system/dict-data/create", data);
}

// 修改字典数据
function updateDictData(data) {
  return requestClient.put("/system/dict-data/update", data);
}

// 删除字典数据
function deleteDictData(id) {
  return requestClient.delete(`/system/dict-data/delete?id=${id}`);
}

export {
  getDictTypePage,
  getDictType,
  createDictType,
  updateDictType,
  deleteDictType,
  getDictDataPage,
  getDictData,
  createDictData,
  updateDictData,
  deleteDictData,
};

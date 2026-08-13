/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：工艺路线页面 (src/views/pages/mes/pro/route.vue)
 * 功能：工艺路线的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/pro/route
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取工艺路线分页列表
function getRoutePage(params) {
  return requestClient.get("/mes/pro/route/page", { params });
}

// 获取工艺路线详情
function getRoute(id) {
  return requestClient.get(`/mes/pro/route/get?id=${id}`);
}

// 新增工艺路线
function createRoute(data) {
  return requestClient.post("/mes/pro/route/create", data);
}

// 修改工艺路线
function updateRoute(data) {
  return requestClient.put("/mes/pro/route/update", data);
}

// 删除工艺路线
function deleteRoute(id) {
  return requestClient.delete(`/mes/pro/route/delete?id=${id}`);
}

// 批量删除工艺路线
function deleteRouteListByIds(ids) {
  return requestClient.delete(`/mes/pro/route/delete-list?ids=${ids.join(",")}`);
}

// 导出工艺路线
function exportRoute(params) {
  return requestClient.download("/mes/pro/route/export-excel", params);
}

export {
  createRoute,
  deleteRoute,
  deleteRouteListByIds,
  exportRoute,
  getRoute,
  getRoutePage,
  updateRoute,
};

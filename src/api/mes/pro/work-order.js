/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：生产工单页面 (src/views/pages/mes/pro/work-order.vue)
 * 功能：生产工单的增删改查、排产、下达等操作
 * 接口前缀：/admin-api/mes/pro/work-order
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取生产工单分页列表
function getWorkOrderPage(params) {
  return requestClient.get("/mes/pro/work-order/page", { params });
}

// 获取生产工单详情
function getWorkOrder(id) {
  return requestClient.get(`/mes/pro/work-order/get?id=${id}`);
}

// 新增生产工单
function createWorkOrder(data) {
  return requestClient.post("/mes/pro/work-order/create", data);
}

// 修改生产工单
function updateWorkOrder(data) {
  return requestClient.put("/mes/pro/work-order/update", data);
}

// 删除生产工单
function deleteWorkOrder(id) {
  return requestClient.delete(`/mes/pro/work-order/delete?id=${id}`);
}

// 批量删除生产工单
function deleteWorkOrderListByIds(ids) {
  return requestClient.delete(`/mes/pro/work-order/delete-list?ids=${ids.join(",")}`);
}

export {
  createWorkOrder,
  deleteWorkOrder,
  deleteWorkOrderListByIds,
  getWorkOrder,
  getWorkOrderPage,
  updateWorkOrder,
};

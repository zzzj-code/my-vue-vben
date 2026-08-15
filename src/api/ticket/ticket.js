/**
 * ============================================================
 * 模块：工单管理模块(ticket)
 * 页面：工单列表页面、工单池页面
 * 功能：工单相关接口
 * 接口前缀：/admin-api/ticket
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取工单分页列表
function getTicketPage(params) {
  return requestClient.get("/oa/ticket-bill/page", { params });
}

// 获取工单详情
function getTicket(id) {
  return requestClient.get(`/oa/ticket-bill/get?id=${id}`);
}

// 新增工单
function createTicket(data) {
  return requestClient.post("/oa/ticket-bill/create", data);
}

// 修改工单
function updateTicket(data) {
  return requestClient.put("/oa/ticket-bill/update", data);
}

// 删除工单
function deleteTicket(id) {
  return requestClient.delete(`/oa/ticket-bill/delete?id=${id}`);
}

// 批量删除工单
function deleteTicketList(ids) {
  return requestClient.delete(`/oa/ticket-bill/delete-list?ids=${ids.join(",")}`);
}

// 获取工单池列表
function getTicketPoolPage(params) {
  return requestClient.get("/oa/ticket-pool/page", { params });
}

// 领取工单
function receiveTicket(id) {
  return requestClient.put(`/oa/ticket-bill/receive?id=${id}`);
}

// 导出工单
function exportTicket(params) {
  return requestClient.download("/oa/ticket-bill/export-excel", { params });
}

export {
  getTicketPage,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
  deleteTicketList,
  getTicketPoolPage,
  receiveTicket,
  exportTicket,
};

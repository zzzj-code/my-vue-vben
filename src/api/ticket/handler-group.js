/**
 * ============================================================
 * 模块：工单管理模块(ticket)
 * 页面：处理人组页面
 * 功能：处理人组相关接口
 * 接口前缀：/admin-api/ticket
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取处理人组分页列表
function getHandlerGroupPage(params) {
  return requestClient.get("/oa/ticket-handler-group/page", { params });
}

// 获取处理人组详情
function getHandlerGroup(id) {
  return requestClient.get(`/oa/ticket-handler-group/get?id=${id}`);
}

// 新增处理人组
function createHandlerGroup(data) {
  return requestClient.post("/oa/ticket-handler-group/create", data);
}

// 修改处理人组
function updateHandlerGroup(data) {
  return requestClient.put("/oa/ticket-handler-group/update", data);
}

// 删除处理人组
function deleteHandlerGroup(id) {
  return requestClient.delete(`/oa/ticket-handler-group/delete?id=${id}`);
}

// 批量删除处理人组
function deleteHandlerGroupList(ids) {
  return requestClient.delete(`/oa/ticket-handler-group/delete-list?ids=${ids.join(",")}`);
}

export {
  getHandlerGroupPage,
  getHandlerGroup,
  createHandlerGroup,
  updateHandlerGroup,
  deleteHandlerGroup,
  deleteHandlerGroupList,
};

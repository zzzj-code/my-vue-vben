/**
 * ============================================================
 * 模块：工单管理模块(ticket)
 * 页面：SLA规则页面
 * 功能：SLA规则相关接口
 * 接口前缀：/admin-api/ticket
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取SLA规则分页列表
function getSlaRulePage(params) {
  return requestClient.get("/ticket/sla-rule/page", { params });
}

// 获取SLA规则详情
function getSlaRule(id) {
  return requestClient.get(`/ticket/sla-rule/get?id=${id}`);
}

// 新增SLA规则
function createSlaRule(data) {
  return requestClient.post("/ticket/sla-rule/create", data);
}

// 修改SLA规则
function updateSlaRule(data) {
  return requestClient.put("/ticket/sla-rule/update", data);
}

// 删除SLA规则
function deleteSlaRule(id) {
  return requestClient.delete(`/ticket/sla-rule/delete?id=${id}`);
}

// 批量删除SLA规则
function deleteSlaRuleList(ids) {
  return requestClient.delete(`/ticket/sla-rule/delete-list?ids=${ids.join(",")}`);
}

export {
  getSlaRulePage,
  getSlaRule,
  createSlaRule,
  updateSlaRule,
  deleteSlaRule,
  deleteSlaRuleList,
};

/**
 * ============================================================
 * 模块：商城模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getBrokerageWithdrawPage(params) {
  return requestClient.get("/trade/brokerage-withdraw/page", { params });
}
function approveBrokerageWithdraw(id) {
  return requestClient.put(`/trade/brokerage-withdraw/approve?id=${id}`);
}
function rejectBrokerageWithdraw(data) {
  return requestClient.put("/trade/brokerage-withdraw/reject", data);
}
export {
  approveBrokerageWithdraw,
  getBrokerageWithdrawPage,
  rejectBrokerageWithdraw
};

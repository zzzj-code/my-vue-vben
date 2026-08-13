/**
 * ============================================================
 * 模块：支付模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/pay
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getDemoWithdrawPage(params) {
  return requestClient.get(
    "/pay/demo-withdraw/page",
    {
      params
    }
  );
}
function createDemoWithdraw(data) {
  return requestClient.post("/pay/demo-withdraw/create", data);
}
function transferDemoWithdraw(id) {
  return requestClient.post(`/pay/demo-withdraw/transfer?id=${id}`);
}
export {
  createDemoWithdraw,
  getDemoWithdrawPage,
  transferDemoWithdraw
};

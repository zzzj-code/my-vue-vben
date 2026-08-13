/**
 * ============================================================
 * 模块：支付模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/pay
 * ============================================================
 */
import { requestClient } from "#/api/request";
function createDemoOrder(data) {
  return requestClient.post("/pay/demo-order/create", data);
}
function getDemoOrderPage(params) {
  return requestClient.get(
    "/pay/demo-order/page",
    {
      params
    }
  );
}
function refundDemoOrder(id) {
  return requestClient.put(`/pay/demo-order/refund?id=${id}`);
}
export {
  createDemoOrder,
  getDemoOrderPage,
  refundDemoOrder
};

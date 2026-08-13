/**
 * ============================================================
 * 模块：支付模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/pay
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getOrderPage(params) {
  return requestClient.get("/pay/order/page", {
    params
  });
}
function getOrder(id, sync) {
  return requestClient.get("/pay/order/get", {
    params: {
      id,
      sync
    }
  });
}
function getOrderDetail(id) {
  return requestClient.get(`/pay/order/get-detail?id=${id}`);
}
function submitOrder(data) {
  return requestClient.post("/pay/order/submit", data);
}
function exportOrder(params) {
  return requestClient.download("/pay/order/export-excel", { params });
}
export {
  exportOrder,
  getOrder,
  getOrderDetail,
  getOrderPage,
  submitOrder
};

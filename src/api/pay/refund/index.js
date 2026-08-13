/**
 * ============================================================
 * 模块：支付模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/pay
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getRefundPage(params) {
  return requestClient.get(
    "/pay/refund/page",
    {
      params
    }
  );
}
function getRefund(id) {
  return requestClient.get(`/pay/refund/get?id=${id}`);
}
function exportRefund(params) {
  return requestClient.download("/pay/refund/export-excel", { params });
}
export {
  exportRefund,
  getRefund,
  getRefundPage
};

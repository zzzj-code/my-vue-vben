/**
 * ============================================================
 * 模块：支付模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/pay
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getTransferPage(params) {
  return requestClient.get(
    "/pay/transfer/page",
    {
      params
    }
  );
}
function getTransfer(id) {
  return requestClient.get(
    `/pay/transfer/get?id=${id}`
  );
}
function exportTransfer(params) {
  return requestClient.download("/pay/transfer/export-excel", {
    params
  });
}
export {
  exportTransfer,
  getTransfer,
  getTransferPage
};

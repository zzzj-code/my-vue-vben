/**
 * ============================================================
 * 模块：支付模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/pay
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getTransactionPage(params) {
  return requestClient.get(
    "/pay/wallet-transaction/page",
    {
      params
    }
  );
}
export {
  getTransactionPage
};

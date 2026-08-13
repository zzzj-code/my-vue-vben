/**
 * ============================================================
 * 模块：支付模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/pay
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getWallet(params) {
  return requestClient.get("/pay/wallet/get", {
    params
  });
}
function getWalletPage(params) {
  return requestClient.get(
    "/pay/wallet/page",
    {
      params
    }
  );
}
function updateWalletBalance(data) {
  return requestClient.put("/pay/wallet/update-balance", data);
}
export {
  getWallet,
  getWalletPage,
  updateWalletBalance
};

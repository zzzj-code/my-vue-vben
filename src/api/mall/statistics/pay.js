/**
 * ============================================================
 * 模块：商城模块
 * 页面：pay页面
 * 功能：pay相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getWalletRechargePrice() {
  return requestClient.get(
    "/statistics/pay/summary"
  );
}
export {
  getWalletRechargePrice
};

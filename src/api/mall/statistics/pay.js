import { requestClient } from "#/api/request";
function getWalletRechargePrice() {
  return requestClient.get(
    "/statistics/pay/summary"
  );
}
export {
  getWalletRechargePrice
};

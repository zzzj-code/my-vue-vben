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

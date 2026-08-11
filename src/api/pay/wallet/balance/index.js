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

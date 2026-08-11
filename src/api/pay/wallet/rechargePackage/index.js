import { requestClient } from "#/api/request";
function getWalletRechargePackagePage(params) {
  return requestClient.get("/pay/wallet-recharge-package/page", {
    params
  });
}
function getWalletRechargePackage(id) {
  return requestClient.get(
    `/pay/wallet-recharge-package/get?id=${id}`
  );
}
function createWalletRechargePackage(data) {
  return requestClient.post("/pay/wallet-recharge-package/create", data);
}
function updateWalletRechargePackage(data) {
  return requestClient.put("/pay/wallet-recharge-package/update", data);
}
function deleteWalletRechargePackage(id) {
  return requestClient.delete(`/pay/wallet-recharge-package/delete?id=${id}`);
}
export {
  createWalletRechargePackage,
  deleteWalletRechargePackage,
  getWalletRechargePackage,
  getWalletRechargePackagePage,
  updateWalletRechargePackage
};

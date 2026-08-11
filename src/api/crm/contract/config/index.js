import { requestClient } from "#/api/request";
function getContractConfig() {
  return requestClient.get(
    "/crm/contract-config/get"
  );
}
function saveContractConfig(data) {
  return requestClient.put("/crm/contract-config/save", data);
}
export {
  getContractConfig,
  saveContractConfig
};

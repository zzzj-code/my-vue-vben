import { requestClient } from "#/api/request";
function getCustomerPoolConfig() {
  return requestClient.get(
    "/crm/customer-pool-config/get"
  );
}
function saveCustomerPoolConfig(data) {
  return requestClient.put("/crm/customer-pool-config/save", data);
}
export {
  getCustomerPoolConfig,
  saveCustomerPoolConfig
};

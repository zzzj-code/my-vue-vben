import { requestClient } from "#/api/request";
function getCustomerPage(params) {
  return requestClient.get(
    "/erp/customer/page",
    { params }
  );
}
function getCustomerSimpleList() {
  return requestClient.get(
    "/erp/customer/simple-list"
  );
}
function getCustomer(id) {
  return requestClient.get(
    `/erp/customer/get?id=${id}`
  );
}
function createCustomer(data) {
  return requestClient.post("/erp/customer/create", data);
}
function updateCustomer(data) {
  return requestClient.put("/erp/customer/update", data);
}
function deleteCustomer(id) {
  return requestClient.delete(`/erp/customer/delete?id=${id}`);
}
function exportCustomer(params) {
  return requestClient.download("/erp/customer/export-excel", { params });
}
export {
  createCustomer,
  deleteCustomer,
  exportCustomer,
  getCustomer,
  getCustomerPage,
  getCustomerSimpleList,
  updateCustomer
};

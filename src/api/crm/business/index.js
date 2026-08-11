import { requestClient } from "#/api/request";
function getBusinessPage(params) {
  return requestClient.get(
    "/crm/business/page",
    { params }
  );
}
function getBusinessPageByCustomer(params) {
  return requestClient.get(
    "/crm/business/page-by-customer",
    { params }
  );
}
function getBusiness(id) {
  return requestClient.get(
    `/crm/business/get?id=${id}`
  );
}
function getSimpleBusinessList() {
  return requestClient.get(
    "/crm/business/simple-all-list"
  );
}
function createBusiness(data) {
  return requestClient.post("/crm/business/create", data);
}
function updateBusiness(data) {
  return requestClient.put("/crm/business/update", data);
}
function updateBusinessStatus(data) {
  return requestClient.put("/crm/business/update-status", data);
}
function deleteBusiness(id) {
  return requestClient.delete(`/crm/business/delete?id=${id}`);
}
function exportBusiness(params) {
  return requestClient.download("/crm/business/export-excel", { params });
}
function getBusinessPageByContact(params) {
  return requestClient.get(
    "/crm/business/page-by-contact",
    { params }
  );
}
function transferBusiness(data) {
  return requestClient.put("/crm/business/transfer", data);
}
export {
  createBusiness,
  deleteBusiness,
  exportBusiness,
  getBusiness,
  getBusinessPage,
  getBusinessPageByContact,
  getBusinessPageByCustomer,
  getSimpleBusinessList,
  transferBusiness,
  updateBusiness,
  updateBusinessStatus
};

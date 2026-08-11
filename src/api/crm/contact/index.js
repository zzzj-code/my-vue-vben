import { requestClient } from "#/api/request";
function getContactPage(params) {
  return requestClient.get(
    "/crm/contact/page",
    { params }
  );
}
function getContactPageByCustomer(params) {
  return requestClient.get(
    "/crm/contact/page-by-customer",
    { params }
  );
}
function getContactPageByBusiness(params) {
  return requestClient.get(
    "/crm/contact/page-by-business",
    { params }
  );
}
function getContact(id) {
  return requestClient.get(`/crm/contact/get?id=${id}`);
}
function createContact(data) {
  return requestClient.post("/crm/contact/create", data);
}
function updateContact(data) {
  return requestClient.put("/crm/contact/update", data);
}
function deleteContact(id) {
  return requestClient.delete(`/crm/contact/delete?id=${id}`);
}
function exportContact(params) {
  return requestClient.download("/crm/contact/export-excel", { params });
}
function getSimpleContactList() {
  return requestClient.get(
    "/crm/contact/simple-all-list"
  );
}
function createContactBusinessList(data) {
  return requestClient.post("/crm/contact/create-business-list", data);
}
function createBusinessContactList(data) {
  return requestClient.post("/crm/contact/create-business-list2", data);
}
function deleteContactBusinessList(data) {
  return requestClient.delete("/crm/contact/delete-business-list", { data });
}
function deleteBusinessContactList(data) {
  return requestClient.delete("/crm/contact/delete-business-list2", { data });
}
function transferContact(data) {
  return requestClient.put("/crm/contact/transfer", data);
}
export {
  createBusinessContactList,
  createContact,
  createContactBusinessList,
  deleteBusinessContactList,
  deleteContact,
  deleteContactBusinessList,
  exportContact,
  getContact,
  getContactPage,
  getContactPageByBusiness,
  getContactPageByCustomer,
  getSimpleContactList,
  transferContact,
  updateContact
};

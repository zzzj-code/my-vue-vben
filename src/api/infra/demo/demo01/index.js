import { requestClient } from "#/api/request";
function getDemo01ContactPage(params) {
  return requestClient.get(
    "/infra/demo01-contact/page",
    { params }
  );
}
function getDemo01Contact(id) {
  return requestClient.get(
    `/infra/demo01-contact/get?id=${id}`
  );
}
function createDemo01Contact(data) {
  return requestClient.post("/infra/demo01-contact/create", data);
}
function updateDemo01Contact(data) {
  return requestClient.put("/infra/demo01-contact/update", data);
}
function deleteDemo01Contact(id) {
  return requestClient.delete(`/infra/demo01-contact/delete?id=${id}`);
}
function deleteDemo01ContactList(ids) {
  return requestClient.delete(
    `/infra/demo01-contact/delete-list?ids=${ids.join(",")}`
  );
}
function exportDemo01Contact(params) {
  return requestClient.download("/infra/demo01-contact/export-excel", {
    params
  });
}
export {
  createDemo01Contact,
  deleteDemo01Contact,
  deleteDemo01ContactList,
  exportDemo01Contact,
  getDemo01Contact,
  getDemo01ContactPage,
  updateDemo01Contact
};

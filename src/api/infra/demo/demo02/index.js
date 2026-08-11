import { requestClient } from "#/api/request";
function getDemo02CategoryList(params) {
  return requestClient.get(
    "/infra/demo02-category/list",
    { params }
  );
}
function getDemo02Category(id) {
  return requestClient.get(
    `/infra/demo02-category/get?id=${id}`
  );
}
function createDemo02Category(data) {
  return requestClient.post("/infra/demo02-category/create", data);
}
function updateDemo02Category(data) {
  return requestClient.put("/infra/demo02-category/update", data);
}
function deleteDemo02Category(id) {
  return requestClient.delete(`/infra/demo02-category/delete?id=${id}`);
}
function exportDemo02Category(params) {
  return requestClient.download("/infra/demo02-category/export-excel", {
    params
  });
}
export {
  createDemo02Category,
  deleteDemo02Category,
  exportDemo02Category,
  getDemo02Category,
  getDemo02CategoryList,
  updateDemo02Category
};

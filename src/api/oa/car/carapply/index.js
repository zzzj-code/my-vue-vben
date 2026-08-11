import { requestClient } from "#/api/request";
function getCarApplyBillPage(params) {
  return requestClient.get(
    "/oa/car-apply-bill/page",
    { params }
  );
}
function getCarApplyBill(id) {
  return requestClient.get(
    `/oa/car-apply-bill/get?id=${id}`
  );
}
function saveCarApplyBill(data) {
  return requestClient.post(`/oa/car-apply-bill/save`, data);
}
function submitCarApplyBill(data) {
  return requestClient.post(`/oa/car-apply-bill/submit`, data);
}
function updateCarApplyBill(data) {
  return requestClient.put("/oa/car-apply-bill/update", data);
}
function deleteCarApplyBill(id) {
  return requestClient.delete(`/oa/car-apply-bill/delete?id=${id}`);
}
function deleteCarApplyBillListByIds(ids) {
  return requestClient.delete(
    `/oa/car-apply-bill/delete-list?ids=${ids.join(",")}`
  );
}
function exportCarApplyBill(params) {
  return requestClient.download("/oa/car-apply-bill/export-excel", params);
}
export {
  deleteCarApplyBill,
  deleteCarApplyBillListByIds,
  exportCarApplyBill,
  getCarApplyBill,
  getCarApplyBillPage,
  saveCarApplyBill,
  submitCarApplyBill,
  updateCarApplyBill
};

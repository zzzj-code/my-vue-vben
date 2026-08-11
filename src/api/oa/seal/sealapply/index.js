import { requestClient } from "#/api/request";
function getSealApplyBillPage(params) {
  return requestClient.get(
    "/oa/seal-apply-bill/page",
    { params }
  );
}
function getSealApplyBill(id) {
  return requestClient.get(
    `/oa/seal-apply-bill/get?id=${id}`
  );
}
function createSealApplyBill(data) {
  return requestClient.post("/oa/seal-apply-bill/create", data);
}
function saveSealApplyBill(data) {
  return requestClient.post("/oa/seal-apply-bill/save", data);
}
function submitSealApplyBill(data) {
  return requestClient.post("/oa/seal-apply-bill/submit", data);
}
function updateSealApplyBill(data) {
  return requestClient.put("/oa/seal-apply-bill/update", data);
}
function deleteSealApplyBill(id) {
  return requestClient.delete(`/oa/seal-apply-bill/delete?id=${id}`);
}
function deleteSealApplyBillList(ids) {
  return requestClient.delete(
    `/oa/seal-apply-bill/delete-list?ids=${ids.join(",")}`
  );
}
function exportSealApplyBill(params) {
  return requestClient.download("/oa/seal-apply-bill/export-excel", { params });
}
export {
  createSealApplyBill,
  deleteSealApplyBill,
  deleteSealApplyBillList,
  exportSealApplyBill,
  getSealApplyBill,
  getSealApplyBillPage,
  saveSealApplyBill,
  submitSealApplyBill,
  updateSealApplyBill
};

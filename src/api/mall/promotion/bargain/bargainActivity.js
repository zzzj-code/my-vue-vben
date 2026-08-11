import { requestClient } from "#/api/request";
function getBargainActivityPage(params) {
  return requestClient.get(
    "/promotion/bargain-activity/page",
    { params }
  );
}
function getBargainActivity(id) {
  return requestClient.get(
    `/promotion/bargain-activity/get?id=${id}`
  );
}
function createBargainActivity(data) {
  return requestClient.post("/promotion/bargain-activity/create", data);
}
function updateBargainActivity(data) {
  return requestClient.put("/promotion/bargain-activity/update", data);
}
function closeBargainActivity(id) {
  return requestClient.put(`/promotion/bargain-activity/close?id=${id}`);
}
function deleteBargainActivity(id) {
  return requestClient.delete(`/promotion/bargain-activity/delete?id=${id}`);
}
export {
  closeBargainActivity,
  createBargainActivity,
  deleteBargainActivity,
  getBargainActivity,
  getBargainActivityPage,
  updateBargainActivity
};

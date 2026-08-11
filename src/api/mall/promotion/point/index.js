import { requestClient } from "#/api/request";
function getPointActivityPage(params) {
  return requestClient.get(
    "/promotion/point-activity/page",
    { params }
  );
}
function getPointActivity(id) {
  return requestClient.get(
    `/promotion/point-activity/get?id=${id}`
  );
}
function getPointActivityListByIds(ids) {
  return requestClient.get(
    `/promotion/point-activity/list-by-ids?ids=${ids}`
  );
}
function createPointActivity(data) {
  return requestClient.post("/promotion/point-activity/create", data);
}
function updatePointActivity(data) {
  return requestClient.put("/promotion/point-activity/update", data);
}
function deletePointActivity(id) {
  return requestClient.delete(`/promotion/point-activity/delete?id=${id}`);
}
function closePointActivity(id) {
  return requestClient.put(`/promotion/point-activity/close?id=${id}`);
}
export {
  closePointActivity,
  createPointActivity,
  deletePointActivity,
  getPointActivity,
  getPointActivityListByIds,
  getPointActivityPage,
  updatePointActivity
};

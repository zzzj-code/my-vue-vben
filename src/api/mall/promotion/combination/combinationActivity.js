import { requestClient } from "#/api/request";
function getCombinationActivityPage(params) {
  return requestClient.get("/promotion/combination-activity/page", { params });
}
function getCombinationActivity(id) {
  return requestClient.get(
    `/promotion/combination-activity/get?id=${id}`
  );
}
function getCombinationActivityListByIds(ids) {
  return requestClient.get(
    `/promotion/combination-activity/list-by-ids?ids=${ids}`
  );
}
function createCombinationActivity(data) {
  return requestClient.post("/promotion/combination-activity/create", data);
}
function updateCombinationActivity(data) {
  return requestClient.put("/promotion/combination-activity/update", data);
}
function closeCombinationActivity(id) {
  return requestClient.put(`/promotion/combination-activity/close?id=${id}`);
}
function deleteCombinationActivity(id) {
  return requestClient.delete(
    `/promotion/combination-activity/delete?id=${id}`
  );
}
export {
  closeCombinationActivity,
  createCombinationActivity,
  deleteCombinationActivity,
  getCombinationActivity,
  getCombinationActivityListByIds,
  getCombinationActivityPage,
  updateCombinationActivity
};

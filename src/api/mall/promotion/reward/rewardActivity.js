import { requestClient } from "#/api/request";
function createRewardActivity(data) {
  return requestClient.post("/promotion/reward-activity/create", data);
}
function updateRewardActivity(data) {
  return requestClient.put("/promotion/reward-activity/update", data);
}
function getRewardActivityPage(params) {
  return requestClient.get(
    "/promotion/reward-activity/page",
    { params }
  );
}
function getReward(id) {
  return requestClient.get(
    `/promotion/reward-activity/get?id=${id}`
  );
}
function deleteRewardActivity(id) {
  return requestClient.delete(`/promotion/reward-activity/delete?id=${id}`);
}
function closeRewardActivity(id) {
  return requestClient.put(`/promotion/reward-activity/close?id=${id}`);
}
export {
  closeRewardActivity,
  createRewardActivity,
  deleteRewardActivity,
  getReward,
  getRewardActivityPage,
  updateRewardActivity
};

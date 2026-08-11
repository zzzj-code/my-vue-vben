import { requestClient } from "#/api/request";
async function createLeave(data) {
  return requestClient.post("/bpm/oa/leave/create", data);
}
async function updateLeave(data) {
  return requestClient.post("/bpm/oa/leave/update", data);
}
async function getLeave(id) {
  return requestClient.get(`/bpm/oa/leave/get?id=${id}`);
}
async function getLeavePage(params) {
  return requestClient.get(
    "/bpm/oa/leave/page",
    { params }
  );
}
export {
  createLeave,
  getLeave,
  getLeavePage,
  updateLeave
};

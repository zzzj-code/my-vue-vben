import { requestClient } from "#/api/request";
function getFollowUpRecordPage(params) {
  return requestClient.get(
    "/crm/follow-up-record/page",
    { params }
  );
}
function createFollowUpRecord(data) {
  return requestClient.post("/crm/follow-up-record/create", data);
}
function deleteFollowUpRecord(id) {
  return requestClient.delete(`/crm/follow-up-record/delete?id=${id}`);
}
export {
  createFollowUpRecord,
  deleteFollowUpRecord,
  getFollowUpRecordPage
};

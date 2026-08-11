import { requestClient } from "#/api/request";
function getExperienceRecordPage(params) {
  return requestClient.get("/member/experience-record/page", {
    params
  });
}
function getExperienceRecord(id) {
  return requestClient.get(
    `/member/experience-record/get?id=${id}`
  );
}
export {
  getExperienceRecord,
  getExperienceRecordPage
};

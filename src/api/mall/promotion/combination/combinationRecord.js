import { requestClient } from "#/api/request";
function getCombinationRecordPage(params) {
  return requestClient.get("/promotion/combination-record/page", { params });
}
function getCombinationRecordSummary() {
  return requestClient.get(
    "/promotion/combination-record/get-summary"
  );
}
export {
  getCombinationRecordPage,
  getCombinationRecordSummary
};

import { requestClient } from "#/api/request";
function getBargainRecordPage(params) {
  return requestClient.get(
    "/promotion/bargain-record/page",
    { params }
  );
}
export {
  getBargainRecordPage
};

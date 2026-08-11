import { requestClient } from "#/api/request";
function getRecordPage(params) {
  return requestClient.get(
    "/member/point/record/page",
    {
      params
    }
  );
}
export {
  getRecordPage
};

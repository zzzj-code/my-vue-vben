import { requestClient } from "#/api/request";
function getSignInRecordPage(params) {
  return requestClient.get(
    "/member/sign-in/record/page",
    {
      params
    }
  );
}
export {
  getSignInRecordPage
};

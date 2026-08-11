import { requestClient } from "#/api/request";
function getMailLogPage(params) {
  return requestClient.get(
    "/system/mail-log/page",
    { params }
  );
}
export {
  getMailLogPage
};

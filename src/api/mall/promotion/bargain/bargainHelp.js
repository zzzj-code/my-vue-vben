import { requestClient } from "#/api/request";
function getBargainHelpPage(params) {
  return requestClient.get(
    "/promotion/bargain-help/page",
    { params }
  );
}
export {
  getBargainHelpPage
};

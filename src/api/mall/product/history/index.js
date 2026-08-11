import { requestClient } from "#/api/request";
function getBrowseHistoryPage(params) {
  return requestClient.get(
    "/product/browse-history/page",
    { params }
  );
}
export {
  getBrowseHistoryPage
};

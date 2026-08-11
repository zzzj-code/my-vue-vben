import { requestClient } from "#/api/request";
function getFavoritePage(params) {
  return requestClient.get(
    "/product/favorite/page",
    { params }
  );
}
export {
  getFavoritePage
};

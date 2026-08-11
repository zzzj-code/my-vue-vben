import { requestClient } from "#/api/request";
function getBannerPage(params) {
  return requestClient.get(
    "/promotion/banner/page",
    { params }
  );
}
function getBanner(id) {
  return requestClient.get(
    `/promotion/banner/get?id=${id}`
  );
}
function createBanner(data) {
  return requestClient.post("/promotion/banner/create", data);
}
function updateBanner(data) {
  return requestClient.put("/promotion/banner/update", data);
}
function deleteBanner(id) {
  return requestClient.delete(`/promotion/banner/delete?id=${id}`);
}
export {
  createBanner,
  deleteBanner,
  getBanner,
  getBannerPage,
  updateBanner
};

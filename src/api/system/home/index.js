import { requestClient } from "#/api/request";
function getHomePagePage(params) {
  return requestClient.get(
    "/system/home/page/page",
    { params }
  );
}
function getHomePage(id) {
  return requestClient.get(
    `/system/home/page/get?id=${id}`
  );
}
function createHomePage(data) {
  return requestClient.post("/system/home/page/create", data);
}
function updateHomePage(data) {
  return requestClient.put("/system/home/page/update", data);
}
function deleteHomePage(id) {
  return requestClient.delete(`/system/home/page/delete?id=${id}`);
}
function getSimpleHomePageList() {
  return requestClient.get(
    "/system/home/page/simple-list"
  );
}
function getMyHomePage() {
  return requestClient.get(
    "/system/home/page/my-home"
  );
}
function enableHomePage(pageId) {
  return requestClient.post(`/system/home/page/enable?pageId=${pageId}`);
}
function setMyHomePage(id) {
  return requestClient.put(`/system/home/page/set-my-home?id=${id}`);
}
function saveHomePageLayout(data) {
  return requestClient.post("/system/home/page/layout/save", data);
}
function getHomePageLayoutList(pageId) {
  return requestClient.get(
    `/system/home/page/layout/list?pageId=${pageId}`
  );
}
export {
  createHomePage,
  deleteHomePage,
  enableHomePage,
  getHomePage,
  getHomePageLayoutList,
  getHomePagePage,
  getMyHomePage,
  getSimpleHomePageList,
  saveHomePageLayout,
  setMyHomePage,
  updateHomePage
};

import { requestClient } from "#/api/request";
function getSpuPage(params) {
  return requestClient.get("/product/spu/page", {
    params
  });
}
function getTabsCount() {
  return requestClient.get("/product/spu/get-count");
}
function createSpu(data) {
  return requestClient.post("/product/spu/create", data);
}
function updateSpu(data) {
  return requestClient.put("/product/spu/update", data);
}
function updateStatus(data) {
  return requestClient.put("/product/spu/update-status", data);
}
function getSpu(id) {
  return requestClient.get(`/product/spu/get-detail?id=${id}`);
}
function getSpuDetailList(ids) {
  return requestClient.get(`/product/spu/list?spuIds=${ids}`);
}
function deleteSpu(id) {
  return requestClient.delete(`/product/spu/delete?id=${id}`);
}
function exportSpu(params) {
  return requestClient.download("/product/spu/export-excel", { params });
}
function getSpuSimpleList() {
  return requestClient.get("/product/spu/list-all-simple");
}
export {
  createSpu,
  deleteSpu,
  exportSpu,
  getSpu,
  getSpuDetailList,
  getSpuPage,
  getSpuSimpleList,
  getTabsCount,
  updateSpu,
  updateStatus
};

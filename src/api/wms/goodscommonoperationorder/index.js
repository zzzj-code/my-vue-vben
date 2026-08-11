import { requestClient } from "#/api/request";
function getGoodsCommonOperationOrderPage(params) {
  return requestClient.get("/wms/goods-common-operation-order/page", { params });
}
function getGoodsCommonOperationOrder(id) {
  return requestClient.get(`/wms/goods-common-operation-order/get?id=${id}`);
}
function createGoodsCommonOperationOrder(data) {
  return requestClient.post("/wms/goods-common-operation-order/create", data);
}
function updateGoodsCommonOperationOrder(data) {
  return requestClient.put("/wms/goods-common-operation-order/update", data);
}
function deleteGoodsCommonOperationOrder(id) {
  return requestClient.delete(`/wms/goods-common-operation-order/delete?id=${id}`);
}
function deleteGoodsCommonOperationOrderListByIds(ids) {
  return requestClient.delete(`/wms/goods-common-operation-order/delete-list?ids=${ids.join(",")}`);
}
function exportGoodsCommonOperationOrder(params) {
  return requestClient.download("/wms/goods-common-operation-order/export-excel", params);
}
function getGoodsWarehousingDetailListByCommonOperationId(commonOperationId) {
  return requestClient.get(`/wms/goods-common-operation-order/goods-warehousing-detail/list-by-common-operation-id?commonOperationId=${commonOperationId}`);
}
export {
  createGoodsCommonOperationOrder,
  deleteGoodsCommonOperationOrder,
  deleteGoodsCommonOperationOrderListByIds,
  exportGoodsCommonOperationOrder,
  getGoodsCommonOperationOrder,
  getGoodsCommonOperationOrderPage,
  getGoodsWarehousingDetailListByCommonOperationId,
  updateGoodsCommonOperationOrder
};

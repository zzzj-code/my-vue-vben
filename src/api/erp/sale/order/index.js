import { requestClient } from "#/api/request";
function getSaleOrderPage(params) {
  return requestClient.get(
    "/erp/sale-order/page",
    { params }
  );
}
function getSaleOrder(id) {
  return requestClient.get(
    `/erp/sale-order/get?id=${id}`
  );
}
function getSaleOrderItemListByOrderId(orderId) {
  return requestClient.get(
    `/erp/sale-order/item/list-by-order-id?orderId=${orderId}`
  );
}
function createSaleOrder(data) {
  return requestClient.post("/erp/sale-order/create", data);
}
function updateSaleOrder(data) {
  return requestClient.put("/erp/sale-order/update", data);
}
function updateSaleOrderStatus(id, status) {
  return requestClient.put("/erp/sale-order/update-status", null, {
    params: { id, status }
  });
}
function deleteSaleOrder(ids) {
  return requestClient.delete("/erp/sale-order/delete", {
    params: { ids: ids.join(",") }
  });
}
function exportSaleOrder(params) {
  return requestClient.download("/erp/sale-order/export-excel", { params });
}
export {
  createSaleOrder,
  deleteSaleOrder,
  exportSaleOrder,
  getSaleOrder,
  getSaleOrderItemListByOrderId,
  getSaleOrderPage,
  updateSaleOrder,
  updateSaleOrderStatus
};

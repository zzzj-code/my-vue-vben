import { requestClient } from '#/api/request';

export function getReceiptOrderPage(params) {
  return requestClient.get('/wms/receipt-order/page', { params });
}
export function getReceiptOrder(id) {
  return requestClient.get(`/wms/receipt-order/get?id=${id}`);
}
export function createReceiptOrder(data) {
  return requestClient.post('/wms/receipt-order/create', data);
}
export function updateReceiptOrder(data) {
  return requestClient.put('/wms/receipt-order/update', data);
}
export function deleteReceiptOrder(id) {
  return requestClient.delete(`/wms/receipt-order/delete?id=${id}`);
}

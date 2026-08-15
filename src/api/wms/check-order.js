import { requestClient } from '#/api/request';

export function getCheckOrderPage(params) {
  return requestClient.get('/wms/check-order/page', { params });
}
export function getCheckOrder(id) {
  return requestClient.get(`/wms/check-order/get?id=${id}`);
}
export function createCheckOrder(data) {
  return requestClient.post('/wms/check-order/create', data);
}
export function updateCheckOrder(data) {
  return requestClient.put('/wms/check-order/update', data);
}
export function deleteCheckOrder(id) {
  return requestClient.delete(`/wms/check-order/delete?id=${id}`);
}

import { requestClient } from '#/api/request';

export function getMovementOrderPage(params) {
  return requestClient.get('/wms/movement-order/page', { params });
}
export function getMovementOrder(id) {
  return requestClient.get(`/wms/movement-order/get?id=${id}`);
}
export function createMovementOrder(data) {
  return requestClient.post('/wms/movement-order/create', data);
}
export function updateMovementOrder(data) {
  return requestClient.put('/wms/movement-order/update', data);
}
export function deleteMovementOrder(id) {
  return requestClient.delete(`/wms/movement-order/delete?id=${id}`);
}

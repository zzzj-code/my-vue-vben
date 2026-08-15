import { requestClient } from '#/api/request';

export function getShipmentOrderPage(params) {
  return requestClient.get('/wms/shipment-order/page', { params });
}
export function getShipmentOrder(id) {
  return requestClient.get(`/wms/shipment-order/get?id=${id}`);
}
export function createShipmentOrder(data) {
  return requestClient.post('/wms/shipment-order/create', data);
}
export function updateShipmentOrder(data) {
  return requestClient.put('/wms/shipment-order/update', data);
}
export function deleteShipmentOrder(id) {
  return requestClient.delete(`/wms/shipment-order/delete?id=${id}`);
}

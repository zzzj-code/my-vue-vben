import { requestClient } from '#/api/request';

export function getWarehousePage(params) {
  return requestClient.get('/wms/warehouse/page', { params });
}
export function getWarehouse(id) {
  return requestClient.get(`/wms/warehouse/get?id=${id}`);
}
export function createWarehouse(data) {
  return requestClient.post('/wms/warehouse/create', data);
}
export function updateWarehouse(data) {
  return requestClient.put('/wms/warehouse/update', data);
}
export function deleteWarehouse(id) {
  return requestClient.delete(`/wms/warehouse/delete?id=${id}`);
}

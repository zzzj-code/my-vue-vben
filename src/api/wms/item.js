import { requestClient } from '#/api/request';

export function getItemPage(params) {
  return requestClient.get('/wms/item/page', { params });
}
export function getItem(id) {
  return requestClient.get(`/wms/item/get?id=${id}`);
}
export function createItem(data) {
  return requestClient.post('/wms/item/create', data);
}
export function updateItem(data) {
  return requestClient.put('/wms/item/update', data);
}
export function deleteItem(id) {
  return requestClient.delete(`/wms/item/delete?id=${id}`);
}

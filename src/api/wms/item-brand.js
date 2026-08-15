import { requestClient } from '#/api/request';

export function getItemBrandPage(params) {
  return requestClient.get('/wms/item-brand/page', { params });
}
export function getItemBrand(id) {
  return requestClient.get(`/wms/item-brand/get?id=${id}`);
}
export function createItemBrand(data) {
  return requestClient.post('/wms/item-brand/create', data);
}
export function updateItemBrand(data) {
  return requestClient.put('/wms/item-brand/update', data);
}
export function deleteItemBrand(id) {
  return requestClient.delete(`/wms/item-brand/delete?id=${id}`);
}

import { requestClient } from '#/api/request';

export function getItemCategoryList() {
  return requestClient.get('/wms/item-category/list');
}
export function getItemCategory(id) {
  return requestClient.get(`/wms/item-category/get?id=${id}`);
}
export function createItemCategory(data) {
  return requestClient.post('/wms/item-category/create', data);
}
export function updateItemCategory(data) {
  return requestClient.put('/wms/item-category/update', data);
}
export function deleteItemCategory(id) {
  return requestClient.delete(`/wms/item-category/delete?id=${id}`);
}

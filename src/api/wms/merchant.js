import { requestClient } from '#/api/request';

export function getMerchantPage(params) {
  return requestClient.get('/wms/merchant/page', { params });
}
export function getMerchant(id) {
  return requestClient.get(`/wms/merchant/get?id=${id}`);
}
export function createMerchant(data) {
  return requestClient.post('/wms/merchant/create', data);
}
export function updateMerchant(data) {
  return requestClient.put('/wms/merchant/update', data);
}
export function deleteMerchant(id) {
  return requestClient.delete(`/wms/merchant/delete?id=${id}`);
}

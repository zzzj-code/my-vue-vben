import { requestClient } from '#/api/request';

export function getInventoryHistoryPage(params) {
  return requestClient.get('/wms/inventory-history/page', { params });
}

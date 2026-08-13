/**
 * 财务模块 - 发票抬头API
 * 对应页面：finance/invoice/invoice-title.vue
 */
import { requestClient } from '#/api/request';

/**
 * 获取发票抬头分页列表
 * @param {Object} params - 查询参数
 * @param {number} params.pageNo - 页码
 * @param {number} params.pageSize - 每页条数
 * @param {string} params.titleName - 抬头名称（模糊查询）
 * @param {string} params.titleType - 抬头类型
 */
export function getInvoiceTitlePage(params) {
  return requestClient.get('/finance/invoice-title/page', params);
}

/**
 * 获取发票抬头详情
 * @param {number} id - 发票抬头ID
 */
export function getInvoiceTitle(id) {
  return requestClient.get(`/finance/invoice-title/get?id=${id}`);
}

/**
 * 新增发票抬头
 * @param {Object} data - 发票抬头信息
 */
export function createInvoiceTitle(data) {
  return requestClient.post('/finance/invoice-title/create', data);
}

/**
 * 修改发票抬头
 * @param {Object} data - 发票抬头信息
 */
export function updateInvoiceTitle(data) {
  return requestClient.put('/finance/invoice-title/update', data);
}

/**
 * 删除发票抬头
 * @param {number} id - 发票抬头ID
 */
export function deleteInvoiceTitle(id) {
  return requestClient.delete(`/finance/invoice-title/delete?id=${id}`);
}

/**
 * 批量删除发票抬头
 * @param {Array} ids - 发票抬头ID数组
 */
export function deleteInvoiceTitleListByIds(ids) {
  return requestClient.delete(`/finance/invoice-title/delete-list?ids=${ids.join(',')}`);
}

/**
 * 导出发票抬头
 * @param {Object} params - 查询参数
 */
export function exportInvoiceTitle(params) {
  return requestClient.download('/finance/invoice-title/export', params);
}

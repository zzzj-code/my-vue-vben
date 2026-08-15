/**
 * 财务模块 - 销项发票API
 * 对应页面：finance/invoice/output-invoice.vue
 */
import { requestClient } from '#/api/request';

/**
 * 获取销项发票分页列表
 * @param {Object} params - 查询参数
 * @param {number} params.pageNo - 页码
 * @param {number} params.pageSize - 每页条数
 * @param {string} params.invoiceNo - 单据编号
 * @param {string} params.invoiceNumber - 发票号码
 */
export function getOutputInvoicePage(params) {
  return requestClient.get('/finance/output-invoice/page', params);
}

/**
 * 获取销项发票详情
 * @param {number} id - 销项发票ID
 */
export function getOutputInvoice(id) {
  return requestClient.get(`/finance/output-invoice/get?id=${id}`);
}

/**
 * 新增销项发票（开票登记）
 * @param {Object} data - 销项发票信息
 */
export function createOutputInvoice(data) {
  return requestClient.post('/finance/output-invoice/create', data);
}

/**
 * 修改销项发票
 * @param {Object} data - 销项发票信息
 */
export function updateOutputInvoice(data) {
  return requestClient.put('/finance/output-invoice/update', data);
}

/**
 * 删除销项发票
 * @param {number} id - 销项发票ID
 */
export function deleteOutputInvoice(id) {
  return requestClient.delete(`/finance/output-invoice/delete?id=${id}`);
}

/**
 * 批量删除销项发票
 * @param {Array} ids - 销项发票ID数组
 */
export function deleteOutputInvoiceListByIds(ids) {
  return requestClient.delete(`/finance/output-invoice/delete-list?ids=${ids.join(',')}`);
}

/**
 * 导出销项发票
 * @param {Object} params - 查询参数
 */
export function exportOutputInvoice(params) {
  return requestClient.download('/finance/output-invoice/export', params);
}

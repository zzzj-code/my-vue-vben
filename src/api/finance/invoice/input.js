/**
 * 财务模块 - 进项发票API
 * 对应页面：finance/invoice/input-invoice.vue
 */
import { requestClient } from '#/api/request';

/**
 * 获取进项发票分页列表
 * @param {Object} params - 查询参数
 * @param {number} params.pageNo - 页码
 * @param {number} params.pageSize - 每页条数
 * @param {string} params.invoiceNo - 单据编号
 * @param {string} params.invoiceNumber - 发票号码
 */
export function getInputInvoicePage(params) {
  return requestClient.get('/finance/invoice-input/page', params);
}

/**
 * 获取进项发票详情
 * @param {number} id - 进项发票ID
 */
export function getInputInvoice(id) {
  return requestClient.get(`/finance/invoice-input/get?id=${id}`);
}

/**
 * 新增进项发票（录入发票）
 * @param {Object} data - 进项发票信息
 */
export function createInputInvoice(data) {
  return requestClient.post('/finance/invoice-input/create', data);
}

/**
 * 修改进项发票
 * @param {Object} data - 进项发票信息
 */
export function updateInputInvoice(data) {
  return requestClient.put('/finance/invoice-input/update', data);
}

/**
 * 删除进项发票
 * @param {number} id - 进项发票ID
 */
export function deleteInputInvoice(id) {
  return requestClient.delete(`/finance/invoice-input/delete?id=${id}`);
}

/**
 * 批量删除进项发票
 * @param {Array} ids - 进项发票ID数组
 */
export function deleteInputInvoiceListByIds(ids) {
  return requestClient.delete(`/finance/invoice-input/delete-list?ids=${ids.join(',')}`);
}

/**
 * 导出进项发票
 * @param {Object} params - 查询参数
 */
export function exportInputInvoice(params) {
  return requestClient.download('/finance/invoice-input/export', params);
}

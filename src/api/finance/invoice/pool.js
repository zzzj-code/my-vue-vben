/**
 * 财务模块 - 发票台账（发票池）API
 * 对应页面：finance/invoice/invoice-pool.vue
 */
import { requestClient } from '#/api/request';

/**
 * 获取发票台账分页列表
 * @param {Object} params - 查询参数
 * @param {number} params.pageNo - 页码
 * @param {number} params.pageSize - 每页条数
 * @param {string} params.direction - 方向（进项/销项）
 * @param {string} params.invoiceNumber - 发票号码
 */
export function getInvoicePoolPage(params) {
  return requestClient.get('/finance/invoice-pool/page', params);
}

/**
 * 获取发票台账详情
 * @param {number} id - 发票ID
 */
export function getInvoicePool(id) {
  return requestClient.get(`/finance/invoice-pool/get?id=${id}`);
}

/**
 * 导出发票台账
 * @param {Object} params - 查询参数
 */
export function exportInvoicePool(params) {
  return requestClient.download('/finance/invoice-pool/export', params);
}

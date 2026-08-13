/**
 * 财务模块 - 开票申请API
 * 对应页面：finance/invoice/invoice-apply.vue
 */
import { requestClient } from '#/api/request';

/**
 * 获取开票申请分页列表
 * @param {Object} params - 查询参数
 * @param {number} params.pageNo - 页码
 * @param {number} params.pageSize - 每页条数
 * @param {string} params.invoiceNo - 单据编号
 * @param {string} params.buyerName - 购方名称
 * @param {string} params.status - 单据状态
 */
export function getInvoiceApplyPage(params) {
  return requestClient.get('/finance/invoice-apply/page', params);
}

/**
 * 获取开票申请详情
 * @param {number} id - 开票申请ID
 */
export function getInvoiceApply(id) {
  return requestClient.get(`/finance/invoice-apply/get?id=${id}`);
}

/**
 * 新增开票申请
 * @param {Object} data - 开票申请信息
 */
export function createInvoiceApply(data) {
  return requestClient.post('/finance/invoice-apply/create', data);
}

/**
 * 修改开票申请
 * @param {Object} data - 开票申请信息
 */
export function updateInvoiceApply(data) {
  return requestClient.put('/finance/invoice-apply/update', data);
}

/**
 * 删除开票申请
 * @param {number} id - 开票申请ID
 */
export function deleteInvoiceApply(id) {
  return requestClient.delete(`/finance/invoice-apply/delete?id=${id}`);
}

/**
 * 批量删除开票申请
 * @param {Array} ids - 开票申请ID数组
 */
export function deleteInvoiceApplyListByIds(ids) {
  return requestClient.delete(`/finance/invoice-apply/delete-list?ids=${ids.join(',')}`);
}

/**
 * 提交开票申请（审核）
 * @param {number} id - 开票申请ID
 */
export function submitInvoiceApply(id) {
  return requestClient.put(`/finance/invoice-apply/submit?id=${id}`);
}

/**
 * 导出开票申请
 * @param {Object} params - 查询参数
 */
export function exportInvoiceApply(params) {
  return requestClient.download('/finance/invoice-apply/export', params);
}

/**
 * 财务模块 - 开票项目（发票商品）API
 * 对应页面：finance/invoice/invoice-goods.vue
 */
import { requestClient } from '#/api/request';

/**
 * 获取开票项目分页列表
 * @param {Object} params - 查询参数
 * @param {number} params.pageNo - 页码
 * @param {number} params.pageSize - 每页条数
 * @param {string} params.goodsName - 项目名称
 * @param {string} params.taxCode - 税收分类编码
 */
export function getInvoiceGoodsPage(params) {
  return requestClient.get('/finance/invoice-goods/page', params);
}

/**
 * 获取开票项目详情
 * @param {number} id - 开票项目ID
 */
export function getInvoiceGoods(id) {
  return requestClient.get(`/finance/invoice-goods/get?id=${id}`);
}

/**
 * 新增开票项目
 * @param {Object} data - 开票项目信息
 */
export function createInvoiceGoods(data) {
  return requestClient.post('/finance/invoice-goods/create', data);
}

/**
 * 修改开票项目
 * @param {Object} data - 开票项目信息
 */
export function updateInvoiceGoods(data) {
  return requestClient.put('/finance/invoice-goods/update', data);
}

/**
 * 删除开票项目
 * @param {number} id - 开票项目ID
 */
export function deleteInvoiceGoods(id) {
  return requestClient.delete(`/finance/invoice-goods/delete?id=${id}`);
}

/**
 * 批量删除开票项目
 * @param {Array} ids - 开票项目ID数组
 */
export function deleteInvoiceGoodsListByIds(ids) {
  return requestClient.delete(`/finance/invoice-goods/delete-list?ids=${ids.join(',')}`);
}

/**
 * 导出开票项目
 * @param {Object} params - 查询参数
 */
export function exportInvoiceGoods(params) {
  return requestClient.download('/finance/invoice-goods/export', params);
}

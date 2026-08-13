/**
 * ============================================================
 * 模块：商城模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getBrokerageRecordPage(params) {
  return requestClient.get(
    "/trade/brokerage-record/page",
    { params }
  );
}
function getBrokerageRecord(id) {
  return requestClient.get(
    `/trade/brokerage-record/get?id=${id}`
  );
}
export {
  getBrokerageRecord,
  getBrokerageRecordPage
};

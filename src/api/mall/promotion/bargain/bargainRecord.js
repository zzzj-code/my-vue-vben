/**
 * ============================================================
 * 模块：商城模块
 * 页面：bargainRecord页面
 * 功能：bargainRecord相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getBargainRecordPage(params) {
  return requestClient.get(
    "/promotion/bargain-record/page",
    { params }
  );
}
export {
  getBargainRecordPage
};

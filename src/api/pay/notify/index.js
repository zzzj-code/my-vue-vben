/**
 * ============================================================
 * 模块：支付模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/pay
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getNotifyTaskDetail(id) {
  return requestClient.get(`/pay/notify/get-detail?id=${id}`);
}
function getNotifyTaskPage(params) {
  return requestClient.get(
    "/pay/notify/page",
    {
      params
    }
  );
}
export {
  getNotifyTaskDetail,
  getNotifyTaskPage
};

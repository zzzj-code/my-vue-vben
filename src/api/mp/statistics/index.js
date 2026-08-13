/**
 * ============================================================
 * 模块：公众号模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getUpstreamMessage(params) {
  return requestClient.get(
    "/mp/statistics/upstream-message",
    {
      params
    }
  );
}
function getUserSummary(params) {
  return requestClient.get(
    "/mp/statistics/user-summary",
    {
      params
    }
  );
}
function getUserCumulate(params) {
  return requestClient.get(
    "/mp/statistics/user-cumulate",
    {
      params
    }
  );
}
function getInterfaceSummary(params) {
  return requestClient.get(
    "/mp/statistics/interface-summary",
    {
      params
    }
  );
}
export {
  getInterfaceSummary,
  getUpstreamMessage,
  getUserCumulate,
  getUserSummary
};

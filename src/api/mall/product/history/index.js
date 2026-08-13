/**
 * ============================================================
 * 模块：商城模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getBrowseHistoryPage(params) {
  return requestClient.get(
    "/product/browse-history/page",
    { params }
  );
}
export {
  getBrowseHistoryPage
};

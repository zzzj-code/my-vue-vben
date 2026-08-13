/**
 * ============================================================
 * 模块：商城模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getFavoritePage(params) {
  return requestClient.get(
    "/product/favorite/page",
    { params }
  );
}
export {
  getFavoritePage
};

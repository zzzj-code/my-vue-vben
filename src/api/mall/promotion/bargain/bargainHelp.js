/**
 * ============================================================
 * 模块：商城模块
 * 页面：bargainHelp页面
 * 功能：bargainHelp相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getBargainHelpPage(params) {
  return requestClient.get(
    "/promotion/bargain-help/page",
    { params }
  );
}
export {
  getBargainHelpPage
};

/**
 * ============================================================
 * 模块：会员模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/member
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getSignInRecordPage(params) {
  return requestClient.get(
    "/member/sign-in/record/page",
    {
      params
    }
  );
}
export {
  getSignInRecordPage
};

/**
 * ============================================================
 * 模块：会员模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/member
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getRecordPage(params) {
  return requestClient.get(
    "/member/point/record/page",
    {
      params
    }
  );
}
export {
  getRecordPage
};

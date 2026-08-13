/**
 * ============================================================
 * 模块：会员模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/member
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getAddressList(params) {
  return requestClient.get("/member/address/list", {
    params
  });
}
export {
  getAddressList
};

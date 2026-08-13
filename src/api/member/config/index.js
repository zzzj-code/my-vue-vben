/**
 * ============================================================
 * 模块：会员模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/member
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getConfig() {
  return requestClient.get("/member/config/get");
}
function saveConfig(data) {
  return requestClient.put("/member/config/save", data);
}
export {
  getConfig,
  saveConfig
};

/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：地区管理页面
 * 功能：地区管理相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getAreaTree() {
  return requestClient.get("/system/area/tree");
}
function getAreaByIp(ip) {
  return requestClient.get(`/system/area/get-by-ip?ip=${ip}`);
}
export {
  getAreaByIp,
  getAreaTree
};

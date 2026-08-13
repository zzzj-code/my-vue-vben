/**
 * ============================================================
 * 模块：公众号模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getMenuList(accountId) {
  return requestClient.get("/mp/menu/list", {
    params: { accountId }
  });
}
function saveMenu(accountId, menus) {
  return requestClient.post("/mp/menu/save", {
    accountId,
    menus
  });
}
function deleteMenu(accountId) {
  return requestClient.delete("/mp/menu/delete", {
    params: { accountId }
  });
}
export {
  deleteMenu,
  getMenuList,
  saveMenu
};

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

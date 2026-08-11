import { requestClient } from "#/api/request";
async function getSimpleMenusList() {
  return requestClient.get("/system/menu/simple-list");
}
async function getMenuList(params) {
  return requestClient.get("/system/menu/list", {
    params
  });
}
async function getMenu(id) {
  return requestClient.get(`/system/menu/get?id=${id}`);
}
async function createMenu(data) {
  return requestClient.post("/system/menu/create", data);
}
async function updateMenu(data) {
  return requestClient.put("/system/menu/update", data);
}
async function deleteMenu(id) {
  return requestClient.delete(`/system/menu/delete?id=${id}`);
}
async function deleteMenuList(ids) {
  return requestClient.delete(`/system/menu/delete-list?ids=${ids.join(",")}`);
}
export {
  createMenu,
  deleteMenu,
  deleteMenuList,
  getMenu,
  getMenuList,
  getSimpleMenusList,
  updateMenu
};

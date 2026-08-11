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

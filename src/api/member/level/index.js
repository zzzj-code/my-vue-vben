import { requestClient } from "#/api/request";
function getLevelList(params) {
  return requestClient.get("/member/level/list", {
    params
  });
}
function getLevel(id) {
  return requestClient.get(`/member/level/get?id=${id}`);
}
function getSimpleLevelList() {
  return requestClient.get(
    "/member/level/list-all-simple"
  );
}
function createLevel(data) {
  return requestClient.post("/member/level/create", data);
}
function updateLevel(data) {
  return requestClient.put("/member/level/update", data);
}
function deleteLevel(id) {
  return requestClient.delete(`/member/level/delete?id=${id}`);
}
export {
  createLevel,
  deleteLevel,
  getLevel,
  getLevelList,
  getSimpleLevelList,
  updateLevel
};

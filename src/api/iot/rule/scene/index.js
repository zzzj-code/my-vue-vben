import { requestClient } from "#/api/request";
function getSceneRulePage(params) {
  return requestClient.get(
    "/iot/scene-rule/page",
    { params }
  );
}
function getSceneRule(id) {
  return requestClient.get(
    `/iot/scene-rule/get?id=${id}`
  );
}
function createSceneRule(data) {
  return requestClient.post("/iot/scene-rule/create", data);
}
function updateSceneRule(data) {
  return requestClient.put("/iot/scene-rule/update", data);
}
function deleteSceneRule(id) {
  return requestClient.delete(`/iot/scene-rule/delete?id=${id}`);
}
function deleteSceneRuleList(ids) {
  return requestClient.delete("/iot/scene-rule/delete-list", {
    params: { ids: ids.join(",") }
  });
}
function updateSceneRuleStatus(id, status) {
  return requestClient.put(`/iot/scene-rule/update-status`, {
    id,
    status
  });
}
function getSimpleRuleSceneList() {
  return requestClient.get(
    "/iot/scene-rule/simple-list"
  );
}
export {
  createSceneRule,
  deleteSceneRule,
  deleteSceneRuleList,
  getSceneRule,
  getSceneRulePage,
  getSimpleRuleSceneList,
  updateSceneRule,
  updateSceneRuleStatus
};

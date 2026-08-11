import { requestClient } from "#/api/request";
function getDataRulePage(params) {
  return requestClient.get(
    "/iot/data-rule/page",
    { params }
  );
}
function getDataRule(id) {
  return requestClient.get(`/iot/data-rule/get?id=${id}`);
}
function createDataRule(data) {
  return requestClient.post("/iot/data-rule/create", data);
}
function updateDataRule(data) {
  return requestClient.put("/iot/data-rule/update", data);
}
function deleteDataRule(id) {
  return requestClient.delete(`/iot/data-rule/delete?id=${id}`);
}
function deleteDataRuleList(ids) {
  return requestClient.delete("/iot/data-rule/delete-list", {
    params: { ids: ids.join(",") }
  });
}
function updateDataRuleStatus(id, status) {
  return requestClient.put(`/iot/data-rule/update-status`, {
    id,
    status
  });
}
export {
  createDataRule,
  deleteDataRule,
  deleteDataRuleList,
  getDataRule,
  getDataRulePage,
  updateDataRule,
  updateDataRuleStatus
};

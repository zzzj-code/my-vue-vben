import { requestClient } from "#/api/request";
const DEFAULT_STATUSES = [
  {
    endStatus: 1,
    key: "\u7ED3\u675F",
    name: "\u8D62\u5355",
    percent: 100
  },
  {
    endStatus: 2,
    key: "\u7ED3\u675F",
    name: "\u8F93\u5355",
    percent: 0
  },
  {
    endStatus: 3,
    key: "\u7ED3\u675F",
    name: "\u65E0\u6548",
    percent: 0
  }
];
function getBusinessStatusPage(params) {
  return requestClient.get(
    "/crm/business-status/page",
    { params }
  );
}
function createBusinessStatus(data) {
  return requestClient.post("/crm/business-status/create", data);
}
function updateBusinessStatus(data) {
  return requestClient.put("/crm/business-status/update", data);
}
function getBusinessStatus(id) {
  return requestClient.get(
    `/crm/business-status/get?id=${id}`
  );
}
function deleteBusinessStatus(id) {
  return requestClient.delete(`/crm/business-status/delete?id=${id}`);
}
function getBusinessStatusTypeSimpleList() {
  return requestClient.get(
    "/crm/business-status/type-simple-list"
  );
}
function getBusinessStatusSimpleList(typeId) {
  return requestClient.get(
    "/crm/business-status/status-simple-list",
    { params: { typeId } }
  );
}
export {
  DEFAULT_STATUSES,
  createBusinessStatus,
  deleteBusinessStatus,
  getBusinessStatus,
  getBusinessStatusPage,
  getBusinessStatusSimpleList,
  getBusinessStatusTypeSimpleList,
  updateBusinessStatus
};

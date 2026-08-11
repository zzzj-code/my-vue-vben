import { requestClient } from "#/api/request";
function getCodegenTableList(dataSourceConfigId) {
  return requestClient.get(
    "/infra/codegen/table/list?",
    {
      params: { dataSourceConfigId }
    }
  );
}
function getCodegenTablePage(params) {
  return requestClient.get(
    "/infra/codegen/table/page",
    { params }
  );
}
function getCodegenTable(tableId) {
  return requestClient.get(
    "/infra/codegen/detail",
    {
      params: { tableId }
    }
  );
}
function updateCodegenTable(data) {
  return requestClient.put("/infra/codegen/update", data);
}
function syncCodegenFromDB(tableId) {
  return requestClient.put(
    "/infra/codegen/sync-from-db",
    {},
    {
      params: { tableId }
    }
  );
}
function previewCodegen(tableId) {
  return requestClient.get(
    "/infra/codegen/preview",
    {
      params: { tableId }
    }
  );
}
function downloadCodegen(tableId) {
  return requestClient.download("/infra/codegen/download", {
    params: { tableId }
  });
}
function getSchemaTableList(params) {
  return requestClient.get(
    "/infra/codegen/db/table/list",
    { params }
  );
}
function createCodegenList(data) {
  return requestClient.post("/infra/codegen/create-list", data);
}
function deleteCodegenTable(tableId) {
  return requestClient.delete("/infra/codegen/delete", {
    params: { tableId }
  });
}
function deleteCodegenTableList(tableIds) {
  return requestClient.delete(
    `/infra/codegen/delete-list?tableIds=${tableIds.join(",")}`
  );
}
export {
  createCodegenList,
  deleteCodegenTable,
  deleteCodegenTableList,
  downloadCodegen,
  getCodegenTable,
  getCodegenTableList,
  getCodegenTablePage,
  getSchemaTableList,
  previewCodegen,
  syncCodegenFromDB,
  updateCodegenTable
};

import { requestClient } from "#/api/request";
async function getProcessDefinition(id, key) {
  return requestClient.get(
    "/bpm/process-definition/get",
    {
      params: { id, key }
    }
  );
}
async function getProcessDefinitionPage(params) {
  return requestClient.get("/bpm/process-definition/page", { params });
}
async function getProcessDefinitionList(params) {
  return requestClient.get(
    "/bpm/process-definition/list",
    {
      params
    }
  );
}
async function getSimpleProcessDefinitionList(category) {
  return requestClient.get("/bpm/process-definition/simple-list", {
    params: category ? { category } : {}
  });
}
export {
  getProcessDefinition,
  getProcessDefinitionList,
  getProcessDefinitionPage,
  getSimpleProcessDefinitionList
};

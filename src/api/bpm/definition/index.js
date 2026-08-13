/**
 * ============================================================
 * 模块：BPM审批流模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/bpm
 * ============================================================
 */
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

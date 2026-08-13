/**
 * ============================================================
 * 模块：AI智能助手模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/ai
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getWorkflowPage(params) {
  return requestClient.get(
    "/ai/workflow/page",
    { params }
  );
}
function getWorkflow(id) {
  return requestClient.get(`/ai/workflow/get?id=${id}`);
}
function createWorkflow(data) {
  return requestClient.post("/ai/workflow/create", data);
}
function updateWorkflow(data) {
  return requestClient.put("/ai/workflow/update", data);
}
function deleteWorkflow(id) {
  return requestClient.delete(`/ai/workflow/delete?id=${id}`);
}
function testWorkflow(data) {
  return requestClient.post("/ai/workflow/test", data);
}
export {
  createWorkflow,
  deleteWorkflow,
  getWorkflow,
  getWorkflowPage,
  testWorkflow,
  updateWorkflow
};

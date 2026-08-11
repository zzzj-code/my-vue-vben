import { requestClient } from "#/api/request";
async function getProcessInstanceMyPage(params) {
  return requestClient.get(
    "/bpm/process-instance/my-page",
    { params }
  );
}
async function getProcessInstanceManagerPage(params) {
  return requestClient.get(
    "/bpm/process-instance/manager-page",
    { params }
  );
}
async function createProcessInstance(data) {
  return requestClient.post(
    "/bpm/process-instance/create",
    data
  );
}
async function cancelProcessInstanceByStartUser(id, reason) {
  return requestClient.delete(
    "/bpm/process-instance/cancel-by-start-user",
    {
      data: { id, reason }
    }
  );
}
async function cancelProcessInstanceByAdmin(id, reason) {
  return requestClient.delete(
    "/bpm/process-instance/cancel-by-admin",
    {
      data: { id, reason }
    }
  );
}
async function getProcessInstance(id) {
  return requestClient.get(
    `/bpm/process-instance/get?id=${id}`
  );
}
async function getProcessInstanceCopyPage(params) {
  return requestClient.get(
    "/bpm/process-instance/copy/page",
    { params }
  );
}
async function updateProcessInstance(data) {
  return requestClient.put(
    "/bpm/process-instance/update",
    data
  );
}
async function resubmitProcessInstance(data) {
  return requestClient.put("/bpm/process-instance/resubmit", data);
}
async function getApprovalDetail(params) {
  return requestClient.get(
    `/bpm/process-instance/get-approval-detail`,
    { params }
  );
}
async function getNextApprovalNodes(params) {
  return requestClient.get(
    `/bpm/process-instance/get-next-approval-nodes`,
    { params }
  );
}
async function getProcessInstanceBpmnModelView(id) {
  return requestClient.get(
    `/bpm/process-instance/get-bpmn-model-view?id=${id}`
  );
}
async function getProcessInstancePrintData(id) {
  return requestClient.get(
    `/bpm/process-instance/get-print-data?processInstanceId=${id}`
  );
}
async function deleteProcessInstance(id) {
  return requestClient.delete("/bpm/process-instance/delete", {
    params: { id }
  });
}
export {
  cancelProcessInstanceByAdmin,
  cancelProcessInstanceByStartUser,
  createProcessInstance,
  deleteProcessInstance,
  getApprovalDetail,
  getNextApprovalNodes,
  getProcessInstance,
  getProcessInstanceBpmnModelView,
  getProcessInstanceCopyPage,
  getProcessInstanceManagerPage,
  getProcessInstanceMyPage,
  getProcessInstancePrintData,
  resubmitProcessInstance,
  updateProcessInstance
};

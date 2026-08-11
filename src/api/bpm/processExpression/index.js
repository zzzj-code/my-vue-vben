import { requestClient } from "#/api/request";
async function getProcessExpressionPage(params) {
  return requestClient.get("/bpm/process-expression/page", { params });
}
async function getProcessExpression(id) {
  return requestClient.get(
    `/bpm/process-expression/get?id=${id}`
  );
}
async function createProcessExpression(data) {
  return requestClient.post("/bpm/process-expression/create", data);
}
async function updateProcessExpression(data) {
  return requestClient.put("/bpm/process-expression/update", data);
}
async function deleteProcessExpression(id) {
  return requestClient.delete(
    `/bpm/process-expression/delete?id=${id}`
  );
}
async function exportProcessExpression(params) {
  return requestClient.download("/bpm/process-expression/export-excel", {
    params
  });
}
export {
  createProcessExpression,
  deleteProcessExpression,
  exportProcessExpression,
  getProcessExpression,
  getProcessExpressionPage,
  updateProcessExpression
};

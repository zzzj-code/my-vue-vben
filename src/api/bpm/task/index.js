import { requestClient } from "#/api/request";
async function getTaskTodoPage(params) {
  return requestClient.get("/bpm/task/todo-page", {
    params
  });
}
async function getTaskDonePage(params) {
  return requestClient.get("/bpm/task/done-page", {
    params
  });
}
async function getTaskManagerPage(params) {
  return requestClient.get(
    "/bpm/task/manager-page",
    { params }
  );
}
const approveTask = async (data) => {
  return await requestClient.put("/bpm/task/approve", data);
};
const rejectTask = async (data) => {
  return await requestClient.put("/bpm/task/reject", data);
};
const getTaskListByProcessInstanceId = async (id) => {
  return await requestClient.get(
    `/bpm/task/list-by-process-instance-id?processInstanceId=${id}`
  );
};
const getTaskListByReturn = async (id) => {
  return await requestClient.get(`/bpm/task/list-by-return?id=${id}`);
};
const returnTask = async (data) => {
  return await requestClient.put("/bpm/task/return", data);
};
const delegateTask = async (data) => {
  return await requestClient.put("/bpm/task/delegate", data);
};
const transferTask = async (data) => {
  return await requestClient.put("/bpm/task/transfer", data);
};
const signCreateTask = async (data) => {
  return await requestClient.put("/bpm/task/create-sign", data);
};
const signDeleteTask = async (data) => {
  return await requestClient.delete("/bpm/task/delete-sign", data);
};
const copyTask = async (data) => {
  return await requestClient.put("/bpm/task/copy", data);
};
const myTodoTask = async (processInstanceId) => {
  return await requestClient.get(
    `/bpm/task/my-todo?processInstanceId=${processInstanceId}`
  );
};
const getChildrenTaskList = async (id) => {
  return await requestClient.get(
    `/bpm/task/list-by-parent-task-id?parentTaskId=${id}`
  );
};
const withdrawTask = async (taskId) => {
  return await requestClient.put("/bpm/task/withdraw", null, {
    params: { taskId }
  });
};
const withdrawProcessToStart = async (data) => {
  return await requestClient.put("/bpm/task/withdraw-to-start", data);
};
export {
  approveTask,
  copyTask,
  delegateTask,
  getChildrenTaskList,
  getTaskDonePage,
  getTaskListByProcessInstanceId,
  getTaskListByReturn,
  getTaskManagerPage,
  getTaskTodoPage,
  myTodoTask,
  rejectTask,
  returnTask,
  signCreateTask,
  signDeleteTask,
  transferTask,
  withdrawProcessToStart,
  withdrawTask
};

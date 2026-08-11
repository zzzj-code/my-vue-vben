import { requestClient } from "#/api/request";
function getNotifyTaskDetail(id) {
  return requestClient.get(`/pay/notify/get-detail?id=${id}`);
}
function getNotifyTaskPage(params) {
  return requestClient.get(
    "/pay/notify/page",
    {
      params
    }
  );
}
export {
  getNotifyTaskDetail,
  getNotifyTaskPage
};

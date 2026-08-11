import { requestClient } from "#/api/request";
function getOperateLogPage(params) {
  return requestClient.get(
    "/crm/operate-log/page",
    { params }
  );
}
export {
  getOperateLogPage
};

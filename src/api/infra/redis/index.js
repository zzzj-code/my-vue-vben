import { requestClient } from "#/api/request";
function getRedisMonitorInfo() {
  return requestClient.get(
    "/infra/redis/get-monitor-info"
  );
}
export {
  getRedisMonitorInfo
};

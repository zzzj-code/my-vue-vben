/**
 * ============================================================
 * 模块：基础设施模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/infra
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getRedisMonitorInfo() {
  return requestClient.get(
    "/infra/redis/get-monitor-info"
  );
}
export {
  getRedisMonitorInfo
};

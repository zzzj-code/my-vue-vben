/**
 * ============================================================
 * 模块：商城模块
 * 页面：seckillConfig页面
 * 功能：seckillConfig相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getSeckillConfigPage(params) {
  return requestClient.get(
    "/promotion/seckill-config/page",
    { params }
  );
}
function getSimpleSeckillConfigList() {
  return requestClient.get(
    "/promotion/seckill-config/list"
  );
}
function getSeckillConfig(id) {
  return requestClient.get(
    `/promotion/seckill-config/get?id=${id}`
  );
}
function createSeckillConfig(data) {
  return requestClient.post("/promotion/seckill-config/create", data);
}
function updateSeckillConfig(data) {
  return requestClient.put("/promotion/seckill-config/update", data);
}
function deleteSeckillConfig(id) {
  return requestClient.delete(`/promotion/seckill-config/delete?id=${id}`);
}
function updateSeckillConfigStatus(id, status) {
  return requestClient.put("/promotion/seckill-config/update-status", {
    id,
    status
  });
}
export {
  createSeckillConfig,
  deleteSeckillConfig,
  getSeckillConfig,
  getSeckillConfigPage,
  getSimpleSeckillConfigList,
  updateSeckillConfig,
  updateSeckillConfigStatus
};

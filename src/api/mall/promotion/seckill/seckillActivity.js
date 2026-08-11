import { requestClient } from "#/api/request";
function getSeckillActivityPage(params) {
  return requestClient.get(
    "/promotion/seckill-activity/page",
    { params }
  );
}
function getSeckillActivityListByIds(ids) {
  return requestClient.get(
    `/promotion/seckill-activity/list-by-ids?ids=${ids}`
  );
}
function getSeckillActivity(id) {
  return requestClient.get(
    `/promotion/seckill-activity/get?id=${id}`
  );
}
function createSeckillActivity(data) {
  return requestClient.post("/promotion/seckill-activity/create", data);
}
function updateSeckillActivity(data) {
  return requestClient.put("/promotion/seckill-activity/update", data);
}
function closeSeckillActivity(id) {
  return requestClient.put(`/promotion/seckill-activity/close?id=${id}`);
}
function deleteSeckillActivity(id) {
  return requestClient.delete(`/promotion/seckill-activity/delete?id=${id}`);
}
export {
  closeSeckillActivity,
  createSeckillActivity,
  deleteSeckillActivity,
  getSeckillActivity,
  getSeckillActivityListByIds,
  getSeckillActivityPage,
  updateSeckillActivity
};

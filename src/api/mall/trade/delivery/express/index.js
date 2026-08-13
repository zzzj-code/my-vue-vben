/**
 * ============================================================
 * 模块：商城模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getDeliveryExpressPage(params) {
  return requestClient.get(
    "/trade/delivery/express/page",
    { params }
  );
}
function getDeliveryExpress(id) {
  return requestClient.get(
    `/trade/delivery/express/get?id=${id}`
  );
}
function getSimpleDeliveryExpressList() {
  return requestClient.get(
    "/trade/delivery/express/list-all-simple"
  );
}
function createDeliveryExpress(data) {
  return requestClient.post("/trade/delivery/express/create", data);
}
function updateDeliveryExpress(data) {
  return requestClient.put("/trade/delivery/express/update", data);
}
function deleteDeliveryExpress(id) {
  return requestClient.delete(`/trade/delivery/express/delete?id=${id}`);
}
function exportDeliveryExpress(params) {
  return requestClient.download("/trade/delivery/express/export-excel", {
    params
  });
}
export {
  createDeliveryExpress,
  deleteDeliveryExpress,
  exportDeliveryExpress,
  getDeliveryExpress,
  getDeliveryExpressPage,
  getSimpleDeliveryExpressList,
  updateDeliveryExpress
};

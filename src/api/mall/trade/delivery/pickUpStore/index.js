import { requestClient } from "#/api/request";
function getDeliveryPickUpStorePage(params) {
  return requestClient.get("/trade/delivery/pick-up-store/page", { params });
}
function getDeliveryPickUpStore(id) {
  return requestClient.get(
    `/trade/delivery/pick-up-store/get?id=${id}`
  );
}
function getSimpleDeliveryPickUpStoreList() {
  return requestClient.get(
    "/trade/delivery/pick-up-store/simple-list"
  );
}
function createDeliveryPickUpStore(data) {
  return requestClient.post("/trade/delivery/pick-up-store/create", data);
}
function updateDeliveryPickUpStore(data) {
  return requestClient.put("/trade/delivery/pick-up-store/update", data);
}
function deleteDeliveryPickUpStore(id) {
  return requestClient.delete(`/trade/delivery/pick-up-store/delete?id=${id}`);
}
function bindDeliveryPickUpStore(data) {
  return requestClient.post("/trade/delivery/pick-up-store/bind", data);
}
export {
  bindDeliveryPickUpStore,
  createDeliveryPickUpStore,
  deleteDeliveryPickUpStore,
  getDeliveryPickUpStore,
  getDeliveryPickUpStorePage,
  getSimpleDeliveryPickUpStoreList,
  updateDeliveryPickUpStore
};

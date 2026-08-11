import { requestClient } from "#/api/request";
function getChannel(appId, code) {
  return requestClient.get("/pay/channel/get", {
    params: { appId, code }
  });
}
function createChannel(data) {
  return requestClient.post("/pay/channel/create", data);
}
function updateChannel(data) {
  return requestClient.put("/pay/channel/update", data);
}
export {
  createChannel,
  getChannel,
  updateChannel
};

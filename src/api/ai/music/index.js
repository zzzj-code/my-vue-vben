import { requestClient } from "#/api/request";
function getMusicPage(params) {
  return requestClient.get(`/ai/music/page`, {
    params
  });
}
function updateMusic(data) {
  return requestClient.put("/ai/music/update", data);
}
function deleteMusic(id) {
  return requestClient.delete(`/ai/music/delete?id=${id}`);
}
export {
  deleteMusic,
  getMusicPage,
  updateMusic
};

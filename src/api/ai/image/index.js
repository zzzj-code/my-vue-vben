import { requestClient } from "#/api/request";
function getImagePageMy(params) {
  return requestClient.get("/ai/image/my-page", {
    params
  });
}
function getImageMy(id) {
  return requestClient.get(`/ai/image/get-my?id=${id}`);
}
function getImageListMyByIds(ids) {
  return requestClient.get(`/ai/image/my-list-by-ids`, {
    params: { ids: ids.join(",") }
  });
}
function drawImage(data) {
  return requestClient.post(`/ai/image/draw`, data);
}
function deleteImageMy(id) {
  return requestClient.delete(`/ai/image/delete-my?id=${id}`);
}
function midjourneyImagine(data) {
  return requestClient.post(`/ai/image/midjourney/imagine`, data);
}
function midjourneyAction(data) {
  return requestClient.post(`/ai/image/midjourney/action`, data);
}
function getImagePage(params) {
  return requestClient.get(`/ai/image/page`, { params });
}
function updateImage(data) {
  return requestClient.put(`/ai/image/update`, data);
}
function deleteImage(id) {
  return requestClient.delete(`/ai/image/delete?id=${id}`);
}
export {
  deleteImage,
  deleteImageMy,
  drawImage,
  getImageListMyByIds,
  getImageMy,
  getImagePage,
  getImagePageMy,
  midjourneyAction,
  midjourneyImagine,
  updateImage
};

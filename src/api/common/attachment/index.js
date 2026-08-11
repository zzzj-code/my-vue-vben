import { requestClient } from "#/api/request";
function createAttachment(data) {
  return requestClient.post("/oa/attachment/create", data);
}
function updateAttachment(data) {
  return requestClient.put("/oa/attachment/update", data);
}
function deleteAttachment(id) {
  return requestClient.delete(`/oa/attachment/delete?id=${id}`);
}
function getAttachment(id) {
  return requestClient.get(`/oa/attachment/get?id=${id}`);
}
function getAttachmentListByBusiness(businessType, businessId) {
  return requestClient.get(
    `/oa/attachment/list-by-business?businessType=${businessType}&businessId=${businessId}`
  );
}
export {
  createAttachment,
  deleteAttachment,
  getAttachment,
  getAttachmentListByBusiness,
  updateAttachment
};

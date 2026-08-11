import { requestClient } from "#/api/request";
function createTag(data) {
  return requestClient.post("/mp/tag/create", data);
}
function updateTag(data) {
  return requestClient.put("/mp/tag/update", data);
}
function deleteTag(id) {
  return requestClient.delete("/mp/tag/delete", {
    params: { id }
  });
}
function getTag(id) {
  return requestClient.get("/mp/tag/get", {
    params: { id }
  });
}
function getTagPage(params) {
  return requestClient.get("/mp/tag/page", {
    params
  });
}
function getSimpleTagList() {
  return requestClient.get("/mp/tag/list-all-simple");
}
function syncTag(accountId) {
  return requestClient.post("/mp/tag/sync", null, {
    params: { accountId }
  });
}
export {
  createTag,
  deleteTag,
  getSimpleTagList,
  getTag,
  getTagPage,
  syncTag,
  updateTag
};

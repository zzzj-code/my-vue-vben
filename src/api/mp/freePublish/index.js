import { requestClient } from "#/api/request";
function getFreePublishPage(params) {
  return requestClient.get(
    "/mp/free-publish/page",
    {
      params
    }
  );
}
function deleteFreePublish(accountId, articleId) {
  return requestClient.delete("/mp/free-publish/delete", {
    params: { accountId, articleId }
  });
}
function submitFreePublish(accountId, mediaId) {
  return requestClient.post("/mp/free-publish/submit", null, {
    params: { accountId, mediaId }
  });
}
export {
  deleteFreePublish,
  getFreePublishPage,
  submitFreePublish
};

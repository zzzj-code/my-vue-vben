/**
 * ============================================================
 * 模块：公众号模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function createEmptyNewsItem() {
  return {
    title: "",
    thumbMediaId: "",
    author: "",
    digest: "",
    showCoverPic: 0,
    content: "",
    contentSourceUrl: "",
    needOpenComment: 0,
    onlyFansCanComment: 0,
    thumbUrl: ""
  };
}
function getDraftPage(params) {
  return requestClient.get("/mp/draft/page", {
    params
  });
}
function createDraft(accountId, articles) {
  return requestClient.post(
    "/mp/draft/create",
    { articles },
    {
      params: { accountId }
    }
  );
}
function updateDraft(accountId, mediaId, articles) {
  return requestClient.put("/mp/draft/update", articles, {
    params: { accountId, mediaId }
  });
}
function deleteDraft(accountId, mediaId) {
  return requestClient.delete("/mp/draft/delete", {
    params: { accountId, mediaId }
  });
}
export {
  createDraft,
  createEmptyNewsItem,
  deleteDraft,
  getDraftPage,
  updateDraft
};

/**
 * ============================================================
 * 模块：AI智能助手模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/ai
 * ============================================================
 */
import { useAppConfig } from "@vben/hooks";
import { fetchEventSource } from "@vben/request";
import { useAccessStore } from "@vben/stores";
import { requestClient } from "#/api/request";
const { apiURL } = useAppConfig(import.meta.env, import.meta.env.PROD);
const accessStore = useAccessStore();
function getChatMessageListByConversationId(conversationId) {
  return requestClient.get(
    `/ai/chat/message/list-by-conversation-id?conversationId=${conversationId}`
  );
}
function sendChatMessageStream(conversationId, content, ctrl, enableContext, enableWebSearch, onMessage, onError, onClose, attachmentUrls) {
  const token = accessStore.accessToken;
  return fetchEventSource(`${apiURL}/ai/chat/message/send-stream`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    openWhenHidden: true,
    body: JSON.stringify({
      conversationId,
      content,
      useContext: enableContext,
      useSearch: enableWebSearch,
      attachmentUrls: attachmentUrls || []
    }),
    onmessage: onMessage,
    onerror: onError,
    onclose: onClose,
    signal: ctrl.signal
  });
}
function deleteChatMessage(id) {
  return requestClient.delete(`/ai/chat/message/delete?id=${id}`);
}
function deleteByConversationId(conversationId) {
  return requestClient.delete(
    `/ai/chat/message/delete-by-conversation-id?conversationId=${conversationId}`
  );
}
function getChatMessagePage(params) {
  return requestClient.get(
    "/ai/chat/message/page",
    { params }
  );
}
function deleteChatMessageByAdmin(id) {
  return requestClient.delete(`/ai/chat/message/delete-by-admin?id=${id}`);
}
export {
  deleteByConversationId,
  deleteChatMessage,
  deleteChatMessageByAdmin,
  getChatMessageListByConversationId,
  getChatMessagePage,
  sendChatMessageStream
};

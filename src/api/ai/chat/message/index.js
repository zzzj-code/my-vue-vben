/**
 * ============================================================
 * 模块：AI智能助手模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/ai
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 根据对话ID获取聊天消息列表
 * @param {Number} conversationId - 对话ID
 */
function getChatMessageListByConversationId(conversationId) {
  return requestClient.get(
    `/ai/chat/message/list-by-conversation-id?conversationId=${conversationId}`
  );
}

/**
 * 发送聊天消息（流式SSE）
 * @param {Number} conversationId - 对话ID
 * @param {String} content - 消息内容
 * @param {AbortController} ctrl - 中止控制器
 * @param {Boolean} enableContext - 是否启用上下文
 * @param {Boolean} enableWebSearch - 是否启用网络搜索
 * @param {Function} onMessage - 消息回调
 * @param {Function} onError - 错误回调
 * @param {Function} onClose - 关闭回调
 * @param {Array} attachmentUrls - 附件URL列表
 */
function sendChatMessageStream(conversationId, content, ctrl, enableContext, enableWebSearch, onMessage, onError, onClose, attachmentUrls) {
  const token = localStorage.getItem('accessToken');
  return fetch('/api/ai/chat/message/send-stream', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'tenant-id': '1'
    },
    body: JSON.stringify({
      conversationId,
      content,
      useContext: enableContext,
      useSearch: enableWebSearch,
      attachmentUrls: attachmentUrls || []
    }),
    signal: ctrl ? ctrl.signal : undefined
  }).then(async (response) => {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        if (onClose) onClose();
        break;
      }
      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const messageData = line.slice(6);
          if (onMessage) onMessage({ data: messageData });
        }
      }
    }
  }).catch((err) => {
    if (onError) onError(err);
  });
}

/**
 * 删除聊天消息
 * @param {Number} id - 消息ID
 */
function deleteChatMessage(id) {
  return requestClient.delete(`/ai/chat/message/delete?id=${id}`);
}

/**
 * 根据对话ID删除所有消息
 * @param {Number} conversationId - 对话ID
 */
function deleteByConversationId(conversationId) {
  return requestClient.delete(
    `/ai/chat/message/delete-by-conversation-id?conversationId=${conversationId}`
  );
}

/**
 * 分页查询聊天消息（管理员）
 * @param {Object} params - 查询参数
 */
function getChatMessagePage(params) {
  return requestClient.get("/ai/chat/message/page", { params });
}

/**
 * 管理员删除聊天消息
 * @param {Number} id - 消息ID
 */
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

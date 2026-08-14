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
 * AI思维导图流式生成（SSE）
 * @param {Object} options - 配置选项
 * @param {Object} options.data - 请求数据
 * @param {Function} options.onClose - 关闭回调
 * @param {Function} options.onMessage - 消息回调
 * @param {Function} options.onError - 错误回调
 * @param {AbortController} options.ctrl - 中止控制器
 */
function generateMindMap({ data, onClose, onMessage, onError, ctrl }) {
  const token = localStorage.getItem('accessToken');
  return fetch('/api/ai/mind-map/generate-stream', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'tenant-id': '1'
    },
    body: JSON.stringify(data),
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
 * 分页查询思维导图记录
 * @param {Object} params - 查询参数
 */
function getMindMapPage(params) {
  return requestClient.get(`/ai/mind-map/page`, { params });
}

/**
 * 删除思维导图记录
 * @param {Number} id - 记录ID
 */
function deleteMindMap(id) {
  return requestClient.delete(`/ai/mind-map/delete?id=${id}`);
}

export {
  deleteMindMap,
  generateMindMap,
  getMindMapPage
};

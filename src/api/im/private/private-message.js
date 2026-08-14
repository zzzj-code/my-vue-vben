/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：私聊消息页面
 * 功能：私聊消息相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询私聊消息
 * @param {Object} params - 查询参数
 */
function getPrivateMessagePage(params) {
  return requestClient.get("/im/private-message/page", { params });
}

/**
 * 获取私聊消息详情
 * @param {Number} id - 消息ID
 */
function getPrivateMessage(id) {
  return requestClient.get(`/im/private-message/get?id=${id}`);
}

/**
 * 发送私聊消息
 * @param {Object} data - 消息数据
 */
function sendPrivateMessage(data) {
  return requestClient.post("/im/private-message/send", data);
}

/**
 * 删除私聊消息
 * @param {Number} id - 消息ID
 */
function deletePrivateMessage(id) {
  return requestClient.delete(`/im/private-message/delete?id=${id}`);
}

export {
  deletePrivateMessage,
  getPrivateMessage,
  getPrivateMessagePage,
  sendPrivateMessage
};

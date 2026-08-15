/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：频道消息页面
 * 功能：频道消息相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询频道消息
 * @param {Object} params - 查询参数
 */
function getChannelMessagePage(params) {
  return requestClient.get("/im/channel-message/list", { params });
}

/**
 * 获取频道消息详情
 * @param {Number} id - 消息ID
 */
function getChannelMessage(id) {
  return requestClient.get(`/im/channel-message/get?id=${id}`);
}

/**
 * 发送频道消息
 * @param {Object} data - 消息数据
 */
function sendChannelMessage(data) {
  return requestClient.post("/im/channel-message/send", data);
}

/**
 * 删除频道消息
 * @param {Number} id - 消息ID
 */
function deleteChannelMessage(id) {
  return requestClient.delete(`/im/channel-message/delete?id=${id}`);
}

export {
  deleteChannelMessage,
  getChannelMessage,
  getChannelMessagePage,
  sendChannelMessage
};

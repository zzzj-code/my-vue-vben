/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：群组消息页面
 * 功能：群组消息相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询群组消息
 * @param {Object} params - 查询参数
 */
function getGroupMessagePage(params) {
  return requestClient.get("/im/group-message/list", { params });
}

/**
 * 获取群组消息详情
 * @param {Number} id - 消息ID
 */
function getGroupMessage(id) {
  return requestClient.get(`/im/group-message/get?id=${id}`);
}

/**
 * 发送群组消息
 * @param {Object} data - 消息数据
 */
function sendGroupMessage(data) {
  return requestClient.post("/im/group-message/send", data);
}

/**
 * 删除群组消息
 * @param {Number} id - 消息ID
 */
function deleteGroupMessage(id) {
  return requestClient.delete(`/im/group-message/delete?id=${id}`);
}

export {
  deleteGroupMessage,
  getGroupMessage,
  getGroupMessagePage,
  sendGroupMessage
};

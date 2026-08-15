/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：好友请求页面
 * 功能：好友请求相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询好友请求
 * @param {Object} params - 查询参数
 */
function getFriendRequestPage(params) {
  return requestClient.get("/im/friend-request/list", { params });
}

/**
 * 获取好友请求详情
 * @param {Number} id - 请求ID
 */
function getFriendRequest(id) {
  return requestClient.get(`/im/friend-request/get?id=${id}`);
}

/**
 * 同意好友请求
 * @param {Number} id - 请求ID
 */
function agreeFriendRequest(id) {
  return requestClient.put(`/im/friend-request/agree?id=${id}`);
}

/**
 * 拒绝好友请求
 * @param {Number} id - 请求ID
 */
function rejectFriendRequest(id) {
  return requestClient.put(`/im/friend-request/reject?id=${id}`);
}

/**
 * 删除好友请求
 * @param {Number} id - 请求ID
 */
function deleteFriendRequest(id) {
  return requestClient.delete(`/im/friend-request/delete?id=${id}`);
}

export {
  agreeFriendRequest,
  deleteFriendRequest,
  getFriendRequest,
  getFriendRequestPage,
  rejectFriendRequest
};

/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：好友列表页面
 * 功能：好友相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询好友列表
 * @param {Object} params - 查询参数
 */
function getFriendPage(params) {
  return requestClient.get("/im/friend/page", { params });
}

/**
 * 获取好友详情
 * @param {Number} id - 好友ID
 */
function getFriend(id) {
  return requestClient.get(`/im/friend/get?id=${id}`);
}

/**
 * 新增好友
 * @param {Object} data - 好友数据
 */
function createFriend(data) {
  return requestClient.post("/im/friend/create", data);
}

/**
 * 更新好友
 * @param {Object} data - 好友数据
 */
function updateFriend(data) {
  return requestClient.put("/im/friend/update", data);
}

/**
 * 删除好友
 * @param {Number} id - 好友ID
 */
function deleteFriend(id) {
  return requestClient.delete(`/im/friend/delete?id=${id}`);
}

export {
  createFriend,
  deleteFriend,
  getFriend,
  getFriendPage,
  updateFriend
};

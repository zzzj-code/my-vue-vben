/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：频道列表页面
 * 功能：频道相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询频道列表
 * @param {Object} params - 查询参数
 */
function getChannelPage(params) {
  return requestClient.get("/im/channel/list", { params });
}

/**
 * 获取频道详情
 * @param {Number} id - 频道ID
 */
function getChannel(id) {
  return requestClient.get(`/im/channel/get?id=${id}`);
}

/**
 * 新增频道
 * @param {Object} data - 频道数据
 */
function createChannel(data) {
  return requestClient.post("/im/channel/create", data);
}

/**
 * 更新频道
 * @param {Object} data - 频道数据
 */
function updateChannel(data) {
  return requestClient.put("/im/channel/update", data);
}

/**
 * 删除频道
 * @param {Number} id - 频道ID
 */
function deleteChannel(id) {
  return requestClient.delete(`/im/channel/delete?id=${id}`);
}

export {
  createChannel,
  deleteChannel,
  getChannel,
  getChannelPage,
  updateChannel
};

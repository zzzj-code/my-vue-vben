/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：群组列表页面
 * 功能：群组相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询群组列表
 * @param {Object} params - 查询参数
 */
function getGroupPage(params) {
  return requestClient.get("/im/group/list", { params });
}

/**
 * 获取群组详情
 * @param {Number} id - 群组ID
 */
function getGroup(id) {
  return requestClient.get(`/im/group/get?id=${id}`);
}

/**
 * 新增群组
 * @param {Object} data - 群组数据
 */
function createGroup(data) {
  return requestClient.post("/im/group/create", data);
}

/**
 * 更新群组
 * @param {Object} data - 群组数据
 */
function updateGroup(data) {
  return requestClient.put("/im/group/update", data);
}

/**
 * 删除群组
 * @param {Number} id - 群组ID
 */
function deleteGroup(id) {
  return requestClient.delete(`/im/group/delete?id=${id}`);
}

export {
  createGroup,
  deleteGroup,
  getGroup,
  getGroupPage,
  updateGroup
};

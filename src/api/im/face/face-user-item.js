/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：用户表情页面
 * 功能：用户表情相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询用户表情
 * @param {Object} params - 查询参数
 */
function getFaceUserItemPage(params) {
  return requestClient.get("/im/face-user-item/page", { params });
}

/**
 * 获取用户表情详情
 * @param {Number} id - 表情ID
 */
function getFaceUserItem(id) {
  return requestClient.get(`/im/face-user-item/get?id=${id}`);
}

/**
 * 新增用户表情
 * @param {Object} data - 表情数据
 */
function createFaceUserItem(data) {
  return requestClient.post("/im/face-user-item/create", data);
}

/**
 * 更新用户表情
 * @param {Object} data - 表情数据
 */
function updateFaceUserItem(data) {
  return requestClient.put("/im/face-user-item/update", data);
}

/**
 * 删除用户表情
 * @param {Number} id - 表情ID
 */
function deleteFaceUserItem(id) {
  return requestClient.delete(`/im/face-user-item/delete?id=${id}`);
}

export {
  createFaceUserItem,
  deleteFaceUserItem,
  getFaceUserItem,
  getFaceUserItemPage,
  updateFaceUserItem
};

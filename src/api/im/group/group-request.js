/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：群组请求页面
 * 功能：群组请求相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询群组请求
 * @param {Object} params - 查询参数
 */
function getGroupRequestPage(params) {
  return requestClient.get("/im/group-request/page", { params });
}

/**
 * 获取群组请求详情
 * @param {Number} id - 请求ID
 */
function getGroupRequest(id) {
  return requestClient.get(`/im/group-request/get?id=${id}`);
}

/**
 * 同意群组请求
 * @param {Number} id - 请求ID
 */
function agreeGroupRequest(id) {
  return requestClient.put(`/im/group-request/agree?id=${id}`);
}

/**
 * 拒绝群组请求
 * @param {Number} id - 请求ID
 */
function rejectGroupRequest(id) {
  return requestClient.put(`/im/group-request/reject?id=${id}`);
}

/**
 * 删除群组请求
 * @param {Number} id - 请求ID
 */
function deleteGroupRequest(id) {
  return requestClient.delete(`/im/group-request/delete?id=${id}`);
}

export {
  agreeGroupRequest,
  deleteGroupRequest,
  getGroupRequest,
  getGroupRequestPage,
  rejectGroupRequest
};

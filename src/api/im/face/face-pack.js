/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：表情包管理页面
 * 功能：表情包相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询表情包
 * @param {Object} params - 查询参数
 */
function getFacePackPage(params) {
  return requestClient.get("/im/face-pack/page", { params });
}

/**
 * 获取表情包详情
 * @param {Number} id - 表情包ID
 */
function getFacePack(id) {
  return requestClient.get(`/im/face-pack/get?id=${id}`);
}

/**
 * 新增表情包
 * @param {Object} data - 表情包数据
 */
function createFacePack(data) {
  return requestClient.post("/im/face-pack/create", data);
}

/**
 * 更新表情包
 * @param {Object} data - 表情包数据
 */
function updateFacePack(data) {
  return requestClient.put("/im/face-pack/update", data);
}

/**
 * 删除表情包
 * @param {Number} id - 表情包ID
 */
function deleteFacePack(id) {
  return requestClient.delete(`/im/face-pack/delete?id=${id}`);
}

export {
  createFacePack,
  deleteFacePack,
  getFacePack,
  getFacePackPage,
  updateFacePack
};

/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：频道素材页面
 * 功能：频道素材相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询频道素材
 * @param {Object} params - 查询参数
 */
function getChannelMaterialPage(params) {
  return requestClient.get("/im/channel-material/page", { params });
}

/**
 * 获取频道素材详情
 * @param {Number} id - 素材ID
 */
function getChannelMaterial(id) {
  return requestClient.get(`/im/channel-material/get?id=${id}`);
}

/**
 * 新增频道素材
 * @param {Object} data - 素材数据
 */
function createChannelMaterial(data) {
  return requestClient.post("/im/channel-material/create", data);
}

/**
 * 更新频道素材
 * @param {Object} data - 素材数据
 */
function updateChannelMaterial(data) {
  return requestClient.put("/im/channel-material/update", data);
}

/**
 * 删除频道素材
 * @param {Number} id - 素材ID
 */
function deleteChannelMaterial(id) {
  return requestClient.delete(`/im/channel-material/delete?id=${id}`);
}

export {
  createChannelMaterial,
  deleteChannelMaterial,
  getChannelMaterial,
  getChannelMaterialPage,
  updateChannelMaterial
};

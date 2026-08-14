/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：敏感词管理页面
 * 功能：敏感词相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询敏感词列表
 * @param {Object} params - 查询参数
 */
function getSensitiveWordPage(params) {
  return requestClient.get("/im/sensitive-word/page", { params });
}

/**
 * 获取敏感词详情
 * @param {Number} id - 敏感词ID
 */
function getSensitiveWord(id) {
  return requestClient.get(`/im/sensitive-word/get?id=${id}`);
}

/**
 * 新增敏感词
 * @param {Object} data - 敏感词数据
 */
function createSensitiveWord(data) {
  return requestClient.post("/im/sensitive-word/create", data);
}

/**
 * 更新敏感词
 * @param {Object} data - 敏感词数据
 */
function updateSensitiveWord(data) {
  return requestClient.put("/im/sensitive-word/update", data);
}

/**
 * 删除敏感词
 * @param {Number} id - 敏感词ID
 */
function deleteSensitiveWord(id) {
  return requestClient.delete(`/im/sensitive-word/delete?id=${id}`);
}

export {
  createSensitiveWord,
  deleteSensitiveWord,
  getSensitiveWord,
  getSensitiveWordPage,
  updateSensitiveWord
};

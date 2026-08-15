/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目立项申请列表页面
 * 功能：项目立项申请相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询项目立项申请列表
 * @param {Object} params - 查询参数
 */
function getProjectApplyPage(params) {
  return requestClient.get("/project/info/page", { params });
}

/**
 * 获取项目立项申请详情
 * @param {Number} id - 申请ID
 */
function getProjectApply(id) {
  return requestClient.get(`/project/info/get?id=${id}`);
}

/**
 * 新增项目立项申请
 * @param {Object} data - 申请数据
 */
function createProjectApply(data) {
  return requestClient.post("/project/info/create", data);
}

/**
 * 更新项目立项申请
 * @param {Object} data - 申请数据
 */
function updateProjectApply(data) {
  return requestClient.put("/project/info/update", data);
}

/**
 * 删除项目立项申请
 * @param {Number} id - 申请ID
 */
function deleteProjectApply(id) {
  return requestClient.delete(`/project/info/delete?id=${id}`);
}

export {
  createProjectApply,
  deleteProjectApply,
  getProjectApply,
  getProjectApplyPage,
  updateProjectApply
};

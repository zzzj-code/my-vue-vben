/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目变更列表页面
 * 功能：项目变更相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询项目变更列表
 * @param {Object} params - 查询参数
 */
function getProjectChangePage(params) {
  return requestClient.get("/project/change/page", { params });
}

/**
 * 获取项目变更详情
 * @param {Number} id - 变更ID
 */
function getProjectChange(id) {
  return requestClient.get(`/project/change/get?id=${id}`);
}

/**
 * 新增项目变更
 * @param {Object} data - 变更数据
 */
function createProjectChange(data) {
  return requestClient.post("/project/change/create", data);
}

/**
 * 更新项目变更
 * @param {Object} data - 变更数据
 */
function updateProjectChange(data) {
  return requestClient.put("/project/change/update", data);
}

/**
 * 删除项目变更
 * @param {Number} id - 变更ID
 */
function deleteProjectChange(id) {
  return requestClient.delete(`/project/change/delete?id=${id}`);
}

export {
  createProjectChange,
  deleteProjectChange,
  getProjectChange,
  getProjectChangePage,
  updateProjectChange
};

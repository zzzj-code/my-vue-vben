/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目资源页面
 * 功能：项目资源相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询项目资源列表
 * @param {Object} params - 查询参数
 */
function getProjectResourcePage(params) {
  return requestClient.get("/project/resource/load", { params });
}

/**
 * 获取项目资源详情
 * @param {Number} id - 资源ID
 */
function getProjectResource(id) {
  return requestClient.get(`/project/resource/get?id=${id}`);
}

/**
 * 新增项目资源
 * @param {Object} data - 资源数据
 */
function createProjectResource(data) {
  return requestClient.post("/project/resource/create", data);
}

/**
 * 更新项目资源
 * @param {Object} data - 资源数据
 */
function updateProjectResource(data) {
  return requestClient.put("/project/resource/update", data);
}

/**
 * 删除项目资源
 * @param {Number} id - 资源ID
 */
function deleteProjectResource(id) {
  return requestClient.delete(`/project/resource/delete?id=${id}`);
}

export {
  createProjectResource,
  deleteProjectResource,
  getProjectResource,
  getProjectResourcePage,
  updateProjectResource
};

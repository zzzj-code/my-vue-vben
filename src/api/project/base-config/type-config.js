/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目类型配置页面
 * 功能：项目类型配置相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询项目类型配置列表
 * @param {Object} params - 查询参数
 */
function getProjectTypeConfigPage(params) {
  return requestClient.get("/project/type-config/page", { params });
}

/**
 * 获取项目类型配置列表（全部）
 */
function getProjectTypeConfigList() {
  return requestClient.get("/project/type-config/list");
}

/**
 * 获取项目类型配置详情
 * @param {Number} id - 配置ID
 */
function getProjectTypeConfig(id) {
  return requestClient.get(`/project/type-config/get?id=${id}`);
}

/**
 * 新增项目类型配置
 * @param {Object} data - 配置数据
 */
function createProjectTypeConfig(data) {
  return requestClient.post("/project/type-config/create", data);
}

/**
 * 更新项目类型配置
 * @param {Object} data - 配置数据
 */
function updateProjectTypeConfig(data) {
  return requestClient.put("/project/type-config/update", data);
}

/**
 * 删除项目类型配置
 * @param {Number} id - 配置ID
 */
function deleteProjectTypeConfig(id) {
  return requestClient.delete(`/project/type-config/delete?id=${id}`);
}

export {
  createProjectTypeConfig,
  deleteProjectTypeConfig,
  getProjectTypeConfig,
  getProjectTypeConfigList,
  getProjectTypeConfigPage,
  updateProjectTypeConfig
};

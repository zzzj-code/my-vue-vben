/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目模块配置页面
 * 功能：项目模块配置相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询项目模块配置列表
 * @param {Object} params - 查询参数
 */
function getProjectModuleConfigPage(params) {
  return requestClient.get("/project/module-config/page", { params });
}

/**
 * 获取项目模块配置详情
 * @param {Number} id - 配置ID
 */
function getProjectModuleConfig(id) {
  return requestClient.get(`/project/module-config/get?id=${id}`);
}

/**
 * 新增项目模块配置
 * @param {Object} data - 配置数据
 */
function createProjectModuleConfig(data) {
  return requestClient.post("/project/module-config/create", data);
}

/**
 * 更新项目模块配置
 * @param {Object} data - 配置数据
 */
function updateProjectModuleConfig(data) {
  return requestClient.put("/project/module-config/update", data);
}

/**
 * 删除项目模块配置
 * @param {Number} id - 配置ID
 */
function deleteProjectModuleConfig(id) {
  return requestClient.delete(`/project/module-config/delete?id=${id}`);
}

export {
  createProjectModuleConfig,
  deleteProjectModuleConfig,
  getProjectModuleConfig,
  getProjectModuleConfigPage,
  updateProjectModuleConfig
};

/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目模板页面
 * 功能：项目模板相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询项目模板列表
 * @param {Object} params - 查询参数
 */
function getProjectTemplatePage(params) {
  return requestClient.get("/project/template/page", { params });
}

/**
 * 获取项目模板详情
 * @param {Number} id - 模板ID
 */
function getProjectTemplate(id) {
  return requestClient.get(`/project/template/get?id=${id}`);
}

/**
 * 新增项目模板
 * @param {Object} data - 模板数据
 */
function createProjectTemplate(data) {
  return requestClient.post("/project/template/create", data);
}

/**
 * 更新项目模板
 * @param {Object} data - 模板数据
 */
function updateProjectTemplate(data) {
  return requestClient.put("/project/template/update", data);
}

/**
 * 删除项目模板
 * @param {Number} id - 模板ID
 */
function deleteProjectTemplate(id) {
  return requestClient.delete(`/project/template/delete?id=${id}`);
}

export {
  createProjectTemplate,
  deleteProjectTemplate,
  getProjectTemplate,
  getProjectTemplatePage,
  updateProjectTemplate
};

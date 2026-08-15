/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目分类配置页面
 * 功能：项目分类相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询项目分类列表
 * @param {Object} params - 查询参数
 */
function getProjectCategoryPage(params) {
  return requestClient.get("/project/category/list", { params });
}

/**
 * 获取项目分类列表（全部）
 */
function getProjectCategoryList() {
  return requestClient.get("/project/category/list");
}

/**
 * 获取项目分类详情
 * @param {Number} id - 分类ID
 */
function getProjectCategory(id) {
  return requestClient.get(`/project/category/get?id=${id}`);
}

/**
 * 新增项目分类
 * @param {Object} data - 分类数据
 */
function createProjectCategory(data) {
  return requestClient.post("/project/category/create", data);
}

/**
 * 更新项目分类
 * @param {Object} data - 分类数据
 */
function updateProjectCategory(data) {
  return requestClient.put("/project/category/update", data);
}

/**
 * 删除项目分类
 * @param {Number} id - 分类ID
 */
function deleteProjectCategory(id) {
  return requestClient.delete(`/project/category/delete?id=${id}`);
}

export {
  createProjectCategory,
  deleteProjectCategory,
  getProjectCategory,
  getProjectCategoryList,
  getProjectCategoryPage,
  updateProjectCategory
};

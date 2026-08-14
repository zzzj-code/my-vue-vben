/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目组页面
 * 功能：项目组相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询项目组列表
 * @param {Object} params - 查询参数
 */
function getProjectGroupPage(params) {
  return requestClient.get("/project/group/page", { params });
}

/**
 * 获取项目组列表（全部）
 */
function getProjectGroupList() {
  return requestClient.get("/project/group/list");
}

/**
 * 获取项目组详情
 * @param {Number} id - 项目组ID
 */
function getProjectGroup(id) {
  return requestClient.get(`/project/group/get?id=${id}`);
}

/**
 * 新增项目组
 * @param {Object} data - 项目组数据
 */
function createProjectGroup(data) {
  return requestClient.post("/project/group/create", data);
}

/**
 * 更新项目组
 * @param {Object} data - 项目组数据
 */
function updateProjectGroup(data) {
  return requestClient.put("/project/group/update", data);
}

/**
 * 删除项目组
 * @param {Number} id - 项目组ID
 */
function deleteProjectGroup(id) {
  return requestClient.delete(`/project/group/delete?id=${id}`);
}

export {
  createProjectGroup,
  deleteProjectGroup,
  getProjectGroup,
  getProjectGroupList,
  getProjectGroupPage,
  updateProjectGroup
};

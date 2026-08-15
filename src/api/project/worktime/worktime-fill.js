/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：工时填报页面
 * 功能：工时填报相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询工时填报列表
 * @param {Object} params - 查询参数
 */
function getWorktimeFillPage(params) {
  return requestClient.get("/project/worktime/my-page", { params });
}

/**
 * 获取工时填报详情
 * @param {Number} id - 填报ID
 */
function getWorktimeFill(id) {
  return requestClient.get(`/project/worktime/get?id=${id}`);
}

/**
 * 新增工时填报
 * @param {Object} data - 填报数据
 */
function createWorktimeFill(data) {
  return requestClient.post("/project/worktime/create", data);
}

/**
 * 更新工时填报
 * @param {Object} data - 填报数据
 */
function updateWorktimeFill(data) {
  return requestClient.put("/project/worktime/update", data);
}

/**
 * 删除工时填报
 * @param {Number} id - 填报ID
 */
function deleteWorktimeFill(id) {
  return requestClient.delete(`/project/worktime/delete?id=${id}`);
}

export {
  createWorktimeFill,
  deleteWorktimeFill,
  getWorktimeFill,
  getWorktimeFillPage,
  updateWorktimeFill
};

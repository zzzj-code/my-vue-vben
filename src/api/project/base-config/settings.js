/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目设置页面
 * 功能：项目设置相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 获取项目设置
 */
function getProjectSettings() {
  return requestClient.get("/project/config/get");
}

/**
 * 更新项目设置
 * @param {Object} data - 设置数据
 */
function updateProjectSettings(data) {
  return requestClient.put("/project/config/update", data);
}

export {
  getProjectSettings,
  updateProjectSettings
};

/**
 * ============================================================
 * 模块：项目管理模块
 * 页面：项目台账列表页面
 * 功能：项目台账相关接口
 * 接口前缀：/admin-api/project
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询项目台账列表
 * @param {Object} params - 查询参数
 */
function getProjectLedgerPage(params) {
  return requestClient.get("/project/ledger/page", { params });
}

/**
 * 获取项目台账详情
 * @param {Number} id - 台账ID
 */
function getProjectLedger(id) {
  return requestClient.get(`/project/ledger/get?id=${id}`);
}

/**
 * 新增项目台账
 * @param {Object} data - 台账数据
 */
function createProjectLedger(data) {
  return requestClient.post("/project/ledger/create", data);
}

/**
 * 更新项目台账
 * @param {Object} data - 台账数据
 */
function updateProjectLedger(data) {
  return requestClient.put("/project/ledger/update", data);
}

/**
 * 删除项目台账
 * @param {Number} id - 台账ID
 */
function deleteProjectLedger(id) {
  return requestClient.delete(`/project/ledger/delete?id=${id}`);
}

export {
  createProjectLedger,
  deleteProjectLedger,
  getProjectLedger,
  getProjectLedgerPage,
  updateProjectLedger
};

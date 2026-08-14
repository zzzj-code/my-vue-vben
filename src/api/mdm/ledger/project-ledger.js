/**
 * ============================================================
 * 模块：主数据模块(mdm)
 * 页面：项目台账页面
 * 功能：项目台账相关接口
 * 接口前缀：/admin-api/mdm
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取项目台账分页列表
function getProjectLedgerPage(params) {
  return requestClient.get("/mdm/project-ledger/page", { params });
}

// 获取项目台账详情
function getProjectLedger(id) {
  return requestClient.get(`/mdm/project-ledger/get?id=${id}`);
}

// 新增项目台账
function createProjectLedger(data) {
  return requestClient.post("/mdm/project-ledger/create", data);
}

// 修改项目台账
function updateProjectLedger(data) {
  return requestClient.put("/mdm/project-ledger/update", data);
}

// 删除项目台账
function deleteProjectLedger(id) {
  return requestClient.delete(`/mdm/project-ledger/delete?id=${id}`);
}

// 批量删除项目台账
function deleteProjectLedgerList(ids) {
  return requestClient.delete("/mdm/project-ledger/delete-list", { data: ids });
}

// 导出项目台账
function exportProjectLedger(params) {
  return requestClient.download("/mdm/project-ledger/export", params);
}

export {
  getProjectLedgerPage,
  getProjectLedger,
  createProjectLedger,
  updateProjectLedger,
  deleteProjectLedger,
  deleteProjectLedgerList,
  exportProjectLedger,
};

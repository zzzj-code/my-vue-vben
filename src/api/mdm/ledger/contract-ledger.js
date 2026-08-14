/**
 * ============================================================
 * 模块：主数据模块(mdm)
 * 页面：合同台账页面
 * 功能：合同台账相关接口
 * 接口前缀：/admin-api/mdm
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取合同台账分页列表
function getContractLedgerPage(params) {
  return requestClient.get("/mdm/contract-ledger/page", { params });
}

// 获取合同台账详情
function getContractLedger(id) {
  return requestClient.get(`/mdm/contract-ledger/get?id=${id}`);
}

// 新增合同台账
function createContractLedger(data) {
  return requestClient.post("/mdm/contract-ledger/create", data);
}

// 修改合同台账
function updateContractLedger(data) {
  return requestClient.put("/mdm/contract-ledger/update", data);
}

// 删除合同台账
function deleteContractLedger(id) {
  return requestClient.delete(`/mdm/contract-ledger/delete?id=${id}`);
}

// 批量删除合同台账
function deleteContractLedgerList(ids) {
  return requestClient.delete("/mdm/contract-ledger/delete-list", { data: ids });
}

// 导出合同台账
function exportContractLedger(params) {
  return requestClient.download("/mdm/contract-ledger/export", params);
}

export {
  getContractLedgerPage,
  getContractLedger,
  createContractLedger,
  updateContractLedger,
  deleteContractLedger,
  deleteContractLedgerList,
  exportContractLedger,
};

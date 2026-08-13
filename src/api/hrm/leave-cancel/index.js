/**
 * ============================================================
 * 模块：HRM人力资源模块
 * 页面：请假销假页面
 * 功能：请假销假相关接口
 * 接口前缀：/admin-api/hrm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getLeaveCancelBillPage(params) {
  return requestClient.get("/hrm/leave-cancel-bill/page", { params });
}
function getLeaveCancelBill(id) {
  return requestClient.get(
    `/hrm/leave-cancel-bill/get?id=${id}`
  );
}
function saveLeaveCancelBill(data) {
  return requestClient.post("/hrm/leave-cancel-bill/save", data);
}
function submitLeaveCancelBill(data) {
  return requestClient.post("/hrm/leave-cancel-bill/submit", data);
}
function deleteLeaveCancelBill(id) {
  return requestClient.delete(`/hrm/leave-cancel-bill/delete?id=${id}`);
}
function deleteLeaveCancelBillList(ids) {
  return requestClient.delete(
    `/hrm/leave-cancel-bill/delete-list?ids=${ids.join(",")}`
  );
}
function exportLeaveCancelBill(params) {
  return requestClient.download("/hrm/leave-cancel-bill/export-excel", {
    params
  });
}
export {
  deleteLeaveCancelBill,
  deleteLeaveCancelBillList,
  exportLeaveCancelBill,
  getLeaveCancelBill,
  getLeaveCancelBillPage,
  saveLeaveCancelBill,
  submitLeaveCancelBill
};

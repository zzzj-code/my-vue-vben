/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：数据权限配置
 * 功能：数据权限配置相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
var BizTypeEnum = /* @__PURE__ */ ((BizTypeEnum2) => {
  BizTypeEnum2[BizTypeEnum2["CRM_BUSINESS"] = 4] = "CRM_BUSINESS";
  BizTypeEnum2[BizTypeEnum2["CRM_CLUE"] = 1] = "CRM_CLUE";
  BizTypeEnum2[BizTypeEnum2["CRM_CONTACT"] = 3] = "CRM_CONTACT";
  BizTypeEnum2[BizTypeEnum2["CRM_CONTRACT"] = 5] = "CRM_CONTRACT";
  BizTypeEnum2[BizTypeEnum2["CRM_CUSTOMER"] = 2] = "CRM_CUSTOMER";
  BizTypeEnum2[BizTypeEnum2["CRM_PRODUCT"] = 6] = "CRM_PRODUCT";
  BizTypeEnum2[BizTypeEnum2["CRM_RECEIVABLE"] = 7] = "CRM_RECEIVABLE";
  BizTypeEnum2[BizTypeEnum2["CRM_RECEIVABLE_PLAN"] = 8] = "CRM_RECEIVABLE_PLAN";
  return BizTypeEnum2;
})(BizTypeEnum || {});
var PermissionLevelEnum = /* @__PURE__ */ ((PermissionLevelEnum2) => {
  PermissionLevelEnum2[PermissionLevelEnum2["OWNER"] = 1] = "OWNER";
  PermissionLevelEnum2[PermissionLevelEnum2["READ"] = 2] = "READ";
  PermissionLevelEnum2[PermissionLevelEnum2["WRITE"] = 3] = "WRITE";
  return PermissionLevelEnum2;
})(PermissionLevelEnum || {});
function getPermissionList(params) {
  return requestClient.get(
    "/crm/permission/list",
    { params }
  );
}
function createPermission(data) {
  return requestClient.post("/crm/permission/create", data);
}
function updatePermission(data) {
  return requestClient.put("/crm/permission/update", data);
}
function deletePermissionBatch(ids) {
  return requestClient.delete(`/crm/permission/delete?ids=${ids.join(",")}`);
}
function deleteSelfPermission(id) {
  return requestClient.delete(`/crm/permission/delete-self?id=${id}`);
}
export {
  BizTypeEnum,
  PermissionLevelEnum,
  createPermission,
  deletePermissionBatch,
  deleteSelfPermission,
  getPermissionList,
  updatePermission
};

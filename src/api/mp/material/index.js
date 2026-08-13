/**
 * ============================================================
 * 模块：公众号模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getMaterialPage(params) {
  return requestClient.get(
    "/mp/material/page",
    {
      params
    }
  );
}
function deletePermanentMaterial(id) {
  return requestClient.delete("/mp/material/delete-permanent", {
    params: { id }
  });
}
export {
  deletePermanentMaterial,
  getMaterialPage
};

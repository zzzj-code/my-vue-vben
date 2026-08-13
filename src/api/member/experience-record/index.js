/**
 * ============================================================
 * 模块：会员模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/member
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getExperienceRecordPage(params) {
  return requestClient.get("/member/experience-record/page", {
    params
  });
}
function getExperienceRecord(id) {
  return requestClient.get(
    `/member/experience-record/get?id=${id}`
  );
}
export {
  getExperienceRecord,
  getExperienceRecordPage
};

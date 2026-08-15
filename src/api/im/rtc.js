/**
 * ============================================================
 * 模块：IM即时通讯模块
 * 页面：音视频通话页面
 * 功能：RTC音视频通话相关接口
 * 接口前缀：/admin-api/im
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 分页查询通话记录
 * @param {Object} params - 查询参数
 */
function getRtcRecordPage(params) {
  return requestClient.get("/im/rtc/record/list", { params });
}

/**
 * 获取通话记录详情
 * @param {Number} id - 记录ID
 */
function getRtcRecord(id) {
  return requestClient.get(`/im/rtc/record/get?id=${id}`);
}

/**
 * 删除通话记录
 * @param {Number} id - 记录ID
 */
function deleteRtcRecord(id) {
  return requestClient.delete(`/im/rtc/record/delete?id=${id}`);
}

export {
  deleteRtcRecord,
  getRtcRecord,
  getRtcRecordPage
};

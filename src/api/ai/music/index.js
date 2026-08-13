/**
 * ============================================================
 * 模块：AI智能助手模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/ai
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getMusicPage(params) {
  return requestClient.get(`/ai/music/page`, {
    params
  });
}
function updateMusic(data) {
  return requestClient.put("/ai/music/update", data);
}
function deleteMusic(id) {
  return requestClient.delete(`/ai/music/delete?id=${id}`);
}
export {
  deleteMusic,
  getMusicPage,
  updateMusic
};

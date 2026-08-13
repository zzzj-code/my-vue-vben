/**
 * ============================================================
 * 模块：AI智能助手模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/ai
 * ============================================================
 */
import { useAppConfig } from "@vben/hooks";
import { fetchEventSource } from "@vben/request";
import { useAccessStore } from "@vben/stores";
import { requestClient } from "#/api/request";
const { apiURL } = useAppConfig(import.meta.env, import.meta.env.PROD);
const accessStore = useAccessStore();
function generateMindMap({
  data,
  onClose,
  onMessage,
  onError,
  ctrl
}) {
  const token = accessStore.accessToken;
  return fetchEventSource(`${apiURL}/ai/mind-map/generate-stream`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    openWhenHidden: true,
    body: JSON.stringify(data),
    onmessage: onMessage,
    onerror: onError,
    onclose: onClose,
    signal: ctrl.signal
  });
}
function getMindMapPage(params) {
  return requestClient.get(`/ai/mind-map/page`, { params });
}
function deleteMindMap(id) {
  return requestClient.delete(`/ai/mind-map/delete?id=${id}`);
}
export {
  deleteMindMap,
  generateMindMap,
  getMindMapPage
};

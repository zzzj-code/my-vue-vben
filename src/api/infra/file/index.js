/**
 * ============================================================
 * 模块：基础设施模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/infra
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getFilePage(params) {
  return requestClient.get("/infra/file/page", {
    params
  });
}
function deleteFile(id) {
  return requestClient.delete(`/infra/file/delete?id=${id}`);
}
function deleteFileList(ids) {
  return requestClient.delete(`/infra/file/delete-list?ids=${ids.join(",")}`);
}
function getFilePresignedUrl(name, directory) {
  return requestClient.get(
    "/infra/file/presigned-url",
    {
      params: { name, directory }
    }
  );
}
function createFile(data) {
  return requestClient.post("/infra/file/create", data);
}
function uploadFile(data, onUploadProgress) {
  if (!data.directory) {
    delete data.directory;
  }
  return requestClient.upload("/infra/file/upload", data, { onUploadProgress });
}
export {
  createFile,
  deleteFile,
  deleteFileList,
  getFilePage,
  getFilePresignedUrl,
  uploadFile
};

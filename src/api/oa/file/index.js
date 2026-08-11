import { requestClient } from "#/api/request";
function getFileInfoPage(params) {
  return requestClient.get("/oa/file/page", {
    params
  });
}
function getFileInfo(id) {
  return requestClient.get(`/oa/file/get?id=${id}`);
}
function getFileInfoListByParentId(parentId) {
  return requestClient.get(
    `/oa/file/list?parentId=${parentId}`
  );
}
function createFileInfo(data) {
  return requestClient.post("/oa/file/create", data);
}
function updateFileInfo(data) {
  return requestClient.put("/oa/file/update", data);
}
function deleteFileInfo(id) {
  return requestClient.delete(`/oa/file/delete?id=${id}`);
}
function deleteFileInfoListByIds(ids) {
  return requestClient.delete(`/oa/file/delete-list?ids=${ids.join(",")}`);
}
function moveFileInfo(id, targetParentId) {
  return requestClient.put(
    `/oa/file/move?id=${id}&targetParentId=${targetParentId}`
  );
}
function renameFileInfo(id, newName) {
  return requestClient.put(
    `/oa/file/rename?id=${id}&newName=${encodeURIComponent(newName)}`
  );
}
function favoriteFile(fileId) {
  return requestClient.post(`/oa/file/favorite?fileId=${fileId}`);
}
function unfavoriteFile(fileId) {
  return requestClient.delete(`/oa/file/unfavorite?fileId=${fileId}`);
}
function getFavoriteFileList() {
  return requestClient.get("/oa/file/favorite-list");
}
function uploadFile(file, parentId = 0, onUploadProgress) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("parentId", parentId.toString());
  return requestClient.post("/oa/file/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    timeout: 3e5,
    // 5分钟超时
    onUploadProgress
  });
}
function shareFile(data) {
  return requestClient.post("/oa/file/share", data);
}
function unshareFile(fileId, shareType, targetId) {
  return requestClient.delete("/oa/file/unshare", {
    params: { fileId, shareType, targetId }
  });
}
function getFileShareInfo(fileId) {
  return requestClient.get("/oa/file/share-info", {
    params: { fileId }
  });
}
function getSharedFileList() {
  return requestClient.get("/oa/file/shared-list");
}
function getSharedSubFiles(rootShareId, parentId) {
  return requestClient.get("/oa/file/shared-sub-files", {
    params: { rootShareId, parentId }
  });
}
function checkFilePermission(fileId) {
  return requestClient.get("/oa/file/check-permission", {
    params: { fileId }
  });
}
function exportFileInfo(params) {
  return requestClient.download("/oa/file/export-excel", params);
}
function getFileStorageStats() {
  return requestClient.get("/oa/file/storage-stats");
}
export {
  checkFilePermission,
  createFileInfo,
  deleteFileInfo,
  deleteFileInfoListByIds,
  exportFileInfo,
  favoriteFile,
  getFavoriteFileList,
  getFileInfo,
  getFileInfoListByParentId,
  getFileInfoPage,
  getFileShareInfo,
  getFileStorageStats,
  getSharedFileList,
  getSharedSubFiles,
  moveFileInfo,
  renameFileInfo,
  shareFile,
  unfavoriteFile,
  unshareFile,
  updateFileInfo,
  uploadFile
};

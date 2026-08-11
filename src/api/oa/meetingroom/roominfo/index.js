import { requestClient } from "#/api/request";
function getMeetingRoomPage(params) {
  return requestClient.get(
    "/oa/meeting-room/page",
    { params }
  );
}
function getMeetingRoom(id) {
  return requestClient.get(
    `/oa/meeting-room/get?id=${id}`
  );
}
function createMeetingRoom(data) {
  return requestClient.post("/oa/meeting-room/create", data);
}
function updateMeetingRoom(data) {
  return requestClient.put("/oa/meeting-room/update", data);
}
function deleteMeetingRoom(id) {
  return requestClient.delete(`/oa/meeting-room/delete?id=${id}`);
}
function deleteMeetingRoomListByIds(ids) {
  return requestClient.delete(
    `/oa/meeting-room/delete-list?ids=${ids.join(",")}`
  );
}
function exportMeetingRoom(params) {
  return requestClient.download("/oa/meeting-room/export-excel", params);
}
function getMeetingRoomSelectList() {
  return requestClient.get(
    "/oa/meeting-room/simple-list"
  );
}
function getBookableMeetingRoomPage(params) {
  return requestClient.get(
    "/oa/meeting-room/bookable-page",
    { params }
  );
}
export {
  createMeetingRoom,
  deleteMeetingRoom,
  deleteMeetingRoomListByIds,
  exportMeetingRoom,
  getBookableMeetingRoomPage,
  getMeetingRoom,
  getMeetingRoomPage,
  getMeetingRoomSelectList,
  updateMeetingRoom
};

import { requestClient } from "#/api/request";
function getMeetingRoomBookingPage(params) {
  return requestClient.get("/oa/meeting-room-booking/page", { params });
}
function getMeetingRoomBooking(id) {
  return requestClient.get(
    `/oa/meeting-room-booking/get?id=${id}`
  );
}
function saveMeetingRoomBooking(data) {
  return requestClient.post("/oa/meeting-room-booking/save", data);
}
function submitMeetingRoomBooking(data) {
  return requestClient.post("/oa/meeting-room-booking/submit", data);
}
function deleteMeetingRoomBooking(id) {
  return requestClient.delete(`/oa/meeting-room-booking/delete?id=${id}`);
}
function deleteMeetingRoomBookingList(ids) {
  return requestClient.delete(
    `/oa/meeting-room-booking/delete-list?ids=${ids.join(",")}`
  );
}
function exportMeetingRoomBookingExcel(params) {
  return requestClient.download("/oa/meeting-room-booking/export-excel", {
    params
  });
}
function updateMeetingRoomBookingUseStatus(id, useStatus) {
  return requestClient.put(
    `/oa/meeting-room-booking/update-use-status?id=${id}&useStatus=${useStatus}`
  );
}
function getMeetingRoomBookingSchedule(params) {
  return requestClient.get(
    "/oa/meeting-room-booking/schedule",
    { params }
  );
}
export {
  deleteMeetingRoomBooking,
  deleteMeetingRoomBookingList,
  exportMeetingRoomBookingExcel,
  getMeetingRoomBooking,
  getMeetingRoomBookingPage,
  getMeetingRoomBookingSchedule,
  saveMeetingRoomBooking,
  submitMeetingRoomBooking,
  updateMeetingRoomBookingUseStatus
};

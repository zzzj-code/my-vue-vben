import { requestClient } from "#/api/request";
function getUserProfile() {
  return requestClient.get(
    "/system/user/profile/get"
  );
}
function updateUserProfile(data) {
  return requestClient.put("/system/user/profile/update", data);
}
function updateUserPassword(data) {
  return requestClient.put("/system/user/profile/update-password", data);
}
export {
  getUserProfile,
  updateUserPassword,
  updateUserProfile
};

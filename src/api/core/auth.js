import { baseRequestClient, requestClient } from "#/api/request";
async function loginApi(data) {
  return requestClient.post("/system/auth/login", data, {
    headers: {
      isEncrypt: false
    }
  });
}
async function refreshTokenApi(refreshToken) {
  return baseRequestClient.post(
    `/system/auth/refresh-token?refreshToken=${refreshToken}`
  );
}
async function logoutApi(accessToken) {
  return baseRequestClient.post(
    "/system/auth/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
}
async function getAuthPermissionInfoApi() {
  return requestClient.get(
    "/system/auth/get-permission-info"
  );
}
async function getTenantSimpleList() {
  return requestClient.get(
    `/system/tenant/simple-list`
  );
}
async function getTenantByWebsite(website) {
  return requestClient.get(
    `/system/tenant/get-by-website?website=${website}`
  );
}
async function getCaptcha(data) {
  return baseRequestClient.post("/system/captcha/get", data);
}
async function checkCaptcha(data) {
  return baseRequestClient.post("/system/captcha/check", data);
}
async function sendSmsCode(data) {
  return requestClient.post("/system/auth/send-sms-code", data);
}
async function smsLogin(data) {
  return requestClient.post("/system/auth/sms-login", data);
}
async function register(data) {
  return requestClient.post("/system/auth/register", data);
}
async function smsResetPassword(data) {
  return requestClient.post("/system/auth/reset-password", data);
}
async function socialAuthRedirect(type, redirectUri) {
  return requestClient.get("/system/auth/social-auth-redirect", {
    params: {
      type,
      redirectUri
    }
  });
}
async function socialLogin(data) {
  return requestClient.post(
    "/system/auth/social-login",
    data
  );
}
export {
  checkCaptcha,
  getAuthPermissionInfoApi,
  getCaptcha,
  getTenantByWebsite,
  getTenantSimpleList,
  loginApi,
  logoutApi,
  refreshTokenApi,
  register,
  sendSmsCode,
  smsLogin,
  smsResetPassword,
  socialAuthRedirect,
  socialLogin
};

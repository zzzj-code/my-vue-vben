import { requestClient } from "#/api/request";
function getAddressList(params) {
  return requestClient.get("/member/address/list", {
    params
  });
}
export {
  getAddressList
};

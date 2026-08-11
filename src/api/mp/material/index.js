import { requestClient } from "#/api/request";
function getMaterialPage(params) {
  return requestClient.get(
    "/mp/material/page",
    {
      params
    }
  );
}
function deletePermanentMaterial(id) {
  return requestClient.delete("/mp/material/delete-permanent", {
    params: { id }
  });
}
export {
  deletePermanentMaterial,
  getMaterialPage
};

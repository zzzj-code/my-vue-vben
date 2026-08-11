import { requestClient } from "#/api/request";
function createProperty(data) {
  return requestClient.post("/product/property/create", data);
}
function updateProperty(data) {
  return requestClient.put("/product/property/update", data);
}
function deleteProperty(id) {
  return requestClient.delete(`/product/property/delete?id=${id}`);
}
function getProperty(id) {
  return requestClient.get(
    `/product/property/get?id=${id}`
  );
}
function getPropertyPage(params) {
  return requestClient.get(
    "/product/property/page",
    { params }
  );
}
function getPropertySimpleList() {
  return requestClient.get(
    "/product/property/simple-list"
  );
}
function getPropertyValuePage(params) {
  return requestClient.get(
    "/product/property/value/page",
    { params }
  );
}
function getPropertyValue(id) {
  return requestClient.get(
    `/product/property/value/get?id=${id}`
  );
}
function createPropertyValue(data) {
  return requestClient.post("/product/property/value/create", data);
}
function updatePropertyValue(data) {
  return requestClient.put("/product/property/value/update", data);
}
function deletePropertyValue(id) {
  return requestClient.delete(`/product/property/value/delete?id=${id}`);
}
function getPropertyValueSimpleList(propertyId) {
  return requestClient.get(
    "/product/property/value/simple-list",
    {
      params: { propertyId }
    }
  );
}
export {
  createProperty,
  createPropertyValue,
  deleteProperty,
  deletePropertyValue,
  getProperty,
  getPropertyPage,
  getPropertySimpleList,
  getPropertyValue,
  getPropertyValuePage,
  getPropertyValueSimpleList,
  updateProperty,
  updatePropertyValue
};

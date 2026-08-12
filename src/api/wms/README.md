# WMS 仓储管理模块 API 说明

## 模块概述
仓储管理模块，包含仓库管理、采购订单、采购入库、通用操作单等功能。

## API 文件与页面对应关系

| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `wms/warehousing/index.js` | `views/pages/wms/warehousing/warehousing-list.vue` | 仓库管理 | ❌ | 仓库信息的增删改查、分页查询 |
| `wms/purchaseorder/index.js` | `views/pages/wms/purchase-order/purchase-order-list.vue` | 采购订单 | ❌ | 采购订单的增删改查、分页查询 |
| `wms/purchaseinwarehousing/index.js` | `views/pages/wms/purchase-in-warehousing/purchase-in-warehousing-list.vue` | 采购入库 | ❌ | 采购入库单的增删改查、分页查询 |
| `wms/goodscommonoperationorder/index.js` | `views/pages/wms/goods-common-operation-order/goods-common-operation-order-list.vue` | 通用操作单 | ❌ | 通用操作单的增删改查、分页查询 |

## 接口路径前缀
所有WMS模块接口前缀：`/admin-api/wms`

## 子模块接口路径
- 仓库管理：`/admin-api/wms/warehousing`
- 采购订单：`/admin-api/wms/purchase-order`
- 采购入库：`/admin-api/wms/purchase-in-warehousing`
- 通用操作单：`/admin-api/wms/goods-common-operation-order`
- 库存查询：`/admin-api/wms/inventory`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化

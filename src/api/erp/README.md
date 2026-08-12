# ERP 进销存模块 API 说明

## 模块概述
进销存管理模块，包含采购、销售、库存、财务、产品、统计等功能。

## API 文件与页面对应关系

### 产品管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `erp/product/product/index.js` | `views/pages/erp/product/product-list.vue` | 产品管理 | ❌ | 产品的增删改查、分页查询 |
| `erp/product/category/index.js` | `views/pages/erp/product/product-category.vue` | 产品分类 | ❌ | 产品分类的增删改查、树形结构 |
| `erp/product/unit/index.js` | `views/pages/erp/product/product-unit.vue` | 产品单位 | ❌ | 产品单位的增删改查 |

### 采购管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `erp/purchase/order/index.js` | `views/pages/erp/purchase/purchase-order.vue` | 采购订单 | ❌ | 采购订单的增删改查、分页查询 |
| `erp/purchase/in/index.js` | `views/pages/erp/purchase/purchase-in.vue` | 采购入库 | ❌ | 采购入库单的增删改查 |
| `erp/purchase/return/index.js` | `views/pages/erp/purchase/purchase-return.vue` | 采购退货 | ❌ | 采购退货单的增删改查 |
| `erp/purchase/supplier/index.js` | `views/pages/erp/purchase/supplier-list.vue` | 供应商管理 | ❌ | 供应商的增删改查、分页查询 |

### 销售管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `erp/sale/order/index.js` | `views/pages/erp/sale/sale-order.vue` | 销售订单 | ❌ | 销售订单的增删改查、分页查询 |
| `erp/sale/out/index.js` | `views/pages/erp/sale/sale-out.vue` | 销售出库 | ❌ | 销售出库单的增删改查 |
| `erp/sale/return/index.js` | `views/pages/erp/sale/sale-return.vue` | 销售退货 | ❌ | 销售退货单的增删改查 |
| `erp/sale/customer/index.js` | `views/pages/erp/sale/customer-list.vue` | 客户管理 | ❌ | 客户的增删改查、分页查询 |

### 库存管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `erp/stock/stock/index.js` | `views/pages/erp/stock/stock-list.vue` | 库存查询 | ❌ | 库存的查询、分页 |
| `erp/stock/in/index.js` | `views/pages/erp/stock/stock-in.vue` | 其他入库 | ❌ | 其他入库单的增删改查 |
| `erp/stock/out/index.js` | `views/pages/erp/stock/stock-out.vue` | 其他出库 | ❌ | 其他出库单的增删改查 |
| `erp/stock/move/index.js` | `views/pages/erp/stock/stock-move.vue` | 库存调拨 | ❌ | 库存调拨单的增删改查 |
| `erp/stock/check/index.js` | `views/pages/erp/stock/stock-check.vue` | 库存盘点 | ❌ | 库存盘点单的增删改查 |
| `erp/stock/record/index.js` | `views/pages/erp/stock/stock-record.vue` | 库存流水 | ❌ | 库存流水的查询、分页 |
| `erp/stock/warehouse/index.js` | `views/pages/erp/stock/warehouse-list.vue` | 仓库管理 | ❌ | 仓库的增删改查、分页查询 |

### 财务管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `erp/finance/account/index.js` | `views/pages/erp/finance/account-list.vue` | 账户管理 | ❌ | 账户的增删改查 |
| `erp/finance/payment/index.js` | `views/pages/erp/finance/payment-list.vue` | 付款单 | ❌ | 付款单的增删改查 |
| `erp/finance/receipt/index.js` | `views/pages/erp/finance/receipt-list.vue` | 收款单 | ❌ | 收款单的增删改查 |

### 统计分析
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `erp/statistics/purchase/index.js` | `views/pages/erp/statistics/purchase-statistics.vue` | 采购统计 | ❌ | 采购数据统计分析 |
| `erp/statistics/sale/index.js` | `views/pages/erp/statistics/sale-statistics.vue` | 销售统计 | ❌ | 销售数据统计分析 |

## 接口路径前缀
所有ERP模块接口前缀：`/admin-api/erp`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化
- 单据状态：0=草稿，10=已审核，20=已驳回

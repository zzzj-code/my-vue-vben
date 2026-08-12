# Pay 支付模块 API 说明

## 模块概述
支付管理模块，包含应用、渠道、订单、退款、转账、通知、钱包、充值套餐、交易记录等功能。

## API 文件与页面对应关系

| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `pay/app/index.js` | `views/pages/pay/app/app-list.vue` | 应用管理 | ❌ | 支付应用的增删改查 |
| `pay/channel/index.js` | `views/pages/pay/channel/channel-list.vue` | 渠道管理 | ❌ | 支付渠道的增删改查 |
| `pay/order/index.js` | `views/pages/pay/order/order-list.vue` | 支付订单 | ❌ | 支付订单的查询、分页 |
| `pay/refund/index.js` | `views/pages/pay/refund/refund-list.vue` | 退款订单 | ❌ | 退款订单的查询、分页 |
| `pay/transfer/index.js` | `views/pages/pay/transfer/transfer-list.vue` | 转账订单 | ❌ | 转账订单的查询、分页 |
| `pay/notify/index.js` | `views/pages/pay/notify/notify-list.vue` | 回调通知 | ❌ | 支付回调通知的查询 |
| `pay/wallet/balance/index.js` | `views/pages/pay/wallet/wallet-balance.vue` | 钱包余额 | ❌ | 钱包余额查询 |
| `pay/wallet/rechargePackage/index.js` | `views/pages/pay/wallet/recharge-package.vue` | 充值套餐 | ❌ | 充值套餐的增删改查 |
| `pay/wallet/transaction/index.js` | `views/pages/pay/wallet/wallet-transaction.vue` | 钱包流水 | ❌ | 钱包交易流水查询 |
| `pay/demo/order/index.js` | `views/pages/pay/demo/demo-order.vue` | 示例订单 | ❌ | 支付示例订单 |
| `pay/demo/withdraw/index.js` | `views/pages/pay/demo/demo-withdraw.vue` | 示例提现 | ❌ | 提现示例 |

## 接口路径前缀
所有Pay模块接口前缀：`/admin-api/pay`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化
- 支付状态：0=待支付，10=已支付，20=已退款

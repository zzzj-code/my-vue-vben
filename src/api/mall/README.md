# Mall 商城模块 API 说明

## 模块概述
商城管理模块，包含商品、促销、交易、会员、统计等功能。

## API 文件与页面对应关系

### 商品管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `mall/product/spu/index.js` | `views/pages/mall/product/spu-list.vue` | 商品SPU | ❌ | 商品SPU的增删改查 |
| `mall/product/brand/index.js` | `views/pages/mall/product/brand-list.vue` | 商品品牌 | ❌ | 品牌的增删改查 |
| `mall/product/category/index.js` | `views/pages/mall/product/category-list.vue` | 商品分类 | ❌ | 分类的增删改查、树形结构 |
| `mall/product/comment/index.js` | `views/pages/mall/product/comment-list.vue` | 商品评价 | ❌ | 评价的查询、回复 |
| `mall/product/favorite/index.js` | `views/pages/mall/product/favorite-list.vue` | 商品收藏 | ❌ | 收藏的查询、删除 |
| `mall/product/history/index.js` | `views/pages/mall/product/history-list.vue` | 浏览历史 | ❌ | 浏览历史的查询、删除 |
| `mall/product/property/index.js` | `views/pages/mall/product/property-list.vue` | 商品属性 | ❌ | 属性的增删改查 |

### 促销管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `mall/promotion/coupon/coupon.js` | `views/pages/mall/promotion/coupon-list.vue` | 优惠券 | ❌ | 优惠券的增删改查 |
| `mall/promotion/coupon/couponTemplate.js` | `views/pages/mall/promotion/coupon-template.vue` | 优惠券模板 | ❌ | 优惠券模板的增删改查 |
| `mall/promotion/seckill/seckillActivity.js` | `views/pages/mall/promotion/seckill-activity.vue` | 秒杀活动 | ❌ | 秒杀活动的增删改查 |
| `mall/promotion/seckill/seckillConfig.js` | `views/pages/mall/promotion/seckill-config.vue` | 秒杀配置 | ❌ | 秒杀时间段配置 |
| `mall/promotion/bargain/bargainActivity.js` | `views/pages/mall/promotion/bargain-activity.vue` | 砍价活动 | ❌ | 砍价活动的增删改查 |
| `mall/promotion/bargain/bargainRecord.js` | `views/pages/mall/promotion/bargain-record.vue` | 砍价记录 | ❌ | 砍价记录的查询 |
| `mall/promotion/bargain/bargainHelp.js` | `views/pages/mall/promotion/bargain-help.vue` | 砍价助力 | ❌ | 砍价助力记录 |
| `mall/promotion/combination/combinationActivity.js` | `views/pages/mall/promotion/combination-activity.vue` | 拼团活动 | ❌ | 拼团活动的增删改查 |
| `mall/promotion/combination/combinationRecord.js` | `views/pages/mall/promotion/combination-record.vue` | 拼团记录 | ❌ | 拼团记录的查询 |
| `mall/promotion/discount/discountActivity.js` | `views/pages/mall/promotion/discount-activity.vue` | 限时折扣 | ❌ | 限时折扣活动的增删改查 |
| `mall/promotion/reward/rewardActivity.js` | `views/pages/mall/promotion/reward-activity.vue` | 满减活动 | ❌ | 满减活动的增删改查 |
| `mall/promotion/point/index.js` | `views/pages/mall/promotion/point-activity.vue` | 积分活动 | ❌ | 积分活动的增删改查 |
| `mall/promotion/banner/index.js` | `views/pages/mall/promotion/banner-list.vue` | 首页Banner | ❌ | Banner的增删改查 |
| `mall/promotion/article/index.js` | `views/pages/mall/promotion/article-list.vue` | 文章管理 | ❌ | 文章的增删改查 |
| `mall/promotion/article/category/index.js` | `views/pages/mall/promotion/article-category.vue` | 文章分类 | ❌ | 文章分类的增删改查 |
| `mall/promotion/diy/page.js` | `views/pages/mall/promotion/diy-page.vue` | 装修页面 | ❌ | 页面装修配置 |
| `mall/promotion/diy/template.js` | `views/pages/mall/promotion/diy-template.vue` | 装修模板 | ❌ | 装修模板管理 |
| `mall/promotion/kefu/conversation/index.js` | `views/pages/mall/promotion/kefu-conversation.vue` | 客服会话 | ❌ | 客服会话管理 |
| `mall/promotion/kefu/message/index.js` | `views/pages/mall/promotion/kefu-message.vue` | 客服消息 | ❌ | 客服消息管理 |

### 交易管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `mall/trade/order/index.js` | `views/pages/mall/trade/order-list.vue` | 订单管理 | ❌ | 订单的查询、发货、退款 |
| `mall/trade/afterSale/index.js` | `views/pages/mall/trade/after-sale-list.vue` | 售后管理 | ❌ | 售后单的查询、处理 |
| `mall/trade/config/index.js` | `views/pages/mall/trade/trade-config.vue` | 交易配置 | ❌ | 交易参数配置 |
| `mall/trade/delivery/express/index.js` | `views/pages/mall/trade/express-list.vue` | 快递公司 | ❌ | 快递公司的增删改查 |
| `mall/trade/delivery/expressTemplate/index.js` | `views/pages/mall/trade/express-template.vue` | 运费模板 | ❌ | 运费模板的增删改查 |
| `mall/trade/delivery/pickUpStore/index.js` | `views/pages/mall/trade/pickup-store.vue` | 自提门店 | ❌ | 自提门店的增删改查 |
| `mall/trade/brokerage/user/index.js` | `views/pages/mall/trade/brokerage-user.vue` | 分销用户 | ❌ | 分销用户管理 |
| `mall/trade/brokerage/record/index.js` | `views/pages/mall/trade/brokerage-record.vue` | 佣金记录 | ❌ | 佣金记录查询 |
| `mall/trade/brokerage/withdraw/index.js` | `views/pages/mall/trade/brokerage-withdraw.vue` | 佣金提现 | ❌ | 佣金提现审核 |

### 统计分析
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `mall/statistics/common.js` | `views/pages/mall/statistics/common-statistics.vue` | 通用统计 | ❌ | 商城通用数据统计 |
| `mall/statistics/member.js` | `views/pages/mall/statistics/member-statistics.vue` | 会员统计 | ❌ | 会员数据统计 |
| `mall/statistics/pay.js` | `views/pages/mall/statistics/pay-statistics.vue` | 支付统计 | ❌ | 支付数据统计 |
| `mall/statistics/product.js` | `views/pages/mall/statistics/product-statistics.vue` | 商品统计 | ❌ | 商品销售统计 |
| `mall/statistics/trade.js` | `views/pages/mall/statistics/trade-statistics.vue` | 交易统计 | ❌ | 交易数据统计 |

## 接口路径前缀
所有Mall模块接口前缀：`/admin-api/mall`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化
- 订单状态：0=待支付，10=待发货，20=待收货，30=已完成，40=已取消

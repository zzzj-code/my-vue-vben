# CRM 客户管理模块 API 说明

## 模块概述
客户关系管理模块，包含客户、线索、商机、联系人、合同、产品、回款、跟进、权限、统计等功能。

## API 文件与页面对应关系

### 客户管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/customer/index.js` | `views/pages/crm/customer/customer-list.vue` | 客户管理 | ❌ | 客户的增删改查、分页查询、导入导出 |
| `crm/customer/limitConfig/index.js` | `views/pages/crm/customer/customer-limit-config.vue` | 客户限制配置 | ❌ | 客户数量限制配置 |
| `crm/customer/poolConfig/index.js` | `views/pages/crm/customer/customer-pool-config.vue` | 客户公海配置 | ❌ | 客户公海规则配置 |

### 线索管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/clue/index.js` | `views/pages/crm/clue/clue-list.vue` | 线索管理 | ❌ | 线索的增删改查、分页查询、转化客户 |

### 商机管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/business/index.js` | `views/pages/crm/business/business-list.vue` | 商机管理 | ❌ | 商机的增删改查、分页查询 |
| `crm/business/status/index.js` | `views/pages/crm/business/business-status.vue` | 商机状态管理 | ❌ | 商机状态的增删改查 |

### 联系人管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/contact/index.js` | `views/pages/crm/contact/contact-list.vue` | 联系人管理 | ❌ | 联系人的增删改查、分页查询 |

### 合同管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/contract/index.js` | `views/pages/crm/contract/contract-list.vue` | 合同管理 | ❌ | 合同的增删改查、分页查询 |
| `crm/contract/config/index.js` | `views/pages/crm/contract/contract-config.vue` | 合同配置 | ❌ | 合同编号规则配置 |

### 产品管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/product/index.js` | `views/pages/crm/product/product-list.vue` | 产品管理 | ❌ | 产品的增删改查、分页查询 |
| `crm/product/category/index.js` | `views/pages/crm/product/product-category.vue` | 产品分类 | ❌ | 产品分类的增删改查、树形结构 |

### 回款管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/receivable/index.js` | `views/pages/crm/receivable/receivable-list.vue` | 回款管理 | ❌ | 回款的增删改查、分页查询 |
| `crm/receivable/plan/index.js` | `views/pages/crm/receivable/receivable-plan.vue` | 回款计划 | ❌ | 回款计划的增删改查 |

### 跟进记录
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/followup/index.js` | `views/pages/crm/followup/followup-list.vue` | 跟进记录 | ❌ | 跟进记录的增删改查、分页查询 |

### 操作日志
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/operateLog/index.js` | `views/pages/crm/operate-log/operate-log-list.vue` | 操作日志 | ❌ | CRM操作日志的查询 |

### 权限管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/permission/index.js` | `views/pages/crm/permission/permission-list.vue` | 数据权限 | ❌ | CRM数据权限配置 |

### 统计分析
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `crm/statistics/customer.js` | `views/pages/crm/statistics/customer-statistics.vue` | 客户统计 | ❌ | 客户数据统计分析 |
| `crm/statistics/funnel.js` | `views/pages/crm/statistics/funnel-statistics.vue` | 商机漏斗 | ❌ | 商机转化漏斗分析 |
| `crm/statistics/performance.js` | `views/pages/crm/statistics/performance-statistics.vue` | 业绩统计 | ❌ | 员工业绩统计 |
| `crm/statistics/portrait.js` | `views/pages/crm/statistics/portrait-statistics.vue` | 客户画像 | ❌ | 客户画像分析 |
| `crm/statistics/rank.js` | `views/pages/crm/statistics/rank-statistics.vue` | 排行榜 | ❌ | 销售排行榜 |

## 接口路径前缀
所有CRM模块接口前缀：`/admin-api/crm`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化
- 客户状态：1=跟进中，2=已成交，3=已流失

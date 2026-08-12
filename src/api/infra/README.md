# Infra 基础设施模块 API 说明

## 模块概述
基础设施模块，包含文件管理、代码生成、数据源配置、定时任务、API日志、Redis监控、Demo示例等功能。

## API 文件与页面对应关系

### 文件管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/file/index.js` | `views/pages/infra/file/file-list.vue` | 文件管理 | ❌ | 文件的上传、下载、删除、分页查询 |
| `infra/file-config/index.js` | `views/pages/infra/file/file-config.vue` | 文件配置 | ❌ | 文件存储配置的增删改查 |

### 代码生成
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/codegen/index.js` | `views/pages/infra/codegen/codegen-list.vue` | 代码生成 | ❌ | 代码生成的查询、预览、生成、下载 |

### 数据源配置
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/data-source-config/index.js` | `views/pages/infra/data-source/data-source-list.vue` | 数据源配置 | ❌ | 数据源的增删改查、分页查询 |

### 定时任务
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/job/index.js` | `views/pages/infra/job/job-list.vue` | 定时任务 | ❌ | 定时任务的增删改查、执行、暂停/恢复 |
| `infra/job-log/index.js` | `views/pages/infra/job/job-log.vue` | 任务日志 | ❌ | 任务执行日志的查询、分页 |

### API 日志
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/api-access-log/index.js` | `views/pages/infra/log/api-access-log.vue` | API访问日志 | ❌ | API访问日志的查询、分页、导出 |
| `infra/api-error-log/index.js` | `views/pages/infra/log/api-error-log.vue` | API错误日志 | ❌ | API错误日志的查询、分页、导出 |

### Redis 监控
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/redis/index.js` | `views/pages/infra/redis/redis-monitor.vue` | Redis监控 | ❌ | Redis状态监控、Key查询 |

### 参数配置
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/config/index.js` | `views/pages/infra/config/config-list.vue` | 参数配置 | ❌ | 参数配置的增删改查、分页查询 |

### Demo 示例
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/demo/demo01/index.js` | `views/pages/infra/demo/demo01.vue` | Demo示例01 | ❌ | 示例代码 |
| `infra/demo/demo02/index.js` | `views/pages/infra/demo/demo02.vue` | Demo示例02 | ❌ | 示例代码 |
| `infra/demo/demo03/erp/index.js` | `views/pages/infra/demo/demo03-erp.vue` | Demo示例03-ERP | ❌ | ERP示例代码 |
| `infra/demo/demo03/inner/index.js` | `views/pages/infra/demo/demo03-inner.vue` | Demo示例03-内部 | ❌ | 内部示例代码 |
| `infra/demo/demo03/normal/index.js` | `views/pages/infra/demo/demo03-normal.vue` | Demo示例03-普通 | ❌ | 普通示例代码 |

## 接口路径前缀
所有Infra模块接口前缀：`/admin-api/infra`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化

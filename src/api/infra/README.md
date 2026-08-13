# Infra 基础设施模块 API 说明

## 模块概述
基础设施模块，包含文件管理、代码生成、数据源配置、定时任务、API日志、Redis监控、Demo示例等功能。

## API 文件与页面对应关系

### 文件管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/file/index.js` | `views/pages/infra/file/file.vue` | 文件管理 | ✅ | 文件的上传、下载、删除、分页查询 |
| `infra/file-config/index.js` | `views/pages/infra/file/file-config.vue` | 文件配置 | ✅ | 文件存储配置的增删改查 |

### 代码生成
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/codegen/index.js` | `views/pages/infra/codegen.vue` | 代码生成 | ✅ | 代码生成的查询、预览、生成、下载 |

### 数据源配置
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/data-source-config/index.js` | `views/pages/infra/data-source-config.vue` | 数据源配置 | ✅ | 数据源的增删改查、分页查询 |

### 定时任务
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/job/index.js` | `views/pages/infra/operation/job-ops.vue` | 定时任务运维 | ✅ | 定时任务的查询、执行、暂停/恢复 |
| `infra/job-log/index.js` | - | 任务日志 | ❌ | 任务执行日志的查询、分页 |

### API 日志
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/api-access-log/index.js` | `views/pages/infra/log/api-access-log.vue` | API访问日志 | ✅ | API访问日志的查询、分页、导出 |
| `infra/api-error-log/index.js` | `views/pages/infra/log/api-error-log.vue` | API错误日志 | ✅ | API错误日志的查询、分页、导出 |

### Redis 监控
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/redis/index.js` | `views/pages/infra/monitors/redis.vue` | Redis监控 | ❌ | Redis状态监控、Key查询（iframe弹窗，无需对接） |

### 参数配置
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/config/index.js` | `views/pages/infra/config.vue` | 参数配置 | ✅ | 参数配置的增删改查、分页查询 |

### Demo 示例
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `infra/demo/demo01/index.js` | `views/pages/infra/demo/demo01-contact.vue` | Demo示例01-联系人 | ✅ | 示例代码 |
| `infra/demo/demo02/index.js` | `views/pages/infra/demo/demo02-category.vue` | Demo示例02-分类 | ✅ | 示例代码 |
| `infra/demo/demo03/erp/index.js` | `views/pages/infra/demo/demo03-erp.vue` | Demo示例03-ERP | ✅ | ERP示例代码 |
| `infra/demo/demo03/inner/index.js` | `views/pages/infra/demo/demo03-inner.vue` | Demo示例03-内部 | ✅ | 内部示例代码 |
| `infra/demo/demo03/normal/index.js` | `views/pages/infra/demo/demo03-normal.vue` | Demo示例03-普通 | ✅ | 普通示例代码 |

### 其他页面（无对应API）
| 页面路径 | 页面名称 | 说明 |
|---------|---------|------|
| `views/pages/infra/build.vue` | 构建 | 构建工具页面，无对应API |
| `views/pages/infra/swagger.vue` | 接口文档 | Swagger文档页面，无对应API |
| `views/pages/infra/websocket.vue` | WebSocket | WebSocket测试页面，无对应API |
| `views/pages/infra/monitors/admin-server.vue` | 服务监控 | Spring Boot Admin监控，无对应API |
| `views/pages/infra/monitors/druid.vue` | Druid监控 | Druid数据库监控，无对应API |
| `views/pages/infra/monitors/skywalking.vue` | 链路追踪 | SkyWalking链路追踪，无对应API |

## 接口路径前缀
所有Infra模块接口前缀：`/admin-api/infra`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化
- 状态字段（status）：0=启用，1=禁用

## 已对接页面统计
- 基础设施模块共20个页面，已对接13个页面
- 已对接：参数配置、代码生成、数据源配置、文件管理、文件配置、API访问日志、API错误日志、5个Demo示例页面、定时任务运维
- 未对接：构建、接口文档、WebSocket、服务监控、Druid监控、Redis监控（iframe）、链路追踪（无对应API或特殊页面）

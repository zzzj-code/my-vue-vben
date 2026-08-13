# System 系统管理模块 API 说明

## 模块概述
系统管理模块，包含用户、角色、部门、岗位、菜单、字典、参数、通知、日志、租户、OAuth2、短信、邮件、社交等基础功能。

## API 文件与页面对应关系

### 用户与权限
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `system/user/index.js` | `views/pages/management/user.vue` | 用户管理 | ✅ | 用户的增删改查、分页查询、重置密码、导出 |
| `system/user/profile/index.js` | - | 个人中心 | ❌ | 用户个人信息修改、密码修改 |
| `system/role/index.js` | `views/pages/management/role.vue` | 角色管理 | ✅ | 角色的增删改查、分页查询、分配权限 |
| `system/permission/index.js` | - | 权限管理 | ❌ | 权限相关接口 |
| `system/menu/index.js` | `views/pages/management/menu.vue` | 菜单管理 | ✅ | 菜单的增删改查、树形结构 |
| `system/dept/index.js` | `views/pages/management/dept.vue` | 部门管理 | ✅ | 部门的增删改查、树形结构 |
| `system/post/index.js` | `views/pages/management/post.vue` | 岗位管理 | ✅ | 岗位的增删改查、分页查询 |

### 字典与参数
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `system/dict/type/index.js` | `views/pages/management/dict.vue` | 字典类型管理 | ✅ | 字典类型的增删改查、分页查询 |
| `system/dict/data/index.js` | `views/pages/management/dict.vue` | 字典数据管理 | ✅ | 字典数据的增删改查、分页查询 |
| `system/config/index.js` | - | 参数配置 | ❌ | 参数配置的增删改查、分页查询 |

### 通知与公告
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `system/notice/index.js` | - | 通知公告 | ❌ | 通知公告的增删改查、分页查询 |
| `system/notify/message/index.js` | `views/pages/management/messages/notify/notify-message.vue` | 站内消息 | ✅ | 站内消息的查询、已读、删除 |
| `system/notify/template/index.js` | `views/pages/management/messages/notify/notify-template.vue` | 消息模板 | ✅ | 消息模板的增删改查 |

### 日志管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `system/login-log/index.js` | `views/pages/management/log/login-log.vue` | 登录日志 | ✅ | 登录日志的查询、分页、导出 |
| `system/operate-log/index.js` | `views/pages/management/log/operate-log.vue` | 操作日志 | ✅ | 操作日志的查询、分页、导出 |

### 租户管理
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `system/tenant/index.js` | `views/pages/management/tenant/list.vue` | 租户管理 | ✅ | 租户的增删改查、分页查询 |
| `system/tenant-package/index.js` | `views/pages/management/tenant/package.vue` | 租户套餐 | ✅ | 租户套餐的增删改查 |

### OAuth2 认证
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `system/oauth2/client/index.js` | `views/pages/management/oauth2/application.vue` | OAuth2客户端 | ✅ | OAuth2客户端的增删改查 |
| `system/oauth2/token/index.js` | `views/pages/management/oauth2/token.vue` | OAuth2令牌 | ✅ | OAuth2令牌的查询、删除 |
| `system/oauth2/open/index.js` | - | OAuth2开放接口 | ❌ | OAuth2开放接口 |

### 短信与邮件
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `system/sms/channel/index.js` | `views/pages/management/messages/sms/sms-channel.vue` | 短信渠道 | ✅ | 短信渠道的增删改查 |
| `system/sms/template/index.js` | `views/pages/management/messages/sms/sms-template.vue` | 短信模板 | ✅ | 短信模板的增删改查 |
| `system/sms/log/index.js` | `views/pages/management/messages/sms/sms-log.vue` | 短信日志 | ✅ | 短信日志的查询、分页 |
| `system/mail/account/index.js` | `views/pages/management/messages/mail/mail-account.vue` | 邮箱账号 | ✅ | 邮箱账号的增删改查 |
| `system/mail/template/index.js` | `views/pages/management/messages/mail/mail-template.vue` | 邮件模板 | ✅ | 邮件模板的增删改查 |
| `system/mail/log/index.js` | `views/pages/management/messages/mail/mail-log.vue` | 邮件日志 | ✅ | 邮件日志的查询、分页 |

### 社交登录
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `system/social/client/index.js` | `views/pages/management/social/client.vue` | 社交客户端 | ✅ | 社交客户端的增删改查 |
| `system/social/user/index.js` | `views/pages/management/social/user.vue` | 社交用户 | ✅ | 社交用户的查询 |

### 其他
| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `system/area/index.js` | `views/pages/management/area.vue` | 行政区划 | ✅ | 行政区划的查询、树形结构 |
| `system/schedule/index.js` | - | 定时任务 | ❌ | 定时任务的增删改查、执行 |
| `system/home/index.js` | `views/pages/workspace/pages/workbench.vue` | 工作台首页 | ✅ | 工作台首页数据、应用列表、通知、待办 |
| `system/home/app-center.js` | `views/pages/workspace/pages/manage.vue` | 应用中心 | ✅ | 应用中心的增删改查 |
| `system/home/component.js` | `views/pages/workspace/pages/component.vue` | 组件管理 | ✅ | 组件的增删改查 |

## 接口路径前缀
所有System模块接口前缀：`/admin-api/system`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化
- 状态字段（status）：0=启用，1=禁用

## 已对接页面统计
- 系统管理模块共约26个页面，已对接22个页面
- 已对接：用户管理、角色管理、菜单管理、部门管理、岗位管理、字典管理、地区管理、登录日志、操作日志、邮箱账号、邮件日志、邮件模板、站内信消息、站内信模板、短信渠道、短信日志、短信模板、OAuth2应用、OAuth2令牌、社交客户端、社交用户、租户管理、租户套餐
- 未对接：个人中心、权限管理、参数配置、通知公告、定时任务（无对应页面或API）

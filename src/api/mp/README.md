# MP 公众号模块 API 说明

## 模块概述
微信公众号管理模块，包含公众号账号、自动回复、素材、菜单、消息、消息模板、标签、用户、统计、草稿、发布等功能。

## API 文件与页面对应关系

| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `mp/account/index.js` | `views/pages/mp/account/account-list.vue` | 公众号账号 | ❌ | 公众号账号的增删改查 |
| `mp/autoReply/index.js` | `views/pages/mp/auto-reply/auto-reply-list.vue` | 自动回复 | ❌ | 自动回复规则的增删改查 |
| `mp/material/index.js` | `views/pages/mp/material/material-list.vue` | 素材管理 | ❌ | 永久素材的上传、查询、删除 |
| `mp/menu/index.js` | `views/pages/mp/menu/menu-manage.vue` | 菜单管理 | ❌ | 公众号菜单的配置、发布 |
| `mp/message/index.js` | `views/pages/mp/message/message-list.vue` | 消息管理 | ❌ | 粉丝消息的查询、回复 |
| `mp/messageTemplate/index.js` | `views/pages/mp/message-template/template-list.vue` | 消息模板 | ❌ | 模板消息的增删改查 |
| `mp/tag/index.js` | `views/pages/mp/tag/tag-list.vue` | 标签管理 | ❌ | 用户标签的增删改查 |
| `mp/user/index.js` | `views/pages/mp/user/user-list.vue` | 粉丝管理 | ❌ | 公众号粉丝的查询、备注 |
| `mp/statistics/index.js` | `views/pages/mp/statistics/mp-statistics.vue` | 数据统计 | ❌ | 公众号数据统计分析 |
| `mp/draft/index.js` | `views/pages/mp/draft/draft-list.vue` | 草稿箱 | ❌ | 图文草稿的增删改查 |
| `mp/freePublish/index.js` | `views/pages/mp/free-publish/publish-list.vue` | 发布记录 | ❌ | 发布记录的查询、删除 |

## 接口路径前缀
所有MP模块接口前缀：`/admin-api/mp`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化

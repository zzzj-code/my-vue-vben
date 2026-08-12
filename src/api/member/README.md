# Member 会员模块 API 说明

## 模块概述
会员管理模块，包含会员用户、会员等级、会员分组、积分、签到、标签、地址、经验值等功能。

## API 文件与页面对应关系

| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `member/user/index.js` | `views/pages/member/user/user-list.vue` | 会员用户 | ❌ | 会员用户的增删改查、分页查询 |
| `member/level/index.js` | `views/pages/member/level/level-list.vue` | 会员等级 | ❌ | 会员等级的增删改查 |
| `member/group/index.js` | `views/pages/member/group/group-list.vue` | 会员分组 | ❌ | 会员分组的增删改查 |
| `member/tag/index.js` | `views/pages/member/tag/tag-list.vue` | 会员标签 | ❌ | 会员标签的增删改查 |
| `member/point/record/index.js` | `views/pages/member/point/point-record.vue` | 积分记录 | ❌ | 积分变动记录的查询 |
| `member/signin/config/index.js` | `views/pages/member/signin/signin-config.vue` | 签到配置 | ❌ | 签到规则配置 |
| `member/signin/record/index.js` | `views/pages/member/signin/signin-record.vue` | 签到记录 | ❌ | 签到记录的查询 |
| `member/address/index.js` | `views/pages/member/address/address-list.vue` | 收货地址 | ❌ | 收货地址的查询、删除 |
| `member/experience-record/index.js` | `views/pages/member/experience/experience-record.vue` | 经验值记录 | ❌ | 经验值变动记录 |
| `member/config/index.js` | `views/pages/member/config/member-config.vue` | 会员配置 | ❌ | 会员相关参数配置 |

## 接口路径前缀
所有Member模块接口前缀：`/admin-api/member`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化
- 会员状态：0=正常，1=禁用

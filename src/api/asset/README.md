# Asset 资产管理模块 API 说明

## 模块概述
资产管理模块，包含资产分类、资产信息、资产物品、资产生命周期等功能。

## API 文件与页面对应关系

| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `asset/category/index.js` | `views/pages/asset/category/category-list.vue` | 资产分类 | ❌ | 资产分类的增删改查、树形结构 |
| `asset/info/index.js` | `views/pages/asset/info/asset-info-list.vue` | 资产信息 | ❌ | 资产信息的增删改查、分页查询 |
| `asset/goods/index.js` | `views/pages/asset/goods/asset-goods-list.vue` | 资产物品 | ❌ | 资产物品的增删改查、分页查询 |
| `asset/lifetime/index.js` | `views/pages/asset/lifetime/asset-lifetime-list.vue` | 资产生命周期 | ❌ | 资产生命周期的查询、分页 |

## 接口路径前缀
所有Asset模块接口前缀：`/admin-api/asset`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 时间字段（createTime）为毫秒时间戳，前端需格式化
- 资产状态：1=在用，2=闲置，3=报废，4=维修中

# OA 协同办公模块 API 说明

## 模块概述
协同办公模块，包含车辆管理、会议室管理、印章管理、云盘文件等功能。

## API 文件与页面对应关系

| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `oa/car/carinfo/index.js` | `views/pages/oaSystem/car/car-info.vue` | 车辆信息管理 | ✅ | 车辆信息的增删改查、分页查询 |
| `oa/car/carapply/index.js` | `views/pages/oaSystem/car/car-apply-list.vue` | 用车申请列表 | ✅ | 用车申请单的增删改查、分页查询 |
| `oa/car/carreturn/index.js` | `views/pages/oaSystem/car/car-return-list.vue` | 还车登记列表 | ✅ | 还车登记单的增删改查、分页查询 |
| `oa/meetingroom/roominfo/index.js` | `views/pages/oaSystem/meetingroom/room-info.vue` | 会议室信息管理 | ✅ | 会议室信息的增删改查、分页查询 |
| `oa/meetingroom/booking/index.js` | `views/pages/oaSystem/meetingroom/booking.vue` | 会议室预订 | ✅ | 会议室预订的增删改查、分页查询 |
| `oa/seal/sealinfo/index.js` | `views/pages/oaSystem/seal/seal-info.vue` | 印章信息管理 | ✅ | 印章信息的增删改查、分页查询 |
| `oa/seal/sealapply/index.js` | `views/pages/oaSystem/seal/seal-apply-list.vue` | 用印申请列表 | ✅ | 用印申请单的增删改查、分页查询 |
| `oa/file/index.js` | `views/pages/oaSystem/cloud/file.vue` | 云盘文件管理 | ✅ | 文件的增删改查、重命名、收藏/取消收藏、分页查询 |
| `oa/car/index.js` | - | 车辆管理（汇总） | ❌ | 车辆相关接口汇总，暂无对应页面 |
| `oa/seal/index.js` | - | 印章管理（汇总） | ❌ | 印章相关接口汇总，暂无对应页面 |

## 暂无对应 API 的页面（16个）

以下页面目前没有对应的后端API接口，无法对接：

### 办公用品（3个）
- `views/pages/oaSystem/supply/supplyapply.vue` - 办公用品申请
- `views/pages/oaSystem/supply/supplyinfo.vue` - 办公用品信息
- `views/pages/oaSystem/supply/supplyrecord.vue` - 办公用品领用记录

### 差旅管理（2个）
- `views/pages/oaSystem/trip/trip-apply-list.vue` - 差旅申请列表
- `views/pages/oaSystem/trip/trip-reimburse-list.vue` - 差旅报销列表

### 工作报告（4个）
- `views/pages/oaSystem/workreport/daily-report-list.vue` - 日报列表
- `views/pages/oaSystem/workreport/weekly-report-list.vue` - 周报列表
- `views/pages/oaSystem/workreport/monthly-report-list.vue` - 月报列表
- `views/pages/oaSystem/workreport/report-statistics.vue` - 工作报告统计

### 公文管理（5个）
- `views/pages/oaSystem/officedoc/archive.vue` - 公文归档
- `views/pages/oaSystem/officedoc/outside.vue` - 外部公文
- `views/pages/oaSystem/officedoc/receive.vue` - 收文
- `views/pages/oaSystem/officedoc/send.vue` - 发文
- `views/pages/oaSystem/officedoc/template.vue` - 公文模板

### 其他（2个）
- `views/pages/oaSystem/im.vue` - 即时通讯
- `views/pages/oaSystem/schedule.vue` - 日程

## 接口路径前缀
所有OA模块接口前缀：`/admin-api/oa`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 所有单据类接口均支持流程状态（processStatus）
- 时间字段（createTime）为毫秒时间戳，前端需格式化

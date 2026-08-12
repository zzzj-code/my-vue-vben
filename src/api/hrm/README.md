# HRM 人力资源模块 API 说明

## 模块概述
人力资源管理模块，包含员工档案、入职、转正、离职、调动、请假销假等功能。

## API 文件与页面对应关系

| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `hrm/employee/index.js` | `views/pages/hrm/employee/employee-archive-list.vue` | 员工档案列表 | ✅ | 员工档案的增删改查、生成系统用户、批量生成用户、导出Excel |
| `hrm/employee-entry/index.js` | `views/pages/hrm/employee-relation/entry-list.vue` | 员工入职申请列表 | ✅ | 入职申请单的增删改查、保存草稿、提交审批、导出Excel |
| `hrm/employee-regular/index.js` | `views/pages/hrm/employee-relation/regular-list.vue` | 员工转正申请列表 | ✅ | 转正申请单的增删改查、保存草稿、提交审批、导出Excel |
| `hrm/employee-resignation/index.js` | `views/pages/hrm/employee-relation/resignation-list.vue` | 员工离职申请列表 | ✅ | 离职申请单的增删改查、保存草稿、提交审批、导出Excel |
| `hrm/employee-transfer/index.js` | `views/pages/hrm/employee-relation/transfer-list.vue` | 人事调动申请列表 | ✅ | 调动申请单的增删改查、保存草稿、提交审批、导出Excel |
| `hrm/leave-cancel/index.js` | `views/pages/hrm/attendance/leave-cancel-list.vue` | 请假销假申请列表 | ✅ | 请假销假申请单的保存草稿、提交审批、删除、导出Excel |

## 暂无对应 API 的页面（35个）

以下页面目前没有对应的后端API接口，无法对接：

### 员工合同（2个）
- `views/pages/hrm/employee/employee-contract-expiring.vue` - 员工合同到期提醒
- `views/pages/hrm/employee/employee-contract-renewable.vue` - 员工合同可续签

### 考勤管理（4个）
- `views/pages/hrm/attendance/attendance-config.vue` - 考勤配置
- `views/pages/hrm/attendance/attendance-punch.vue` - 考勤打卡
- `views/pages/hrm/attendance/card-replacement-list.vue` - 补卡申请列表
- `views/pages/hrm/attendance/punch-record.vue` - 打卡记录

### 组织架构（2个）
- `views/pages/hrm/org/org-chart.vue` - 组织架构图
- `views/pages/hrm/org/orginfo.vue` - 组织信息

### 绩效管理（10个）
- `views/pages/hrm/performance/plan-list.vue` - 绩效计划列表
- `views/pages/hrm/performance/period-list.vue` - 绩效周期列表
- `views/pages/hrm/performance/result-confirm-list.vue` - 绩效结果确认列表
- `views/pages/hrm/performance/result-list.vue` - 绩效结果列表
- `views/pages/hrm/performance/statistics.vue` - 绩效统计
- `views/pages/hrm/performance/assessment-task/leader-review-list.vue` - 领导评审核任务
- `views/pages/hrm/performance/assessment-task/result-confirm-task-list.vue` - 结果确认任务
- `views/pages/hrm/performance/assessment-task/self-review-list.vue` - 自评任务
- `views/pages/hrm/performance/setting/indicator.vue` - 绩效指标设置
- `views/pages/hrm/performance/setting/scheme.vue` - 绩效方案设置
- `views/pages/hrm/performance/setting/template.vue` - 绩效模板设置

### 薪资管理（13个）
- `views/pages/hrm/salary/archive-list.vue` - 薪资档案列表
- `views/pages/hrm/salary/batch.vue` - 薪资批量操作
- `views/pages/hrm/salary/confirm-list.vue` - 薪资确认列表
- `views/pages/hrm/salary/payment-list.vue` - 薪资发放列表
- `views/pages/hrm/salary/payslip.vue` - 工资条
- `views/pages/hrm/salary/statistics.vue` - 薪资统计
- `views/pages/hrm/salary/setting/item.vue` - 薪资项目设置
- `views/pages/hrm/salary/setting/plan.vue` - 薪资方案设置
- `views/pages/hrm/salary/setting/subject.vue` - 薪资科目设置
- `views/pages/hrm/salary/tax/special-deduction.vue` - 专项附加扣除
- `views/pages/hrm/salary/tax/tax-opening.vue` - 个税起征点
- `views/pages/hrm/salary/tax/tax-profile.vue` - 税务档案

### 招聘管理（4个）
- `views/pages/hrm/recruitment/candidate-list.vue` - 候选人列表
- `views/pages/hrm/recruitment/offer-list.vue` - Offer列表
- `views/pages/hrm/recruitment/position-list.vue` - 职位列表
- `views/pages/hrm/recruitment/requirement-list.vue` - 招聘需求列表

## 接口路径前缀
所有HRM模块接口前缀：`/admin-api/hrm`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 所有单据类接口均支持流程状态（processStatus）：1=草稿，10=审批中，20=已通过，30=已驳回，40=已取消
- 员工状态（employeeStatus）：1=在职，2=离职，3=试用期，4=待入职，5=待离职，6=其他
- 时间字段（createTime）为毫秒时间戳，前端需格式化

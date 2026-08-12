# BPM 审批流模块 API 说明

## 模块概述
审批流程管理模块，包含流程分类、流程定义、流程表单、流程模型、流程实例、流程任务、用户组、流程表达式、流程监听器、OA请假等功能。

## API 文件与页面对应关系

| API 文件路径 | 对应页面路径 | 页面名称 | 已对接 | 说明 |
|-------------|-------------|---------|-------|------|
| `bpm/category/index.js` | `views/pages/system/manager/category.vue` | 流程分类管理 | ✅ | 流程分类的增删改查、分页查询 |
| `bpm/definition/index.js` | `views/pages/system/start-process.vue` | 发起流程 | ✅ | 流程定义的查询、部署、挂起/激活 |
| `bpm/form/index.js` | `views/pages/system/manager/form.vue` | 流程表单管理 | ✅ | 流程表单的增删改查、分页查询 |
| `bpm/model/index.js` | `views/pages/system/manager/model.vue` | 流程模型管理 | ✅ | 流程模型的增删改查、部署、状态更新、BPMN更新 |
| `bpm/processInstance/index.js` | `views/pages/system/task/my.vue`、`views/pages/system/task/copy.vue`、`views/pages/system/manager/instance.vue` | 流程实例管理 | ✅ | 流程实例的查询、取消、删除 |
| `bpm/task/index.js` | `views/pages/system/task/todo.vue`、`views/pages/system/task/done.vue` | 流程任务管理 | ✅ | 待办任务、已办任务的查询、审批 |
| `bpm/userGroup/index.js` | `views/pages/system/manager/user-group.vue` | 用户组管理 | ✅ | 用户组的增删改查、分页查询 |
| `bpm/processExpression/index.js` | `views/pages/system/manager/process-expression.vue` | 流程表达式管理 | ✅ | 流程表达式的增删改查、分页查询 |
| `bpm/processListener/index.js` | `views/pages/system/manager/process-listener.vue` | 流程监听器管理 | ✅ | 流程监听器的增删改查、分页查询 |
| `bpm/oa/leave/index.js` | `views/pages/system/oa/leave.vue` | OA请假申请 | ✅ | OA请假申请的增删改查、分页查询 |
| `bpm/manager/ops.vue` | - | 流程运维 | ❌ | 暂无对应API文件 |
| `bpm/manager/process-tasnk.vue` | - | 流程任务管理 | ❌ | 暂无对应API文件（文件名拼写错误） |

## 接口路径前缀
所有BPM模块接口前缀：`/admin-api/bpm`

## 通用接口说明
- 所有列表接口均支持分页查询（pageNo、pageSize）
- 流程状态：1=草稿，10=审批中，20=已通过，30=已驳回，40=已取消
- 时间字段（createTime）为毫秒时间戳，前端需格式化
